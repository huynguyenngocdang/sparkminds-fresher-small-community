import CourseAddNew from "@/components/course/CourseAddNew";
import Heading from "@/components/Typography/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading>Tạo khóa học mới</Heading>
      <CourseAddNew></CourseAddNew>
    </>
  );
};

export default page;
