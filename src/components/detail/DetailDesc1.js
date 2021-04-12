import React from 'react'

const DetailDesc1 = ({title}) => {
    return (
        <>
        <div className="row row-bottom mrg-0">
						<h2 className="detail-title">{title}</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="detail-list">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur.</li>
						</ul>
					</div>
        </>
    )
}

export default DetailDesc1