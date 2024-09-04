import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

// @ts-ignore
export default async ({ children }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return children;
};
