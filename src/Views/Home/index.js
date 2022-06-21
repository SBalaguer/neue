import React, {useEffect, useState} from 'react';
import sanityClient from "../../client.js";
import {Link} from 'react-router-dom';

import './index.css';


import IndividualPost from '../../Components/IndividualPost'



function Home() {

    const [allPublicationsData, setAllPublications] = useState(null);

    useEffect(() => {
      sanityClient.fetch(
        `*[_type == "post"]{
          title,
          slug,
          client,
          year,
          location,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      ).then(data => setAllPublications(data)
      ).catch(error => console.log(error));
      
    },[]);

    console.log("allPublicationsData",allPublicationsData)
    return (
      <div>
          {allPublicationsData && allPublicationsData.map(publication => {
            return(
                
              <Link className='publication-link' to={`projects/${publication.slug.current}`} key={publication.slug.current}>
                <IndividualPost {...publication}/>
                {/* <span key={publication.slug.current}>
                  <img src={publication.mainImage.asset.url} alt="Main hero image for publication"/>
                </span>
                <span>
                  <h2>{publication.title}</h2>
                </span> */}
              </Link>
            )
          })}
      </div>
    );
  }
  
export default Home;