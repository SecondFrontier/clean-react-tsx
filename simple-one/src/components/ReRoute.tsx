import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default function ReRoute() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/other">Other</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/other" element={<Other />}>
                        {/* <Other /> */}
                    </Route>
                    <Route path="/about" element={<About />}>
                        {/* <About /> */}
                    </Route>
                    <Route path="/" element={<Home />}>
                        {/* <Home /> */}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

function Home() {
    return <h2>Home</h2>
}
function About() {
    return <h2>About</h2>
}
function Other() {
    return <h2>Other</h2>
}