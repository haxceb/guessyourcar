import React from 'react';
import carIcon from '../../Media/MERCEDES C-CLASS.png';


export default function ResultCard() {

    return (
        <div className="container m-2">
            <div className="row">
                <div className="col-lg-12 mx-auto">

                    <ul className="list-group shadow">

                        <li className="list-group-item">
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Mercedes Benz S Class</h5>
                                    <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">$12000</h6>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div><img src={carIcon} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
