"use client";

import { Avatar, AvatarImage } from "./ui/avatar";

export default function ClientAvatar({ src }: { src: string }) {
  return (
    <Avatar>
      <AvatarImage src={src} />
    </Avatar>
  );
}
