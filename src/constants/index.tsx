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
import { createCourse } from '@/lib/actions/course.actions';
import exp from "constants";

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

export const createCourseSuccess: string = "Tạo khóa học thành công";
export const createCourseFail: string = "Tạo khóa học thất bại";
export const updateCourseSuccess: string = "Cập nhật khóa học thành công";
export const updateCourseFail: string = "Cập nhật khóa học thất bại";