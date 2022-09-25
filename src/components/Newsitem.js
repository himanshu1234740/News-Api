import React, { Component } from 'react'

const Newsitem = (props)=>{

    const { title, description, imageUrl ,url ,auther,date} = props
    
    return (
      <div className="col">
        <div className="card">
          <img src={imageUrl===null?'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/1200px-BBC_News.svg.png':imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p style={{opacity: '0.5'}} >By {auther===null?'Unknown':auther} on {new Date(date).toUTCString()}</p>
            <a href={url} type="button" rel="noreferrer" target="_blank" className="btn btn-danger">Read</a>
          </div>
        </div>
      </div>
    )
  
}
export default Newsitem


