import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  if (+params.id > comments.length) redirect("/learn/routing/comments");
  const comment = comments.find((item) => item.id === +params.id);
  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((item) => item.id === +params.id);
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const index = comments.findIndex((comment) => comment.id === +params.id);
  const deleteComments = comments[index];
  comments.slice(index, 1);
  return Response.json(deleteComments);
}
