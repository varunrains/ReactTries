import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = (props) => {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    //To make image work with Image component of NextJS and not normal img tag in the markdown
    //Refer to React Markdown documentation to get more insights into this.
    const customRenderers = {
        //img(image) {
        //    return (<Image src={`/images/posts/${post.slug}/${post.image}`} alt={image.alt} width={600} height={300} />);
        //},
        //The above code is commented because if you try to insert <DIV> tag inside the <P> tag
        //Then you will get lot of warnings in the browser hence to overcome this
        //We need to find the paragraph which has image and then replace it with the <DIV> tag.
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${post.image}`}
                            alt={image.alt}
                            width={600}
                            height={300} />
                    </div>
                    );
            }
            return <p>{paragraph.children}</p>
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter style={atomDark} language={language} children={children} />
                );
        }

    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
        
        );

};

export default PostContent;