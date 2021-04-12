import React from 'react'



const ResumeDetailDesc2 = ({title,value,styleObj1,styleObj2}) => {
    return (
        <>
        <h3 className="progressbar-title">{title}</h3>
		<div className="progress">
		    <div className="progress-bar" style={styleObj1}>
				<span className="progress-icon fa fa-plus" style={styleObj2}></span>
				<div className="progress-value">{value}</div>
			</div>
		</div>
        </>
    )
}

export default ResumeDetailDesc2