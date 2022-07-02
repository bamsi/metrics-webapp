import Species, { searchSpecies } from '../fish/species';

describe('Testing Species store state', () => {
  test('should return the initial state', () => {
    expect(Species(undefined, {})).toEqual([]);
  });

  test('Should return updated state with species', () => {
    const previousState = [];
    const species = [
      {
        id: 1,
        Cholesterol: '12 gm',
        image: 'example.jpg',
        species: 'White Hake',
      },
    ];
    const GET_SPECIES = 'fish/species/GET_SPECIES';
    const getSpecies = (data) => ({
      type: GET_SPECIES,
      data,
    });

    expect(Species(previousState, getSpecies(species))).toEqual([
      {
        id: 1,
        Cholesterol: '12 gm',
        image: 'example.jpg',
        species: 'White Hake',
      },
    ]);
  });

  test('Should return species with species name like the search keyword', () => {
    const species = [
      {
        id: 1,
        Cholesterol: '12 gm',
        image: 'example.jpg',
        species: 'White Hake',
      },
      {
        id: 2,
        Cholesterol: '13 gm',
        image: 'example2.jpg',
        species: 'Sailfish',
      },
    ];
    expect(Species(species, searchSpecies('white'))).toEqual([
      {
        id: 1,
        Cholesterol: '12 gm',
        image: 'example.jpg',
        species: 'White Hake',
      },
    ]);
  });
});
