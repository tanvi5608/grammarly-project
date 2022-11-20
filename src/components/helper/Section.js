import React from 'react';
import "./Section.css";

const Section = (props) => {
    return(
        <section className={props.classList}>
            {props.children}
        </section>
    )
}

export default Section;