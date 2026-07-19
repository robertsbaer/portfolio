import React from "react";
import { useTranslation } from "react-i18next";
import Seo from "./Seo";

interface PageProps {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
}

const Page = ({ title, description, keywords, children }: PageProps) => {
  const { t } = useTranslation();
  const siteUrl = "https://dcmademedia.com";
  const imageUrl = `${siteUrl}/dcmademedia.png`;

  return (
    <>
      <Seo
        title={t(title)}
        description={t(description)}
        keywords={t(keywords)}
        canonical={siteUrl}
        image={imageUrl}
      />
      {children}
    </>
  );
};

export default Page;
