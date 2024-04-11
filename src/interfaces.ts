
export interface IData {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    },
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    },
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: [
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        }
    ],
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    },
    others:
    [
        {
            slug: string;
            name: string;
            image: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        },
        {
            slug: string;
            name: string;
            image: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        },
        {
            slug: string;
            name: string;
            image: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        }
    ],
}

export type ItemPropsType = {
    cartitem: CartItemType;
}


export type PageItemPropsType = {
    filtredData: IData;
    status?: string;

}


export type GlobalStateType = {
    screenWidth: number;
    category: string[];
    sidebar: boolean;
    setCart: React.Dispatch<React.SetStateAction<boolean>>;
    cart: boolean;
    toggleSidebar: () => void;
    data: IData[];
    setSidebar: (value: React.SetStateAction<boolean>) => void;
    setCartItems: (volue: CartItemType[]) => void;
    cartItems: CartItemType[];
}


export type CartItemType = {
    id: number;
    price: number;
    img: string;
    quantity: number;
    totalPrice: number;
    cartItemName: string;
}


export type LikeGalleryPropsType = {
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    }[];
}


export type FeaturesSectionPropsType = {
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
}
