function SearchBar({searchfield, searchChange}){

    return(
        <div >
            <input className="pa3 ba b--blue bg-lightes-green" 
            type="search"  placeholder="Search Robot" 
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBar