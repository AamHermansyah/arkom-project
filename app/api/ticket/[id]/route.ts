import { json } from '@/lib/json';
import { prisma } from '@/db';
import { JwtPayload, verify } from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const id = parseInt(pathSegments[pathSegments.length - 1], 10);

    let token = req.headers.get('Authorization') || '';
    let userId;
    let expirationTime;

    if (isNaN(id)) {
      return new Response(json({ message: 'Invalid ticket ID', status: 400 }), { status: 400 });
    }

    try {
      const decodedToken = verify(token.replace('Bearer ', ''), process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as JwtPayload;
      userId = decodedToken.userId;
      expirationTime = decodedToken.exp; // Waktu kadaluarsa dalam bentuk timestamp
    } catch (error) {
      console.log(error);
      return new Response(json({ message: 'Invalid token', status: 401 }));
    }

    // 2. Periksa apakah waktu kadaluarsa telah lewat
    const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam bentuk timestamp
    if (expirationTime && expirationTime < currentTime) {
      return new Response(json({ message: 'Token has expired', status: 401 }));
    }

    // 3. Dapatkan data pengguna dari basis data berdasarkan ID
    let userData;
    try {
      userData = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log(error);
      return new Response(json({ message: 'Error retrieving user data', status: 500 }));
    }

    // 4. Periksa apakah role yang ditemukan adalah "admin"
    if (!userData) {
      return new Response(json({ message: 'Unauthorized', status: 403 }));
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: { user: true }
    });

    if (!ticket) {
      return new Response(json({ message: 'Ticket not found', status: 404 }), { status: 404 });
    }

    const responseData = {
      data: ticket,
      status: 200
    };

    return new Response(json(responseData));
  } catch (error) {
    console.error('Error:', error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }), { status: 500 });
  }
}