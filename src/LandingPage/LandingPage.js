import './LandingPage.css'

function Carousel() {
    return (
        <div className="container">
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://rflsza13.github.io/Dados/Produtos/img/Landing-Page/carousel-1.png" className="d-block w-100 carousel-img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-light'>Pratas</h2>
                            <h4 className='text-light'>As melhores em prata do mercado!</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://rflsza13.github.io/Dados/Produtos/img/Landing-Page/carousel-2.png" className="d-block w-100 carousel-img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-light'>Semi-Joias</h2>
                            <h4 className='text-light'>Tudo em Semi-Joias para arrasar no look!</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://rflsza13.github.io/Dados/Produtos/img/Landing-Page/carousel-3.png" className="d-block w-100 carousel-img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-light'>Acessórios</h2>
                            <h4 className='text-light'>Bolsas, Óculos e Carteiras e muito mais para arrasar nos eventos!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cards(props) {
    return (
        <div className="col-6 col-lg-3">
            <div className="card rounded mb-3">
                <img src={ props.img } className="card-img"/>
                <div>
                    <h4 className="card-title">{ props.type }</h4>
                </div>
            </div>
        </div>
    )
}

function LandingPage() {
    return (
        <div>
            <Carousel />
            <div className="container">
                <div className="row text-center">
                   <Cards type="Alianças" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Brincos" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Correntes" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Pulseiras" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Bolsas" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Carteiras" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Óculos" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                   <Cards type="Relógios" img="https://images.tcdn.com.br/img/editor/up/1224278/redonda5mm.jpg" />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;