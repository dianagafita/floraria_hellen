import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    // Log the query for debugging
    console.log("Received query:", params.query);

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: params.query,
          mode: "insensitive",
        },
      },
    });

    // Log the fetched products for debugging
    console.log("Fetched products:", products);

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching products:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
