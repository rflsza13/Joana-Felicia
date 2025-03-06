import './Header.css'

function Header() {
    return (
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="https://rflsza13.github.io/Dados/Produtos/img/Landing-Page/logo.png" alt="logo" height="100px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto nav-underline">
                        <li><a href="#home" className="nav-item nav-link">Página Inicial</a></li>
                        <li className="nav-item dropdown">
                            <a href="#jewery" className="nav-item nav-link dropdown" role="button" data-bs-toggle="dropdown">Catálogo</a>
                            <ul className="dropdown-menu bg-dark">
                                <li><h6 class="dropdown-header">Catálogo Feminino</h6></li>
                                <li><a className="dropdown-item" href="#">Pratas</a></li>
                                <li><a className="dropdown-item" href="#">Semi-Joias</a></li>
                                <li><a className="dropdown-item" href="#">Pedras Brasileiras</a></li>
                                <li><a className="dropdown-item" href="#">Acessórios</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><h6 class="dropdown-header">Catálogo Masculino</h6></li>
                                <li><a className="dropdown-item" href="#">Pratas</a></li>
                                <li><a className="dropdown-item" href="#">Semi-Joias</a></li>
                                <li><a className="dropdown-item" href="#">Acessórios</a></li>
                            </ul>
                        </li>                        
                        <li><a href="#about" className="nav-item nav-link">Sobre nós</a></li>
                        <li><a href="#contact" className="nav-item nav-link">Fale Conosco</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;