import React from 'react';
import './header.styles.scss';
import {Link, graphql, useStaticQuery} from 'gatsby'



const Header = () => {

    const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }
    `)

    return (
            <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>

                <div className="header-main">
                        <div className="dev">
                        <h1>{data.site.siteMetadata.title}</h1>
                        <span className="attr">Web Developer</span>
                        <span className="dot">•</span>
                        <span className="attr">Creator</span>
                        <span className="dot">•</span>
                        <span className="attr">Life-long Learner</span>
                        </div>
                        <div className="icons">
                        <a href='https://github.com/Deekee8'><i aria-label="link to DeQuan's GitHub" className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/dequanmitchell/'><i aria-label="link to DeQuan's LinkedIn" className="fab fa-linkedin"></i></a>
                        <a href='https://twitter.com/devDeQuan'><i aria-label="link to DeQuan's Twitter" className="fab fa-twitter"></i></a>
                        <a href='https://dev.to/deekee8'><i aria-label="link to DeQuan's Dev.com page" className="fab fa-dev"></i></a>
                        </div>
                        <span className="pages-link">
                        <Link to="/">Portfolio</Link>
                        |
                        <a href="https://www.kickresume.com/cv/QQwjm/">Resume</a>
                        |
                        <Link to="/about">About</Link>
                        |
                        <Link to="/blog">Blog</Link>
                        </span>

                        
                        <hr/>
                 </div>
            </div>
        
    );
}

export default Header