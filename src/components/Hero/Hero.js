import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { saveAs } from 'file-saver';


const Hero = (props) => (




<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      My Personal full-stack web developer portfolio
    </SectionTitle>
    <SectionText>
      Hello there i'm a programmer/ETL developer/web developer.
      This portfolio is designed mainly to showcase my journey as  full-stack web developer.
      Feel free to contact me for project/work opportunities.
    </SectionText>
    <Button><a href='/cv/cv.pdf' style={{color:'inherit' , textDecoration:'inherit'}} download>My CV</a></Button>
  </LeftSection>
</Section>
);

export default Hero;