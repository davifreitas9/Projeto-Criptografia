import React, { Component } from 'react'


export default class Pagina extends Component {
    render() {
        return (
            <div className="App">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />

                    <title>Criptografia</title>
                </head>

                <body id="page-top">

                    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                        <div class="container">
                            <a class="navbar-brand js-scroll-trigger" href="#page-top">Criptografia</a>
                            <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                            <i class="fas fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1">
                                        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#cesar">Cifra de César</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1">
                                        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#vigenere">Cifra de Vigenère</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1">
                                        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#transposicao">Cifra de Transposição</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <header class="masthead bg-primary text-white text-center">
                        <div class="container">
                            <img class="img-fluid mb-5 d-block mx-auto" src="img/crip.jpg" alt="" />
                            <h1 class="text-uppercase mb-0">Start Bootstrap</h1>
                            <hr class="star-light" />
                            <h2 class="font-weight-light mb-0">Criptografe e Descriptografe suas mensagens!</h2>
                        </div>
                    </header>
                </body>
            </div>
        )
    }
}