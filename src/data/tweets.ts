import type { ImageMetadata } from "astro";

import aarondfrancis from "@/assets/images/tweets/aarondfrancis.jpg";
import anthonysheww from "@/assets/images/tweets/anthonysheww.jpg";
import imfelquis from "@/assets/images/tweets/imfelquis.jpg";
import raynirola from "@/assets/images/tweets/raynirola.jpg";
import t3dotgg from "@/assets/images/tweets/t3dotgg.jpg";
import thdxr from "@/assets/images/tweets/thdxr.jpg";
import tslamoon1 from "@/assets/images/tweets/tslamoon1.jpg";
import lightgrey from "@/assets/images/tweets/lightgrey.svg";
import adamdotdev from "@/assets/images/tweets/adamdotdev.jpg";
import jamesrperkins from "@/assets/images/tweets/james_r_perkins.jpg";
import saltyAom from "@/assets/images/tweets/saltyAom.jpg";
import FredKSchott from "@/assets/images/tweets/FredKSchott.jpg";
import JacobWolf from "@/assets/images/tweets/JacobWolf.jpg";
import jamesrperkinsTweet from "@/assets/images/tweets/jamesrperkinsTweet.png";
import saltyAomTweet from "@/assets/images/tweets/saltyAomTweet.jpg";
import EddyVinckk from "@/assets/images/tweets/EddyVinckk.jpg";
import chribjel from "@/assets/images/tweets/chribjel.jpg";
import chribjelTweet from "@/assets/images/tweets/chribjelTweet.png";
import hisbvdis from "@/assets/images/tweets/hisbvdis.jpg";
import aokijs from "@/assets/images/tweets/aokijs.jpg";
import silvenon from "@/assets/images/tweets/silvenon.jpg";
import silvenonTweet from "@/assets/images/tweets/silvenonTweet.webp";
import spacesexdragon from "@/assets/images/tweets/spacesexdragon.jpg";
import spacesexdragonTweet from "@/assets/images/tweets/spacesexdragonTweet.jpg";
import brodaNoel from "@/assets/images/tweets/brodaNoel.jpg";

// Tweet images

export interface ITweet {
  avatar: ImageMetadata;
  name: string;
  login: string;
  text?: string;
  href?: string;
  tweetImage?: ImageMetadata;
}

export const tweets: ITweet[] = [
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
    text: "Drizzle 非常糟糕。它甚至都还不支持 Mongo。",
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
    tweetImage: jamesrperkinsTweet,
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
    tweetImage: saltyAomTweet,
  },
  {
    avatar: chribjel,
    name: "Christoffer Bjelke",
    login: "chribjel",
    text: `这种小事已经多少次潜入你的依赖中了？`,
    href: "https://x.com/chribjel/status/1778851727954837727",
    tweetImage: chribjelTweet,
  },
  {
    avatar: hisbvdis,
    name: "Roma Zvarych",
    login: "hisbvdis",
    text: `我终于从 @prisma 切换到了 @DrizzleORM。这不是一件容易的事。亲爱的 Drizzle 团队，你们创造了一个很棒的 orm，但是文档很糟糕。无论如何，祝你们好运，谢谢。`,
    href: "https://x.com/hisbvdis/status/1807783878515400977",
  },
  {
    avatar: aokijs,
    name: "Aoki",
    login: "aokijs",
    text: `坦白说，我不在乎哪个基准测试更快。我只能说，Drizzle 让我的数据库工作生活有了显著的改善，这一点对我来说才是最重要的。感谢你的辛勤工作 🙏🏻`,
    href: "https://x.com/aokijs/status/1833840766839325109",
  },
  {
    avatar: silvenon,
    name: "Matija Marohnić",
    login: "silvenon",
    text: `每次我听说 @DrizzleORM。`,
    href: "https://x.com/silvenon/status/1843003214402314695",
    tweetImage: silvenonTweet,
  },
  {
    avatar: spacesexdragon,
    name: "Joseph Mama 🐀",
    login: "spacesexdragon",
    href: "https://x.com/spacesexdragon/status/1843381135134675236",
    tweetImage: spacesexdragonTweet,
  },
  {
    avatar: brodaNoel,
    name: "Broda Noel",
    login: "BrodaNoel",
    text: "这是个笑话吗？因为如果这是个笑话，那真的是个非常糟糕的笑话，因为我现在甚至不知道他们是谁就讨厌 @DrizzleORM。我是说，如果这是个营销笑话，那真的不是一个好的营销策略。如果这是真的，我会更讨厌他们。",
    href: "https://x.com/BrodaNoel/status/1913248949252616287",
  },
];
