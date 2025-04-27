"use client";

import React, { useState } from "react";
import { ThemeProvider } from "./theme-provider";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { UserIcon } from "lucide-react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Chat",
      link: "/chat",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useSession();

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {!data?.user ? (
              <NavbarButton href="/login" variant="secondary">
                Login
              </NavbarButton>
            ) : (
              <>
                {data.user?.image ? (
                  <Image
                    src={data.user?.image!}
                    className="rounded-full w-10 border-2 border-muted"
                    alt="user"
                    width={100}
                    height={100}
                  />
                ) : (
                  <UserIcon />
                )}
                <NavbarButton
                  onClick={() => signOut({ redirectTo: "/" })}
                  variant="primary"
                >
                  Sair
                </NavbarButton>
              </>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {!data?.user ? (
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  href="/login"
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
              ) : (
                <NavbarButton
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className="w-full"
                >
                  Sair
                </NavbarButton>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
