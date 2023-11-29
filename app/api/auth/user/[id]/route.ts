import { json } from '@/lib/json';
import { prisma } from '@/db';
import bcrypt from 'bcrypt';

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const id = parseInt(pathSegments[pathSegments.length - 1], 10);

    const { password, ...newData } = await req.json();

    if (isNaN(id)) {
      return new Response(json({ message: 'Invalid user ID', status: 400 }), { status: 400 });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: newData,
    });

    const responseData = {
      data: {
        ...updatedUser,
        password: hashedPassword,
      },
      status: 200
    };

    return new Response(json(responseData));
  } catch (error) {
    console.error('Error:', error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }), { status: 500 });
  }
}