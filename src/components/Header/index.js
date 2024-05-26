import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="background">
      <div>
        <div className="wave">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            className="image"
          />
          <p> Wave </p>
        </div>
      </div>
      <div></div>
      <div>
        <ul className="list">
          <li>
            {' '}
            <Link to="/"> Home </Link>{' '}
          </li>
          <li className="list">
            {' '}
            <Link to="/about"> About </Link>{' '}
          </li>
          <li className="list">
            {' '}
            <Link to="/contact"> Contact </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
