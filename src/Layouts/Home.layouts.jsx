import React from "react";
import Header from "../components/Header/Header";

// Components


const HomeLayout = (props) => {

  

  return (
    <>
       <Header/>
      <div className="">{props.children}</div>
      
    </>
  );
};

export default HomeLayout;
