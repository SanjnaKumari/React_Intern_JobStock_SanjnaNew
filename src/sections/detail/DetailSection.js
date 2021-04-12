import React from 'react'

import {DetailData} from '../../data/detail/DetailData'

const DetailSection = ({row1,img,status,row2,name,desg,desc,Resume,skillClass,s1,s2,s3,s4,s5,s6,span1,span2,li3,span3,li4,span4,li5,span5,row3,footerBtn1,footerBtn2}) =>{
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
								<p>{desc}</p>
							</div>
							{Resume && <div className="detail-desc-skill">
								{/* <span>HTML</span><span>css</span><span>photoshop</span>
								<span>java</span><span>php</span><span>bootstrap</span> */}
								
                            {DetailData[0].skills.map(val => {
                            return(
                    <span key={val}>{val}</span>);
                  })}
							</div>}
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="get-touch">
								<h4>Get in Touch</h4>
								<ul>
									<li><i className="fa fa-map-marker"></i><span>{span1}</span></li>
									<li><i className="fa fa-envelope"></i><span>{span2}</span></li>
									<li><i class={li3}></i><span>{span3}</span></li>
									<li><i className={li4}></i><span>{span4}</span></li>
									<li><i className={li5}></i><span>{span5}</span></li>
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