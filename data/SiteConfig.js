const config = {
  siteTitle: "Developers at irabu", // Site title.
  siteTitleShort: "irabu.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Developers arena at irabu", // Alternative site title for SEO.
  siteLogo: "/logos/irabu.svg", // Logo used for SEO and manifest.
  siteUrl: "https://irabu.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/news", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Build to simplify.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Irabu Developers RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "irabu", // Username to display in the author segment.
  userEmail: "developers@irabu.co.tz", // Email used for RSS feed's author segment
  userTwitter: "irabudev", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Dar es Salaam, Tanzania", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "“There’s a big difference between making a simple product & making a product simple.” - Des Traynor.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/irabudev",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/irabudev",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:developers@irabu.co.tz",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "IRABU COMPANY LTD, All Rights Reserved", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
