import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Session data in dashboard", session);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
    return <div>Please sign in to the access to dashboard</div>;
  }

  return (
    <div>
      <h2>This is Dashing Board</h2>
    </div>
  );
};

export default DashboardPage;
