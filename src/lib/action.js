"use server";

export const handleLogout = async () => {
  "use server";
  await signOut();
};