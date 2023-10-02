import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

// This Function to Get Session
export default async function getSession() {
  return await getServerSession(authOptions);
}
