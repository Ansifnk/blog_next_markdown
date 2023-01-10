import Link from 'next/link'
import React from 'react'
import { PostMetaData } from './PostMetaData'

const PostPreview = (props: PostMetaData) => {
    return (
      <div
        className="border border-slate-300 p-4 rounded-md shadow-sm
      bg-white"
      >
        <p className="text-sm text-slate-400">{props.date}</p>
  
        <Link href={`/posts/${props.slug}`}>
          <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
        </Link>
        <p className="text-slate-700">{props.subTitle}</p>
      </div>
    );
  };
  
  export default PostPreview;