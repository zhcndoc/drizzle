import { ImageType, type ISponsor } from "@/types/Sponsors";

export const sponsorsData: ISponsor[] = [
  {
    tier: {
      name: "$100 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "val.town",
      name: "Val Town",
      avatarUrl:
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="white"/><g clip-path="url(#clip0_1045_835)"><path d="M265.026 271.002C257.83 271.002 251.994 268.767 247.518 264.293C243.038 259.821 240.802 253.841 240.802 246.363V184.761H226.364V161.881H240.802V128H268.548V161.881H298.5V184.761H268.548V241.521C268.548 245.921 270.604 248.123 274.716 248.123H295.856V271.002H265.026Z" fill="black"/><path d="M204.362 174.325L158.23 250.768H154.266V178.601C154.266 169.37 146.776 161.887 137.536 161.887H126.518V253.01C126.518 262.95 134.586 271.01 144.536 271.01H163.396C173.396 271.01 182.638 265.682 187.64 257.03L242.664 161.887H226.404C217.384 161.887 209.02 166.606 204.362 174.325Z" fill="black"/><path d="M99.9939 161.887H127.8V184.769H99.9939V161.887Z" fill="black"/></g><defs><clipPath id="clip0_1045_835"><rect width="200" height="143.86" fill="white" transform="translate(100 128)"/></clipPath></defs></svg>',
    },
    createdAt: "2023-04-03T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
    lightStyle: {
      filter: "invert(1)",
    },
  },
  {
    tier: {
      name: "$150 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "kinde.com",
      name: "Kinde",
      avatarUrl: "/images/kinde.jpeg",
    },
    createdAt: "2023-06-11T12:32:16Z",
    isActive: true,
    imageType: ImageType.IMAGE,
  },
  {
    tier: {
      name: "$100 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "zolplay.com",
      name: "Zolplay",
      avatarUrl: "/images/zolplay.jpeg",
    },
    createdAt: "2023-06-11T13:32:16Z",
    isActive: true,
    imageType: ImageType.IMAGE,
  },
  {
    tier: {
      name: "$1,000 one time",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/turso",
      name: "Turso",
      avatarUrl:
        '<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
    },
    createdAt: "2023-12-21T15:51:27Z",
    isActive: true,
    imageType: ImageType.SVG,
    popover:
      "🚀 Drizzle is giving you 10% off Turso Scaler and Pro for 1 Year 🚀",
    darkStyle: {
      background:
        'url("/svg/new-turso-light.svg") 0% 0% / cover no-repeat content-box',
    },
    lightStyle: {
      background:
        'url("/svg/new-turso.svg") 0% 0% / cover no-repeat content-box',
    },
  },
  {
    tier: {
      name: "$1000 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/payload",
      name: "Payload",
      avatarUrl:
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5293 4L26 10.901V23.9978L17.3608 29V15.9032L5.88452 9.00777L14.5293 4Z" fill="black"/><path d="M13.6559 28.2727V18.0518L5 23.0651L13.6559 28.2727Z" fill="black"/></svg>',
    },
    createdAt: "2023-06-11T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
    darkStyle: {
      filter: "invert(1)",
    },
  },
  {
    tier: {
      name: "$1000 a month",
      isOneTime: true,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/xataio",
      name: "Xata",
      avatarUrl:
        '<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1054.35 379.14C1054.24 469.137 1018.35 555.408 954.56 618.971V618.964L728.273 844.45C720.432 852.27 707.693 852.29 700.346 844.01C645.331 782.018 614.758 701.838 614.856 618.535C614.961 528.538 650.856 442.268 714.643 378.705L714.65 378.711L921.39 172.697C940.02 154.128 970.51 153.996 986.31 175.022C1030.3 233.547 1054.44 305.11 1054.35 379.14Z" fill="url(#paint0_linear_202_71)"/><path d="M244.786 620.345C180.999 556.782 145.105 470.512 145 380.515C144.913 306.485 169.048 234.921 213.035 176.396C228.838 155.37 259.328 155.503 277.963 174.072L484.703 380.088L484.71 380.081C548.497 443.645 584.391 529.914 584.497 619.912C584.594 703.214 554.022 783.395 499.007 845.38C491.659 853.66 478.92 853.64 471.08 845.83L244.793 620.339L244.786 620.345Z" fill="url(#paint1_linear_202_71)"/><path d="M946.05 1023.83C929.42 1044.22 899.02 1044.04 880.42 1025.42L752.727 897.58C744.891 889.73 744.906 877.02 752.76 869.19L964.85 657.848C972.69 650.035 985.48 649.989 992.39 658.632C1029.2 704.628 1043.68 768.198 1032.74 838.18C1022.72 902.24 992.08 967.37 946.05 1023.83Z" fill="url(#paint2_linear_202_71)"/><path d="M318.931 1026.8C300.337 1045.41 269.929 1045.59 253.305 1025.2C207.269 968.74 176.633 903.62 166.617 839.56C155.675 769.571 170.149 706.001 206.959 660.005C213.876 651.363 226.663 651.408 234.504 659.221L446.595 870.57C454.449 878.39 454.464 891.11 446.629 898.95L318.931 1026.8Z" fill="url(#paint3_linear_202_71)"/><defs><linearGradient id="paint0_linear_202_71" x1="599.676" y1="158.999" x2="599.676" y2="859.4" gradientUnits="userSpaceOnUse"><stop stop-color="#9F87FF"/><stop offset="1" stop-color="#8566FF"/></linearGradient><linearGradient id="paint1_linear_202_71" x1="599.676" y1="159" x2="599.676" y2="859.4" gradientUnits="userSpaceOnUse"><stop stop-color="#9F87FF"/><stop offset="1" stop-color="#8566FF"/></linearGradient><linearGradient id="paint2_linear_202_71" x1="599.676" y1="643.766" x2="599.676" y2="1039.93" gradientUnits="userSpaceOnUse"><stop stop-color="#DE99F6"/><stop offset="1" stop-color="#D669FC"/></linearGradient><linearGradient id="paint3_linear_202_71" x1="599.676" y1="643.766" x2="599.676" y2="1039.93" gradientUnits="userSpaceOnUse"><stop stop-color="#DE99F6"/><stop offset="1" stop-color="#D669FC"/></linearGradient></defs></svg>',
    },
    createdAt: "2023-06-11T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
  },
  {
    tier: {
      name: "$1000 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/neon",
      name: "Neon",
      avatarUrl:
        '<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
    },
    createdAt: "2023-11-16T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
    darkStyle: {
      background:
        'url("/svg/neon-dark.svg") 0% 0% / cover no-repeat content-box',
      padding: "10px",
    },
    lightStyle: {
      background:
        'url("/svg/neon-light.svg") 0% 0% / cover no-repeat content-box',
      padding: "10px",
    },
  },
  {
    tier: {
      name: "$250 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/silver-sponsor-unkey",
      name: "Unkey",
      avatarUrl: "/images/unkey.jpeg",
    },
    createdAt: "2023-06-11T13:32:16Z",
    isActive: true,
    imageType: ImageType.IMAGE,
  },
  {
    tier: {
      name: "$1000 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "hub.nuxt.com/?utm_source=drizzle-docs",
      name: "Nuxt",
      avatarUrl:
        '<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
    },
    followLink: true,
    createdAt: "2023-11-16T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
    darkStyle: {
      background:
        'url("/svg/nuxt-green.svg") 0% 0% / cover no-repeat content-box',
    },
    lightStyle: {
      background:
        'url("/svg/nuxt-green.svg") 0% 0% / cover no-repeat content-box',
    },
  },
  {
    tier: {
      name: "$250 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/silver-sponsor-tidb",
      name: "TiDB",
      avatarUrl:
        '<svg xmlns="http://www.w3.org/2000/svg" width="57" height="65" viewBox="0 0 57 65" fill="none"><path d="M0.849609 16.3821V48.3821L28.5617 64.3838L56.2739 48.3821V16.3821L28.5617 0.383789L0.849609 16.3821Z" fill="#E60C0C"/><path d="M28.5457 11.0675L10.1416 21.6944V32.318L19.3469 27.0029V48.3959L28.5457 53.701V21.6911L37.7477 16.3793L28.5457 11.0675Z" fill="white"/><path d="M37.7998 27.0562V48.3829L47.0383 43.0512V21.7179L37.7998 27.0562Z" fill="white"/></svg>',
    },
    createdAt: "2023-11-16T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
  },
  {
    tier: {
      name: "$250 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/silver-sponsor-logto",
      name: "Logto",
      avatarUrl:
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#141420"/><mask id="mask0_152_11" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="4" width="14" height="16"><path d="M18.3333 4H5V20H18.3333V4Z" fill="white"/></mask><g mask="url(#mask0_152_11)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.49834C5 6.03863 5 5.80878 5.08914 5.62377C5.1677 5.46073 5.29403 5.32254 5.4531 5.22567C5.63361 5.11575 5.87359 5.08312 6.35354 5.01787L13.1986 4.0872C13.8199 4.00272 14.1306 3.96048 14.372 4.04967C14.5839 4.12796 14.7608 4.27331 14.8726 4.46109C15 4.675 15 4.97256 15 5.56767V18.4323C15 19.0274 15 19.325 14.8726 19.5389C14.7608 19.7267 14.5839 19.872 14.372 19.9503C14.1306 20.0395 13.8199 19.9973 13.1986 19.9128L6.35354 18.9821C5.8736 18.9169 5.6336 18.8842 5.4531 18.7743C5.29403 18.6775 5.1677 18.5393 5.08914 18.3762C5 18.1912 5 17.9614 5 17.5017V6.49834ZM12.3333 10.8359C12.3333 10.696 12.3333 10.626 12.3568 10.5706C12.3775 10.5219 12.4108 10.4812 12.4522 10.4537C12.4993 10.4225 12.5616 10.4161 12.6861 10.4035L13.2437 10.3467C13.3904 10.3318 13.4637 10.3243 13.5204 10.3517C13.5701 10.3758 13.6113 10.4178 13.6372 10.4711C13.6667 10.5318 13.6667 10.6143 13.6667 10.7792V13.2208C13.6667 13.3857 13.6667 13.4682 13.6372 13.5289C13.6113 13.5822 13.5701 13.6242 13.5204 13.6483C13.4637 13.6757 13.3904 13.6682 13.2437 13.6533L12.6861 13.5965C12.5616 13.5839 12.4993 13.5775 12.4522 13.5463C12.4108 13.5188 12.3775 13.4781 12.3568 13.4294C12.3333 13.374 12.3333 13.304 12.3333 13.1641V10.8359ZM16.8815 5.66667H16V18.6667H16.8815C17.3897 18.6667 17.6438 18.6667 17.8379 18.5675C18.0086 18.4802 18.1474 18.341 18.2344 18.1698C18.3333 17.9751 18.3333 17.7203 18.3333 17.2107V7.12267C18.3333 6.61302 18.3333 6.35819 18.2344 6.16354C18.1474 5.99231 18.0086 5.8531 17.8379 5.76585C17.6438 5.66667 17.3897 5.66667 16.8815 5.66667Z" fill="url(#paint0_linear_152_11)"/></g><defs><linearGradient id="paint0_linear_152_11" x1="0.873017" y1="15.0651" x2="17.2965" y2="8.35123" gradientUnits="userSpaceOnUse"><stop stop-color="#4B2EFB"/><stop offset="1" stop-color="#E65FFC"/></linearGradient></defs></svg>',
    },
    createdAt: "2023-06-11T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
  },
  {
    tier: {
      name: "$1000 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/hydraso",
      name: "Hydra",
      avatarUrl:
        '<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
    },
    createdAt: "2024-06-07T13:32:16Z",
    isActive: true,
    imageType: ImageType.SVG,
    darkStyle: {
      background:
        'url("/images/hydra-orange.png") 0% 0% / cover no-repeat content-box',
    },
    lightStyle: {
      background:
        'url("/images/hydra-black.png") 0% 0% / cover no-repeat content-box',
    },
  },
  {
    tier: {
      name: "$250 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/usemotion",
      name: "Motion",
      avatarUrl: "/images/motion.png",
    },
    createdAt: "2024-08-13T16:35:56Z",
    isActive: true,
    imageType: ImageType.IMAGE,
  },
  {
    tier: {
      name: "$250 a month",
      isOneTime: false,
    },
    sponsorEntity: {
      __typename: "Organization",
      login: "driz.link/dbos",
      name: "DBOS",
      avatarUrl: "/images/dbos.png",
    },
    createdAt: "2024-08-13T16:35:56Z",
    isActive: true,
    imageType: ImageType.IMAGE,
  },
];

export default sponsorsData;
