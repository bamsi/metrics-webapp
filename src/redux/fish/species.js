import HandleError from '../../components/UI/HandleError';

const GET_SPECIES = 'fish/species/GET_SPECIES';
const SEARCH_SPECIES = 'fish/species/SEARCH_SPECIES';

const url = '/api/species';
const initialState = [];

const getSpecies = (data) => ({
  type: GET_SPECIES,
  data,
});

const searchSpecies = (keyword) => ({
  type: SEARCH_SPECIES,
  keyword,
});

const species = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES:
      return action.data;
    case SEARCH_SPECIES: {
      const key = action.keyword;
      const result = state.filter((item) => item.species.toLowerCase().includes(key.toLowerCase()));
      return result;
    }
    default:
      return state;
  }
};

const getData = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let payload = data.map((item, index) => {
      const img = item['Image Gallery'] ? item['Image Gallery']['1'] : null;
      if (img !== null) {
        return {
          Cholesterol: item.Cholesterol,
          image: img,
          species: item['Species Name'],
          id: index + 1,
        };
      }
      return null;
    });
    payload = payload.filter(
      (item, index) => item !== null && item.image !== undefined && index < 20,
    );
    return dispatch(getSpecies(payload));
  } catch (error) {
    return <HandleError error={error} />;
  }
};

export default species;

export { getData, searchSpecies };
