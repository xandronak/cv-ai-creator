import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/client";

export default async function Index() {
  const supabase = createClient();

  const { data: user } = await supabase.auth.getUser();

  if (user) {
    redirect("/protected/main");
  } else {
    redirect("/sign-in");
  }
}
