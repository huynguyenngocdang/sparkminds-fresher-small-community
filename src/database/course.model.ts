import { ECourseLevel, ECourseStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  slug: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  status: ECourseStatus;

  level: ECourseLevel;
  views: number;
  rating: number[];
  info: {
    requirements: string[];
    benefits: string[];
    qa: {
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  created_at: Date;
  _destroy: boolean;
  order: number;
  author: Schema.Types.ObjectId;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  intro_url: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
  },
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  rating: {
    type: [Number],
    default: [5],
  },
  info: {
    requirements: [String],
    benefits: [String],
    qa: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const Course = models.Course || model<ICourse>("Course", courseSchema);
export default Course;
