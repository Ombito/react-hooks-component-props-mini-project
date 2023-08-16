import React from 'react';
import Article from './Article';
import blogData from "../data/blog";

const ArticleList = () => {
    const posts = blogData.posts
    const post = posts.map((i) => (
        <Article 
            key={i.id} 
            title = {i.title}
            date = {i.date}
            preview = {i.preview}
            minutes = {i.minutes}
         />
    ))
    return <main>{post}</main>
    
}
export default ArticleList;