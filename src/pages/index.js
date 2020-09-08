import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import Carousel from "../components/carousel";
import SEO from "../components/seo";

import FlatData from "../components/flat-data";
import Description from "../components/description";

const PhotosLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Huvikumpu" />
    <h1>Unelmatalo vapautumassa syksyn aikana!</h1>
    <P>
      <strong>123 456 €</strong>
    </P>
    <Carousel />
    <PhotosLink to="/kaikki-kuvat/">Kaikki kuvat</PhotosLink> <br />
    <h2>Pepinkatu 1, Tukholma</h2>
    <Description />
    <FlatData />
  </Layout>
);

export default IndexPage;
