import { atom } from 'recoil';

export const headerHeightState = atom({
    key: 'header_height',
    default: 0,
});

export const HomeSliderArr = atom({
    key: 'home_slider_array',
    default: [
        {
            id: 0,
            title: 'Mobility_Show',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_jms2023offical_231024_1440_550.jpg',
            url: 'https://www.japan-mobility-show.com/',
        },
        {
            id: 1,
            title: 'Alphard',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_alphard_230628_1440_550.jpg',
            url: 'https://toyota.jp/alphard/?padid=from_tjptop_topmv_alphard',
        },
        {
            id: 2,
            title: 'Corolla',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_corollacross_231018_1440_550.jpg',
            url: 'https://toyota.jp/corollacross/?padid=from_tjptop_topmv_corollacross',
        },
        {
            id: 3,
            title: 'Find_Your_Future',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_jms2023_231023_1440_550.jpg',
            url: 'https://toyota.jp/info/freedominmotion/?padid=from_tjptop_topmv_freedominmotion',
        },
        {
            id: 4,
            title: 'Crown',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_crownsport_231006_1440_550.jpg',
            url: 'https://toyota.jp/crownsport/?padid=from_tjptop_topmv_crownsport',
        },
        {
            id: 5,
            title: 'Century',
            image_path:
                'https://toyota.jp/pages/contents/top/image/kv_area/tjptop_century_230906_1440_550.jpg',
            url: 'https://toyota.jp/centurynewbt/?padid=from_tjptop_topmv_centurynewbt',
        },
    ],
});
