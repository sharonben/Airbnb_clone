import React from 'react'
import "./LearnMorePage.css"
import LearnNavBar from "./component/LearnNavBar";
import SectionOne from './component/sectionOne/SectionOne';
import FooterList from "../../components/footerList/FooterList";
import { useEffect } from 'react';

function LearnMorePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0, 
    });
}, [])

  return (
    <div>
      <div className='nav-section1-container'>
        <LearnNavBar />
        <div className='s1-component'>
        <SectionOne className="s1-component"/>
        </div>
        </div>
        <FooterList/>
    </div>
  )
}

export default LearnMorePage