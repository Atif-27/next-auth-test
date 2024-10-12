import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
}
