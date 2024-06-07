import Dropdown from 'src/components/Dropdown';

import { useProductListingContext } from './ProductListingContext';
import { SORT_OPTIONS } from 'src/constants';

const SortByFilter = () => {
  const { onSortChange, selectedSort } = useProductListingContext();
  return (
    <Dropdown
      options={SORT_OPTIONS}
      onSelect={onSortChange}
      value={selectedSort}
    />
  );
};

export default SortByFilter;
