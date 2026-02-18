import { SectionHeader } from "./section-header";
export const About = () => {
  //   let aboutCards = _.map(content.aboutCards, (x,i)=>{
  //     return(
  //         <AboutCard key={i}content={x} />
  //       )
  //   })

  return (
    <div className="About" id="About">
      <SectionHeader title="About" />
      <div className="me">
        <img src="/assets/alan-01.jpg" alt="profile" height="200px" />
        <div className="text">
          <div className="h2 title"> Hello, I am Alan. </div>
          <div className="h5 subtitle">Web Developer | Technical Artist</div>
          <div className="separator"></div>
          <p className="h4 info">
            I love board games, video games, hiking, playing sports, my family
            and life in general. I am an upbeat optimist that enjoys a good
            challenge. With being well organized I feel like a day of planning
            saves a week of coding. I approach all my tasks with clarity and a
            well thought out approach. With a strong ability to foresee issues
            before they arise, I build stable, versatile and tested code.
          </p>
        </div>
      </div>
      <div className="aboutCards-container">{/* {aboutCards} */}</div>
    </div>
  );
};

export default About;
