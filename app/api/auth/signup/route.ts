// pages/api/users/create.js
import bcrypt from 'bcrypt';
import { prisma } from '@/db'
import { json } from '@/lib/json';

export async function POST(req: Request) {
  const { username, email, password, ...otherData } = await req.json();

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if the username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
        OR: [
          {
            username: {
              equals: username,
            }
          },
        ],
      },
    });

    if (existingUser?.email === email) {
      return new Response(json({ message: 'Email already exists', status: 400 }));
    }

    if (existingUser?.username === username) {
      return new Response(json({ message: 'Username already exists', status: 400 }));
    }

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        ...otherData
      },
    });

    return new Response(json({ user, status: 201 }))
  } catch (error) {
    console.error(error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }));
  }
}