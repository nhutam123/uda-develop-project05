import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styled from 'styled-components'
import { Images } from '../../../shares/images'
import { banners } from '../../../shares/mooc/banner'

const { BannerImage } = Images

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
        spacing: 20
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
          }, 5000)
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
        {banners.map((banner) => (
          <Slide1
            image={banner.image}
            key={banner.id}
            className="keen-slider__slide number-slide2"
          >
            <TextContainer>
              <div>Make Your Dream</div>
              <div>Home a Reality</div>
            </TextContainer>
          </Slide1>
        ))}
      </BannerContainer>
    </Root>
  )
}

const BannerContainer = styled.div``

const Root = styled.div`
  width: 1000px;
  height: 300px;
  margin-bottom: 20px;
`

const Slide1 = styled.div<{ image: string }>`
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
  display: flex;
  justify-content: end;

  height: 300px;
  width: 300px;
  background: linear-gradient(to right, transparent, #f5f8f5) no-repeat center,
    url(${(props) => props.image});
  background-size: cover;

  color: #2e2d2d;
  font-weight: bold;
  position: relative;
`
const TextContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  text-shadow: 2px 2px 8px #ccc;
`
