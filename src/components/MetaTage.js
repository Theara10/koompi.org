import MetaTags from "react-meta-tags";

const MetaTage = ({ urls, title, desc, thumbnail }) => {
  return (
    <div>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={urls} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={thumbnail} />
      </MetaTags>
    </div>
  );
};

export default MetaTage;
