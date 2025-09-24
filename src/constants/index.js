import borderImg from '../img/Rectangle39625.webp';
import spaceImg from '../img/Rectangle396278.webp';
import dreamersImg from '../img/Rectangle39613.webp';
import fulfillImg from '../img/Rectangle39627.webp';

export const content = {
    menu: {
        home: 'Home',
        product: 'Product',
        offers: 'Offers',
    },
    buttons: {
        learn: 'Learn more',
        read: 'Read more',
        adventure: 'Exciting space adventure!',
    },
    title: {
        title: 'Discover the vast expanses of space',
        descr: 'Where the possibilities are endless!',
    },
    description: {
        title: 'Embark on a space journey',
        descr: 'Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.',
    },
};

export const offers = [
    {
        id: 'border',
        title: 'Move the borders of reality!',
        description: "Go on a space adventure - it's possible with us!",
        variant: 'wide',
        theme: 'nebula',
        bgImage: borderImg,
    },
    {
        id: 'space',
        title: 'Space is not just stars and planets',
        description: 'Go on a space adventure',
        variant: 'default',
        theme: 'onyx',
        bgImage: spaceImg,
    },
    {
        id: 'dreamers',
        title: 'For those who dream of stars',
        description: 'Our offer: make your dream come true',
        variant: 'default',
        theme: 'twilight',
        bgImage: dreamersImg,
    },
    {
        id: 'fulfill',
        title: 'Fulfill your fantastic dreams',
        description: 'Space has never been so close',
        variant: 'wide',
        theme: 'aurora',
        bgImage: fulfillImg,
    },
];
