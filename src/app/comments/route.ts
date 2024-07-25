import { getProductFilter } from "@/service/api/product";
import { comments } from "./data"

export async function GET() {
  const products = await getProductFilter();
  return Response.json(products)
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    name: comment.name,
  }
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  })
}
