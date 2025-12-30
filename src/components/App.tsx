// import Product from './Product';
// import Alert from "./Alert";
// import Button from "./Button";
import SearchForm from './SearchForm';
import { useState } from 'react';
import type { Article } from '../types/article';
import ArticleList from './ArticleList';
import { FidgetSpinner } from 'react-loader-spinner'
import { fetchArticles } from '../services/articleService';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const notify = () => toast('Wow so easy !');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
};
  
  
  return (
    <>
      <h1>React</h1>
      
      {/* <Product
        name='Tacos With Lime'
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}/>
      <Product
        name='Fries and Burger'
        imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640'
        price={14.29}/>
      <Alert />
      <Alert type="success"  />
      <Alert type="error" />
      <Button  direction = "left" variant="primary"  />
      <Button direction="right" variant="secondary" /> */}
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <FidgetSpinner
        visible={true}
        height="80"
        width="80"        
        ariaLabel="fidget-spinner-loading"       
        wrapperStyle={{}}       
        wrapperClass="fidget-spinner-wrapper"       
      />}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <ToastContainer />
    </>
  );
}
