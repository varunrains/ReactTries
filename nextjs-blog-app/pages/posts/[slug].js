import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from 'next/head';
import { Fragment } from "react";

const PostDetailPage = (props) => {
    return (<Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post} />
    </Fragment>);
}


export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate:600
    }
}

//As this is a dynamic path we need another function in conjunction with the getStaticProps
//We are not generating anything and not all of them
//We are not defining all the paths at once
//Once there is a request then only build the page
                //export function getStaticPaths() {
                //    return {
                //        paths: [],
                //        fallback:'blocking'
                //    }
                //}

//You can also do the below to 
//Dynamically generate all the pages (PRE_Prendering)
//Dont do this if your blog has 1000's of pages
//This would simply overkill //In this blog we only have couple of pages we are doing this.
export function getStaticPaths() {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({ params: {slug:slug}})),
        fallback: false //No fallback it will throw error instead of pre-rendering.
    }
}

export default PostDetailPage;