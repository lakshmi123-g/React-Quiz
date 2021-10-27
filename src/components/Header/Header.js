import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={{ fontSize: 50 }}>QUIZ HUB</Link>

            <hr className="divider" />
        </div>
    )
}

export default Header
