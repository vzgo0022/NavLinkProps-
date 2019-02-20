import { CHANGE_FILTER } from '../Constants/Constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
}

export default filter;
