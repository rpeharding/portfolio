import React, { Component } from "react";
import InfoSection from "./InfoSection";

class MainInfo extends Component {
  render() {
    return (
      <>
        <h2>Professional Experience</h2>
        <InfoSection
          infoSectionClass="info-section"
          title="UX Designer | Neontribe | 2019 Present"
        />
        <InfoSection
          infoSectionClass="info-section"
          title="UX Designer | Neontribe | Feb 2020 - Present"
        />
        <InfoSection
          infoSectionClass="info-section"
          title="Digital Designer | The Pod Chocolates | Sept 2019 - Feb 2020"
        />
        <InfoSection
          infoSectionClass="info-section"
          title="Junior UX Designer | Duco | Mar 2019 - Aug 2019"
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
          text="UX and UI Design | Accessibiity in Design | Figma"
        />
      </>
    );
  }
}

export default MainInfo;
