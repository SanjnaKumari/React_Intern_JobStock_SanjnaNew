import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import bgImg from "../img/banner-10.jpg"
import Banner from '../components/Banner'
import DetailSection from '../sections/DetailSection'
import DetailData from '../data/detail/DetailData'
import ResumeDetailDesc from '../sections/ResumeDetailDesc'

const ResumeDetail = () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
            <Navbar/>
            <div class="clearfix"></div>
            <Banner title = "Resume Detail " bgImg={bgImg}/>
            <DetailSection
                row1 = {DetailData[0].row1}
                img = {DetailData[0].img}
                status = {DetailData[0].status}
                row2 = {DetailData[0].row2}
                name = {DetailData[0].name}
                desg = {DetailData[0].desg}
                Resume
                li1 = {DetailData[0].li1}
                span1 = {DetailData[0].span1}
                li2 = {DetailData[0].li2}
                span2 = {DetailData[0].span2}
                row3 = {DetailData[0].row3}
                footerBtn1 = {DetailData[0].footerBtn1}
                footerBtn2 = {DetailData[0].footerBtn2}
            />
            <ResumeDetailDesc/>
            <Footer/>
        </div>
        </>
    )
}

export default ResumeDetail;