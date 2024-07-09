import CourseAddNew from "@/components/course/CourseAddNew";
import Heading from "@/components/Typography/Heading";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const {userId} = auth();
  if(!userId) return null;
  const mongoUser = await getUserInfo({userId});
  if(!mongoUser) return null;
  return (
    <>
      <Heading>Tạo khóa học mới</Heading>
      <CourseAddNew user={JSON.parse(JSON.stringify(mongoUser))}></CourseAddNew>
    </>
  );
};

export default page;
