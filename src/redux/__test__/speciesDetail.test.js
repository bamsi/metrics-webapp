import SpeciesDetail from "../fish/speciesDetail";

describe("Testing species details store state", () => {
  test("Should return the initial state", () => {
    expect(SpeciesDetail(undefined, {})).toEqual([]);
  });

  test("Should return updated state with species details", () => {
    const previousState = [];
    const species = [
      {
        id: 1,
        species: "White Hake",
        image: "example.jpg",
        alt: "Alt text",
        Cholesterol: "12",
        properties: {
          scientificName: "White Hake",
        },
      },
    ];
    const GET_SPECIES_DETAIL = "fish/species/GET_SPECIES_DETAIL";
    const getSpeciesDetail = (data) => ({
      type: GET_SPECIES_DETAIL,
      data,
    });

    expect(SpeciesDetail(previousState, getSpeciesDetail(species))).toEqual([
      {
        id: 1,
        species: "White Hake",
        image: "example.jpg",
        alt: "Alt text",
        Cholesterol: "12",
        properties: {
          scientificName: "White Hake",
        },
      },
    ]);
  });
});
