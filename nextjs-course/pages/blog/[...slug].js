//React component indeed!!

import { useRouter } from "next/router";

const BlogPostsPage = () => {
    const router = useRouter();

    console.log(router.query);

    return (<div>
        <h1>The BlogPosts Page</h1>
    </div>);
};

export default BlogPostsPage;