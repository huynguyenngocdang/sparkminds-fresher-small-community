"use client";
import React from "react";
import Heading from "../Typography/Heading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { commonClassNames, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import {
  IconDelete,
  IconEdit,
  IconEye,
  IconRestore,
  IconStudy,
} from "../icons";
import Link from "next/link";
import { ICourse } from "@/database/course.model";
import Swal from "sweetalert2";
import { updateCourse } from "@/lib/actions/course.actions";
import { ECourseStatus } from "@/types/enums";
import { toast } from "react-toastify";

const CourseManage = ({ courses }: { courses: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Bạn chắc muốn xóa không?",
      text: "Bạn sẽ không hoàn tác được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await updateCourse({
            slug,
            updateData: {
              status: ECourseStatus.PENDING,
              _destroy: true,
            },
            path: "/manage/course",
          });
          if (res?.success) {
            toast.success("Xóa khóa học thành công");
          }
        } catch (error) {
          toast.error("Xóa khóa học thất bại");
        }
      }
    });
  };
  const handleRestoreCourse = (slug: string) => {
    Swal.fire({
      title: "Bạn chắc không?",
      text: "Bạn đang hồi phục khóa học!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await updateCourse({
            slug,
            updateData: {
              status: ECourseStatus.APPROVED,
              _destroy: false,
            },
            path: "/manage/course",
          });
          if (res?.success) {
            toast.success("Hồi phục khóa học thành công");
          }
        } catch (error) {
          toast.error("Hồi phục khóa học thất bại");
        }
      }
    });
  };
  return (
    <>
      <Heading>Quản lý khóa học</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.length > 0 &&
            courses.map((course) => {
              const courseStatusItem = courseStatus.find(
                (item) => item.value === course.status
              );
              return (
                <TableRow key={course.slug}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        alt=""
                        src={course.image || "/placeholder.png"}
                        width={80}
                        height={80}
                        className="size-16 flex-shrink-0 rounded-lg object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold">{course.title}</h3>
                        <h4 className="text-sm text-slate-500">
                          {new Date(course.created_at).toLocaleDateString(
                            "vi-VI"
                          )}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span>{course.price.toLocaleString()}</span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        commonClassNames.status,
                        courseStatusItem?.className
                      )}
                    >
                      {courseStatusItem?.title}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        href={`/manage/course/update-content?slug=${course.slug}`}
                        className={cn(
                          commonClassNames.action,
                          "hover:bg-green-500"
                        )}
                      >
                        <IconStudy className="size-5" />
                      </Link>
                      <Link
                        href={`/course/${course.slug}`}
                        target="_blank"
                        className={cn(
                          commonClassNames.action,
                          "hover:bg-purple-500"
                        )}
                      >
                        <IconEye className="size-5" />
                      </Link>
                      <Link
                        href={`/manage/course/update?slug=${course.slug}`}
                        className={cn(
                          commonClassNames.action,
                          "hover:bg-blue-500"
                        )}
                      >
                        <IconEdit className="size-5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteCourse(course.slug)}
                        className={cn(
                          commonClassNames.action,
                          "hover:bg-red-500"
                        )}
                      >
                        <IconDelete className="size-5" />
                      </button>
                      <button
                        onClick={() => handleRestoreCourse(course.slug)}
                        className={cn(
                          commonClassNames.action,
                          "hover:bg-red-500"
                        )}
                      >
                        <IconRestore className="size-5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
};

export default CourseManage;
