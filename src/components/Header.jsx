import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div>
        <h1>Emiedonmokumo Dick-Boro</h1>
      </div>
      <nav className="">
          <ul>
            <li><Link to={"/repos"} className="link">Repositories</Link></li>
            <li><Link to={"/"} className="link">Home</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
