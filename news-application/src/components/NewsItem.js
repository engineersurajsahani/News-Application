import React, { Component } from 'react'

export class NewsItem extends Component {

render() {
    const { title, description ,imageUrl,newsUrl,author,date ,source} = this.props;
    return (
        <div className='container my-3'>
            <div className="card mt-3" >
            <span className="position-absolute right-0 d-flex translate-middle badge rounded-pill bg-danger" style={{left:"80%",zIndex:"1"}}>{source}</span>
                <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2022/08/iPhone-14-concept.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><b><small className="text-muted"></small>By {author?author:"unknown"} on {new Date(date).toUTCString()}</b></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    );
}
}

export default NewsItem
