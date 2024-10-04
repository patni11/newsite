const userData = {
  githubUsername: "patni11",
  name: "Shubh Patni",
  designation: "Full Stack Developer and Technical Writer",
  avatarUrl: "/shubh.jpg",
  // avatarUrl: "https://pbs.twimg.com/profile_images/1494703351149301760/GeuTvrEd_400x400.jpg",
  email: "shubhpatni2002@gmail.com",
  address: "Boston, MA, USA",
  projects: [
    {
      title: "ResMe",
      link: "https://www.resme.xyz/",
      imgUrl: "projects/resme.png",
      videoLink: "",
      description: `ResMe is designed to streamline and elevate your professional journey. It organizes your experiences, skills, and projects, while its intuitive Resume Builder takes care of optimal formatting, keywords, and more.
      
      Engineered a sophisticated resume builder platform leveraging Next.js and TypeScript, integrating Zod for validation, MongoDB for data storage, Next Auth for secure authentication, coupled with Server Actions and REST APIs for backend operations, and Zustand for state management.
      
      Implemented a dynamic, real-time custom preview feature, enabling users to review updates instantaneously and download their resumes in PDF format, enhancing the user experience and utility of the service.`,
    },
    {
      title: "Pendulum",
      link: "https://github.com/alexanderles/pendulum-superhack",
      imgUrl: "projects/pendulum.png",
      videoLink: "",
      description: `Introducing Pendulum, a revolutionary platform redefining the way we access expert knowledge. Ever wished to directly ask industry leaders your pressing questions? Pendulum makes this a reality.

      Using a unique system, experts issue "Pendulums" – exclusive NFTs granting the holder the privilege of direct Q&A. With only one Pendulum per expert, per topic, it assures exclusivity. Your query remains answered until another acquires the Pendulum.
      
      Our innovative Harberger Tax system ensures dynamic market pricing. It encourages the trading of Pendulums, taxing owners based on their set price. The goal? Offering direct, affordable access to experts, while ensuring they are fairly compensated for their invaluable insights.
      
      Built on a robust tech-stack including Solidity, the UUPS upgradeable pattern, and the novel ERC-721P standard, and paired with the agility of TypeScript, wagmi, and viem, Pendulum promises both security and user-friendliness.`,
    },
    {
      title: "Norswap",
      link: "https://norswap.io/",
      imgUrl: "projects/norswap.png",
      videoLink: "https://www.youtube.com/embed/7WaZrgDp6rg",
      description: `Discover Norswap, the personal crypto staking platform designed for the modern investor. Developed using state-of-the-art technologies such as Next.js, TypeScript, and Solidity, this platform guarantees both efficiency and security.

      Hosted on AWS with Nginx, Norswap promises a smooth user experience. With the integration of wagmi and viem, it becomes easier than ever to navigate through the platform.
      
      From slot staking to unstaking, Norswap covers it all. Users can effortlessly claim rewards, restake, and keep track of their financial journey with a detailed history of past transactions. Dive into the future of staking with Norswap!`,
    },
    {
      title: "NEU Gym Trends",
      link: "https://neugym.com",
      imgUrl: "projects/neugym.png",
      videoLink: "https://www.youtube.com/embed/wjdjixrj2pc",
      description: `NEU Gym Trends - an innovative platform designed to revolutionize your gym routine! Our website provides a dynamic and user-friendly interface, leveraging cutting-edge technologies to enhance your fitness journey.
      
      With cron jobs by Inngest and PostgreSQL, we provide real-time insights into the best gym times. Our D3.js-driven colorful calendar makes scheduling a breeze, and OCR simplifies data entry. Say hello to a smarter fitness journey—start using NEU Gym Trends today!
      `,
    },
    {
      title: "Face ID For Mac",
      link: "https://github.com/patni11/face-id-for-mac",
      imgUrl: "projects/faceID.png",
      videoLink: "https://www.youtube.com/embed/zMbGYoQXbMU",
      description: `
      Unlock your device effortlessly using facial recognition, adding an extra layer of security to your Mac experience. With a powerful combination of Python and Selenium, FaceUnlock ensures a reliable and efficient face recognition process.
      
Behind the scenes, Bash scripts and Linux daemons work harmoniously to optimize performance and run python script when Mac lid is opened. The result is a secure and user-friendly app that simplifies your login process—just a glance, and you're in.

Experience the future of Mac with Face ID. try the app today and unlock your Mac with a smile.`,
    },

    {
      title: "Photoshop Lite",
      link: "https://github.com/patni11/ImgProcessing",
      imgUrl: "projects/imageProcessing.png",
      videoLink: "https://www.youtube.com/embed/gx6QzarcQrA",
      description: ` lightweight photo editing app that packs the punch of Photoshop essentials in a streamlined package. Built with Java Swing, Photoshop lite combines performance and efficiency to bring you a seamless photo editing experience.

      Harnessing the power of the command design pattern, Photoshop lite offers a dynamic and extensible toolset. Every action is a command, enabling a flexible and modular approach to editing. Object-oriented design principles ensure a robust and maintainable codebase, making it easy to add new features and enhancements.
      
      Photoshop lite follows the Model-View-Controller (MVC) architecture, providing a clear separation of concerns. This not only enhances code organization but also promotes code reuse and scalability. The result is an app that's not only feature-rich but also optimized for performance.
      
      Whether you're a casual photo editor or a seasoned pro, Photoshop lite simplifies your editing workflow. Explore a range of essential features, from basic adjustments to advanced filters, all while enjoying a snappy and responsive interface.`,
    },

    {
      title: "Marble Solitaire CLI",
      link: "https://github.com/patni11/ood",
      imgUrl: "projects/MarbleSolitaire.png",
      videoLink: "https://www.youtube.com/embed/GY0aWJIhSkc",
      description: `a Java-based Marble Solitaire game that elevates your gaming experience with precision and optimization. Crafted with a focus on efficiency, Marble Solitaire utilizes the CLI for a straightforward yet immersive user interface.

      Built with the builder pattern, Marble Solitaire offers a customizable gaming experience. Choose from various board types, ranging from the classic octagon to the intriguing pyramid. With support for resizing, create boards of any size, tailoring the challenge to your preference.
      
      MarbOptics embodies object-oriented design principles, ensuring a clean and extensible codebase. The model-view controller architecture enhances code organization, fostering reusability and scalability.`,
    },
    {
      title: "Nand 2 Tetris",
      link: "https://github.com/patni11/Nand2Tetris",
      imgUrl: "projects/nand2tetris.jpg",
      videoLink: "https://www.youtube.com/embed/Ru48M92xSLM",
      description: `Nand2Tetris is an iconic course that takes learners on a journey from the foundational NAND gate to building an entire computer system. Part 1, which is the focus of these notes, delves into the construction of elementary logic gates, eventually leading up to creating an assembler and laying the groundwork for system software.
      
      In this compilation, I've meticulously documented notes capturing the course's essential principles and intricacies. Recognizing the challenges faced by many, I've also provided comprehensive solutions for every question from Part 1. 
      
      These aren't mere answers; they are the products of deep thought and reflection, aimed at offering clarity and a unique perspective on problem-solving. 
      
      My aim is to not just provide a solution but to share the thought process behind each, enabling fellow learners to grasp underlying concepts and develop a structured approach to tackling complex problems in computer systems building.`,
    },
    {
      title: "Actions",
      link: "https://github.com/patni11/LionHack",
      imgUrl: "projects/actions.png",
      videoLink: "",
      description: `Introducing Actions—a game-changing app crafted in just 24 hours using TypeScript, React, Cyberconnect SDK, and Etherscan API. Dive into the world of on-chain data with this innovative platform that connects you directly to real-time crypto insights.

      Built on TypeScript and React, Actions provides a seamless and intuitive user experience. Harnessing the power of the Cyberconnect SDK and Etherscan API, the app taps into on-chain data, offering a dynamic perspective on crypto trades and purchases.
      
      Actions goes beyond traditional tracking—it enables you to follow other on-chain addresses, giving you a front-row seat to their purchase activities. Gain valuable insights and make informed decisions by replicating the actions of those you follow. It's a unique opportunity to align your strategy with successful players in the crypto space.`,
    },
    {
      title: "NEU Blockchain",
      link: "https://github.com/patni11/NortheaternGym",
      imgUrl: "projects/neuBlockchain.png",
      videoLink: "",
      description: `a dynamic website that opens the gateway to a wealth of knowledge, built using JavaScript, React, and Gatsby. Dive into the world of blockchain with a platform designed for enthusiasts, researchers, and those eager to stay at the forefront of the latest developments.

      NEU Blockchain is your go-to hub for comprehensive research papers and articles, providing a deep dive into the latest advancements in the blockchain space. Immerse yourself in thought-provoking content that spans various facets of this revolutionary technology.
      
      Built with JavaScript, React, and Gatsby, NEU Blockchain ensures a seamless and responsive user experience. Navigate through the site effortlessly, discover new content, and engage with a community passionate about blockchain technology.
      
      PS: The current live website is not made my me. I made the previous version :) `,
    },
    {
      title: "Verifund",
      link: "/",
      imgUrl: "projects/verifund.png",
      videoLink: "https://www.youtube.com/embed/ByLqbztWMFY",
      description: `a groundbreaking smart contract program revolutionizing crowdfunding for social causes. Built on Solidity and deployed to the Ethereum Layer 2 testnet, Verifund brings transparency and trust to philanthropy like never before.

      Verifund, the proud winner of Hack Boston at Harvard for the Best Blockchain Solution on Telos, stands at the forefront of blockchain innovation. This accolade reflects our commitment to pushing the boundaries of technology and providing users with a cutting-edge crowdfunding experience.
      
      Verifund's unique feature sets it apart: before contributing to a cause, users can scrutinize the destination addresses where the funds will be allocated. This level of transparency empowers contributors to make informed decisions by assessing the credibility of the recipient addresses.
      `,
    },
    {
      title: "Ambulance",
      link: "https://github.com/patni11/Ambulance_Proj",
      imgUrl: "projects/ambulance.png",
      videoLink: "",
      description: `Introducing Ambulance—a lifeline created during the heart of the Covid crisis. Built with Python, HTML, CSS, and Django, this user-friendly website provides a crucial service: booking a free ambulance effortlessly.

      Amidst the challenges of the pandemic, Ambulance streamlines the process by allowing users to book an ambulance through a simple form. Once submitted, the request undergoes quick driver confirmation, ensuring a rapid response.
      
      The seamless integration of the Twilio API enhances the experience further. Upon driver confirmation, users receive instant text notifications, keeping them informed and providing peace of mind during critical moments.`,
    },
    {
      title: "Sentiment Thumbnai",
      link: "https://github.com/patni11/UTOC",
      imgUrl: "projects/yt.png",
      videoLink: "https://www.youtube.com/embed/bpXsvtw20e4",
      description: `an ingenious creation harnessing the power of Python, the YouTube API, sentiment analysis, and image generation. In an era where engagement is everything, ThumbnailBot transforms your YouTube experience by dynamically designing thumbnails based on the sentiment of viewer comments.

      Utilizing cutting-edge sentiment analysis technology, ThumbnailBot deciphers the mood of your YouTube comments, ensuring your video thumbnails align with the collective sentiment. From uplifting positivity to intense excitement, let ThumbnailBot curate thumbnails that resonate with your audience.
      
      Crafted with a seamless integration of the YouTube API, ThumbnailBot dynamically updates your video thumbnails every 10 minutes. Embrace variety and relevance as your video's visual representation evolves in real-time, catering to the ever-changing sentiments of your engaged community.`,
    },
    {
      title: "AI Education",
      link: "https://github.com/patni11/AI_website",
      imgUrl: "projects/AIEdu.png",
      videoLink: "",
      description: `an educational oasis created in 2018, at a time when AI was still finding its foothold. Built with Python and Django, AITutor pioneers a journey into the realm of artificial intelligence, offering insights into four key concepts: Face Recognition, Object Detection, Image Generation, and Music Generation.

      In a nod to simplicity, AITutor utilizes foundational models like Haar Cascade by OpenCV, SSD model for Object Detection, and basic image generation tools. These concepts are demystified, empowering learners to comprehend AI through hands-on experiences with fundamental technologies.
      
      A passion project turned educational haven, AITutor caters to those curious minds eager to explore AI's potential. Each module serves as a stepping stone, making complex AI concepts accessible to all. As a testament to its roots, AITutor began as a school project, foreseeing the rise of AI's prominence in the educational landscape.
      
      Embark on your AI journey with AITutor—where curiosity meets knowledge, and where the foundations of AI are laid bare for all to grasp. Learn, explore, and witness the evolution of AI in a platform built with foresight and dedication.`,
    },
    {
      title: "Drop Your ENS",
      link: "https://github.com/patni11/dropmyENS",
      imgUrl: "projects/ens.png",
      videoLink: "",
      description: `Introducing Drop Your ENS, your gateway to potential airdrops on Twitter! Crafted with Python and powered by the Twitter API, this innovative bot automates the process of participating in airdrops effortlessly.

      Here's how it works: whenever you tag Drop Your ENS, it diligently scans Twitter for tweets asking users to "drop your ens." Seamlessly hosted on PythonAnywhere, the bot swiftly responds to these tweets, enhancing your chances of receiving an airdrop. It's a smart, time-saving solution for crypto enthusiasts looking to engage with the vibrant Twitter crypto community.
      
      Built with precision and ease of use in mind, Drop Your ENS is your personal ally in the world of decentralized finance. Elevate your chances of discovering exciting airdrop opportunities—all with a simple tag. Join the airdrop conversation with Drop Your ENS, where automation meets opportunity in the ever-evolving landscape of crypto on Twitter.`,
    },
    {
      title: "Custom LED Lights",
      link: "https://github.com/patni11/Arduino_LED",
      imgUrl: "projects/arduino.png",
      videoLink: "",
      description: `Explore the simplicity of our DIY LED Control App and Arduino project, a thoughtful creation built from scratch. Utilizing Arduino and MIT App Inventor, this project enables you to manage individually addressable LEDs through your smartphone.

      Connecting wirelessly via WiFi and web sockets, the Android app provides straightforward control over the RGB colors of your LEDs. Whether you prefer subtle lighting or vibrant displays, the functionality is designed for ease of use.
      
      This grassroots project emphasizes functionality and accessibility, offering a practical approach to smart lighting for DIY enthusiasts. The collaboration between Arduino and MIT App Inventor ensures a seamless integration of hardware and software, providing a user-friendly experience for tech enthusiasts and casual users alike.
      
      Simplify your lighting control with our LED Control App and Arduino project—a testament to the harmonious intersection of hardware and software. Enhance your surroundings effortlessly, one LED at a time.`,
    },
    {
      title: "Star Crash",
      link: "https://github.com/patni11/StarCrash",
      imgUrl: "projects/starcrash.png",
      videoLink: "",
      description: `Embark on an interstellar adventure with our captivating 2D space game, skillfully crafted using Swift 3. In this cosmic odyssey, you take the helm of a spaceship navigating through the vastness of space. While reminiscent of Flappy Bird, our game introduces thrilling new features.

      As the pilot of your spacecraft, your mission is multi-faceted: collect coins, navigate challenging obstacles, and strategically acquire power-ups. What sets this game apart is the unique anti-gravity feature. Bucking the traditional downward pull, your spaceship automatically ascends, adding a challenging twist to the gameplay.
      
      Immerse yourself in a visually stunning space-themed environment, where every maneuver counts. Swift 3 collaborate seamlessly to deliver a gaming experience that's both engaging and rewarding. Will you navigate the cosmos and conquer the challenges that lie ahead? Brace yourself for an out-of-this-world adventure!
      
      This was my first game that I launched on IOS :)`,
    },
    {
      title: "Old Website",
      link: "https://github.com/patni11/mysite",
      imgUrl: "projects/personalWebsite-old.png",
      videoLink: "",
      description: `Welcome to my personal corner of the web, meticulously crafted using Python and Django, and seamlessly hosted on AWS with Apache. This mobile-friendly website serves as a digital haven where you can explore my latest thoughts and works effortlessly.

      Powered by Python and Django, the website combines functionality with a sleek design, ensuring a seamless user experience across devices. The integration of AWS and Apache guarantees reliable hosting, providing a stable platform for you to engage with my content.
      
      A unique feature awaits—a bot designed to scrape and display my most recent articles automatically. Stay up-to-date with my latest publications without the need to navigate elsewhere. It's a dynamic touch that enhances the user experience, making the website a hub of real-time content.`,
    },
  ],
  about: {
    title: "Full Stack Developer and Technical Writer",
    description: [
      `I am a student at Northeastern University majoring in Computer Science and Economics.`,
      `My goal is to create positive incentive based systems, products that have a positive imapct overall. Ex nobody buys tesla coz it's green but because it's a cool car. Here incentive drives a positive action.`,
      `I decided to focus more on crypto because it allowed me to monetize my skills easily. I want to make it available to everyone.`,
    ],
    currentProject: "NEUGYM",
    currentProjectUrl: "https://www.neugym.com/",
  },
  experience: [
    {
      title: "Full Stack Software Engineer (Co-Op)",
      company: "Hometap",
      year: "2024",
      companyLink: "https://www.hometap.com/",
      desc: `
      Working as a full stack developer in the team that developer internal tools for investment managers.

      The tech stack includes React and Django
      `,
    },
    {
      title: "Incubator",
      company: "Lightspeed/Polychain Capital",
      year: "2023",
      companyLink: "https://csl.chainhub.foundation/",
      desc: `
      Handpicked among just 16 teams by Lightspeed and Polychain Capital to pitch to a discerning audience of 50 VCs

      Orchestrated end-to-end development for Pendulum, encompassing smart contracts, frontend design, and contract integration.`,
    },
    {
      title: "Product Manager Researcher",
      company: "Giaaka",
      year: "2023",
      companyLink: "https://norswap.io/",
      desc: `
      Spearheaded the development of Norswap, the proprietary exchange platform for Nordek Chain
      
      Proficiently designed and implemented the Frontend, Backend, API endpoints, and seamlessly integrated Smart Contracts within
      Norswap. Used Vercel, MongoDB, Typescript, Next Js and Solidity`,
    },
    {
      title: "Teaching Assistant",
      company: "Northeastern University, Discrete Structures",
      year: "2022",
      companyLink:
        "https://cssh.northeastern.edu/academics/undergraduate-teaching-assistantships/",
      desc: `Assisted students with their assignments and projects. 
      
      Helped them understand the concepts of Discrete Structures and graded homeworks.`,
    },
    {
      title: "Researcher",
      company: "DAO Maker",
      year: "2022",
      companyLink:
        "https://drive.google.com/drive/folders/1YipcO2xNNsGSCTlU4LLC7yr4RIYe041T",
      desc: ` Thoroughly examined tokenomics and formulated investment strategies for prominent DeFi products, including GMX, GHO, and DAO.
      
      Conducted a comprehensive market analysis of pivotal events within the web3 space, such as the Ethereum merge, 3AC collapse, Taro developments, and the Lightning Network, assessing their direct impact on associated assets.`,
    },
    {
      title: "Researcher",
      company: "Phemex Student Foundation Program",
      year: "2022",
      companyLink:
        "https://static.phemex.com/s/home/student-foundation/Shubh.pdf",
      desc: `Crafted a comprehensive research paper delving into the intricacies of Avalanche network's tokenomics, fundamental aspects, and ecosystem, providing invaluable insights for informed investment decisions by Phemex exchange stakeholders.
      
      Conducted an in-depth assessment of the Song a Day DAO, evaluating the worth of its music NFT collection.`,
    },
    {
      title: "Freelance Technical Writer",
      company: "Freelance",
      year: "2020-present",
      companyLink: "https://medium.com/@shubhpatni",
      desc: `Authored over 100 articles with a combined total of over 200k views and 5x Top writer on Medium in Programming, Business, Innovation, Crypto, and Technology. 
      
      Published over 60 youtube videos and 200 educational posts on Instagram.`,
    },
    {
      title: "Head of Technology",
      company: "Help Uddaan Foundation",
      year: "2018-2020",
      companyLink: "",
      desc: `
      Orchestrated multiple fundraising events, booths, and volunteer initiatives dedicated to providing sustenance and support to visually impaired individuals residing in an orphanage.
      
      Launched a song to disseminate awareness about COVID-19, resulting in the mobilization of resources to provide nourishment for more than 1,000 impoverished families in India.`,
    },
    {
      title: "High School",
      company: "Jain International",
      year: "2020",
      companyLink: "https://www.jirs.ac.in/",
      desc: "39 points in International Baccalaureate",
    },
  ],
  timeline:[
    {
      date:"Sep 11, 2002",
      description:"Spawned in existence",
      link:"",
    },
    {
      date:"2005",
      description:"Drawing everywhere, the goal is to be an artist",
      link:"",
    },
    {
      date:"2012",
      description:"Blurry Memories idk what happened 2005-2012",
      link:"",
    },
    {
      date:"2013",
      description:"Decent at school, mediocre",
      link:"",
    },
    {
      date:"2014",
      description:"Joined Boarding School",
      link:"",
    },
    {
      date:"March, 2015",
      description:"Got interested in IoS App Dev",
      link:"",
    },
    {
      date:"October 2015",
      description:"Bought Mac, after trying every possible way to run xcode on windows",
      link:"",
    },
  ],
  softwareDevResume: "/resumes/SoftwareEngineer/Shubh_Patni_resume.pdf",
  fullstackDevResume: "/resumes/FullStack/Shubh_Patni_resume.pdf",
  web3DevResume: "/resumes/Web3/Shubh_Patni_resume.pdf",
  socialLinks: {
    instagram: "https://www.instagram.com/patnishubh/",
    twitter: "https://twitter.com/PatniShubh",
    linkedin: "https://www.linkedin.com/in/patnishubh/",
    github: "http://github.com/patni11",
  },
};

export default userData;
