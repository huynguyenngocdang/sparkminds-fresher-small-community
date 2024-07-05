import { IconExplore, IconPlay } from "@/components/icons";
import { TMenuItem } from "@/types";
import React from "react";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Khám phá blog",
    icon: <IconExplore className="size-5" />,
  },
];
