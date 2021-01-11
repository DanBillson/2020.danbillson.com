import React from "react"
import Moola from "../images/moola.svg"
import DoublDown from "../images/doubldown.svg"
import PowerNation from "../images/powernation.svg"
import Porkchop from "../images/porkchop.svg"
import Github from "../images/github.svg"
import Instagram from "../images/instagram.svg"
import Linkedin from "../images/linkedin.svg"
import Medium from "../images/medium.svg"

export const navigation = [
  {
    text: `professional`,
    link: `professional`,
  },
]

export const title = (
  <>
    Hi, I’m Dan.
    <br />
    Front end developer & Cheerleader.
  </>
)

export const timeline = [
  {
    title: `University
`,
    date: `2015 - 2018`,
    body: `I completed my degree in Computer Science at Edge Hill University where I studied a wide range of interesting topics including Machine Learning and Embedded Systems. During this time I had also taken on some work alongside a freelance developer and also found out about cheerleading which I went on the compete at the world championship in Florida three times and take home the gold medal.`,
  },
  {
    title: `The Hut Group`,
    date: `2018`,
    body: `Straight out of university I had landed myself a role as a graduate front end developer at The Hut Group which is a very large online retailer owning companies such as MyProtein. In this role I was introduced to a variety of different tools and practices that really help a large company function.`,
  },
  {
    title: `Marmalade`,
    date: `2019 - 2020`,
    body: `Contrary to The Hut Group, Marmalade has a much smaller dev team meaning that there is much room for advancing technologies, impactful changes and responsibility. As a team we have worked with Gatsby, Lerna monorepos and the latest in React.`,
  },
  {
    title: `Climb`,
    date: `2020 - Present`,
    body: `After moving back up north, I joined another small dev team at Climb Creative who are part of the Precision Proco Group, a huge part of printing across the country. With this new line of business came lots of new challenges and exciting projects to work on all with a very hands on approach.`,
  },
]

export const projects = [
  {
    icon: <Moola />,
    link: `https://moola.netlify.app`,
  },
  {
    icon: <PowerNation />,
    link: `https://powernationcheer.netlify.app/`,
  },
  {
    icon: <DoublDown />,
    link: `https://doubldown.com`,
  },
  {
    icon: <Porkchop />,
    link: `https://porkchop.netlify.app`,
  },
]

export const about = {
  title: `About me`,
  body: `I am a young wannabe full stack developer who started designing and developing websites in 2013. Since then I have grown very fond of React, node and mongodb and have an aspiration to do some work on data visualisation.`,
}

export const social = [
  {
    icon: <Github />,
    link: `https://github.com/danbillson`,
  },
  {
    icon: <Instagram />,
    link: `https://www.instagram.com/danbillson/`,
  },
  {
    icon: <Linkedin />,
    link: `https://www.linkedin.com/in/danielbillson/`,
  },
  {
    icon: <Medium />,
    link: `https://medium.com/@danielbillson`,
  },
]

export const cheerArchive = [
  {
    title: `Ignite 2017`,
    team: `Ignite`,
    comp: `Worlds`,
    year: 2017,
    video: `https://www.youtube.com/watch?v=rcepp1K6MJ4`,
  },
  {
    title: `Team England 2017`,
    team: `Team England`,
    comp: `Worlds`,
    year: 2017,
    video: `https://www.youtube.com/watch?v=4HgAboMhAis`,
  },
  {
    title: `Nitro NCA`,
    team: `Nitro`,
    comp: `NCA`,
    year: 2018,
    video: `https://www.youtube.com/watch?v=hENSlYAKfS8`,
  },
  {
    title: `Ammo 2018`,
    team: `Ammo`,
    comp: `Worlds`,
    year: 2018,
    video: `https://www.youtube.com/watch?v=Ae5maq2KBkA`,
  },
  {
    title: `Team England 2018`,
    team: `Team England`,
    comp: `Worlds`,
    year: 2018,
    video: `https://www.youtube.com/watch?v=PiP1NX38_Lw`,
  },
  {
    title: `Ignite 2019`,
    team: `Ignite`,
    comp: `Worlds`,
    year: 2019,
    video: `https://www.youtube.com/watch?v=ddUo5jE-OoY`,
  },
  {
    title: `Team England 2019`,
    team: `Team England`,
    comp: `Worlds`,
    year: 2019,
    video: `https://www.youtube.com/watch?v=4VmvaqKoGTY`,
  },
]

export const media = {
  title: "Media",
  body: `This page probably isn't quite what you were expecting, it's not portfolio of any photography of graphic design but rather a list of the different type of media I have consumed over the year. The inspiration comes from one of my good friends and old colleague, Ben Farr.`,
  list: {
    January: {
      films: [
        { title: "Soul", info: "(2020)", emoji: "🎷" },
        {
          title: "Guardians of the Galaxy",
          info: "(2014)",
          emoji: "📼",
        },
        {
          title: "Guardians of the Galaxy Vol. 2",
          info: "(2017)",
          emoji: "🪴",
        },
        {
          title: "The Peanut Butter Falcon",
          info: "(2019)",
          emoji: "🦅",
        },
      ],
      games: [
        { title: "Taiko no Tatsujin", info: "Switch", emoji: "🥁" },
        { title: "Ring Fit Adventure", info: "Switch", emoji: "💪" },
      ],
      books: [
        {
          title: "Why the Dutch are different",
          info: "- Ben Coates",
          emoji: "🇳🇱",
        },
      ],
    },
  },
}
