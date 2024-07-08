"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { TCreateUserParams } from "@/types";

export default async function createUser(params: TCreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);

    console.log("🚀 ~ createUser ~ newUser:", newUser);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
