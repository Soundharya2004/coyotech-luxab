import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const images = [
  'https://luxab.ae/wp-content/uploads/2024/10/image-53.png',
  'https://luxab.ae/wp-content/uploads/2024/10/image-54.png',
  'https://luxab.ae/wp-content/uploads/2024/10/image-55.png',
]

function SampleNextArrow(props: any) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
      aria-label="Next slide"
    >
      <ChevronRightIcon className="h-6 w-6 text-gray-800" />
    </button>
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
      aria-label="Previous slide"
    >
      <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
    </button>
  )
}

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="outline-none">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}