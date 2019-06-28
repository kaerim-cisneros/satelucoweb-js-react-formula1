import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags"; // remove all of the tags from a text
import Truncate from "react-truncate"; // allow you to set up a summary of the blog post

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

    return (
        <div className="blog-entry-wrp">
            
            <img src={featured_image_url}/>
            <Link to={`/latest/${id}`}>
                {title}
            </Link>
            {/*<div> // Esto por si queremos poner un resumen de lo que trata el blog entry
                <Truncate lines={5} ellipsis={
                    <span>
                        ...<Link to={`/latest/${id}`}>Read More</Link>
                    </span>
                }>
                    {striptags(content)}
                </Truncate>
            </div>*/}
        </div>
    );
};

export default BlogItem;