import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '£36',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '£34',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '£25',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '£6',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Guinness',
    price: '£6',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '£10',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '£10',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '£10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '£12',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '£12',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '2012.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '1998',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '1999',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '2016',
  },
];

export default { wines, cocktails, awards };
