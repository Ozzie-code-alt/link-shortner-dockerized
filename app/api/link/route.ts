import { inMemoryStore } from "@/lib/store";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 


function createRandomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const mappedValue = Array(length)
    .fill(null)
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)));

  return mappedValue.join("");
}

export async function POST(request: NextRequest) {
  try {
    const linkString = await request.json();
    const slug = createRandomString(6);
    const pushToDB = await prisma.link.create({
      data: {
        slug: slug,
        url: linkString.url.link,
      },
    })

    if (!pushToDB) {
      return NextResponse.json({
        message: "Failed to save link to the database",
        status: 500,
      });
    }

    return NextResponse.json({
      message: "Succesfully Converted Url",
      linkString,
      slug,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: `Error in ${error}`, status: 500 });
  }
}

export async function GET() {
  try {

    const links = await prisma.link.findMany();
    return NextResponse.json(links);
  } catch (error) {
    console.error("Failed to fetch links:", error);
    return NextResponse.json(
      { error: "Failed to fetch links" },
      { status: 500 }
    );
  }
}
