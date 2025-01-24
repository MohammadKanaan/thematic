import AuthGuard from "@/components/AuthGuard";
import useGetUser from "@/hooks/useGetUser";
import ProfileScreen from "@/screens/ProfileScreen";
import React from "react";

export default function profile() {
  const currentUser = useGetUser();

  return (
    <AuthGuard>
      <ProfileScreen currentUser={currentUser!} />
    </AuthGuard>
  );
}
