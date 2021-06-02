import React, { useEffect, useState } from 'react';
import * as carousels from '../Carousels';
import { StyledWrapper } from './StyledShoppingGrid';
import { Spinner } from '../../../../components';
import { getItemsByQuery } from '../../../../network';
import 'react-multi-carousel/lib/styles.css';
const baseCatalogueQueries = ['funny', 'nice', 'clothes', 'tech', 'new'];
const allData = {
  funny: '',
  nice: '',
  clothes: '',
  tech: '',
  new: '',
};

export function ShoppingGrid() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState('');
  const [allItems, setAllItems] = useState(allData);

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
  }, []);

  return (
    <Spinner VisualComponent={''} error={error} show={showSpinner}>
      <StyledWrapper>
        {allItems.funny && <carousels.COne list={allItems.funny} />}
        {allItems.nice && <carousels.CTwo list={allItems.nice} />}
        {allItems.clothes && <carousels.CThree list={allItems.clothes} />}
        {allItems.tech && <carousels.CFour list={allItems.tech} />}
        {allItems.new && <carousels.CFive list={allItems.new} />}
      </StyledWrapper>
    </Spinner>
  );
}
