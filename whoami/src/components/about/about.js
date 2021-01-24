import React, { Component } from 'react';
import './../App.css';
import './about.css';
import Fade from 'react-reveal/Fade'
class About extends Component {
    render() {
        return (
            <div className="content">
              <Fade cascade top>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      Who am I ?
                    </h2>
                    <p className="text-justify text-muted">
                      Like I said earlier, I am Parthiv, a 19 year old living in Kerala. Yes, God's Own Country. Having had a childhood filled with a
                      generous mix of at least three languages, I can confidently say that I am very much at ease in English, Hindi, Gujarathi, and Malayalam.
                      When I am not quietly musing about the plethora of reasons that make people tick, you can find me trying to spend time with my friends,
                      family, or anyone willing to spend their time with me—especially kids. And I absolutely love traveling—the journey being more important than 
                      the destination. 
                    </p>
                </div>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      Academics
                    </h2>
                    <p className="text-justify text-muted">
                      I spent the best 14 years of my life in <span><a href="http://bloomingbudsbethania.in/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#A197C4"}}>Blooming Buds Bethania English School</a></span>, one of the best schools in our area. I finished 
                      Standard 10 with a GPA of 10, and chose to continue in the Science stream in the same school, taking entrance classes alongside—just 
                      a quintessential Indian kid and his not-so-insignificant life. Scoring 97% in the Board exams in Standard 12 made me one of the school toppers, and the Thrissur district topper for Science stream.
                      Taking into consideration all the entrance examinatoin results, I finally joined <span><a href="https://manipal.edu/mit.html" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#A197C4"}}>Manipal Institute of Technology, Manipal</a></span>, as a CSE student.
                      I obtained a CGPA of 9.45 (9.27 and 9.65 in the first two semesters, respectively) in first year which was disrupted by the now infamous pandemic.
                    </p>
                </div>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      What else?
                    </h2>
                    <p className="text-justify text-muted">
                      I am an avid reader, devouring every book—or anything that can be read for that matter—that I can lay my hands on. Reading spurred me on to
                      write stories, and eventually poems. Apart from being a regular quizzer in school, I also took part in a lot of drawing and painting contests over the years. The only thing that I can possibly love more than 
                      clean design and a well written article with a profuse amount of wordplay is a good game of basketball. Despite following almost all sports 
                      regularly, like any Indian, cricket still remains a personal favourite—ready to be rattled about at any time of the day. So if you have anything to 
                      talk about cricket or the latest Dan Brown book, you know where to find me.
                    </p>
                </div>
                </Fade>
            </div>
        );
    }
}

export default About;