import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(post?._createdAt || new Date().toISOString())}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post?.views || 0}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <p className="text-16-medium line-clamp-1">
            <Link href={`/user/${post?.author?._id}`}>
              {post?.author?.name}
            </Link>
          </p>
          <h3 className="text-26-semibold line-clamp-1">
            <Link href={`/startup/${post?._id}`}>{post?.title}</Link>
          </h3>
        </div>
        <div>
          <Link href={`/user/${post?.author?._id}`}>
            <Image
              src="https://placehold.co/600x400"
              alt="placeholder"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      <div className="startup-details">
        <p className="startup-card_desc">{post?.description}</p>
        <Image
          src={post?.image || "/download.jpg"}
          alt={post?.title || "Startup Image"}
          width={400}
          height={300}
          className="startup-card_img"
        />
        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${post?.category.toLowerCase()}`}>
            <p className="text-16-medium">{post?.category}</p>
          </Link>
          <Button className="startup-card_btn">
            <Link href={`/startup/${post?._id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
