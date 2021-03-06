import React from "react";
import { DiFirebase, DiJava, DiPython, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-End to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Eperience with HTML5, CSS3, JavaScript, TypeScript, SASS, Bootstrap
            and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Eperience with Node.js and Databases</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Eperience with Java,Python, C++ and scripting languages.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
