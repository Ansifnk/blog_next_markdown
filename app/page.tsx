import React from 'react'
import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import { PostMetaData } from '../components/PostMetaData'



const getPostMetadata = (): PostMetaData[] => {
    const folder = 'posts/'
    const files = fs.readdirSync(folder)
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    // const slugs = markdownFiles.map((file) => file.replace('.md', ''));
    // return slugs

    const posts = markdownFiles.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
        const matterResults = matter(fileContents);
        return {
            title: matterResults.data.title,
            date: matterResults.data.date,
            subTitle: matterResults.data.subtitle,
            slug: fileName.replace('.md', '')

        }
    })

    return posts
}

const Homepage = () => {

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map(post => (
        <div>
            <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.subTitle}</p>
            <p>{post.date}</p>
        </div>
    ))

    return (
        <div>{postPreviews}</div>
    )
}

export default Homepage