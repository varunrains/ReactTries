import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

//const DUMMY_POSTS = [
//    { slug: 'getting-started-with-next-js', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
//    { slug: 'getting-started-with-next-js2', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
//    { slug: 'getting-started-with-next-js3', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
//    { slug: 'getting-started-with-next-js4', title: 'Getting Started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a the reacft framework it makes building react full stack apps', date: '2022-02-10' },
//];

const AllPostsPage = (props) => {
    return <AllPosts posts={props.posts} />
}

export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate:100
    }
}

export default AllPostsPage;