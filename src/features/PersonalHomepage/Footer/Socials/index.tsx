import React from "react";
import { socialsLinks } from "./socials";
import { LinkBox, SocialLink } from "./styled";

const Socials = () => (
  <LinkBox>
    {socialsLinks.map(({ name, link, Icon }) => (
      <SocialLink
        key={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </SocialLink>
    ))}
  </LinkBox>
);

export default Socials;
