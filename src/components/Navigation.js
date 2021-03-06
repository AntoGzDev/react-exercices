import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <Link className="navbar-brand" to="/">
                        PachacTec
                    </Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link className="nav-link" to="/"> Pagina </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/create"> Crear Pagina </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/user"> Crear Usuario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
