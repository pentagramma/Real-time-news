import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute translate-middle badge rounded-pill bg-primary" style={{ zIndex: '1', left: '80%' }}>{source}
          </span>
          <img src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">- {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn-sm btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
