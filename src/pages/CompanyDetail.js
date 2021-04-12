import React from 'react'
import bgImg from "../img/banner-10.jpg"
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Banner from '../components/Banner'
import DetailSection from '../sections/detail/DetailSection'
import {DetailData} from '../data/detail/DetailData'
import CompanyDetailDesc from '../sections/detail/CompanyDetailDesc'

const CompanyDetail= () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
          <Navbar/>
          <div class="clearfix"></div>
          <Banner title = "Company Detail" bgImg={bgImg}/> 
          {/* <CompanyDetailSection/> */}
          <DetailSection
                row1 = {DetailData[1].row1}
                img = {DetailData[1].img}
                status = {DetailData[1].status}
                row2 = {DetailData[1].row2}
                name = {DetailData[1].name}
                desg = {DetailData[1].desg}
                desc = {DetailData[1].desc}
                span1 = {DetailData[1].span1}
                span2 = {DetailData[1].span2}
                li3 = {DetailData[1].li3}
                span3 = {DetailData[1].span3}
                li4 = {DetailData[1].li4}
                span4 = {DetailData[1].span4}
                li5 = {DetailData[1].li5}
                span5 = {DetailData[1].span5}
                row3 = {DetailData[1].row3}
                footerBtn1 = {DetailData[1].footerBtn1}
                footerBtn2 = {DetailData[1].footerBtn2}
            />
          <CompanyDetailDesc/>
          <Footer/>

        </div> 
        </>
    )
}

export default CompanyDetail