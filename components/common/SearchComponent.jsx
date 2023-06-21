import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
const SearchComponent = ({searchData}) => {
    const[searchQuery,setSearchQuery] = useState('');
    const[searchResult,setSearchResult] = useState([]);

    const handleSearch = (e)=> {
        const query = e.target.value;
        setSearchQuery(query);


        const results = performSearch(query);
        setSearchResult(results);
    };
    const performSearch = (query) =>{
        const filteredResults = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()));
        return filteredResults;
    };
    const clearSearch = () => {
        setSearchQuery('');
        setSearchResult([]);
      };

  return (
    <div>
        <div className="flex">
            <SearchIcon/>
            <input 
                type="text"
                value={searchQuery} 
                onChange={handleSearch}
                placeholder="Search"
                className="bg-transparent flex text-white placeholder:text-white placeholder:font-bold"
                />
        </div>
        {searchResult.length > 0 && (
        <ul>
          {searchResult.map((results) => (
            <li key={results.id}>{results.title}</li>
          ))}
        </ul>
      )}

      {searchQuery && searchResult.length === 0 && (
        <div>No results found.</div>
      )}

      {searchQuery && (
        <button onClick={clearSearch}>Clear Search</button>
      )}

            
    </div>
  );
};


export default SearchComponent
