"use client";
import React from "react";

import { menuItems } from "@/constants";

import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import Link from "next/link";
import { IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div
      className="hidden p-5 border-r bgDarkMode borderDarkMode
      lg:flex flex-col lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[300px]"
    >
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-secondary">Spark</span>
        ademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-5">
        <ModeToggle></ModeToggle>
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 flex rounded-lg bg-primary text-white items-center justify-center p-1"
          >
            <IconUsers className="size-5" />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
