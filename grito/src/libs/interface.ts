import type { Image } from 'sanity'

export interface Post {
    name: string;
    country: string;
    skillSet: string;
    level: string;
    gender: string;
    profile: string;
    skillName: string;
    _id: string;
    imgUrl?: Image;
    countryImgUrl?: Image;
}