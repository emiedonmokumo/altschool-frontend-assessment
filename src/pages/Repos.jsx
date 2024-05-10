import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "../components/Search"

const Repos = () => {
    const [repos, setRepos] = useState([])

    useEffect(()=>{
  
      fetch('https://api.github.com/users/Emie-Boro/repos')
      .then(response => response.json())
      .then(data =>{setRepos(data)})
      .catch(err => console.log(err))
  
    }, [])
  return (
    <div className="container">
    <Search result={setRepos}/>
    {repos.map(repo =>(
        <div key={repo.id} className="item">
        <div className="">
          <h3 className="title">{repo.name}</h3>
          <span>{new Date(repo.created_at).toDateString()}</span>
        </div>
        <Link to={`/repo/${repo.id}`} className="link-btn">View Repo</Link>
        </div>
    ))}
    </div>
  )
}

export default Repos
