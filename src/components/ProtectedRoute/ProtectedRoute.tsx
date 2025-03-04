"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginStore } from "../../store/store";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = useLoginStore((state) => state.token);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (!token) {
      router.replace("/login-required"); // 토큰이 없으면 로그인 페이지로 리디렉트
    } else {
      setIsAuthChecked(true);
    }
  }, [token, router]);

  // 깜빡임 방지
  if (!isAuthChecked) return <LoadingSpinner />;

  return <>{children}</>;
}
