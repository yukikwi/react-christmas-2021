import * as React from "react"
import '../assets/css/main.css'
import '../assets/css/snow.scss'
import styled, {keyframes} from 'styled-components'
import tw from 'tailwind-styled-components'
import Snow from '../components/Snow'
import christmasTree from '../assets/img/christmas-tree.svg'

// markup
const IndexPage = () => {
  return (
    <div className="h-screen bg-dark-red-color">
      <Snow />
      <Container>
        <RainbowText>Merry Christmas 2021</RainbowText>
        <h3 className="text-white mx-auto text-center mb-10 mb:text-md text-sm md:w-full w-5/6">Wishing you a Merry christmas and Happy New year - yukikwi@github.com</h3>
        <img className="w-24" src={christmasTree} alt="christmas tree" />
      </Container>
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
  @media (min-width: 768px) {
    -webkit-text-stroke: 2px white;
  }
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
