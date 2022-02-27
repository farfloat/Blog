import {
  FacebookShareCount,
  HatenaShareCount,
  PinterestShareCount,
  RedditShareCount,
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  HatenaShareButton,
  HatenaIcon,
  InstapaperIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  LinkedinIcon,
} from "react-share";

const SocialContainer = ({ url, size }: { url: string; size: number }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <TwitterShareButton {...{ url }}>
        <TwitterIcon {...{ size, round: true }} />
      </TwitterShareButton>
      <FacebookShareButton {...{ url }}>
        <FacebookIcon {...{ size, round: true }} />
      </FacebookShareButton>
      <InstapaperShareButton {...{ url }}>
        <InstapaperIcon {...{ size, round: true }} />
      </InstapaperShareButton>
      <EmailShareButton {...{ url }}>
        <EmailIcon {...{ size, round: true }} />
      </EmailShareButton>
      <LinkedinShareButton {...{ url }}>
        <LinkedinIcon {...{ size, round: true }} />
      </LinkedinShareButton>
      <LineShareButton {...{ url }}>
        <LineIcon {...{ size, round: true }} />
      </LineShareButton>
      <RedditShareButton {...{ url }}>
        <RedditIcon {...{ size, round: true }} />
      </RedditShareButton>
      <PinterestShareButton {...{ url, media: url }}>
        <PinterestIcon {...{ size, round: true }} />
      </PinterestShareButton>
      <HatenaShareButton {...{ url }}>
        <HatenaIcon {...{ size, round: true }} />
      </HatenaShareButton>
      <RedditShareCount {...{ url }} />
    </div>
  );
};

export default SocialContainer;
