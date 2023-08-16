import React from 'react';

const About = (props) => {
    const OurImage = <img src={props.image} alt="blog logo"/>
    return (
        <aside>
            {OurImage}
            <p>{props.about}</p>
        </aside>
    )
}
export default About;