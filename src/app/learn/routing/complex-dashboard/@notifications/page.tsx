import Card from "@/components/card/page";
import Link from "next/link";

export default async function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  );
}
