"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface CheckUserAuthProps {
  user: boolean;
  children: ReactNode;
}

const protectedPaths = ["/", "/transactions", "/profile", "/categories"];
const protectedAuthPaths = ["/signin", "/signup"];


export default function VerifyingUserRightsForPath({ user, children }: CheckUserAuthProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isProtectedPath = protectedPaths.includes(pathname);
  const isProtectedPathForAuthUsers = protectedAuthPaths.includes(pathname)

  // Редирект 
  useEffect(() => {
    if (!user && isProtectedPath) {
      router.push("/signin"); // редирект на логин
    }
    else if (user && isProtectedPathForAuthUsers){
      router.push("/");  // редирект на главную
    }
  }, [user, isProtectedPath, router, isProtectedPathForAuthUsers]);

  // На всякий случай
  if (!user && isProtectedPath) {
    return null;
  }
  if (user && isProtectedPathForAuthUsers) {
    return null;
  }

  // Рендер для авторизованных
  if (user && isProtectedPath) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  // Рендер незащищенных или ещё чегонибудь что не не учел
  return <>{children}</>;
}