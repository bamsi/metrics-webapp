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
  try {
    const response = await fetch(`${url}/${name}`);
    const data = await response.json();
    const payload = data.map((item, index) => ({
      id: index + 1,
      species: item['Species Name'],
      image: item['Image Gallery']['1'].src,
      alt: item['Image Gallery']['1'].alt,
      Cholesterol: item.Cholesterol,
      properties: {
        scientificName: item['Scientific Name'],
        Color: item.Color,
        Cholesterol: item.Cholesterol,
        Carbohydrate: item.Carbohydrate,
        Calories: item.Calories,
        Sodium: item.Sodium,
        Protein: item.Protein,
        Selenium: item.Selenium,
      },
    }));
    return dispatch(getSpeciesDetail(payload));
  } catch (err) {
    return alert(err.message);
  }
};

export default speciesDetails;

export { getDetails };
