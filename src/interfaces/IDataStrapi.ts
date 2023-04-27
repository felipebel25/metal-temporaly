export interface IDataStrapi {
    data: Data;
    meta: Meta;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    title: string;
    placeId: string;
    auto_generate_pages: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: null;
    website_pages: WebsitePages;
}

export interface WebsitePages {
    data: WebsitePagesDatum[];
}

export interface WebsitePagesDatum {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    title: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    sections: Section[];
}

export interface Section {
    id: number;
    __component: string;
    title?: string;
    description?: string;
    button_text?: ButtonText;
    video?: Images;
    subtitle?: string;
    array_strings?: string[];
    images: Images;
    laser_engraving?: string;
    shop_now?: ButtonText;
}

export interface ButtonText {
    id: number;
    text: string;
    link: string;
}

export interface Images {
    data: ImagesDatum[];
}

export interface ImagesDatum {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number | null;
    height: number | null;
    formats: Formats ;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface Large {
    ext: EXT;
    url: string;
    hash: string;
    mime: MIME;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export enum EXT {
    PNG = ".png",
}

export enum MIME {
    ImagePNG = "image/png",
}

export interface Meta {
}

export interface PropsPage {
    data: Section[];
}
export interface PropsSection {
    data: Section;
}