import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {

       capitalizeFirstLetter =(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props) {
        super();

        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title=this.capitalizeFirstLetter(props.category);
    }

    static defaultProps={
        country:"in",
        pageSize:6,
        category:"general"
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    async updateNews(){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            this.props.setProgress(30);
            let data = await fetch(url);
            let parsedData = await data.json();
            this.props.setProgress(70);
            this.setState({
                
                page:this.state.page,
                articles: parsedData.articles,
                loading:false
            });
            this.props.setProgress(100);
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27e22a95fda345b1bc8a7f0b4d909872&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults:parsedData.totalResults,
        //     loading:false
        // });
        this.setState({page:1});
        this.updateNews()
    }
    handlePreviousClick=async()=>{
        // if(this.state.page-1>0){
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27e22a95fda345b1bc8a7f0b4d909872&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
                
        //         page:this.state.page-1,
        //         articles: parsedData.articles,
        //         loading:false
        //     })
        // }
        this.setState({page:this.state.page-1});
        this.updateNews()
       
    }
    handleNextClick=async()=>{

        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27e22a95fda345b1bc8a7f0b4d909872&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true});
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // this.setState({
            //     page:this.state.page+1,
            //     articles: parsedData.articles,
            //     loading:false
            // })
            this.setState({page:this.state.page+1});
            this.updateNews()
        }
       
    }
    render() {
        const {pageSize}=this.props;
        return (
            <div className='container my-3'>
            <h1 className="text-center"  style={{margin:'35px 0px',marginTop:"90px"}}>Suraj Sahani News - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            { this.state.loading && <Spinner></Spinner>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 col-sm-10" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "}
                                imageUrl={element.urlToImage} source={element.source.name}
                                newsUrl={element.url} author={element.author} date={element.publishedAt}></NewsItem>

                        </div>
                    })}


                </div>
                <div className="container text-center d-flex justify-content-between">
                <button disabled={!(this.state.page-1>0)} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
