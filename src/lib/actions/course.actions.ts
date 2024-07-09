"use server";
import { TCreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Course from "@/database/course.model";

export async function getCourseBySlug({slug} : {slug: string}) {
  try {
    connectToDatabase();
    const res = await Course.findOne({slug});
    return {
      sucess: true,
      data: JSON.parse(JSON.stringify(res)),
    };
  } catch (error) {
    console.log(error);
  }
}

export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const existCourse = await Course.findOne({slug: params.slug});
    if(existCourse) {
      return {
        sucess: false,
        message: "Đường dẫn khóa học đã tồn tại",
      };
    }
    const res = await Course.create(params);
    return {
      sucess: true,
      data: JSON.parse(JSON.stringify(res)),
    };
  } catch (error) {
    console.log(error);
  }
}
