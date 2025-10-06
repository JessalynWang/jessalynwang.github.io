import './experience.css';

function Experience() {
    return (
      <div className="experience" id="experience">
        <div className="experience-cluster">
            <div className="experience-title">Work</div>
            <br/>
            <div className="work-company">
              Amazon
            </div>
            <div className="work-title">
              Software Development Engineer II
            </div>
            <div className="work-tenure">
              Oct. 2025 - present
            </div>
            <div  className="work-desc">
              Last Mile. Still working on cool tech with the Safety & Driver Assistance Technology organization (DIS & DAT).
            </div>
            <br/>

            <div className="work-title">
              Software Development Engineer I
            </div>
            <div className="work-tenure">
              Oct. 2023 - Sept. 2025
            </div>
            <div className="work-desc">
              Last Mile. Spent 1.5 years based in Seattle with the Central Operations & Managed By Exception team.
              There I owned <a href="https://www.youtube.com/watch?v=46Vhlra70Gk" target="_blank">a suite of tools for large-scale anomaly detection and resolution</a> as well as
              technology for <a href="https://www.aboutamazon.com/news/operations/how-amazon-keeps-employees-and-drivers-safe" target="_blank">Amazon's Contingency Response Center</a>.
              Moved to the bay area to join DIS & DAT where I have continued to focus on safety and expanded into <a href="https://www.aboutamazon.com/news/transportation/everything-you-need-to-know-about-amazons-electric-delivery-vans-from-rivian" target="_blank">in-vehicle technology</a>.
            </div>
            <br/>

            <div className="work-title">
              Software Development Engineer Intern
            </div>
            <div className="work-tenure">
              Jun. 2022 - Sept. 2022
            </div>
            <div className="work-desc">
              Last Mile. Created a POC smartwatch application from scratch that reduces the cost, weight, and form factor of the phone-like device associates need to carry in delivery stations while
              enabling the same functionality. Demoed live in production with associates at a real delivery station, with the app scanning and sorting packages successfully.
            </div>
            <br/>

            <div className="work-company">
              Tech4Good Lab
            </div>
            <div className="work-title">
              Product + Developer Lead
            </div>
            <div className="work-tenure">
              Sept. 2020 - Dec. 2022
            </div>
            <div className="work-desc">
              Multiple hats for projects Timely, Relate, Annota, and Gratitude in the <a href="https://tech4good.soe.ucsc.edu/" target="_blank">Tech4Good Lab</a>.
              Lead quarterly teams of 10+ undergrad developers creating tools for research on interfaces for scheduling, community engagement, and learning qualitative analysis.
              Additionally wrote a bunch of code, thought a lot about user experience, and spent many hours supporting research studies.
            </div>
            <br/>

            <div className="work-company">
              Maxar Technologies
            </div>
            <div className="work-title">
              Software Engineer Intern
            </div>
            <div className="work-tenure">
              Jun. 2021 - Sept. 2021
            </div>
            <div className="work-desc">
              Worked on the DeepCore suite, a tool that enables ML model training and inference for object detection on large satellite imagery data. Ideated, designed, and built
              a feature for rendering custom geospatial data on a world map. Also spent a lot of time improving test coverage and bootstrapping a fake local backend when services
              were down due to government contract negotiations.
            </div>
            <br/>

            <div className="work-company">
              University of California, Santa Cruz
            </div>
            <div className="work-title">
              Teaching assistant
            </div>
            <div className="work-tenure">
              Jan. 2020 - Jun. 2021
            </div>
            <div className="work-desc">
              Tutored and graded various iterations of CSE 12 (Computer Systems and Assembly Language), CSE 30 (Programming Abstractions in Python), and CSE 101 (Introduction to Data
              Structures and Algorithms). Learned a lot about learning.
            </div>
            <br/>
            <hr className="line-break"/>

        </div>

        <div className="experience-cluster">
            <div className="experience-title">Education</div>
            <br/>
            <div className="work-company">
              University of California, San Diego
            </div>
            <div className="work-title">
              Bachelor of Science in Computer Science
            </div>
            <div className="work-desc">
              GPA: 3.97/4.00
              <br/>
              Honors: Magna Cum Laude, Phi Beta Kappa, Revelle College Provost Honors
              <br/>
              <br/>
              Class of 2023. Was a member of <a href="https://sites.google.com/ucsd.edu/triton-neurotech" target="_blank">Triton NeuroTech</a> and participated in the <a href="https://ersp.ucsd.edu/" target="_blank">Early Research Scholars Program</a>.
            </div>
            <br/>
            <hr className="line-break"/>
        </div>

        <div className="experience-cluster">
            <div className="experience-title">Publications</div>
            <br/>
            <div className="experience-desc">
              <div className="work-desc">
                ICER 2025
                <br />
                <b>Lessons from Designing a Course and Platform for Teaching Qualitative Analysis Experientially in a Large Course-Based Community Consultancy</b>

                <br />
                Dustin Palea, Elijah Kirby, Madison Gruender, Bryan Min, Jessalyn Wang, David Lee

                <br />
                <a href="https://dl.acm.org/doi/10.1145/3702652.3744206" target="_blank">Link</a>
              </div>
              <br />

              <div className="work-desc">
                CHI 2022
                <br />
                <b>Co-Imagining the Future of Playable Cities: A Bottom-Up, Multi-Stakeholder Speculative Inquiry into the Playful Potential of Urban Technology</b>

                <br />
                Ferran Altarriba Bertran, Laura Bisbe Armengol, Cameron Cooke, Ivy Chen, Victor Dong, Binaisha Dastoor, Kelsea Tadano, Fyez Dean, Jessalyn Wang, Adrià Altarriba Bertran, Jared Duval, and Katherine Isbister

                <br />
                <a href="https://dl.acm.org/doi/10.1145/3491102.3501860" target="_blank">Link</a>
              </div>
            </div>
            <br/>
            <hr className="line-break"/>
        </div>

        <div className="experience-cluster">
            <div className="experience-title">Fun Projects</div>
            <br/>
            <div className="experience-desc">

              <div>
                <div className="work-title">
                  <a href="https://sd-hacks-2022.devpost.com/" target="_blank">Marathon</a>
                </div>
                <div className="work-desc">
                  <b>SDHacks 2022 - Best Community Hack</b>

                  <br />
                  Designed and implemented an application for creating, sharing, and following goals as a community.
                </div>
              </div>
              <br />

              <div>
                <div className="work-title">
                  <a href="https://www.youtube.com/watch?v=lCYkRotGZEc" target="_blank">Oz Speller</a>
                </div>
                <div className="work-desc">
                  <b>NeuroTechX Student Clubs Competition 2022 - 2nd overall and 1st out of U.S. schools</b>

                  <br />
                  Used a headset sponsored by Wearable Sensing and created an ML model, GUI, and chat bot companion app for patients with locked-in-syndrome that are unable to use eye
                  tracking devices.
                </div>
              </div>
              <br />

              <div>
                <div className="work-title">
                  <a href="https://www.youtube.com/watch?v=bh11Pg4uLxQ" target="_blank">Boolepathy</a>
                </div>
                <div className="work-desc">
                  <b>NeuroTechX Student Clubs Competition 2020 - 5th overall and 1st out of U.S. schools</b>

                  <br />
                  Built a headset, ML model, and GUI to record and classify EMG signals for communication via subvocalized speech.
                </div>
              </div>
              <br />
              
            </div>
        </div>
      </div>
    );
  }
  
  export default Experience;