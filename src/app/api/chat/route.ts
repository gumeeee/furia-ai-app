import { NextResponse } from "next/server";
import OpenAI from "openai";

if (!process.env.DEEPSEEK_API_KEY) {
  throw new Error("DEEPSEEK_API_KEY is not defined");
}

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const completation = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that helps users find information about the latest news about e-sports team FURIA . Answer in Portuguese preferably. If you don't know the answer, say you don't know. If you are not asked something in the context of FURIA, say that you only answer questions about FURIA.",
        },
        ...messages,
      ],
    });

    if (!completation.choices[0].message.content) {
      throw new Error("No response content received from OpenAI");
    }

    return NextResponse.json({
      message: completation.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("Error in OpenAI API call:", error);
    return NextResponse.json(
      {
        error:
          error.message || "An error occurred while processing your request",
      },
      { status: error.status || 500 }
    );
  }
}
