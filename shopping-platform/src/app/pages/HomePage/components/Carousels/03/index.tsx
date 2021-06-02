import React from 'react';
import Carousel from 'react-multi-carousel';
import { CarouselItem } from '../../CarouselItem';
const responsive = {
  desktop: {
    breakpoint: {
      max: 1700,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  largeDesktop: {
    breakpoint: { max: 1970, min: 1700 },
    partialVisibilityGutter: 40,
    items: 4,
  },
  superlargeDesktop: {
    breakpoint: { max: 2450, min: 1970 },
    partialVisibilityGutter: 40,
    items: 5,
  },
  largestDesktop: {
    breakpoint: { max: 4000, min: 2450 },
    partialVisibilityGutter: 40,
    items: 7,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};
export function CThree({ list }) {
  if (!list) return null;
  list?.descriptions.splice(0, 1);
  console.log(list);
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        draggable={false}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        showDots={false}
        slidesToSlide={2}
        swipeable={true}
        responsive={responsive}
      >
        {list?.descriptions?.map((description: any, index: string | number) => {
          return (
            <CarouselItem
              key={`${description}${index}`}
              description={description}
              image={list.images[index]}
              price={list.prices[index]}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
