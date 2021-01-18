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
                    value: 125,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: "#1b0b4d"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
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
                    value: 4,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 2,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable_auto: true,
                    distance: 100,
                    color: "#150740",
                    opacity: 0.75,
                    width: 1,
                    condensed_mode: {
                      enable: false,
                      rotateX: 800,
                      rotateY: 600
                    }
                  },
                  move: {
                    enable: true,
                    speed: 1,
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
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true
                    },
                    onclick: {
                      enable: true
                    },
                    resize: true
                  }
                },
                retina_detect: true
              }}
            />
        );
    }
}

export default ParticlesBackground;