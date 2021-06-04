import React from 'react';
import { CarouselItem } from '../../CarouselItem';
import {StyledSearch} from "./StyledSearchItem"

export function CSearch({ list }) {
  if (!list) return null;
  if (list.scraperRes) {
    list.descriptions = list.scraperRes.descriptions;
    list.images = list.scraperRes.images;
    list.prices = list.scraperRes.prices;
  }
  list?.descriptions?.splice(0, 1);
  return (
    <StyledSearch>
        <h3>{list.title}</h3>
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
    </StyledSearch>
  );
}
