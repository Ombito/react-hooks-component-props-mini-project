import React from 'react';


const Article = ((props) => {
    console.log(props)
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
})
export default Article;