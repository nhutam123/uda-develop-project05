import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styled from 'styled-components'

export const Banner = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('tam dep trai')
      },
      breakpoints: {},
      slides: {
        origin: 'center',
        perView: 1.75,
        spacing: 10
      },
      loop: true,
      renderMode: 'performance'
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )
  return (
    <BannerContainer ref={sliderRef} className="keen-slider">
      <Slide className="keen-slider__slide number-slide1">1</Slide>
      <Slide className="keen-slider__slide number-slide2">2</Slide>
      <Slide className="keen-slider__slide number-slide3">3</Slide>
      <Slide className="keen-slider__slide number-slide4">4</Slide>
      <Slide className="keen-slider__slide number-slide5">5</Slide>
      <Slide className="keen-slider__slide number-slide6">6</Slide>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  width: 1000px;
  height: 200px;
`

const Slide = styled.div`
  height: 200px;
  width: 300px;
  background-color: red;
  color: white;
`
