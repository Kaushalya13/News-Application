import React from 'react';
import image from '../assets/image.png';

const NewsItems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: '18rem' }}>
      <img src={src?src:image} style={{height:"200px",width:"287px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"this is breaking news now"}</p>
        <a href={url} className="btn btn-primary">Read More...</a>
      </div>
    </div>
  )
}

export default NewsItems
