import React from 'react'



const DetailSection = ({row1,img,status,row2,name,desg,skillClass,s1,s2,s3,s4,s5,s6,li1,span1,li2,span2,li3,span3,row3,footerBtn1,footerBtn2}) =>{
    return (
        <>
        <section className="detail-desc">
				<div className="container white-shadow">
					<div className={row1}>
						<div className="detail-pic">
							<img src={img} className="img" alt="" />
							<a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
						</div>
						<div className="detail-status">
							<span>{status}</span>
						</div>
					</div>
					<div className={row2}>
						<div className="col-md-8 col-sm-8">
							<div className="detail-desc-caption">
								<h4>{name}</h4>
								<span className="designation">{desg}</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div className={skillClass}>
								<span>{s1}</span><span>{s2}</span><span>{s3}</span>
								<span>{s4}</span><span>{s5}</span><span>{s6}</span>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="get-touch">
								<h4>Get in Touch</h4>
								<ul>
									<li><i className="fa fa-map-marker"></i><span>Menlo Park, CA</span></li>
									<li><i className="fa fa-envelope"></i><span>danieldax704@gmail.com</span></li>
									<li><i class={li1}></i><span>{span1}</span></li>
									<li><i className={li2}></i><span>{span2}</span></li>
									<li><i className={li3}></i><span>{span3}</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className={row3}>
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
									<a href="#" className="footer-btn grn-btn" title="">{footerBtn1}</a>
									<a href="#" className="footer-btn blu-btn" title="">{footerBtn2}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default DetailSection