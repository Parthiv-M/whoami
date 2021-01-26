import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesBackground extends Component {
    render() {
        return (
            <Particles
                className="particle-wrapper"
              params={{
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  color: {
                    value: "#F2F0F9"
                  },
                  shape: {
                    type: "square",
                    stroke: {
                      width: 2,
                      color: "#8072a8"
                    },
                  },
                  opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 10,
                      out_mode: "out",
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable_auto: true,
                    distance: 150,
                    color: "#150740",
                    opacity: 0.1,
                    width: 1,
                    condensed_mode: {
                      enable: false,
                      rotateX: 800,
                      rotateY: 600
                    }
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: true,
                    straight: true,
                    out_mode: "out",
                    bounce: true,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "window",
                  events: {
                     onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                },
                retina_detect: true
              }}
            />
        );
    }
}

export default ParticlesBackground;