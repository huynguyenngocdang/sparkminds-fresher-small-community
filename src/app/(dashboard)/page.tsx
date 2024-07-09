import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/Typography/Heading";
import { getAllCourses } from "@/lib/actions/course.actions";
import React from "react";

const page = async () => {
  const courses = (await getAllCourses()) || [];

  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {courses?.length > 0 &&
          courses.map((course) => (
            <CourseItem key={course.slug} data={course} />
          ))}
      </CourseGrid>
    </div>
  );
};

export default page;
