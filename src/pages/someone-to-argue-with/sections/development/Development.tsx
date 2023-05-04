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
          <p>
            Before starting the development of the application, I was planning
            the creative, functional, structural and architectural patterns of
            it. I explored the design and function of the original website
            created by Geva brothers, and made the changes of mine which I
            thought make it better and match the modern technologies and clients
            of 2022.
          </p>
          <p>
            I chose to develop the application as a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Progressive_web_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Progressive Web App
            </a>{" "}
            (PWA), which I can develop for all platforms: web, desktop and
            mobile; with a single code base. I followed the SOLID design
            principles when coding, providing some important benefits to the
            development. Also, I chose to use automation tools to help me
            develop the application more productively, such as{" "}
            <a
              href="https://github.com/features/actions"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Actions
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/dependabot/dependabot-core"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dependabot
            </a>{" "}
            to always keep packages up-to-date.
          </p>
          <p>
            In order to start the development, I designed the look of the
            application through{" "}
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>{" "}
            (Jonathan Rashi mainly designs the application currently), and chose
            the technologies which will be used to create it. I chose{" "}
            <a
              href="https://www.asp.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASP.NET
            </a>{" "}
            for the back-end side, along with{" "}
            <a
              href="https://github.com/dotnet/efcore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entity Framework Core
            </a>{" "}
            and{" "}
            <a
              href="https://www.microsoft.com/en-us/sql-server/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Server
            </a>{" "}
            to manage data, and{" "}
            <a
              href="https://dotnet.microsoft.com/en-us/apps/aspnet/signalr"
              target="_blank"
              rel="noopener noreferrer"
            >
              SignalR
            </a>{" "}
            for the real-time communication. For the front-end side, I chose{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            , along with{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>{" "}
            and{" "}
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>
            , and{" "}
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/rt2zz/redux-persist"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Persist
            </a>{" "}
            to manage data. For the hosting provider, I chose to use{" "}
            <a
              href="https://azure.microsoft.com/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azure
            </a>
            . For the SEO, I chose{" "}
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics
            </a>
            . For code version control, I use{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <Figure caption="PWA Allows cross-platform development with a single code base" noRoundedCorners>
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="PWA Allows cross-platform development with a single code base"
            />
          </picture>
        </Figure>
      </div>
    </section>
  );
}
