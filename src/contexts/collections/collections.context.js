import { createContext } from 'react';

import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA);

export const collectionsForPreview = collections =>
  Object.keys(collections).map(key => collections[key]);

export default CollectionsContext;