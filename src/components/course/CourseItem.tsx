import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconClock, IconEye, IconStar } from "../icons";
import { ICourse } from "@/database/course.model";

const CourseItem = ({ data }: { data: ICourse }) => {
  const courseInfo = [
    {
      title: data.views.toLocaleString(),
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
    {
      title: data.rating[0],
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: "30h25p",
      icon: (className?: string) => (
        <IconClock className={className}></IconClock>
      ),
    },
  ];
  return (
    <div className="bg-white border border-gray-200 dark:bg-grayDarker dark:text-grayFont p-4 rounded-2xl">
      <Link href={`/course/${data.slug}`} className="block h-[180px] relative">
        <Image
          src={data.image || "/placeholder.png"}
          alt=""
          width={600}
          height={400}
          className="w-full h-full object-scale-down rounded-lg"
          sizes="@media (min-width: 640px) 300px, 100vh"
          priority
        />
        {/* <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
          New
        </span> */}
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">{data.title}</h3>
        <div className="flex items-center gap-3 mb-5 text-sx">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="font-semibold text-secondary text-base ml-auto">
            {data.price === 0 ? "Miễn phí" : `${data.price.toLocaleString("vi-VI")}đ`}
          </span>
        </div>
      </div>
      <Link
        href={`/course/${data.slug}`}
        className="flex items-center justify-center w-full mt-3 rounded-lg text-white font-bold bg-primary h-12"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseItem;
