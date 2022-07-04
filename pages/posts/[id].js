import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '../../layouts/BlogLayout'
import posts from '../../sample/posts.json'
import classes from '../../styles/BlogPost.module.scss'
export default function PostPage({post}){
	const [shareUrl,setShareUrl] = useState("");
    const [shareTextTwitter,setShareTextTwitter] = useState("");
	const readTimeMin = parseInt((post.content.split(/\s{1,}/).length / 180).toFixed(0),10);
    const readTime = readTimeMin + " minute"+(readTimeMin > 1 ? 's':'')+ ' read';
	const dateString = new Date(post.date).toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute: 'numeric'});
    useEffect(()=>{
        setShareUrl(window.location.href);
        setShareTextTwitter(escape(post.title)+' '+window.location.href);
    },[post.title])
	return (
        <BlogLayout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className={classes.article}>
                <h1 className={classes.blogTitle}>{post.title}</h1>
                <div className={classes.blogMeta}>
                    <span>{dateString}</span>
                    <span>{readTime}</span>
                </div>
                <div className={classes.blogMeta2}>
                    <div className={classes.shareIcons}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/facebook_color.svg" height="32" width="32" alt="facebook share"/>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${shareTextTwitter}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/twitter_color.svg" height="32" width="32" alt="twitter-share"/>
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle/?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/linkedin_color.svg" height="32" width="32" alt="linkedin share"/>
                        </a>
                    </div>
                </div>
                <Image src={post.img} width="760" height="428" alt={post.title}/>
                <div className={classes.blog}>
					{post.content}
				</div>
            </article>
        </BlogLayout>
    )
}

export const getServerSideProps = async (req, res) => {
	return {
		props: {
			post: posts.find(p => p.id == req.params.id)
		}
	}
}