import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [index, setIndex] = useState(0)
    const [repos, setRepos] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/Emie-Boro/repos')
    .then(response => response.json())
    .then(data =>{setRepos(data)})
    .catch(err => console.log(err))
  }, [])

  const handleBack = () => {
    setIndex(index - 1)

    if(index <= 0) {
      setIndex(repos.length - 1)
    }
  }
  const handleNext = () => {
    setIndex(index + 1)

    if(index >= repos.length - 1) {
      setIndex(0)
    }
  }
  return (
    <div>
      <div className="container pagination">
          <div key={repos[index]?.id} className="item">
          <div>
            <span>Id: {repos[index]?.id}</span>
            <h3 className="title">{repos[index]?.name}</h3>
            <span>{new Date(repos[index]?.created_at).toDateString()}</span>
          </div>
          <span>Language: {repos[index]?.language}</span>
          <span>Branch: {repos[index]?.default_branch}</span>
          <Link to={`/repo/${repos[index]?.id}`} className="link-btn">View Repo</Link>
          </div>
      </div>
      <div className="flex-between">
          <button onClick={handleBack} className="">Back</button>
          <button onClick={handleNext} className="">Next</button>
      </div>
    </div>
  )
}

export default Home
