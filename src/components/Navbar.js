import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Project Hero</h1>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/about">About</Link>
            </div>
        </nav>
    )
}
