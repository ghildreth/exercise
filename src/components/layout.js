import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div style={{margin: `0 auto`, maxWidth: 650, padding: `0 1 rem`}}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textshadow: `none`, backgroundImage: `none` }}>
                <h3  style={{ display: `inline` }}>MySweetSite</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </header>
        {children}
        <footer style={{ position: `absolute`, bottom: 0, width: `650px`, height: `35px`, background: `lightgrey` }}>Made with love by: Gabriel Hildreth</footer>
    </div>
)