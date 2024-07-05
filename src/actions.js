

// C:\Users\user\Desktop\projects\wftd_files\react_wftd\wftd_2\src\actions.js


// Action types
export const UPDATE_MAP = 'UPDATE_MAP';

export const UPDATE_ADM_UNITS = 'UPDATE_ADM_UNITS';
export const UPDATE_FULL_LOC_DICT = 'UPDATE_FULL_LOC_DICT';
export const UPDATE_FULL_LOC = 'UPDATE_FULL_LOC';
export const UPDATE_ADM_UNIT = 'UPDATE_ADM_UNIT';
export const UPDATE_WHERE_ADM_UNIT = 'UPDATE_WHERE_ADM_UNIT';
export const UPDATE_CURSOR_OUTSIDE = 'UPDATE_CURSOR_OUTSIDE';
export const UPDATE_CLICKED_LAYERS = 'UPDATE_CLICKED_LAYERS';
export const UPDATE_LAST_ZOOMS = 'UPDATE_LAST_ZOOMS';
export const UPDATE_HOVERED_LOC = 'UPDATE_HOVERED_LOC';
export const UPDATE_HOVERED_LAYER = 'UPDATE_HOVERED_LAYER';
export const UPDATE_CLICKED_LOC = 'UPDATE_CLICKED_LOC';
export const UPDATE_FETCHED_BORDERS_DATA = 'UPDATE_FETCHED_BORDERS_DATA';
export const UPDATE_WHERE_LOC_BORDERS = 'UPDATE_WHERE_LOC_BORDERS';








// Action creators
export const updateMap = (newMap) => ({
  type: UPDATE_MAP,
  payload: newMap,
});


export const updateAdmUnits = (newAdmUnits) => ({
  type: UPDATE_ADM_UNITS,
  payload: newAdmUnits,
});

export const updateFullLocDict = (newFullLocDict) => ({
  type: UPDATE_FULL_LOC_DICT,
  payload: newFullLocDict,
});

export const updateFullLoc = (newFullLoc) => ({
  type: UPDATE_FULL_LOC,
  payload: newFullLoc,
});

export const updateAdmUnit = (newAdmUnit) => ({
  type: UPDATE_ADM_UNIT,
  payload: newAdmUnit,
});

export const updateWhereAdmUnit = (newWhereAdmUnit) => ({
  type: UPDATE_WHERE_ADM_UNIT,
  payload: newWhereAdmUnit,
});

export const updateCursorOutside = (newCursorOutside) => ({
  type: UPDATE_CURSOR_OUTSIDE,
  payload: newCursorOutside,
});

export const updateClickedLayers = (newClickedLayers) => ({
  type: UPDATE_CLICKED_LAYERS,
  payload: newClickedLayers,
});

export const updateLastZooms = (newLastZooms) => ({
  type: UPDATE_LAST_ZOOMS,
  payload: newLastZooms,
});

export const updateHoveredLoc = (newHoveredLoc) => ({
  type: UPDATE_HOVERED_LOC,
  payload: newHoveredLoc,
});

export const updateHoveredLayer = (newHoveredLayer) => ({
  type: UPDATE_HOVERED_LAYER,
  payload: newHoveredLayer,
});

export const updateClickedLoc = (newClickedLoc) => ({
  type: UPDATE_CLICKED_LOC,
  payload: newClickedLoc,
});

export const updateFetchedBordersData = (newFetchedBordersData) => ({
  type: UPDATE_FETCHED_BORDERS_DATA,
  payload: newFetchedBordersData,
});

export const updateWhereLocBorders = (newWhereLocBorders) => ({
  type: UPDATE_WHERE_LOC_BORDERS,
  payload: newWhereLocBorders,
});


