import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call:</LinkTitle>
      <LinkItem href="tel:+447856678878">+44 7856 678878</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email:</LinkTitle>
      <LinkItem href="mailto:kasparsupenieks@gmail.com">kasparsupenieks@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Better people, better websites
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Kaskadieris">
  <AiFillGithub size="3rem"/>
  </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/kaspars-upenieks-34a6b4102/">
  <AiFillLinkedin size="3rem"/>
  </SocialIcons>
  </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
