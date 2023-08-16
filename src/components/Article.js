import React from 'react';


const Article = ((props) => {
    console.log(props)
    let date = props.date || "January 1, 1970"
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{date}</small>
            <p>{props.preview}</p>
        </article>
    )
})
export default Article;