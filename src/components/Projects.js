import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.PNG";
import projImg2 from "../assets/img/2.PNG";
import projImg3 from "../assets/img/3.PNG";
import projImg4 from "../assets/img/4.PNG";
import projImg5 from "../assets/img/5.PNG";
import projImg6 from "../assets/img/6.PNG";
import projImg7 from "../assets/img/7.jpg";
import projImg8 from "../assets/img/8.jpg";
import python from "../assets/img/python.svg";
import vue from "../assets/img/vue.svg";
import aws from "../assets/img/aws.png";
import gcp from "../assets/img/gcp.png";
import azure from "../assets/img/azure.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import github from "../assets/img/github.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: " view",
      imgUrl: projImg1,
      link: "https://www.kivemaltd.com ",
      
    },
    {
      description: "view",
      imgUrl: projImg2,
      link: "https://acktinos.com/" ,
    },
    {
      description: "view",
      imgUrl: projImg3,
      link : "https://ceek.com.mt/",
    },
    {
      description: "view",
      imgUrl: projImg4,
      link : "https://realcereal.com/",  
    },
    {
      description: "view",
      imgUrl: projImg5,
      link: "https://myjobsearch.netlify.app/",
    },
    {
      description: "view",
      imgUrl: projImg6,
     link: "https://moviepedia.paytonpierce.dev/",
    },
  ];
   const approjects=[
       { description:"open",
       imgUrl:projImg7,
       link:"https://itunes.apple.com/us/app/longwalks-conversation-app/id1412531085?mt=8",
      },
      { description:"open",
      imgUrl:projImg8,
      link:"https://play.google.com/store/apps/details?id=com.phdmobi.timescity&hl=en_IN",
     },

   ];

  const  techstack = [
    {
    imgUrl:aws,
    },
    {
    imgUrl:azure,
    },
    {
      imgUrl:gcp,
    },
    {
      imgUrl: react,
    }, 
    {
      imgUrl: python,
    }, 
    {
      imgUrl: vue,
    }, 
    {
      imgUrl: node,
    }, 
    {
      imgUrl: php,
    }, 
    {
      imgUrl: github,
    }, 
   

  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> sample projects I have done so far more can be shared on request check code here</p>

                <a href="https://github.com/mosesbabu"><h1 style={{textAlign:"center" }}>Github</h1></a>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Technologies</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                       
                              <ProjectCard
                                key={index}
                              

                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          approjects.map((approject, index) => {
                            return (
                       
                              <ProjectCard
                                key={index}
                              

                                {...approject}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          techstack.map((techstack, index) => {
                            return (
                       
                              <ProjectCard
                                key={index}
                              

                                {...techstack}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
