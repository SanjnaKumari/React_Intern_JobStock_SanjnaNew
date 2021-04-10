import React from 'react'
import DetailAboutDiv from '../components/DetailAboutDiv'
import DetailDesc1 from '../components/DetailDesc1'
import ResumeDetailDesc2 from '../components/ResumeDetailDesc2'
// const Data1 = [
//     {
//         title : "Apps Development",
//         value : "90%",
//         styleObj1 : [
//             {
//               width: "90%",
//               background:"#26a9e1"
//             }
//         ],
//         styleObj2 : [
//             {
//                 borderColor: "#26a9e1" ,
//                 color :"#26a9e1"
//             },

//         ]
//     }
// ]
const styleObj1 = [
      {
        width: "90%",
        background:"#26a9e1"
    },
    

    {
        width: "80%",
        background:"#f6931e"
    },
    

     {
        width: "65%",
        background:"#8bc43f"
    },

    {
        width: "52%",
        background:"#d20001"
    }
]
const styleObj2 = [
    {
        borderColor: "#26a9e1" ,
        color :"#26a9e1"
    },
    {
        borderColor: "#f6931e" ,
        color :"#f6931e"
    },
    {
        borderColor: "#8bc43f" ,
        color :"#8bc43f"
    },
    {
        borderColor: "#d20001" ,
        color :"#d20001"
    }
]

const ResumeDetailDesc = () => {
    return (
        <>
        <section className="full-detail-description full-detail">
			<div className="container">
                <DetailAboutDiv detailTitle = "About Resume"/>
                <DetailDesc1 title = "Education"/>
                <DetailDesc1 title = "Work Experience"/>
                <div className="row row-bottom mrg-0">
					<h2 className="detail-title">Skills</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className="ext-mrg row third-progress">
						<div className="col-md-6 col-sm-6">
							<div className="panel-body">
                            {/* {Data1.map((data) => {
                                const  {title,value,styleObj1,styleObj2} = data;
                                return (
                                    <ResumeDetailDesc2
                                        key = {title}
                                        title = {title}
                                        value = {value}
                                        styleObj1 = {styleObj1}
                                        styleObj2 = {styleObj2}
                                    />
                                )
                            })} */}
                            
                             <ResumeDetailDesc2 
                                title = "Apps Development"
                                value = "90%"
                                styleObj1 = {styleObj1[0]}
                                styleObj2 = {styleObj2[0]}
                                />
                                <ResumeDetailDesc2 
                                title = "iPhone Development"
                                value = "80%"
                                styleObj1 = {styleObj1[1]}
                                styleObj2 = {styleObj2[1]}
                                />
                                <ResumeDetailDesc2 
                                title = "Digital Marketing"
                                value = "65%"
                                styleObj1 = {styleObj1[2]}
                                styleObj2 = {styleObj2[2]}
                                />
                                <ResumeDetailDesc2 
                                title = "SEO/SMO"
                                value = "52%"
                                styleObj1 = {styleObj1[3]}
                                styleObj2 = {styleObj2[3]}
                                />
                            </div>
						</div>

                        <div className="col-md-6 col-sm-6">
							<div className="panel-body">
                                <ResumeDetailDesc2 
                                title = "Apps Development"
                                value = "90%"
                                styleObj1 = {styleObj1[0]}
                                styleObj2 = {styleObj2[0]}
                                />
                                <ResumeDetailDesc2 
                                title = "iPhone Development"
                                value = "80%"
                                styleObj1 = {styleObj1[1]}
                                styleObj2 = {styleObj2[1]}
                                />
                                <ResumeDetailDesc2 
                                title = "Digital Marketing"
                                value = "65%"
                                styleObj1 = {styleObj1[2]}
                                styleObj2 = {styleObj2[2]}
                                />
                                <ResumeDetailDesc2 
                                title = "SEO/SMO"
                                value = "52%"
                                styleObj1 = {styleObj1[3]}
                                styleObj2 = {styleObj2[3]}
                                />
                            </div>
						</div>
                    </div> 
				</div>      

            </div>
        </section>									
        </>
    )
}

export default ResumeDetailDesc