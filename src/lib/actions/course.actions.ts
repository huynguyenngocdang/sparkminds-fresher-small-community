"use server";
import { TCreateCourseParams, TUpdateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Course, { ICourse } from "@/database/course.model";
import { revalidatePath } from "next/cache";
import { updateCourseSuccess } from "@/constants";

export async function getAllCourses(): Promise<ICourse[] | undefined> {
  try {
    connectToDatabase();
    const coursesList = await Course.find();
    return coursesList;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const res = await Course.findOne({ slug });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const existCourse = await Course.findOne({ slug: params.slug });
    if (existCourse) {
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

export async function updateCourse(params: TUpdateCourseParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug: params.slug });
    if (!findCourse) return;
    await Course.findOneAndUpdate({ slug: params.slug }, params.updateData, {
      new: true,
    });
    revalidatePath("/");
    return{
      sucess: true,
      message: updateCourseSuccess,
    }
  } catch (error) {
    console.log(error);
  }
}
