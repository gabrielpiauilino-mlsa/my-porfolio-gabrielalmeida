/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Artigo - PowerBI Embedded API— RLS | Power BI",
    description:
      "PowerBI Embedded API— RLS Obter Token de Inserção passando regras de RLS usando “CUSTOMDATA()”",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Aula - Power BI para Embedded para Power Pages",
    description:
      "Preparando capacidades do PowerBI Embedded para inserir relatórios no Power Pages",
    url: "https://stdntpartners-my.sharepoint.com/:v:/g/personal/gabriel_piauilinodealmeida_studentambassadors_com/EVlqsgmFAQ5Ct9MaoXT4r9QBO9k1t7vQxFSNfNeNfvD4Uw",
  },
  {
    title: "Project Management in Java",
    description:
      "Solução em Java, para gerenciamento simples de um projeto considerando framework PMBOK5",
    url: "https://github.com/gpiauilino/projectmanagement",
  },
  {
    title: "Dataset Dummy Generator Python - School",
    description:
      "Solução Python back-end para geração de um dataset com todas tabelas comuns de uma escola privada ",
    url: "https://github.com/gpiauilino/FakerSchool_Generator",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
