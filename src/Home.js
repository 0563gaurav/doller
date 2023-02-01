function Home() {
    return (
        <div className="home-container">
            <div className="main-slider slider slick-initialized slick-slider">
                    <div  class="slider-item" style={{backgroundImage:"url('assets/images/slideshow1-2.jpg')", backgroundPosition:"50%",backgroundRepeat:"no-repeat"}}>
                        <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                            <div class="slider-caption">
                                <span class="lead">Cutting Edge Technology</span>
                                <h1 class="mt-2 mb-5"><span class="text-color">RasberryPi </span>arduino</h1>
                                <a href="#" class="btn btn-main">Click Here</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        
        </div>
    )
}
export default Home;