import Image from "next/image";
import React from "react";
import type { Bookmark } from "@/types";
import Link from "next/link";

interface CardProps {
    bookmark: Bookmark
}

const Card = ({bookmark}: CardProps) => {
  return (
    <div className="border border-gray-200 rounded-md p-2.5 cursor-pointer w-56 min-h-44 transition-colors hover:bg-gray-100 animate__animated animate__fadeIn animate__slower">
        <Link href={bookmark.url} target="_blank" className="w-full h-full flex flex-col gap-1.5">
            <Image src={bookmark.image_url} alt={bookmark.title} width={120} height={90} className="rounded-md w-full h-24"/>
            <h2 className="text-gray-900 text-lg">{bookmark.title}</h2>
            <p className="mb-0 -mt-1 text-sm">{bookmark.description}</p>
        </Link>
    </div>
  );
};

export default Card;