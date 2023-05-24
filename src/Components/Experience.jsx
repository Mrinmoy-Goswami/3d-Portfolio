import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
// import {experience } from '../constants';
// import oppo from "../assets/oppo.ico"
import celebal from "../assets/celebal.jpeg"
import oppo from "../assets/oppo2.png"
import pubg from "../assets/pubg.png"
import Mtc from "../assets/4Mtc.png"





const ExperienceCard =({date,title,company,job,logo})=>{
  return (
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(24,170,135)',  }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={date}
  iconStyle={{ background:"white", color: '#fff' }}
    icon = {
      <img src={logo} className=' rounded-full '/>
    }
  >
    <h3 className="vertical-timeline-element-title sm:text-[20px] text-[20px] font-bold ">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
    <p>
      -
      {job}
    </p>
  </VerticalTimelineElement>
  )
}
  
  export default function Experience() {
  return (

  
  <div className='mt-20 flex flex-col items-center w-full mb-20'>
    <h3 className={`${styles.sectionHeadText} mb-20`}>Work Experience</h3>
  <VerticalTimeline>

    
    <ExperienceCard company={"Oppo "} title={"Curator/Forum Leader"} date={"May 2022-Dec 2022"}
    job={"Creative content writing,forum management, Social posts"}
    logo={oppo}
    />
     <ExperienceCard company={"Celebal Technologies "} title={"Web Developer"} date={"May 2023-Present"}
    job={"React JS , MongoDB, NodeJS"}
    logo={celebal}
    />
   
  </VerticalTimeline>
  <h3 className={`${styles.sectionHeadText} mb-20`}>Others</h3>
  <VerticalTimeline>

    
    <ExperienceCard company={"Team 4Manticores "} title={"Front Fragger"} date={"May 2020 - July 2022"}
     logo={pubg} job={" E-sport player"}
    
    />
     <ExperienceCard company={"4Mtc Esports"} title={"Co-Founder"} date={"September 2020 - February 2021"}
    job={"Roaster Management"}
    logo={Mtc}
    
    />
   
  </VerticalTimeline>
   
  </div>
  
 
  )
}
