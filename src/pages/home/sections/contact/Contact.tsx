import style from "./Contact.module.sass";
import { useState } from "preact/hooks";

import SocialLink from "./social-link/SocialLink";

import atIcon from "./images/email.svg";
import whatsappIcon from "./images/whatsapp.svg";
import githubIcon from "./images/github.svg";
import linkedinIcon from "./images/linkedin.svg";
import itchIoIcon from "./images/itch-io.svg";
import discordIcon from "./images/discord.svg";
import InputField from "./input-field/InputField";
import Button from "../../../../components/button/Button";
import { JSX } from "preact/jsx-runtime";
import SentNotification from "./sent-notification/SentNotification";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [pop, setPop] = useState<boolean>();

  const fetchMessage = async (
    name: string,
    email: string,
    subject: string,
    content: string
  ) => {
    try {
      let res = await fetch("https://api.talisrae.li/api/contact-me", {
        method: "POST",
        body: JSON.stringify({
          name: name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          email: email.toLowerCase(),
          subject: subject,
          content: content,
        }),
      });
      return res.ok;
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && subject && content) {
      resetPop();
      fetchMessage(name, email, subject, content)
        .then((res) => {
          setSentSuccessfully(res);
          setPop(true);
        })
        .catch((err) => console.error(err));
      e.currentTarget.reset();
    }
  };

  const resetPop = () => {
    setPop(undefined);
  };

  return (
    <section id="contact" className={style.contact}>
      <h2>Contact</h2>
      <div className="wrapper-l">
        <div data-aos="fade-in">
          <p>
            Send me a message! Got a question or proposal, or just want to say
            hello? Go ahead.
          </p>
          <p>
            Furthermore, I invite you to connect with me via my social media
            links.
          </p>
        </div>
        <div className={style.links} data-aos="fade-in">
          <SocialLink
            name="Email"
            href="mailto:contact@talisrae.li"
            src={atIcon}
          />
          <SocialLink
            name="WhatsApp"
            href="https://wa.me/972532841514"
            src={whatsappIcon}
          />
          <SocialLink
            name="GitHub"
            href="https://github.com/talisraeli"
            src={githubIcon}
          />
          <SocialLink
            name="LinkedIn"
            href="https://www.linkedin.com/in/talisraeli"
            src={linkedinIcon}
          />
          <SocialLink
            name="itch.io"
            href="https://talisraeli.itch.io/"
            src={itchIoIcon}
          />
          <SocialLink
            name="Discord"
            href="https://discord.com/users/160492252832071680"
            src={discordIcon}
          />
        </div>
        <div className="wrapper-m">
          <form onSubmit={onSubmit} method="post">
            <div className={style.row}>
              <InputField
                name="Full Name"
                type="text"
                nameInCode="name"
                min={6}
                onInputChange={(e) => setName(e.currentTarget.value)}
              />
              <InputField
                name="Email Address"
                type="email"
                nameInCode="email"
                min={8}
                onInputChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className={style.column}>
              <InputField
                name="Subject"
                type="text"
                nameInCode="subject"
                min={10}
                onInputChange={(e) => setSubject(e.currentTarget.value)}
              />
              <InputField
                name="Content"
                type="textarea"
                nameInCode="content"
                min={12}
                onTextareaChange={(e) => setContent(e.currentTarget.value)}
              />
            </div>
            <div className={style.buttonContainer} data-aos="zoom-in">
              <Button type="secondary">
                <>Submit message</>
              </Button>
            </div>
          </form>
        </div>
      </div>
      <SentNotification
        isSuccessed={sentSuccessfully}
        pop={pop}
        resetPop={resetPop}
      />
    </section>
  );
}
