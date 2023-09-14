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
    <Root>
      <BannerContainer ref={sliderRef} className="keen-slider">
        <Slide className="keen-slider__slide number-slide1">1</Slide>
        <Slide2 className="keen-slider__slide number-slide2">
          Learn React for the feature
        </Slide2>
        <Slide3 className="keen-slider__slide number-slide2">
          Learn Java for the feature
        </Slide3>
        <Slide4 className="keen-slider__slide number-slide2">
          Learn Java for the feature
        </Slide4>
        <Slide className="keen-slider__slide number-slide5">5</Slide>
        <Slide className="keen-slider__slide number-slide6">6</Slide>
      </BannerContainer>
    </Root>
  )
}

const BannerContainer = styled.div``

const Root = styled.div`
  width: 1000px;
  height: 200px;
`

const Slide = styled.div`
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
  color: white;
`

const Slide2 = styled.div`
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 225, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
  color: white;
`
const Slide3 = styled.div`
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
  color: white;
`
const Slide4 = styled.div`
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  background: rgb(184, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  color: white;
`
