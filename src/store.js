



// C:\Users\user\Desktop\projects\wftd_files\react_wftd\wftd_2\src\store.js
// store.js
import { createStore } from 'redux';

// Define initial state
const initialState = {
  map: null,

  adm_units: ['country', 'state', 'city', 'zip'],
  full_loc: ['', '', '', ''],
  adm_unit: 0,
  where_adm_unit: -1,
  cursor_outside: null,
  clickedLayers: [],
  lastZooms: [],
  hovered_loc: null,
  hovered_layer: null,
  clicked_loc: null,
  fetched_borders_data: null,
  where_loc_borders: null,
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MAP':
      return { ...state, map: action.payload };

    case 'UPDATE_ADM_UNITS':
      return { ...state, adm_units: action.payload };
    case 'UPDATE_FULL_LOC':
      return { ...state, full_loc: action.payload };
    case 'UPDATE_ADM_UNIT':
      return { ...state, adm_unit: action.payload };
    case 'UPDATE_WHERE_ADM_UNIT':
      return { ...state, where_adm_unit: action.payload };
    case 'UPDATE_CURSOR_OUTSIDE':
      return { ...state, cursor_outside: action.payload };
    case 'UPDATE_CLICKED_LAYERS':
      return { ...state, clickedLayers: action.payload };
    case 'UPDATE_LAST_ZOOMS':
      return { ...state, lastZooms: action.payload };
    case 'UPDATE_HOVERED_LOC':
      return { ...state, hovered_loc: action.payload };
    case 'UPDATE_HOVERED_LAYER':
      return { ...state, hovered_layer: action.payload };
    case 'UPDATE_CLICKED_LOC':
      return { ...state, clicked_loc: action.payload };
    case 'UPDATE_FETCHED_BORDERS_DATA':
      return { ...state, fetched_borders_data: action.payload };
    case 'UPDATE_WHERE_LOC_BORDERS':
      return { ...state, where_loc_borders: action.payload };
    
    
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;