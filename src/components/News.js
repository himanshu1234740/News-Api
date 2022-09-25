import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



const News = (props) => {
  const [articles, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(1)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    document.title = `${props.category}-News App`
    async function check() {
      props.progress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}&category=${props.category}
    `;
      setLoading(true);
      let data = await fetch(url)
      props.progress(35)
      let parseData = await data.json();
      props.progress(75)
      setArticle(parseData.articles)

      setPageSize(parseData.totalResults)
      setLoading(false)

      props.progress(100)
    }
    check()
  }, [])


  const handlePrevious = async () => {

    props.progress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}&category=${props.category}
  `;
    setLoading(true);
    let data = await fetch(url)
    this.props.progress(35)
    let parseData = await data.json();
    props.setProgress(75)
    setArticle(parseData.articles)

    setPageSize(parseData.totalResults)
    setLoading(false)
    setPage(page - 1)
    props.progress(100)

  }
  const handleNext = async () => {

    if (!(page + 1 > Math.ceil(pageSize / 12))) {

      props.progress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}
  `;
      setLoading(true);
      let data = await fetch(url)
      props.progress(35)
      let parseData = await data.json();
      props.progress(75)
      setArticle(parseData.articles)

      setPageSize(parseData.totalResults)
      setLoading(false)
      setPage(page + 1)
      props.progress(100)

    }

  }

  return (
    <>
      <div className="container">
        <h1 className='text-center' style={{ marginTop: '80px' }}>Top {props.category} Headline </h1>
        {loading && <Spinner />}

        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {!(loading) && articles.map((element) => {
              return <Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} auther={element.author} date={element.publishedAt} />

            })}

          </div>
        </div>

        <div className="container mt-5 d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-primary mx-2" onClick={handlePrevious} >Previous</button>
          <button disabled={(page + 1 > Math.ceil(pageSize / 12))} type="button" className="btn btn-primary mx-3" onClick={handleNext} >Next</button>
        </div>
      </div>
    </>

  )

}
export default News