import fs from "fs"
import matter from "gray-matter"
import { PostMetaData } from "./PostMetaData"


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
export default getPostMetadata