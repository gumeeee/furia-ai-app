"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  props?: string;
}

function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const router = useRouter();

  const handleNavigation = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.body;

    body.classList.add("exit-animation");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    body.classList.remove("exit-animation");

    router.push(href);
    body.classList.add("enter-animation");
    await new Promise((resolve) =>
      setTimeout(() => {
        body.classList.remove("enter-animation");
      }, 1000)
    );
  };

  return (
    <Link onClick={handleNavigation} href={href} className={className}>
      {children}
    </Link>
  );
}

export default TransitionLink;
