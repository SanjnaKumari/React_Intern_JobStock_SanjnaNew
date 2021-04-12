import React from 'react'
import DetailAboutDiv from '../../components/detail/DetailAboutDiv'
import DetailDesc1 from '../../components/detail/DetailDesc1'

const CompanyDetailDesc = () => {
    return (
        <>
        <section class="full-detail-description full-detail">
			<div class="container">
              <DetailAboutDiv detailTitle = "About Company"/>
              <DetailDesc1 title = "Company Requirement" />
              <DetailDesc1 title = "Company Policy" />
            </div>
        </section>
        </>
    )
}

export default CompanyDetailDesc