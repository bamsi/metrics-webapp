const GET_SPECIES = 'fish/species/GET_SPECIES';

const url = '/api/species';
const initialState = [];

const getSpecies = (data) => ({
  type: GET_SPECIES,
  data,
});

const species = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES:
      return action.data;
    default:
      return state;
  }
};

const getData = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const payload = data.map((item, index) => ({
      Cholesterol: item.Cholesterol,
      image: item['Image Gallery'],
      species: item['Species Name'],
      id: index + 1,
    }));
    return dispatch(getSpecies(payload));
  } catch (err) {
    return alert(console.message);
  }
};

export default species;

export { getData };
