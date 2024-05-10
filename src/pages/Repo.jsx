import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Repo = () => {
  const [repo, setRepo] = useState()
  const { id } = useParams()

  useEffect(()=>{

    fetch('https://api.github.com/users/Emie-Boro/repos')
    .then(response => response.json())
    .then(datas => setRepo(datas.filter(data => data.id == id)))
    .catch(err => console.log(err))

  }, [])

  return (
    <div className="repo-container">
      <Link to={'/'} className="link-btn">Go Back</Link>
      <div>
        <h1>{repo && repo[0].name}</h1>
        <p>Visibility: <strong>{repo && repo[0].visibility}</strong></p>
        <p>{repo && repo[0].description}</p>
        <p>Language: <strong>{repo && repo[0].language}</strong></p>
        <span>Last Updated at: <strong>{new Date(repo && repo[0].updated_at).toDateString()}</strong></span>
      </div>
      <div>
        <Link to={repo && repo[0].html_url} target="_blank">Visit GitHub</Link>
      </div>
    </div>
  )
}

export default Repo
