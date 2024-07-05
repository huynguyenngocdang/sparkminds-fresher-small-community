import { connectToDatabase } from "@/lib/mongoose";

export default async function Home() {
  const connect = connectToDatabase();
  return <div>Homepage</div>;
}
