import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
  try {
    const { fileName, fileType, field } = await request.json();

    if (!fileName || !fileType || !field) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const key = `uploads/${field}/${uuidv4()}_${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      ContentType: fileType,
    });

    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    const objectUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return NextResponse.json({ signedUrl, objectUrl }, { status: 200 });
  } catch (error) {
    console.error("Error generating pre-signed URL:", error);
    return NextResponse.json({ error: "Failed to generate pre-signed URL" }, { status: 500 });
  }
}