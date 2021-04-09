import React from 'react'
import client1 from '../img/client-1.jpg'


const ResumeDetailSection = () =>{
    return (
        <>
        <section className="detail-desc">
				<div className="container white-shadow">
					<div className="row mrg-0">
						<div className="detail-pic">
							<img src={client1} className="img" alt="" />
							<a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
						</div>
						<div className="detail-status">
							<span>7 Hour Days Ago</span>
						</div>
					</div>
					<div className="row bottom-mrg mrg-0">
						<div className="col-md-8 col-sm-8">
							<div className="detail-desc-caption">
								<h4>Daniel Dax</h4>
								<span className="designation">Web Developer</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div className="detail-desc-skill">
								<span>HTML</span><span>css</span><span>photoshop</span>
								<span>java</span><span>php</span><span>bootstrap</span>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="get-touch">
								<h4>Get in Touch</h4>
								<ul>
									<li><i className="fa fa-map-marker"></i><span>Menlo Park, CA</span></li>
									<li><i className="fa fa-envelope"></i><span>danieldax704@gmail.com</span></li>
									<li><i className="fa fa-phone"></i><span>0 123 456 7859</span></li>
									<li><i className="fa fa-money"></i><span>$52/Hour</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row no-padd mrg-0">
						<div className="detail pannel-footer">
							<div className="col-md-5 col-sm-5">
								<ul className="detail-footer-social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
							<div className="col-md-7 col-sm-7">
								<div className="detail-pannel-footer-btn pull-right">
									<a href="#" className="footer-btn grn-btn" title="">Hire Now</a>
									<a href="#" className="footer-btn blu-btn" title="">Edit</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default ResumeDetailSection