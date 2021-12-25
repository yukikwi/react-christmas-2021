import * as React from "react"
import '../assets/css/main.css'
import '../assets/css/snow.scss'
import { Helmet } from "react-helmet"
import styled, {keyframes} from 'styled-components'
import tw from 'tailwind-styled-components'
import Snow from '../components/Snow'
import christmasTree from '../assets/img/christmas-tree.svg'

// markup
const IndexPage = () => {
  return (
    <div className="h-screen bg-dark-red-color relative overflow-hidden">
      <Snow />
      <Container>
        <RainbowText>Merry Christmas 2021</RainbowText>
        <div className="text-white mx-auto text-center mb-10 mb:text-3xl text-xl md:w-full w-5/6">
          <h3 className="inline-block">Wishing you a <strong>Merry christmas</strong> and <strong>Happy New year</strong>&nbsp;</h3>
          <h3 className="inline-block"><strong>&mdash; yukikwi@github.com</strong></h3>
        </div>
        <img className="w-24" src={christmasTree} alt="christmas tree" />
      </Container>

      {/* Meta */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Merry Christmas 2021 🎅</title>
      </Helmet>
    </div>
  )
}


const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

// Color set: https://codepen.io/adamlindqvist/pen/EaPeJg
const RainbowTextCss = styled.h1`
  background-image: linear-gradient(to left, #F5624D, #CC231E, #34A65F, #0F8A5F, #235E6F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	animation: ${gradient} 10s ease infinite;
	background-size: 400% 400%;
  -webkit-text-stroke: 1px white;
`
const RainbowText = tw(RainbowTextCss)`
  text-3xl
  md:text-5xl
  text-transparent
  font-bold
  mb-5
`

const ContainerCss = styled.div`
  & *{
    z-index: 20;
  }
`
const Container = tw(ContainerCss)`  
  h-screen  
  flex
  items-center
  justify-center
  flex-col
  container
  mx-auto
`

export default IndexPage
