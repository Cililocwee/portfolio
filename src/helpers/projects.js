import Blog from "../assets/blog.jpg";
import Cafe from "../assets/cafe.jpg";
import Movie from "../assets/movie.jpg";
import Notstagram from "../assets/notstagram.jpg";
import Gamecows from "../assets/gamecows.png";
import Seek from "../assets/seekandfind.png";
import Rade from "../assets/rade_icon.png";

const projectList = [
  {
    projectTitle: "Game Cows",
    projectImg: Gamecows,
    projectType: "Website",
    projectLive: "https://www.gamecows.com",
    projectRepo: "#",
    projectDescription:
      "Game Cows is a content-based WordPress site that publishes new D&D articles daily. I created the theme for this website based on Mediavine's Trellis to integrate the client's Mediavine account.",
  },
  {
    projectTitle: "Seek and Find",
    projectImg: Seek,
    projectType: "Web Application",
    projectLive: "https://seek-and-find.web.app/",
    projectRepo: "https://github.com/Cililocwee/hidden-objects",
    projectDescription:
      "Seek and Find is a simple proof-of-concept language learning tool I developed to help young ELLs to have a fun way to practice vocabulary.",
  },

  {
    projectTitle: "Rade Keyboard",
    projectImg: Rade,
    projectType: "Android App",
    projectLive: "#",
    projectRepo: "https://github.com/Cililocwee/ethnickeyboard",
    projectDescription:
      "This Rade Keyboard was made to be used by the local Rade/Ede community because many of the keyboards on Google Play don't support their unique alphabet features.",
  },
  {
    projectTitle: "Devblog",
    projectType: "Blog",
    projectImg: Blog,
    projectLive: "https://corries-devblog.web.app",
    projectRepo: "https://github.com/Cililocwee/firebase-blog",
    projectDescription:
      "I developed a robust and feature-rich blog application, powered by Firebase as the backend solution for enhanced efficiency and streamlined deployment. This project served as a testament to my ability to design, build, and implement projects with CRUD functions, enabling users to create, read, update, and delete blog posts. Additionally, the application includes a Google Authentication feature, allowing users to post comments on blog posts that are visible to all users. Furthermore, an exclusive admin section provides me with the ability to manage the blog by deleting, updating, and creating new and existing posts. Throughout this project, I documented my growth as a developer through insightful blog posts, showcasing my dedication to continuous learning and improvement",
  },
  {
    projectTitle: "Notstagram",
    projectImg: Notstagram,
    projectType: "Portfolio",
    projectLive: "https://notstagram-fcf48.web.app/#/",
    projectRepo: "https://github.com/Cililocwee/notstagram",
    projectDescription:
      "I developed Notstagram, a feature-rich Instagram clone that enables users to browse and discover new photo content. The application features a main feed and an explore tool, mirroring the functionality of the Discover feature on Instagram's robust social media platform. The stack I utilized consists of Firebase on the backend, and ReactJS/Typescript on the frontend, enabling the development of performant and interactive user interfaces. This project showcases my technical expertise in building web applications and my ability to implement complex features on a modern technology stack.",
  },
  {
    projectTitle: "Star Hill Place",
    projectImg: Cafe,
    projectType: "Portfolio",
    projectLive: "https://cililocwee.github.io/store-front/",
    projectRepo: "https://github.com/Cililocwee/store-front",
    projectDescription:
      "This frontend application was designed as a lightning-fast Single-page Web App with an intuitive UI that is powered by React to ensure quick and efficient loading times, providing a seamless browsing experience for users. There is a menu filtering feature that allows users to browse menu items by category, allowing users to find their desired items efficiently. UX is improved by utilizing React Context to keep track of cart count and total in global state, enabling users to update their cart from the menu, shopping cart, and check-out. ",
  },
  {
    projectTitle: "MovieHound",
    projectImg: Movie,
    projectType: "Portfolio",
    projectLive: "https://moviehound.web.app",
    projectRepo: "https://github.com/Cililocwee/movie_lookup",
    projectDescription:
      "MovieHound is a user-friendly web application that allows movie enthusiasts to explore and track their favorite films. Powered by the MovieDB API, MovieHound enables users to search for movies, view key details and posters, and create personalized watch lists. With a focus on simplicity and functionality, MovieHound offers a seamless movie discovery experience. Developed using React for the UI and SCSS for styling, this project showcases my expertise in working with web APIs and crafting engaging user interfaces.",
  },
];

export default projectList;
