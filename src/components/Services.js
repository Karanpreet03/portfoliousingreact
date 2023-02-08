import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import '../components/Services.css';
export const Services = () => {
  return (
    <>
      <div className="pt-5 pb-5" id="services">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12 text-center">
              <h4>
                <span>Why </span>Me?
              </h4>
              <p>
                Choosing me will help you get a website that is techologically
                superior and looks modern and classy
              </p>
            </div>
            {/* First card */}
            <div className="col-lg-4 col-sm-12 text-center bg-light">
                <div className="item">
                    <span className="icon feature_box_col_one"><FaGlobe className="icon"/></span>
                    <p className="display-6">Modern Design</p>
                    <p>In today's world a great looking website depicts the growth of the business, this is where I come in for you. I can create a great looking website for your organisation resulting in better business growth.</p>
                </div>
            </div>
            {/* Second card */}
            <div className="col-lg-4 col-sm-12 text-center bg-light">
                <div className="item">
                    <span className="icon feature_box_col_two"><FaLaptop className="icon"/></span>
                    <p className="display-6">Recent Techologies</p>
                    <p>Today technology is the key, to have a smooth running website will result in the expansion of business worldwide. In this context, we will use the technologies used by big websites like Netflix and Amazon etc</p>
                </div>
            </div>
            {/* Third card */}
            <div className="col-lg-4 col-sm-12 text-center bg-light">
                <div className="item">
                    <span className="icon feature_box_col_three"><FaGoogle className="icon"/></span>
                    <p className="display-6">Better Search Optimization</p>
                    <p>There are millions of results for a business when somebody search on google but as per a psychologist report, majority of people visit top 4 website in google. To make this happen we will do a SEO for your project which will help your website stay on top.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
