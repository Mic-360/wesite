type TilesProps = {
    text: string,
    image: string
}[];

export const Titles: TilesProps = [
    {
        text: 'beyond reality',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_sPkKSbJIQQXvtYOiE-XcSmKyDv8ZPUGuB7Ft6jdedHU-N6j68hsQvaUEw-IikQhT6s&usqp=CAU'
    },
    {
        text: 'web ar',
        image: 'https://wear-studio.com/wp-content/uploads/2022/06/Image-Tracking.jpg'
    },
    {
        text: 'try on',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiffXf9P2ffLXrIxhTA30MEFWjrMFgdS5AjvMsJEfH9fxt4pNJgGlK0RqNW4lLZJyu60&usqp=CAU'
    },
    {
        text: 'smart mirrors',
        image: 'https://images-cdn.ubuy.co.in/659d66fd92b0cf4ba45af46a-leotachi-32-x-24-inch-smart-mirror-tv.jpg'
    },
    {
        text: 'virtual dressing',
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*HP4-AQXtoo6xkfYKUJTngg.jpeg'
    },
];

type LinkProps = {
    name: string;
    path: string;
}[];

export const UrlPaths: LinkProps = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'team',
        path: '/team'
    },
    {
        name: 'product',
        path: '/product'
    },
    {
        name: 'contact',
        path: '/contact-us'
    }
]

type TileProps = {
    title: string;
    description: string;
}[];

export const TileTitles: TileProps = [
    {
        title: 'Supernova YouthX Award',
        description: "Dubai's Gitex Global 2022",
    },
    {
        title: 'Supernova YouthY Award',
        description: "Dubai's Gitex Global 2023",
    },
    {
        title: 'Supernova YouthZ Award',
        description: "Dubai's Gitex Global 2024",
    },
    {
        title: 'Supernova YouthA Award',
        description: "Dubai's Gitex Global 2025",
    },
    {
        title: 'Supernova YouthB Award',
        description: "Dubai's Gitex Global 2026",
    },
];

type TeamProps = {
    id: number;
    name: string;
    image: string;
}[];

export const TeamMembers: TeamProps = [
    {
        id: 1,
        name: 'Sohan',
        image: '/Team/sohan.jpg'
    },
    {
        id: 2,
        name: 'Puru',
        image: '/Team/puru.jpg'
    },
    {
        id: 3,
        name: 'Mohit',
        image: '/Team/mog.jpg'
    },
    {
        id: 4,
        name: 'Pratham',
        image: '/Team/pra.jpg'
    },
    {
        id: 5,
        name: 'Vineet',
        image: '/Team/giddo.jpg'
    },
    {
        id: 6,
        name: 'Modassir',
        image: '/Team/dinu.jpg'
    },
    {
        id: 7,
        name: 'Bhaumik',
        image: '/Team/mic.jpg'
    },
    {
        id: 8,
        name: 'Biswanath',
        image: '/Team/poti.jpg'
    },
    {
        id: 9,
        name: 'Debanagan',
        image: '/Team/debu.jpg'
    },
];