import React, { useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';
import * as carousels from '../Carousels';
import { StyledWrapper } from './StyledShoppingGrid';
import { Spinner } from '../../../../components';
import { getItemsByQuery } from '../../../../network';
import 'react-multi-carousel/lib/styles.css';
const allData = {
  funny: '',
  nice: '',
  clothes: '',
  tech: '',
  food: '',
  home: '',
  pets: '',
};

export function ShoppingGrid() {
  let baseCatalogueQueries;
  const [lastSearch] = useState(localStorage.getItem('last_search'));
  lastSearch
    ? (baseCatalogueQueries = [
        lastSearch,
        'nice',
        'clothes',
        'tech',
        'food',
        'home',
        'pets',
      ])
    : (baseCatalogueQueries = [
        'funny',
        'nice',
        'clothes',
        'tech',
        'food',
        'home',
        'pets',
      ]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState('');
  const [allItems, setAllItems] = useState(allData);
  const [searchItems, setSearchItems] = useState('');
  const setters = {
    setSearchItems,
    setShowSpinner,
    setError,
  };
  const batchQuery = async (query: string) => {
    const res = await getItemsByQuery(query);
    if (res !== 'ERROR') {
      allData[query] = res;
      setAllItems(allData);
    } else {
      setError('Apologies! Our servers are experiencing technical issues.');
    }
  };

  useEffect(() => {
    (async () => {
      setShowSpinner(true);
      await Promise.all(
        baseCatalogueQueries.map(async (query: string) => {
          await batchQuery(query);
        }),
      );
      setShowSpinner(false);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Spinner VisualComponent={''} error={error} show={showSpinner}>
      <Header setters={setters} />
      {!searchItems && allItems.pets ? (
        <StyledWrapper>
          {lastSearch ? (
            <carousels.COne list={allItems[lastSearch]} lastSearch={lastSearch} />
          ) : (
            allItems.funny && <carousels.COne list={allItems.funny} lastSearch={lastSearch} />
          )}
          {allItems.nice && <carousels.CTwo list={allItems.nice} />}
          {allItems.clothes && <carousels.CThree list={allItems.clothes} />}
          {allItems.tech && <carousels.CFour list={allItems.tech} />}
          {allItems.food && <carousels.CSix list={allItems.food} />}
          {allItems.home && <carousels.CSeven list={allItems.home} />}
          {allItems.pets && <carousels.CEight list={allItems.pets} />}
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          {searchItems && <carousels.CSearch list={searchItems} />}
        </StyledWrapper>
      )}
    </Spinner>
  );
}
