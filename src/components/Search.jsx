import React, { useState } from 'react'

const Search = ({ result }) => {
   const [errorMessage, setErrorMessage] = useState()
    const [searchValue, setSearchValue] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('https://api.github.com/users/Emie-Boro/repos')
        .then(response => response.json())
        .then(datas =>{
          const filtered = datas.filter(data => data.name.toLowerCase() == searchValue.toLowerCase())
          if(filtered == '') {
            setErrorMessage('Search does not match')
          }
          setTimeout(()=>{
            setErrorMessage('')
          }, 2000)
          result(filtered)
        }) 
        .catch(err => console.log(err))
    }
    if(!searchValue) {
        fetch('https://api.github.com/users/Emie-Boro/repos')
        .then(response => response.json())
        .then(data =>{result(data)})
        .catch(err => console.log(err))
    }
  return (
    <>
    <p>Note: Case Sensitive</p>
    <span>{errorMessage}</span>
    <form className='search-container' onSubmit={handleSubmit}>
      <input type="search" placeholder='Search Repo' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
      <button type="submit"><i className="bi bi-search"></i></button>
    </form>
    </>
  )
}

export default Search
