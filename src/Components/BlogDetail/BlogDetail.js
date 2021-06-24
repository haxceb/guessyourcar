import React from 'react';
import './style.css';
import carImage from '../../Media/2021-mercedes-benz-s-class.jpg'
import carImage2 from '../../Media/Audi A 4.png';
import carImage3 from '../../Media/Audi Q 2.png'

const BlogDetail = () => {
    return (
        <div id="main-content" className="blog-page">
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 left-box">
                        <div className="card shadow single_post">
                            <div className="body">
                                <div className="img-post">
                                    <img className="d-block img-fluid" src={carImage} alt="First slide" />
                                </div>
                                <h3>Mercedes C Class to be released on <p>August, 2021</p></h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            </div>
                        </div>
                        {/* <div className="card shadow">
                            <div className="header">
                                <h2>Comments 3</h2>
                            </div>
                            <div className="body">
                                <ul className="comment-reply list-unstyled">
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="m-b-0">Gigi Hadid </h5>
                                            <p>Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem. </p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 09 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Awesome Image" /></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="m-b-0">Christian Louboutin</h5>
                                            <p>Great tutorial but few issues with it? If i try open post i get following errors. Please can you help me?</p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 12 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Awesome Image" /></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="m-b-0">Kendall Jenner</h5>
                                            <p>Very nice and informative article. In all the years I've done small and side-projects as a freelancer, I've ran into a few problems here and there.</p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 20 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="card shadow">
                            <div className="header">
                                <h2>Leave a reply <small>Your email address will not be published. Required fields are marked*</small></h2>
                            </div>
                            <div className="body">
                                <div className="comment-form">
                                    <form className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-block" style={{ backgroundColor: '#FCC000', color: 'white' }}>SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-12 right-box">

                        <div className="card shadow">
                            <div className="header">
                                <h2>Categories Clouds</h2>
                            </div>
                            <div className="body widget">
                                <ul className="list-unstyled categories-clouds m-b-0">
                                    <li><a href="javascript:void(0);">Mercedes</a></li>
                                    <li><a href="javascript:void(0);">BMW</a></li>
                                    <li><a href="javascript:void(0);">Hatchback</a></li>
                                    <li><a href="javascript:void(0);">Audi</a></li>
                                    <li><a href="javascript:void(0);">Hyundai</a></li>
                                    <li><a href="javascript:void(0);">Suzuki</a></li>
                                    <li><a href="javascript:void(0);">Proton</a></li>
                                    <li><a href="javascript:void(0);">Honda</a></li>
                                    <li><a href="javascript:void(0);">Datsun</a></li>
                                    <li><a href="javascript:void(0);">TATA</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card shadow">
                            <div className="header">
                                <h2>Popular Posts</h2>
                            </div>
                            <div className="body widget popular-post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="single_post">
                                            <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                                            <span>jun 22, 2018</span>
                                            <div className="img-post">
                                                <img src={carImage2} alt="Awesome Image" />
                                            </div>
                                        </div>
                                        <div className="single_post">
                                            <p className="m-b-0">new rules, more cars, more races</p>
                                            <span>jun 8, 2018</span>
                                            <div className="img-post">
                                                <img src={carImage3} alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default BlogDetail;