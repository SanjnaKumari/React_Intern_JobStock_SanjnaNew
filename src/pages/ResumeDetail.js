import React from 'react'
import bgImg from "../img/banner-10.jpg"
import Banner from '../components/Banner'
import ResumeDetailSection from '../sections/ResumeDetailSection'
import ResumeDetailDesc from '../sections/ResumeDetailDesc'

const ResumeDetail = () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
            <Banner title = "Resume Detail " bgImg={bgImg}/>
            <ResumeDetailSection/>
            <ResumeDetailDesc/>
        </div>
        </>
    )
}

export default ResumeDetail;