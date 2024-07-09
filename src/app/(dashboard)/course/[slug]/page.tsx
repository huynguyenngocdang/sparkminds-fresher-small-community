import { IconPlay, IconStudy, IconUsers } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import Image from "next/image";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({
    slug: params.slug,
  });
  console.log("🚀 ~ data:", data);
  if (!data) return <div>Khóa học không tồn tại</div>;
  const videoIdPart = data.intro_url?.split("v=")[1];
  const videoId = videoIdPart ? videoIdPart.split("&")[0] : "";
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                width="914"
                height="514"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="JavaScript in 100 Seconds"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full object-cover rounded-lg"
              ></iframe>
            </>
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <h1 className="font-bold text-3xl mb-5">{data.title}</h1>
        <BoxSection title="Mô tả khóa học">{data.desc}</BoxSection>
        <BoxSection title="Thông tin">
          <div className="grid grid-cols-4 gap-5 mb-10">
            <BoxInfo title="Bài học">100</BoxInfo>
            <BoxInfo title="Lượt xem">{data.views}</BoxInfo>
            <BoxInfo title="Trình độ">{data.level}</BoxInfo>
            <BoxInfo title="Thời lượng học">100h45p</BoxInfo>
          </div>
        </BoxSection>
        <BoxSection title="Yêu cầu">
          {data.info.requirements.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>{item}</span>
            </div>
          ))}
        </BoxSection>
        <BoxSection title="Lợi ích">
          {data.info.benefits.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>{item}</span>
            </div>
          ))}
        </BoxSection>
        <BoxSection title="Q & A">
          {data.info.qa.map((item, index) => (
            <div key={index}>
              <div>{item.question}</div>
              <div>{item.answer}</div>
            </div>
          ))}
        </BoxSection>
      </div>
      <div>
        <div className="bg-white border border-gray-200 dark:bg-grayDarker dark:text-grayFont p-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <strong className="text-primary dark:text-slate-50 font-bold text-2xl">
              {data.price}đ
            </strong>
            <span className="text-slate-400 line-through">
              {data.sale_price}đ
            </span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-red-500 bg-opacity-10 text-red-500 font-semibold text-sm">
              -
              {(
                ((data.sale_price - data.price) / data.sale_price) *
                100
              ).toFixed(1)}
              %
            </span>
          </div>
          <h3 className="font-bold mb-2 text-sm text-secondary">
            Khóa học gồm có
          </h3>
          <ul className="mb-3 flex-col gap-3 text-sm text-slate-500">
            <li className="flex items-center gap-2 mb-2">
              <IconPlay className="size-4" />
              <span>30h25p</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IconPlay className="size-4" />
              <span>Video full HD</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IconUsers className="size-4" />
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IconStudy className="size-4" />
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button variant="primary" className="w-full mt-2">
            Mua khóa học
          </Button>
        </div>
      </div>
    </div>
  );
};

function BoxSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <div className="leading-normal">{children}</div>
    </div>
  );
}

function BoxInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg p-5">
      <h4 className="text-sm text-slate-400">{title}</h4>
      <span className="font-bold">{children}</span>
    </div>
  );
}

export default page;
