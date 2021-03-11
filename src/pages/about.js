import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/Pro Headshot.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    console.log(query)
    return (
        <Layout>
            <h2>Hello , my name is DeQuan but most people call me DQ</h2>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Tampa, Florida</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>Kenzie Academy | Remote </p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>JavaScript/React | Python/Django</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>English, Spanish</p></div>
            


                </div>
          
            </div>
            <div className={aboutStyle.derecha}>
            <p>
                I currently work as the Director of Market Operations for a family-owned bakery as well as a freelance actor, dancer, model on stage and screen. I have enjoyed a fulfilling life of creating art and telling stories through my love of self-expression and performing. I am now ready to nurture my love of technology and make the pivot to software engineering.
            </p>
            <p>
                I am currently studying to be a front-end and full-stack developer. I will officially be a junior developer on April 23, 2021, and I am excited to connect with other students and potential colleagues and employers along my journey. I plan to use my knowledge of software development to create and implement innovative solutions for solving the worlds toughest problems such as generational poverty and climate change, as these are two of the most destructive forces that we face today. I have pledged my life to this. I will use my experience in entertainment and storytelling to build technology that will captivate and call to action the helpers of the world.
            </p>
            <p>
                I truly believe that we are stronger together, and I intend to use my skills and resources to unite. Let's connect!
            </p>
               
                <div className={aboutStyle.logoContainer}>
                <p>Some of the tech I like:</p>
                <img alt="Python" className={aboutStyle.logo} src="./logos/python-logo.png" />
                <img alt="javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
                <img alt="Django" className={aboutStyle.logo} src="./logos/django-square-2.png" />
                <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
                <img alt="Bootstrap" className={aboutStyle.logo} src="./logos/bootstrap-social-logo.png" />
                <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
                <img alt="nodeJs" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
                <img alt="Mongo" className={aboutStyle.logo} src="./logos/mongodb.png" />
                </div>

           
                <div className={aboutStyle.socialContainer}>
                <p>Send me a message!</p>
                <a className={aboutStyle.social} href="https://github.com/Deekee8"><i className="fab fa-github"></i></a>
                <a className={aboutStyle.social} href="https://twitter.com/devDeQuan"><i class="fab fa-twitter"></i></a>
                <a className={aboutStyle.social} href="https://www.linkedin.com/in/dequan-mitchell-138b9990/"><i class="fab fa-linkedin"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About