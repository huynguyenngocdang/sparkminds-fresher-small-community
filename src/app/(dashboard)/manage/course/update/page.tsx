import CourseUpdate from "@/components/course/CourseUpdate";
import Heading from "@/components/Typography/Heading";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });

  if (!findCourse) return null;

  return (
    <>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate 
      data={JSON.parse(JSON.stringify(findCourse))}/>
    </>
  );
};

export default page;
