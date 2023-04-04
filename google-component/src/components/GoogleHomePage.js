import React, { useState } from 'react'
import Header from './Header';
import Main from './Main';
import SearchBox from './SearchBox';
import Footer from './Footer';
import "../styles/google-homepage.css"

 const GoogleHomePage = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchHistory, setSearchHistory] = useState([]); 

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        setSearchHistory([...searchHistory, keyword]);
        };


  return (
    <div className="container">
       <Header />
        <SearchBox onSearch={handleSearch} />
        {searchKeyword && (
            <div className="search-history">
           {searchKeyword}
            </div>
        )}
        <Main />
        <Footer />
        </div>
  );
}

export default GoogleHomePage;