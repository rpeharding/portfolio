import React, { Component } from "react";
import InfoSection from "./InfoSection";

class MainInfo extends Component {
  render() {
    const list1 = [
      "Used Agile methodologies and working in multidisciplinary teams to conduct user resarch and user-centred design on the following projects:",
      "Place2Be: designed a parenting advice app for supporting tens of thousands of parents navigate the switch to online support during the pandemic.",
      "Extended the NCVO brand to provide a new campaign platform for the organisation that advocates for the third sector.",
      "Led the mobile re-design of the Toilet Map, which uses open data to help folk find an accessible toilet.",
      "Led the re-design of Shelters blog focusing on user accessbility and prioritising component re-use. Implemented css in contenful CMS",
    ];
    const list2 = [
      "Designed and built Sopify store for the company, which returned 85% of their revenue during the pandemic",
      "Brand design and visual identity including optimised images and visual assets for digital",
      "User research, testing, journay mapping ",
    ];
    const list3 = [
      "Prototyping and user testing the beta phase of the eccomerce launch",
      "working to tight deadlines to provide prototypes for investment meetings",
      "conducting user research including journey mapping,persona generation, and design, wireframing, prototyping",
      "working in multidisciplinary teams",
    ];

    return (
      <>
        <h2>Professional Experience</h2>
        <InfoSection
          infoSectionClass="info-section"
          title="UX Designer | Neontribe | Feb 2020 - Present"
          list={list1}
        />

        <InfoSection
          infoSectionClass="info-section"
          title="Digital Designer | The Pod Chocolates | Sept 2019 - Feb 2020"
          list={list2}
        />
        <InfoSection
          infoSectionClass="info-section"
          title="Junior UX Designer | Duco | Mar 2019 - Aug 2019"
          list={list3}
        />

        <h2>Education and Qualifications</h2>
        <InfoSection
          infoSectionClass="info-section"
          title="Bsc Psychology & Cognitive Neuroscience"
          text="Royal Holloway University | 1st Class Hons"
        />

        <InfoSection
          infoSectionClass="info-section"
          title="Software Engineering Bootcamp"
          text="The Jump Digital School"
        />

        <h2>Technical Skills</h2>
        <InfoSection
          infoSectionClass="info-section"
          title="Programming languages"
          text="HTML | CSS | Javascript"
        />

        <InfoSection
          infoSectionClass="info-section"
          title="Front-end Frameworks"
          text="React.js | Bootstrap"
        />

        <InfoSection
          infoSectionClass="info-section"
          title="Version control"
          text="Git"
        />

        <InfoSection
          infoSectionClass="info-section"
          title="Supporting skills"
          text="UX and UI Design | Accessibiity in Design | Prototyping | Figma | User-Centred Design | User Research"
        />
      </>
    );
  }
}

export default MainInfo;
