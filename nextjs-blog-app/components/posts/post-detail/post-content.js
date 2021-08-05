import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';


//const DUMMY_POSTS =
//{
//    slug: 'getting-started-with-next-js',
//    title: 'Getting Started with NextJS',
//    image: 'getting-started-nextjs.png',
//    content: '# This is a first post',
//    date: '2022-02-10'
//};
   

const PostContent = (props) => {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown> {post.content} </ReactMarkdown>
        </article>
        
        );

};

export default PostContent;