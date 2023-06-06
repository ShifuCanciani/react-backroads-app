import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    {id:1, href:'home', text: 'home'},
    {id:2, href:'about', text: 'about'},
    {id:3, href:'services', text: 'services'},
    {id:4, href:'tours', text: 'tours'},
    
]

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {
        id:1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id:1,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id:1,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
]

export const tours = [
    {
        id: 1,
        images: tour1,
        date: 'august 26th, 2023',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: 6,
        cost: 2100,
    },
    {
        id: 2,
        images: tour2,
        date: 'september 30th, 2023',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: 12,
        cost: 2500,
    },
    {
        id: 3,
        images: tour3,
        date: 'october 2th, 2023',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: 21,
        cost: 5100,
    },
    {
        id: 4,
        images: tour4,
        date: 'november 15th, 2023',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: 11,
        cost: 8000,
    },


]