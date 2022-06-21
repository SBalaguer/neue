import React from 'react';
import './index.css';

function IndividualPost(props) {
    return (
      <div className='singleContainer'>
        <img className='heroImg' src={props.mainImage.asset.url} />
        <div className='detailsContainer'>
            <p className='details'>Client {props.client}</p>
            <p className='details-spacer'> ------ </p>
            <p className='details'>Year {props.year}</p>
            <p className='details'> ------ </p>
            <p className='details'>Location {props.location}</p>
        </div>
      </div>
    );
  }
  
export default IndividualPost;