export const questions = [
    {
        name: 'preferences',
        question: 'How do you drink your coffee?',
        answers: [
            {
                title: 'Capsules',
                description: 'Compatible with Nespresso systems and similar brewers'
            },
            {
                title: 'Filter',
                description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                title: 'Espresso',
                description: 'Dense and finely ground beans for an intense, flavorful experience'
            }
        ]
    },
    {
        name: 'beanType',
        question: 'What type of coffee?',
        answers: [
            {
                title: 'Single Origin',
                description: 'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                title: 'Decaf',
                description: 'Just like regular coffee, except the caffeine has been removed'
            },
            {
                title: 'Blended',
                description: 'Combination of two or three dark roasted beans of organic coffees'
            }
        ]
    },
    {
        name: 'quantity',
        question: 'How much would you like?',
        answers: [
            {
                title: '250g',
                description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                title: '500g',
                description: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                title: '1000g',
                description: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }
        ]
    },
    {
        name: 'grindOption',
        question: 'Want us to grind them?',
        answers: [
            {
                title: 'Wholebean',
                description: 'Best choice if you cherish the full sensory experience'
            },
            {
                title: 'Filter',
                description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
            },
            {
                title: 'Cafetiére',
                description: 'Course ground beans specially suited for french press coffee'
            }
        ]
    },
    {
        name: 'deliveries',
        question: 'How often should we deliver?',
        answers: [
            {
                title: 'Every week',
                frequency: 'weekly',
                description: 'per shipment. Includes free first-class shipping.'
            },
            {
                title: 'Every 2 weeks',
                frequency: 'biWeekly',
                description: 'per shipment. Includes free priority shipping.'
            },
            {
                title: 'Every month',
                frequency: 'monthly',
                description: 'per shipment. Includes free priority shipping.'
            }
        ]
    }

]


export const headquarters = [
    {
        country: 'United Kingdom',
        logo: './assets/Aboutus/illustration-uk.svg',
        street: '68  Asfordby Rd',
        city: 'Alcaston',
        region: 'SY6 1YA',
        phone: '+44 1241 918425'
    },
    {
        country: 'Canada',
        logo: './assets/Aboutus/illustration-canada.svg',
        street: '1528  Eglinton Avenue',
        city: 'Toronto',
        region: 'Ontario M4P 1A6',
        phone: '+1 416 485 2997'
    },
    {
        country: 'Australia',
        logo: './assets/Aboutus/illustration-australia.svg',
        street: '36 Swanston Street',
        city: 'Kewell',
        region: 'Victoria',
        phone: '+61 4 9928 3629'
    }
]