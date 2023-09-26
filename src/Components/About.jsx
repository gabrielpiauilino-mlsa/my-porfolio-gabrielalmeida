/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Sou um estudante da área de dados com foco em recursos Microsoft, além de ser apaixonado por dados, eu também gosto de resolver problemas reais com isto.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Azure Data Science",
  "Power BI",
  "Inclusive Reports",
  "Embedded Analytics",
  "Azure Synapse Analytics",
  "Azure Data Factory",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Gabriel nasceu em São Paulo em 1996, mas foi no Piauí, crescendo sob a influência da mãe, professora de matemática, que desenvolveu uma afinidade natural pelos números e pela solução de problemas. Essa base sólida o guiou ao mundo da tecnologia, passando pela área da educação, suporte e dados, onde atualmente se destaca como Desenvolvedor e Consultor em Dados na Smart Consulting, uma empresa parceira Microsoft.  Com conhecimento vasto em estatística e em ferramentas como Power BI e linguagens como Python, Java e JavaScript, Gabriel transforma complexidades numéricas em soluções concretas, tornando os dados não apenas acessíveis, mas valiosos para tomadas de decisão. Seu background único, combinado com sua paixão por dados e em ensinar, o destaca como um profissional único.  Além de sua carreira na área de dados, Gabriel também investe em sua formação acadêmica, atualmente cursando Gestão da Tecnologia da Informação na Universidade de São";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre eu</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
