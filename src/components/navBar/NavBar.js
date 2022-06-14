import CartWidget from "./CartWidget";
import "./navBar.css"
export default function NavBar() {

    return (
        <nav className="nav-main">
            <ul className="nav-list">
                <li><a href="./"> Logo</a></li>
                <li><a href="./">pagina 2</a></li>
                <li><a href="./">pagina 1</a></li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

