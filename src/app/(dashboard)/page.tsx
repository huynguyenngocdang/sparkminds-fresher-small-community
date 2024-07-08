import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/Typography/Heading";
import createUser from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    username: "test",
    email_address: "test@gmail.com",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
};

export default page;
