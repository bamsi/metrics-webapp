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
  } catch (err) {
    return alert(err.message);
  }
};

export default species;

export { getData };
