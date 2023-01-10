import React from 'react'
import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import { PostMetaData } from '../components/PostMetaData'
import getPostMetadata from '../components/getPostMetadata'
import PostPreview from '../components/PostPreview'






const Homepage = () => {

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map(post => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    )
}

export default Homepage