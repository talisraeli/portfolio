import style from "./SocialLink.module.sass";

interface SocialLinkProps {
  name: string;
  src: string;
  href: string;
}

export default function SocialLink(props: SocialLinkProps) {
  return (
    <a
      className={style.socialLink}
      href={props.href}
      title={props.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={props.src}
        alt={`${props.name} Icon`}
        decoding="async"
        loading="lazy"
      />
    </a>
  );
}
