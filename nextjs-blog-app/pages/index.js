import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from 'next/head';

const DUMMY_POSTS = [
    { slug: 'getting-started-with-next-js', title: 'Getting Started with NextJS',  image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
    { slug: 'getting-started-with-next-js2', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
    { slug: 'getting-started-with-next-js3', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
    { slug: 'getting-started-with-next-js4', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
];

const HomePage = (props) => {
    return (

        <Fragment>
            <Head>
                <title>Varun's Blog</title>
                <meta name='description' content="I post about programming and web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 100
    }

}

export default HomePage;

//1) Hero => Present ourselves - For features products in shopping app
