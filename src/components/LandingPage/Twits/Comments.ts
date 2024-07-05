import aarondfrancis from "@/assets/images/twits/aarondfrancis.jpg";
import anthonysheww from "@/assets/images/twits/anthonysheww.jpg";
import imfelquis from "@/assets/images/twits/imfelquis.jpg";
import raynirola from "@/assets/images/twits/raynirola.jpg";
import t3dotgg from "@/assets/images/twits/t3dotgg.jpg";
import thdxr from "@/assets/images/twits/thdxr.jpg";
import tslamoon1 from "@/assets/images/twits/tslamoon1.jpg";
import lightgrey from "@/assets/images/twits/lightgrey.svg";
import adamdotdev from "@/assets/images/twits/adamdotdev.jpg";
import jamesrperkins from "@/assets/images/twits/james_r_perkins.jpg";
import saltyAom from "@/assets/images/twits/saltyAom.jpg";
import FredKSchott from "@/assets/images/twits/FredKSchott.jpg";
import JacobWolf from "@/assets/images/twits/JacobWolf.jpg";
import jamesrperkinsTwit from "@/assets/images/twits/jamesrperkinsTwit.png";
import saltyAomTwit from "@/assets/images/twits/saltyAomTwit.jpg";
import EddyVinckk from "@/assets/images/twits/EddyVinckk.jpg";
import chribjel from "@/assets/images/twits/chribjel.jpg";
import chribjelTwit from "@/assets/images/twits/chribjelTwit.png";
import hisbvdis from "@/assets/images/twits/hisbvdis.jpg";

// Twit images

export interface IComment {
  avatar: ImportMeta;
  name: string;
  login: string;
  text: string;
  href?: string;
  twitImage?: ImportMetaEnv;
}

const Comments: IComment[] = [
  {
    avatar: thdxr,
    name: "Dax",
    login: "thdxr",
    text: "我讨厌 Drizzle",
    href: "https://x.com/thdxr/status/1719129834901721353?s=20",
  },
  {
    avatar: anthonysheww,
    name: "Anthony Shew",
    login: "anthonysheww",
    text: "我非常讨厌 @DrizzleOrm，所以我为它编写了 Auth.js 适配器。",
    href: "https://x.com/anthonysheww/status/1688973391917969408?s=20",
  },
  {
    avatar: adamdotdev,
    name: "Adam",
    login: "adamdotdev",
    text: `我知道这不会让我进入主页, 但是 
    
@DrizzleORM 太棒了`,
    href: "https://x.com/adamdotdev/status/1749463315355508917?s=20",
  },
  {
    avatar: lightgrey,
    name: "Some Body",
    login: "dont_know",
    text: "Django 在 2008 年就拥有了它",
  },
  {
    avatar: EddyVinckk,
    name: "Eddy Vinck",
    login: "EddyVinckk",
    text: `我喜欢 @DrizzleORM\n\n就是这样，就是这条推文`,
    href: "https://x.com/EddyVinckk/status/1770052528941478333?s=20",
  },
  {
    avatar: JacobWolf,
    name: "Jacob Wolf 🐝",
    login: "JacobWolf",
    text: "我喜欢 @DrizzleORM.",
    href: "https://x.com/JacobWolf/status/1768061278776349151?s=20",
  },
  {
    avatar: t3dotgg,
    name: "Theo",
    login: "t3dotgg",
    text: "Drizzle is terrible. It doesn’t even support Mongo.",
    href: "https://x.com/t3dotgg/status/1787604253860847775",
  },
  {
    avatar: aarondfrancis,
    name: "Aaron Francis",
    login: "aarondfrancis",
    text: "你们应该照搬 Eloquent 的所有内容",
    href: "https://x.com/aarondfrancis/status/1641145228189892613?s=20",
  },
  {
    avatar: imfelquis,
    name: "Ofelquis Gimenes",
    login: "imfelquis",
    text: "不可预知的结果才是人类的生存之本，现在就禁止 Drizzle 和所有这些打字乱码",
    href: "https://x.com/imfelquis/status/1709919386931462516?s=20",
  },
  {
    avatar: jamesrperkins,
    name: "James Perkins",
    login: "james_r_perkins",
    text: "抱歉 @DrizzleORM 你太糟糕了！",
    href: "https://x.com/james_r_perkins/status/1766156735155196201?s=20",
    twitImage: jamesrperkinsTwit,
  },
  {
    avatar: tslamoon1,
    name: "tslamoon",
    login: "tslamoon1",
    text: "如果 drizzle 能在 9 月底之前增加对 MSSQL 的支持，我就剃光头。",
    href: "https://x.com/tslamoon1/status/1700416378237530419?s=20",
  },
  {
    avatar: FredKSchott,
    name: "fks",
    login: "FredKSchott",
    text: "Astro DB 由 Drizzle 提供支持！ ...我们对一切感到遗憾，天哪，这件事太糟糕了",
    href: "https://x.com/FredKSchott/status/1767646959656194473?s=20",
  },
  {
    avatar: raynirola,
    name: "Ray",
    login: "_raynirola",
    text: "Drizzle Orm 不是一个 ORM ，它只是一个被高估的类型安全 SQL 包装器，甚至不是一个查询构建器。",
    href: "https://x.com/_raynirola/status/1666028176789872642?s=20",
  },
  {
    avatar: saltyAom,
    name: "SaltyAom",
    login: "saltyAom",
    text: `Prisma Bun: 1.4 MB/s\nDrizzle Bun: 9.8 MB/s`,
    href: "https://x.com/saltyAom/status/1767783124342276526?s=20",
    twitImage: saltyAomTwit,
  },
  {
    avatar: chribjel,
    name: "Christoffer Bjelke",
    login: "chribjel",
    text: `这种小事已经多少次潜入你的依赖中了？`,
    href: "https://x.com/chribjel/status/1778851727954837727",
    twitImage: chribjelTwit,
  },
  {
    avatar: hisbvdis,
    name: "Roma Zvarych",
    login: "hisbvdis",
    text: `I have finally switched from @prisma to @DrizzleORM.\nIt was not easy.\nDear Drizzle Team, you have created an awesome orm with awfull documentation.\nAnyway, good for you, thanks and good luck.`,
    href: "https://x.com/hisbvdis/status/1807783878515400977",
  },
];

export { Comments };
