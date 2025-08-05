import { inMemoryStore } from "@/lib/store";
import prisma from "@/lib/prisma"; 

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const checkSlugDB = await prisma.link.findUnique({
    where: {
      slug: slug,
    },
  })

  if (checkSlugDB) {
    const linkString = checkSlugDB.url  ;
    console.log(`Redirecting to: ${linkString}`);

    return Response.redirect(linkString, 302);
  } else {
    return new Response(JSON.stringify({ message: "Slug not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
