import React from "react";
import './style.css'

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <div className="section__container section__container--toggleTasksDone">
          <h2 className="section__header">{title}</h2>
          {extraHeaderContent}
        </div>
        <div className="section__container">
          {body}
        </div>
    </section>
);

export default Section;