import React from 'react';

const AppContext = React.createContext({});

let jsonData = [
    {
     "brand": "Vercase",
     "title": "Eros",
     "price": 5500,
     "imageUrl": "https://parfumdecor.ru/upload/images/92530.jpg "
    },
    {
     "brand": "Memo",
     "title": "Marfa",
     "price": 19990,
     "imageUrl": "/fr2.jpg"
    },
    {
     "brand": "Initio",
     "title": "PSYHODELIC LOVE",
     "price": 7900,
     "imageUrl": "/fr3.jpg"
    },
    {
     "brand": "Dior",
     "title": "Sauvage",
     "price": 8900,
     "imageUrl": "/fr4.webp"
    },
    {
     "brand": "Jo Malone",
     "title": "Elderflower",
     "price": 11900,
     "imageUrl": "/fr5.jpg"
    }
]

export default AppContext;