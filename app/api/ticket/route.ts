import { json } from '@/lib/json'
import { prisma } from '@/db'
import { verify, JwtPayload } from 'jsonwebtoken';

export async function POST(req: Request) {
  const data = await req.json();
  let token = req.headers.get('Authorization') || '';

  let userId;
  let expirationTime;

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

  try {
    // 5. Jika ya, lanjutkan proses
    const ticket = await prisma.ticket.create({
      data: {
        ...data,
        userId,
      },
    });

    if (ticket.userId !== userData.id) {
      return new Response(json({ message: 'Unauthorized', status: 403 }));
    }

    return new Response(json({
      message: 'Data successfully created',
      status: 201,
      data: ticket
    }));

  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Internal server error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  let token = req.headers.get('Authorization') || '';
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');

  const parsedPage = page ? parseInt(page, 10) : 1;
  const parsedPageSize = pageSize ? parseInt(pageSize, 10) : 8;
  const offset = (parsedPage - 1) * parsedPageSize;

  let userId;
  let expirationTime;

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

  try {
    const tickets = await prisma.ticket.findMany({
      take: parsedPageSize,
      skip: offset,
    });

    const totalArticles = await prisma.ticket.count();

    const isLastData = (parsedPage * parsedPageSize) >= totalArticles;

    return new Response(json({
      data: tickets,
      pageInfo: {
        currentPage: parsedPage,
        pageSize: parsedPageSize,
        totalItems: totalArticles,
        isLastData,
      },
      status: 200
    }));
  } catch (error) {
    console.error(error);
    return new Response(json({ error: 'Internal Server Error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
};