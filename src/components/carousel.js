import React, { useEffect, useState, useCallback } from "react"
import { useEmblaCarousel } from "embla-carousel/react"
import styled from "styled-components"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  cursor: zoom-in;
  display: none;
  @media only screen and (min-width: 600px) {
    display: block;
  }
`

const ImageMobile = styled(Image)`
  display: block;
  img {
    width: 100% !important;
    height: ${props => (props.aspectRatio < 1 ? "350px" : "100%")} !important ;
    object-fit: ${props =>
      props.aspectRatio < 1 ? "contain" : "cover"} !important;
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
`

const Background = styled.div`
  background: #d3d3d330;
  position: relative;
`
const ImageContainer = styled.div`
  min-width: 100%;
  max-height: 350px;
  margin: auto;
  @media only screen and (min-width: 600px) {
    max-height: 650px;
  }
`

const Button = styled.button`
  position: absolute;
  top: 0;
  z-index: 3;
  height: 100%;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 28px;
  width: 50px;
  @media only screen and (min-width: 600px) {
    font-size: 56px;
    width: 100px;
  }
  font-weight: bold;
  appearance: none;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: none;
  }
`

const PrevButton = styled(Button)`
  left: 0;
`

const NextButton = styled(Button)`
  right: 0;
`

const EmblaCarousel = () => {
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
  `)
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const onScrollPrev = useCallback(() => embla.scrollPrev(), [embla])
  const onScrollNext = useCallback(() => embla.scrollNext(), [embla])

  useEffect(() => {
    if (embla) {
      embla.on("select", () => {
        setCanScrollPrev(embla.canScrollPrev())
        setCanScrollNext(embla.canScrollNext())
      })
    }
  }, [embla])

  const origName = node => {
    const parts = node.fluid.originalImg.split("/")
    return parts[parts.length - 1]
  }
  return (
    <Background>
      {canScrollPrev && (
        <PrevButton
          type="button"
          onClick={onScrollPrev}
          disabled={!canScrollPrev}
        >
          {"<"}
        </PrevButton>
      )}
      <EmblaCarouselReact>
        <Container>
          {data.allImageSharp.edges
            .filter(item => item.node.fluid.src.includes("flat"))
            .sort((a, b) => (origName(a.node) < origName(b.node) ? -1 : 1))
            .map(edge => (
              <ImageContainer key={edge.node.id}>
                <a
                  href={edge.node.fluid.originalImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ImageMobile
                    fluid={edge.node.fluid}
                    aspectRatio={edge.node.fluid.aspectRatio}
                    imgStyle={{
                      objectPosition: "top center",
                    }}
                  />
                  <Image
                    fluid={edge.node.fluid}
                    imgStyle={{
                      objectFit:
                        edge.node.fluid.aspectRatio < 1 ? "none" : "cover",
                      objectPosition: "top center",
                    }}
                  />
                </a>
              </ImageContainer>
            ))}
        </Container>
      </EmblaCarouselReact>
      {canScrollNext && (
        <NextButton
          type="button"
          onClick={onScrollNext}
          disabled={!canScrollNext}
        >
          {">"}
        </NextButton>
      )}
    </Background>
  )
}

export default EmblaCarousel
