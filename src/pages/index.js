import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Shows from '../components/shows'
import Contactform from '../components/form'


const IndexPage = (props) => (
  
  <Layout>
    <SEO title="Home" keywords={['daniel domann', 'developer', 'kc', 'kansas city' ]} />
    <div>
    <section className="banner">
    <Img 
    className=""
    style={{
      minHeight: '56vw',
      maxHeight: '56vw',
      width: '100%',
      position: 'absolute',
      background: 'transparent',
      zIndex: -1,
      fontSize: '1em',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'bottom center'
    }}
     fluid={props.data.montageBG.childImageSharp.fluid}
      />
    <ul className="list-inline social-links">
    <li><a href="https://www.facebook.com/montagekc/" className="btn-social btn-outline" title="Facebook"><span className="icon-facebook"></span></a>
    </li>
        <li><a href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/" className="btn-social btn-outline" title="Youtube"><span className="icon-youtube"></span></a>
        </li>
      </ul>
    <div className="container">
    <div className="img_wrap logo_img img-fluid">
    <Img className="logo_img img-fluid" fluid={props.data.montageLogo.childImageSharp.fluid} />
    </div>
    </div>
    </section>
    <section className="shows">
    <div className="container">
    <Shows />
      </div>
    </section>
    <section className="songs">
    <div id="song_container" className="container">
    <h1>Setlist</h1>
    <iframe title="Montage Setlist" src="https://open.spotify.com/embed/user/youngwestman/playlist/4MD2q9eW1PZPEpbP8unk9Y" width="100%" height="450" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    </section>
    <section className="m_videos">
      <h1>Videos</h1>
    <div className="container">
    <div className="row">
    <div className="col-md-6 vid">
    <div className="iframe_wrap">
    <iframe title="My Hero" className="iframe" src="https://www.youtube.com/embed/dBENIjewLFc" frameBorder="0" allowFullScreen></iframe>
    </div>
    </div>
    <div className="col-md-6 vid">
    <div className="iframe_wrap">
    <iframe title="Tom Sawyer" className="iframe" src="https://www.youtube.com/embed/7i7QF8Wfe0E" frameBorder="0" allowFullScreen></iframe>
    </div>
    </div>
    </div>
      </div>
    </section>
    <section className="contact_form">
    <h1>Contact</h1>
    <div className="container">
    <div className="row">
    <div className="col-12">
    <Contactform />
    </div>
    </div>
    </div>
    </section>
      <section className="footer">
      <ul className="list-inline social-links text-center">
      <li><a href="https://www.facebook.com/montagekc/" className="btn-social btn-outline" title="Facebook"><span className="icon-facebook"></span></a>
      </li>
          <li><a href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/" className="btn-social btn-outline" title="Youtube"><span className="icon-youtube"></span></a>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    montageLogo: file(relativePath: { eq: "montagelogo2_1.png" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    montageBG: file(relativePath: { eq: "konrads_montage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

