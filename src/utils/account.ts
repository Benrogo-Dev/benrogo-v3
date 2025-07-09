import { getSession } from "next-auth/react";

const session = await getSession();
session?.user?.id