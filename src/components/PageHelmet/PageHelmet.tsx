import { Helmet } from "react-helmet-async";

const PageHelmet = ({ title, description }: PageHelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && (
        <>
          <meta name="description" content={description} />{" "}
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </Helmet>
  );
};

export default PageHelmet;
