const punk = [
  {
    id: 301,
    name: "Small Batch: Dry-hopped Pilsner",
    tagline: "Dry-hopped lager.",
    first_brewed: "2018",
    description:
      "A BrewDog bar exclusive draft lager, brewed with Weihenstephan's lager yeast, and dry-hopped with the contemporary German variety Saphir; this lager has been lightly centrifuged and packaged at just under 28 days in tank.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.7,
    ibu: 37,
    target_fg: 1006,
    target_og: 1042,
    ebc: 5,
    srm: 3,
    ph: 4.4,
    attenuation_level: 86,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 50 }],
      fermentation: { temp: { value: 11, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pilsner", amount: { value: 3.36, unit: "kilograms" } },
        { name: "Carapils", amount: { value: 0.24, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Magnum",
          amount: { value: 12, unit: "grams" },
          add: "70",
          attribute: "Bittering",
        },
        {
          name: "Spalter",
          amount: { value: 15, unit: "grams" },
          add: "30",
          attribute: "Flavour",
        },
        {
          name: "Spalter",
          amount: { value: 15, unit: "grams" },
          add: "10",
          attribute: "Flavour",
        },
        {
          name: "Saphire",
          amount: { value: 30, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Saphire",
          amount: { value: 30, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
      ],
      yeast: "Saflager W-34/70",
    },
    food_pairing: [
      "Grilled salmon tacos",
      "Chicken and pesto pasta",
      "Ham and mustard crisps",
    ],
    brewers_tips:
      'Before dry hopping, if you aren\'t happy with the "green" beer, drink it (or dump it) and make a new one to avoid wasting your premium hops on something flawed.',
    contributed_by: "John Jenkman <johnjenkman>",
  },
];
