import React from "react";
import Layout from "../Layout/Layout";
import constructionImage from "../../assets/constraction.png";

const Settings = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Settings Page</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <img
          src={constructionImage}
          alt="Under Construction"
          className="w-1/2 h-auto"
        />
      </div>
    </Layout>
  );
};

export default Settings;
