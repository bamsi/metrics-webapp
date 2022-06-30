const GET_SPECIES_DETAIL = 'fish/species/GET_SPECIES_DETAIL';

const url = '/api/species';
const initialState = [];

const getSpeciesDetail = (data) => ({
  type: GET_SPECIES_DETAIL,
  data,
});

const speciesDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES_DETAIL:
      return action.data;
    default:
      return state;
  }
};

const getDetails = (name) => async (dispatch) => {
  const response = await fetch(`${url}/${name}`);
  const data = await response.json();
  return dispatch(getSpeciesDetail(data));
};

export default speciesDetails;

export { getDetails };
