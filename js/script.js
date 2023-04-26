/// Open close mobile nav \\\
const openMenu = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  header.classList.toggle('nav-open');
});

/// Smooth scrolling on safari\\\
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault;
    const href = link.getAttribute('href');

    // scroll to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    //scroll to other links in safari
    if (href !== '#' && href.startsWith('#')) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
    }
    //close mobile nav when clicked
    if (link.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }
  });
});

//STICKI NAVIGATION \\
const sectionHero = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
    // or do it like this
    // if (ent.isIntersecting === true) {
    //     document.body.classList.remove('sticky');
    //   }
  },
  {
    //in the viewport (inside the whole browser window)
    root: null,
    threshold: 0,
    rootMargin: '-96px',
  }
);
obs.observe(sectionHero);
