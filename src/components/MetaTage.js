import { Helmet } from "react-helmet";

const MetaTage = ({ urls, title, desc, thumbnail }) => {
  return (
    <div>
      <Helmet>
        ‍<title>{title}</title>‍
        <meta name="description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@koompios" />
        <meta name="twitter:creator" content="@koompios" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={thumbnail} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={urls} />
        <meta property="og:site_name" content="koompi.org" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      ‍‍
    </div>
  );
};

export default MetaTage;
