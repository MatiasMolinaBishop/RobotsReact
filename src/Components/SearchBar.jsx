import './SearchBar.css'

function SearchBar({searchfield, searchChange}){

    return(
        <div className = 'searchbarStyle'>
            <input className="pa3 ba b--blue bg-lightes-green" 
            type="search"  placeholder="Search Robot" 
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBar