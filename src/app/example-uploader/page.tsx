"use client";
import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="rounded-md size-40 object-cover"
        />
      ) : (
        <UploadButton
          endpoint="postImage"
          onClientUploadComplete={(res) => {
            const uploadedUrl = res?.[0]?.ufsUrl; // ✅ new UploadThing property
            if (uploadedUrl) {
              setImageUrl(uploadedUrl); // ✅ save to state
            }
          }}
          onUploadError={(error) => {
            console.error("Upload failed", error);
          }}
        />
      )}
    </main>
  );
}
