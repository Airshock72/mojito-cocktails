
interface NavLinks {
    readonly id: string
    readonly title: string
}

export interface DrinkDetails {
  readonly name: string
  readonly country: string
  readonly detail: string
  readonly price: string
}

interface SliderList {
  readonly id: number
  readonly name: string
  readonly image: string
  readonly title: string
  readonly description: string
}

export const navLinks: Array<NavLinks> = [
  {
    id: 'cocktails',
    title: 'Cocktails'
  },
  {
    id: 'about',
    title: 'About Us'
  },
  {
    id: 'art',
    title: 'The Art'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

export const cocktailLists: Array<DrinkDetails> = [
  {
    name: 'Chapel Hill Shiraz',
    country: 'AU',
    detail: 'Battle',
    price: '$10'
  },
  {
    name: 'Caten Malbee',
    country: 'AU',
    detail: 'Battle',
    price: '$49'
  },
  {
    name: 'Rhino Pale Ale',
    country: 'CA',
    detail: '750 ml',
    price: '$20'
  },
  {
    name: 'Irish Guinness',
    country: 'IE',
    detail: '600 ml',
    price: '$29'
  }
]

export const mockTailLists: Array<DrinkDetails> = [
  {
    name: 'Tropical Bloom',
    country: 'US',
    detail: 'Battle',
    price: '$10'
  },
  {
    name: 'Passionfruit Mint',
    country: 'US',
    detail: 'Battle',
    price: '$49'
  },
  {
    name: 'Citrus Glow',
    country: 'CA',
    detail: '750 ml',
    price: '$20'
  },
  {
    name: 'Lavender Fizz',
    country: 'IE',
    detail: '600 ml',
    price: '$29'
  }
]

export const goodLists: Array<string> = [
  'Handpicked ingredients',
  'Signature techniques',
  'Bartending artistry in action',
  'Freshly muddled flavors'
]

export const featureLists: Array<string> = [
  'Perfectly balanced blends',
  'Garnished to perfection',
  'Ice-cold every time',
  'Expertly shaken & stirred'
]

export const sliderLists: Array<SliderList> = [
  {
    id: 1,
    name: 'Classic Mojito',
    image: '/images/drink1.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
        'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.'
  },
  {
    id: 2,
    name: 'Raspberry Mojito',
    image: '/images/drink2.png',
    title: 'A Zesty Classic That Never Fails',
    description:
        'The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.'
  },
  {
    id: 3,
    name: 'Violet Breeze',
    image: '/images/drink3.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
        'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.'
  },
  {
    id: 4,
    name: 'Curacao Mojito',
    image: '/images/drink4.png',
    title: 'Crafted With Care, Poured With Love',
    description:
        'Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you\'re celebrating or simply relaxing.'
  }
]
