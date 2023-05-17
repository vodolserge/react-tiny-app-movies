import {repo, reactLibrary} from "../helpers/static"

/**
 *  Main `Header` component.
 *
 * @constructor
 */
function Header () {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href={repo} className="brand-logo" target="_blank" rel="noreferrer">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href={repo} target="_blank" rel="noreferrer">Repo</a></li>
                    <li><a href={reactLibrary} target="_blank" rel="noreferrer">React: v18.2.0</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;