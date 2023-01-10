import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = () => {

    const posts = getPostMetadata()
    return posts.map(p => ({ slug: p.slug }))
}

const PostPage = (props: any) => {



    const slug = props.params.slug;

    const post = getPostContent(slug);




    return (
        <div>
            <h1>{slug}</h1>
            <div>
                <h1 className='text-2xl text-violet-600' >{post.data.title}</h1>
                <article className="prose prose-slate">
                    <Markdown>
                        {post.content}
                    </Markdown>
                </article>

            </div>
        </div>
    )
}

export default PostPage