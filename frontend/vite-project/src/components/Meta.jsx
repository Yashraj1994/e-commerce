import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keyword }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell the best products for cheap",
  keyword: "electronics, buy electronics, cheap electronics",
};

export default Meta;
