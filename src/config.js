module.exports = {
  email: 'min.yi.christopher.lau@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/chrislmy',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chriss_my',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/min-yi-christopher-lau-bbba49123',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    svgOutline: '#64ffda',
    theme: '#0a192f',
    background: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
