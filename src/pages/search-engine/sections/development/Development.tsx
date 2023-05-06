import Figure from "../../../../components/figure/Figure";
import style from "./Development.module.sass";

import avif from "./images/devices.avif";
import webP from "./images/devices.webp";
import png from "./images/devices.png";

export default function Development() {
  return (
    <section id="development" className={style.development}>
      <div className={`wrapper-l ${style.content}`}>
        <h2>Development</h2>
        <div className="text-section">
          <p data-aos="fade-in">
            I chose the technologies of development in this project based on my
            desire to learn them. I really wanted to deep my knowledge of{" "}
            <a href="http://dot.net/" target="_blank" rel="noopener noreferrer">
              .NET Core
            </a>
            , so I used it as the main platform of the project. I used it in all
            the sub-projects. In the database sub-project, I used it along with{" "}
            <a
              href="https://github.com/dotnet/efcore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entity Framework Core
            </a>
            , to manage data through code in{" "}
            <a
              href="https://www.microsoft.com/en-us/sql-server/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Server
            </a>
            . In the web crawler sub-project, I used it along with{" "}
            <a
              href="https://html-agility-pack.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Html Agility Pack
            </a>{" "}
            to parse{" "}
            <a
              href="https://en.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>{" "}
            documents and scrap data from them. In the search website, I used it
            under{" "}
            <a
              href="https://www.asp.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASP.NET Core
            </a>{" "}
            to handle client requests. To simplify the search query and to
            receive better results, I used{" "}
            <a
              href="https://tartarus.org/martin/PorterStemmer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Porter Stemmer
            </a>{" "}
            library which reduces the keywords or chops them into their root
            forms (e.g. eating becomes eat). For the design I used pure{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>
            .
          </p>
          <p data-aos="fade-in">
            For the deployment, I used{" "}
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon Web Services
            </a>{" "}
            (AWS) for all the cloud needs of the project. For the database I
            used{" "}
            <a
              href="https://aws.amazon.com/rds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon RDS
            </a>
            , for the web crawler and the website I used{" "}
            <a
              href="https://aws.amazon.com/ec2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon EC2
            </a>
            . Unlike the original deployment of the project in 2019, the current
            live demo is hosted on{" "}
            <a
              href="https://azure.microsoft.com/en-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azure
            </a>
            , on a serverless{" "}
            <a
              href="https://azure.microsoft.com/en-us/products/app-service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Service
            </a>
            .
          </p>
        </div>
        <Figure
          caption="A visual of the search website across multiple devices"
          noRoundedCorners
        >
          <picture>
            <source srcSet={avif} media="(min-width: 1024px)" type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="A visual of the search website across multiple devices"
            />
          </picture>
        </Figure>
      </div>
    </section>
  );
}
