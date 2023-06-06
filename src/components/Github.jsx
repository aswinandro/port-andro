import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import spotifyLogo from "../assets/spotify.png";
// import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#2ca317",
};

const motionForce = (x, y) => {
  // Assuming `forces` is imported or defined elsewhere
  return forces.disturbance(x, y, 5);
};

export const Spotify = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Hobbies</p>
        <h3 className={styles.sectionHeadText}>Musican</h3>
        <div className="flex-row content-center">
          <ParticleImage
            className="content-center"
            src={spotifyLogo}
            backgroundColor={"transparent"}
            scale={0.5}
            entropy={10}
            maxParticles={4000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/artist/6mwYSgGq9MibgTfa88NY1p?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; 
        fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        <p className={styles.sectionSubText}>Hobbies</p>
        <h3 className={styles.sectionHeadText}>Spotify Playlist</h3>
        <iframe
          src="https://open.spotify.com/embed/artist/6mwYSgGq9MibgTfa88NY1p?utm_source=generator"
          width={"100%"}
          height={500}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

// export default SectionWrapper(Github, "");

// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { GoStar, GoRepoForked } from "react-icons/go";
// import { numbers, main, innerMain } from "../stylesheets/components/GithubStatistics.module.sass";

// const GithubStatistics = ({ username, repo, className }) => {
//   const [githubStats, setGithubStats] = useState({
//     stargazers_count: "-",
//     forks_count: "-",
//   });

//   useEffect(() => {
//     fetch(`https://api.github.com/repos/${username}/${repo}`)
//       .then((response) => response.json())
//       .then((json) => {
//         setGithubStats({
//           stargazers_count: json.stargazers_count,
//           forks_count: json.forks_count,
//         });
//       })
//       // eslint-disable-next-line no-console
//       .catch((e) => console.log(`Error while calling GitHub API: ${e}`));
//   }, [username, repo]);

//   return (
//     <div className={`${className} ${main}`}>
//       <div className={innerMain}>
//         <GoStar />
//         <p className={numbers}>{githubStats.stargazers_count}</p>
//         <GoRepoForked />
//         <p className={numbers}>{githubStats.forks_count}</p>
//       </div>
//     </div>
//   );
// };

// GithubStatistics.propTypes = {
//   username: PropTypes.string.isRequired,
//   repo: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

// GithubStatistics.defaultProps = {
//   className: null,
// };

// export default GithubStatistics;
