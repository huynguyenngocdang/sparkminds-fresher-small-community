import {
  IconExplore,
  IconCourse,
  IconStudy,
  IconUsers,
  IconOrder,
  IconComment,
} from "@/components/icons";

import { TMenuItem } from "@/types";
import React from "react";
import { ECourseLevel, ECourseStatus } from "@/types/enums";

export const createCourseSuccess: string = "Tạo khóa học thành công";
export const createCourseFail: string = "Tạo khóa học thất bại";
export const updateCourseSuccess: string = "Cập nhật khóa học thành công";
export const updateCourseFail: string = "Cập nhật khóa học thất bại";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khám phá blog",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconStudy className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconCourse className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUsers className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];

export const courseStatus: {
  title: string;
  value: ECourseStatus;
  className?: string;
}[] = [
  {
    title: "Đã duyệt",
    value: ECourseStatus.APPROVED,
    className: "text-green-500 bg-green-500",
  },
  {
    title: "Chờ duyệt",
    value: ECourseStatus.PENDING,
    className: "text-yellow-500 bg-yellow-500",
  },
  {
    title: "Từ chối",
    value: ECourseStatus.REJECTED,
    className: "text-red-500 bg-red-500",
  },
];

export const courseLevel: {
  title: string;
  value: ECourseLevel;
}[] = [
  {
    title: "Sơ cấp",
    value: ECourseLevel.BEGINNER,
  },
  {
    title: "Trung cấp",
    value: ECourseLevel.INTERMEDIATE,
  },
  {
    title: "Cao cấp",
    value: ECourseLevel.ADVANCED,
  },
];

export const courseLevelLabel: Record<ECourseLevel, string> = {
  [ECourseLevel.BEGINNER]: "Sơ cấp",
  [ECourseLevel.INTERMEDIATE]: "Trung cấp",
  [ECourseLevel.ADVANCED]: "Cao cấp",
};

export const commonClassNames = {
  status: `bg-opacity-10 border border-current rounded-md font-medium px-3 py-1`,
  action: `flex size-8 items-center justify-center rounded-md border border-gray-200 p-2 text-gray-500 dark:bg-transparent hover:bg-opacity-10 dark:hover:bg-gray-400 borderDarkMode`
};
