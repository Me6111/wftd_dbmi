


// C:\Users\user\Desktop\projects\wftd_files\react_wftd\wftd_2\src\reducers.js
import { combineReducers } from 'redux';

const initialState = {
  map: null,

  adm_units: ['country', 'state', 'city', 'zip'],
  full_loc_dict: { full_loc: [null, null, null, null] },
  full_loc: [null, null, null, null],
  adm_unit: 0,
  where_adm_unit: 0,
  cursor_outside: null,
  clickedLayers: [],
  lastZooms: [],
  hovered_loc: null,
  hovered_layer: null,
  clicked_loc: null,
  fetched_borders_data: null,
  locations_lists: { country: null, state: null, city: null, zip: null },
};

const mapReducer = (state = initialState.map, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const admUnitsReducer = (state = initialState.adm_units, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fullLocDictReducer = (state = initialState.full_loc_dict, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fullLocReducer = (state = initialState.full_loc, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const admUnitReducer = (state = initialState.adm_unit, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const whereAdmUnitReducer = (state = initialState.where_adm_unit, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cursorOutsideReducer = (state = initialState.cursor_outside, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const clickedLayersReducer = (state = initialState.clickedLayers, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const lastZoomsReducer = (state = initialState.lastZooms, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const hoveredLocReducer = (state = initialState.hovered_loc, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const hoveredLayerReducer = (state = initialState.hovered_layer, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const clickedLocReducer = (state = initialState.clicked_loc, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchedBordersDataReducer = (state = initialState.fetched_borders_data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const locationsListsReducer = (state = initialState.locations_lists, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  map: mapReducer,

  adm_units: admUnitsReducer,
  full_loc_dict: fullLocDictReducer,
  full_loc: fullLocReducer,
  adm_unit: admUnitReducer,
  where_adm_unit: whereAdmUnitReducer,
  cursor_outside: cursorOutsideReducer,
  clickedLayers: clickedLayersReducer,
  lastZooms: lastZoomsReducer,
  hovered_loc: hoveredLocReducer,
  hovered_layer: hoveredLayerReducer,
  clicked_loc: clickedLocReducer,
  fetched_borders_data: fetchedBordersDataReducer,
  locations_lists: locationsListsReducer,
});

export default rootReducer;