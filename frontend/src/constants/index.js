import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1к+', label: 'Брендов' },
    { value: '500+', label: 'Магазинов' },
    { value: '250к+', label: 'Клиентов' },
];

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan High",
        price: "$200",
    },
    {
        id: 2,
        imgURL: shoe5,
        name: "Nike Dunk Low",
        price: "$210",
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Max Plus",
        price: "$235",
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Max Pulse",
        price: "$230",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Бесплатная доставка",
        subtext: "Наслаждайтесь удобными покупками с нашей бесплатной службой доставки."
    },
    {
        imgURL: shieldTick,
        label: "Безопасная оплата",
        subtext: "Совершайте транзакции без проблем с помощью наших безопасных способов оплаты."
    },
    {
        imgURL: support,
        label: "Любовь к покупателям",
        subtext: "Наша преданная своему делу команда здесь, чтобы помогать вам на каждом шагу."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Максим К.',
        rating: 4.9,
        feedback: "Внимание к деталям и качество товара превзошли мои ожидания. Настоятельно рекомендую!"
    },
    {
        imgURL: customer2,
        customerName: 'Анастасия Л.',
        rating: 5.0,
        feedback: "Товар не только оправдал, но и превзошел мои ожидания. Я обязательно буду постоянным клиентом!"
    }
];


export const footerLinks = [
    {
        title: "Товары",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Помощь",
        links: [
            { name: "О нас", link: "/" },
            { name: "FAQ", link: "/" },
            { name: "Оплата и доставка", link: "/" },
            { name: "Политика конфиденциальности", link: "/" },
        ],
    },
    {
        title: "Связь с нами",
        links: [
            { name: "support@nike.com", link: "mailto:support@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];