import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

import Image from "./image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled(GatsbyImage)`
  max-width: 100%;
  max-height: 90vh;
  margin-bottom: 1rem;
  cursor: zoom-in;
`;

const ImageList = () => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxHeight: 650) {
              src
              srcSet
              base64
              aspectRatio
              originalImg
              sizes
            }
          }
        }
      }
    }
  `);
  const origName = (node) => {
    const parts = node.fluid.originalImg.split("/");
    return parts[parts.length - 1];
  };
  return (
    <Container>
      {data.allImageSharp.edges
        .filter((item) => item.node.fluid.src.includes("flat"))
        .sort((a, b) => (origName(a.node) < origName(b.node) ? -1 : 1))
        .map((edge) => (
          <a
            key={edge.node.id}
            href={edge.node.fluid.originalImg}
            target="_blank"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img
              fluid={edge.node.fluid}
              imgStyle={{
                objectFit:
                  edge.node.fluid.aspectRatio < 1 ? "contain" : "cover",
                objectPosition: "top center",
              }}
            />
          </a>
        ))}
    </Container>
  );
};

export default ImageList;
