import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

function SocialLinks({ postNode, postPath, mobile }) {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 48;
  const filter = (count) => (count > 0 ? count : "");
  const renderShareCount = (count) => (
    <div className="share-count">{filter(count)}</div>
  );

  return (
    <div className="social-links">
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {(count) => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  );
}

export default SocialLinks;
