"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { createCourse } from "@/lib/actions/course.actions";
import { toast } from "react-toastify";
import { createCourseFail, createCourseSuccess } from "@/constants";
import { useRouter } from "next/navigation";
import { IUser } from "@/database/user.model";
import { auth } from "@clerk/nextjs/server";

const formSchema = z.object({
  title: z.string().min(10, "Tên khóa học phải có ít nhất 10 kí tự"),
  slug: z.string().optional(),
});

function CourseAddNew({user} : {user: IUser}) {
  const router = useRouter();
  const [isSubmitting, setisSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });

  const titleValue = useWatch({
    control: form.control,
    name: "title",
  });

  useEffect(() => {
    const slug = slugify(titleValue || "", {
      lower: true,
      locale: "vi",
    });
    form.setValue("slug", slug);
  }, [titleValue, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setisSubmitting(true);
      const data = {
        title: values.title,
        slug:
          values.slug ||
          slugify(values.title, {
            lower: true,
            locale: "vi",
          }),
        author: user._id,
      };
      const res = await createCourse(data);
      if (!res?.sucess) {
        toast.error(res?.message);
        return;
      }
        toast.success(createCourseSuccess);
      if(res?.data) {
        router.push(`/manage/course/update?slug=${res.data.slug}`)
      }
    } catch (error) {
      console.error(error);
      toast.error(createCourseFail);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col gap-8 mt-10 mb-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên khóa học *</FormLabel>
                <FormControl>
                  <Input placeholder="Tên khóa học" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn khóa học</FormLabel>
                <FormControl>
                  <Input placeholder="khoa-hoc-lap-trinh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          isLoading={isSubmitting}
          variant="primary"
          type="submit"
          className="w-[120px]"
          disabled={isSubmitting}
        >
          Tạo khóa học
        </Button>
      </form>
    </Form>
  );
}

export default CourseAddNew;
