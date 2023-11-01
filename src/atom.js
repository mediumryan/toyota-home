import { atom } from 'recoil';

// For Header //
export const headerHeightState = atom({
    key: 'header_height',
    default: 0,
});

// For Home //
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

// For Line-Up //
export const carTypeArr = atom({
    key: 'car_type_array',
    default: [
        {
            id: 0,
            type: 'compact',
            state: true,
            japanese: 'コンパクト',
        },
        {
            id: 1,
            type: 'mini-ban',
            state: false,
            japanese: 'ミニバン',
        },
        {
            id: 2,
            type: 'sedan',
            state: false,
            japanese: 'セダン',
        },
        {
            id: 3,
            type: 'wagon',
            state: false,
            japanese: 'ワゴン',
        },
        {
            id: 4,
            type: 'suv',
            state: false,
            japanese: 'SUV',
        },
        {
            id: 5,
            type: 'sports',
            state: false,
            japanese: 'スポーツ',
        },
        {
            id: 6,
            type: 'century',
            state: false,
            japanese: 'センチュリー',
        },
        {
            id: 7,
            type: 'gr',
            state: false,
            japanese: 'GR/GR SPORT',
        },
        {
            id: 8,
            type: 'pixis',
            state: false,
            japanese: '軽自動車',
        },
        {
            id: 9,
            type: 'mobility',
            state: false,
            japanese: '小型モビリティ',
        },
    ],
});

export const nowCarType = atom({
    key: 'now_car_type',
    default: 'compact',
});

export const cars = atom({
    key: 'car_compact',
    default: [
        {
            id: 0,
            name: 'aqua',
            japanese: 'アクア',
            url: 'https://toyota.jp/aqua/?padid=from_tjptop_carlineup_car_aqua',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/aqua/30.png',
            type: 'compact',
        },
        {
            id: 1,
            name: 'corollasport',
            japanese: 'カローラ スポーツ',
            url: 'https://toyota.jp/corollasport/?padid=from_tjptop_carlineup_car_corollasport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corollasport/30.png',
            type: 'compact',
        },
        {
            id: 2,
            name: 'gryaris',
            japanese: 'GRヤリス',
            url: 'https://toyota.jp/gryaris/?padid=from_tjptop_carlineup_car_gryaris',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gryaris/30.png',
            type: 'compact',
        },
        {
            id: 3,
            name: 'yaris',
            japanese: 'ヤリス',
            url: 'https://toyota.jp/yaris/?padid=from_tjptop_carlineup_car_yaris',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/yaris/30.png',
            type: 'compact',
        },
        {
            id: 4,
            name: 'roomy',
            japanese: 'ルーミー',
            url: 'https://toyota.jp/roomy/?padid=from_tjptop_carlineup_car_roomy',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/roomy/30.png',
            type: 'compact',
        },
        {
            id: 5,
            name: 'alphard',
            japanese: 'アルファード',
            url: 'https://toyota.jp/alphard/?padid=from_tjptop_carlineup_car_alphard',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/alphard/30.png',
            type: 'mini-ban',
        },
        {
            id: 6,
            name: 'vellfire',
            japanese: 'ヴェルファイア',
            url: 'https://toyota.jp/vellfire/?padid=from_tjptop_carlineup_car_vellfire',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/vellfire/30.png',
            type: 'mini-ban',
        },
        {
            id: 7,
            name: 'voxy',
            japanese: 'ヴォクシー',
            url: 'https://toyota.jp/voxy/?padid=from_voxy_top_navi_top',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gryaris/30.png',
            type: 'mini-ban',
        },
        {
            id: 8,
            name: 'granace',
            japanese: 'グランエース',
            url: 'https://toyota.jp/granace/?padid=from_tjptop_carlineup_car_granace',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/granace/30.png',
            type: 'mini-ban',
        },
        {
            id: 9,
            name: 'sienta',
            japanese: 'シエンタ',
            url: 'https://toyota.jp/sienta/?padid=from_tjptop_carlineup_car_sienta',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/sienta/30.png',
            type: 'mini-ban',
        },
        {
            id: 10,
            name: 'noah',
            japanese: 'ノア',
            url: 'https://toyota.jp/noah/?padid=from_tjptop_carlineup_car_noah',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/noah/30.png',
            type: 'mini-ban',
        },
        {
            id: 11,
            name: 'hiacewagon',
            japanese: 'ハイエース ワゴン',
            url: 'https://toyota.jp/hiacewagon/?padid=from_tjptop_carlineup_car_hiacewagon',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/hiacewagon/30.png',
            type: 'mini-ban',
        },
        {
            id: 12,
            name: 'camry',
            japanese: 'カムリ',
            url: 'https://toyota.jp/camry/?padid=from_tjptop_carlineup_car_camry',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/camry/30.png',
            type: 'sedan',
        },
        {
            id: 13,
            name: 'corolla',
            japanese: 'カローラ',
            url: 'https://toyota.jp/corolla/?padid=from_tjptop_carlineup_car_corolla',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corolla/30.png',
            type: 'sedan',
        },
        {
            id: 14,
            name: 'corollaaxio',
            japanese: 'カローラ アクシオ',
            url: 'https://toyota.jp/corollaaxio/?padid=from_tjptop_carlineup_car_corollaaxio',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corollaaxio/30.png',
            type: 'sedan',
        },
        {
            id: 15,
            name: 'prius',
            japanese: 'プリウス',
            url: 'https://toyota.jp/prius/?padid=from_tjptop_carlineup_car_prius',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/prius/30.png',
            type: 'sedan',
        },
        {
            id: 16,
            name: 'mirai',
            japanese: 'MIRAI',
            url: 'https://toyota.jp/mirai/?padid=from_tjptop_carlineup_car_mirai',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/mirai/30.png',
            type: 'sedan',
        },
        {
            id: 17,
            name: 'corollatouring',
            japanese: 'カローラ ツーリング',
            url: 'https://toyota.jp/corollatouring/?padid=from_tjptop_carlineup_car_corollatouring',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corollatouring/30.png',
            type: 'wagon',
        },
        {
            id: 18,
            name: 'corollafielder',
            japanese: 'カローラ フィールダー',
            url: 'https://toyota.jp/corollafielder/?padid=from_tjptop_carlineup_car_corollafielder',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corollafielder/30.png',
            type: 'wagon',
        },
        {
            id: 19,
            name: 'corollacross',
            japanese: 'カローラ クロス',
            url: 'https://toyota.jp/corollacross/?padid=from_tjptop_carlineup_car_corollacross',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/corollacross/30.png',
            type: 'suv',
        },
        {
            id: 20,
            name: 'crown',
            japanese: 'クラウン（クロスオーバー）',
            url: 'https://toyota.jp/crown/?padid=from_tjptop_carlineup_car_crown',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/crown/30.png',
            type: 'suv',
        },
        {
            id: 21,
            name: 'crownsport',
            japanese: 'クラウン（スポーツ）',
            url: 'https://toyota.jp/crownsport/?padid=from_tjptop_carlineup_car_crownsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/crownsport/30.png',
            type: 'suv',
        },
        {
            id: 22,
            name: 'hilux',
            japanese: 'ハイラックス',
            url: 'https://toyota.jp/hilux/?padid=from_tjptop_carlineup_car_hilux',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/hilux/30.png',
            type: 'suv',
        },
        {
            id: 23,
            name: 'harrier',
            japanese: 'ハリアー',
            url: 'https://toyota.jp/harrier/?padid=from_tjptop_carlineup_car_harrier',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/harrier/30.png',
            type: 'suv',
        },
        {
            id: 24,
            name: 'bz4x',
            japanese: 'bZ4X',
            url: 'https://toyota.jp/bz4x/?padid=from_tjptop_carlineup_car_bz4x',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/bz4x/30.png',
            type: 'suv',
        },
        {
            id: 25,
            name: 'yariscross',
            japanese: 'ヤリス クロス',
            url: 'https://toyota.jp/yariscross/?padid=from_tjptop_carlineup_car_yariscross',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/yariscross/30.png',
            type: 'suv',
        },
        {
            id: 26,
            name: 'raize',
            japanese: 'ライズ',
            url: 'https://toyota.jp/raize/?padid=from_tjptop_carlineup_car_raize',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/raize/30.png',
            type: 'suv',
        },
        {
            id: 27,
            name: 'rav4',
            japanese: 'RAV4',
            url: 'https://toyota.jp/rav4/?padid=from_tjptop_carlineup_car_rav4',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/rav4/30.png',
            type: 'suv',
        },
        {
            id: 28,
            name: 'landcruiser',
            japanese: 'ランドクルーザー',
            url: 'https://toyota.jp/landcruiser/?padid=from_tjptop_carlineup_car_landcruiser',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/landcruiser/30.png',
            type: 'suv',
        },
        {
            id: 29,
            name: 'landcruiserprado',
            japanese: 'ランドクルーザー プラド',
            url: 'https://toyota.jp/landcruiserprado/?padid=from_tjptop_carlineup_car_landcruiserprado',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/landcruiserprado/30.png',
            type: 'suv',
        },
        {
            id: 30,
            name: 'copengrsport',
            japanese: 'コペン GR SPORT',
            url: 'https://toyota.jp/copen/?padid=from_tjptop_carlineup_car_copengrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/copengrsport/30.png',
            type: 'sports',
        },
        {
            id: 31,
            name: 'grcorolla',
            japanese: 'GRカローラ',
            url: 'https://toyota.jp/grcorolla/?padid=from_tjptop_carlineup_car_grcorolla',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/grcorolla/30.png',
            type: 'sports',
        },
        {
            id: 32,
            name: 'gr86',
            japanese: 'GR86',
            url: 'https://toyota.jp/gr86/?padid=from_tjptop_carlineup_car_gr86',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gr86/30.png',
            type: 'sports',
        },
        {
            id: 33,
            name: 'gryaris',
            japanese: 'GRヤリス',
            url: 'https://toyota.jp/gryaris/?padid=from_tjptop_carlineup_car_gryaris',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gryaris/30.png',
            type: 'sports',
        },
        {
            id: 34,
            name: 'supra',
            japanese: 'スープラ',
            url: 'https://toyota.jp/supra/?padid=from_tjptop_carlineup_car_supra',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/supra/30.png',
            type: 'sports',
        },
        {
            id: 35,
            name: 'centurynewbt',
            japanese: 'センチュリー',
            url: 'https://toyota.jp/centurynewbt/?padid=from_tjptop_carlineup_car_centurynewbt',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/centurynewbt/30.png',
            type: 'century',
        },
        {
            id: 36,
            name: 'century',
            japanese: 'センチュリー',
            url: 'https://toyota.jp/century/?padid=from_tjptop_carlineup_car_century',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/century/30.png',
            type: 'century',
        },
        {
            id: 37,
            name: 'aquagrsport',
            japanese: 'アクア',
            url: 'https://toyota.jp/aqua/grade/?padid=from_tjptop_carlineup_car_aquagrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/aquagrsport/30.png',
            type: 'gr',
        },
        {
            id: 38,
            name: 'copengrsport',
            japanese: 'コペン GR SPORT',
            url: 'https://toyota.jp/copen/?padid=from_tjptop_carlineup_car_copengrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/copengrsport/30.png',
            type: 'gr',
        },
        {
            id: 39,
            name: 'grcorolla',
            japanese: 'GRカローラ',
            url: 'https://toyota.jp/grcorolla/?padid=from_tjptop_carlineup_car_grcorolla',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/grcorolla/30.png',
            type: 'gr',
        },
        {
            id: 40,
            name: 'gr86',
            japanese: 'GR86',
            url: 'https://toyota.jp/gr86/?padid=from_tjptop_carlineup_car_gr86',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gr86/30.png',
            type: 'gr',
        },
        {
            id: 41,
            name: 'gryaris',
            japanese: 'GRヤリス',
            url: 'https://toyota.jp/gryaris/?padid=from_tjptop_carlineup_car_gryaris',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/gryaris/30.png',
            type: 'gr',
        },
        {
            id: 42,
            name: 'supra',
            japanese: 'スープラ',
            url: 'https://toyota.jp/supra/?padid=from_tjptop_carlineup_car_supra',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/supra/30.png',
            type: 'gr',
        },
        {
            id: 43,
            name: 'hiluxgrsport',
            japanese: 'ハイラックス',
            url: 'https://toyota.jp/hilux/grade/?padid=from_tjptop_carlineup_car_hiluxgrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/hiluxgrsport/30.png',
            type: 'gr',
        },
        {
            id: 44,
            name: 'yariscrossgrsport',
            japanese: 'ヤリス クロス',
            url: 'https://toyota.jp/yariscross/grade/?padid=from_tjptop_carlineup_car_yariscrossgrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/yariscrossgrsport/30.png',
            type: 'gr',
        },
        {
            id: 45,
            name: 'landcruisergrsport',
            japanese: 'ランドクルーザー',
            url: 'https://toyota.jp/landcruiser/grade/?padid=from_tjptop_carlineup_car_landcruisergrsport',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/landcruisergrsport/30.png',
            type: 'gr',
        },
        {
            id: 46,
            name: 'pixisepoch',
            japanese: 'ピクシス エポック',
            url: 'https://toyota.jp/pixisepoch/?padid=from_tjptop_carlineup_car_pixisepoch',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/pixisepoch/30.png',
            type: 'pixis',
        },
        {
            id: 47,
            name: 'pixistruck',
            japanese: 'ピクシス トラック',
            url: 'https://toyota.jp/pixistruck/?padid=from_tjptop_carlineup_car_pixistruck',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/pixistruck/30.png',
            type: 'pixis',
        },
        {
            id: 48,
            name: 'pixisvan',
            japanese: 'ピクシス バン',
            url: 'https://toyota.jp/pixisvan/?padid=from_tjptop_carlineup_car_pixisvan',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/pixisvan/30.png',
            type: 'pixis',
        },
        {
            id: 49,
            name: 'cwalks',
            japanese: 'C＋walk S',
            url: 'https://toyota.jp/cwalks/?padid=from_tjptop_carlineup_car_cwalks',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/cwalks/30.png',
            type: 'mobility',
        },
        {
            id: 50,
            name: 'cwalkt',
            japanese: 'C＋walk T',
            url: 'https://toyota.jp/cwalkt/?padid=from_tjptop_carlineup_car_cwalkt',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/cwalkt/30.png',
            type: 'mobility',
        },
        {
            id: 51,
            name: 'cpod',
            japanese: 'C+pod',
            url: 'https://toyota.jp/cpod/?padid=from_tjptop_carlineup_car_cpod',
            image_path:
                'https://toyota.jp/pages/contents/carlineup/image/car/cpod/30.png',
            type: 'mobility',
        },
    ],
});

// For Template //
export const templates = atom({
    key: 'template_item_state',
    default: [
        {
            id: 0,
            images: [
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/crownsport/crownsport_pc_1.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/crownsport/crownsport_pc_2.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/crownsport/crownsport_pc_3.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/crownsport/crownsport_pc_4.jpg',
                },
            ],
            type: 'SUV',
            name: 'CROWN"SPORT"',
            description1:
                'エモーショナルで創造的な雰囲気と\nあらゆる人を笑顔にする走りで、\nあなたの心を弾ませるスポーツSUV。',
            description2:
                '目を奪う艶やかなエクステリアデザイン\n上質、俊敏。誰もが楽しめるスポーツ走行\n心弾む爽快な2.5Lハイブリッドシステム',
        },
        {
            id: 0,
            images: [
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/centurynewbt/century_pc_1.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/_system/common/image/noimage.png',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/centurynewbt/century_pc_3.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/centurynewbt/century_pc_4.jpg',
                },
            ],
            type: 'センチュリー',
            name: 'CENTURY',
            description1:
                '独自の美意識や思想を継承・進化。\n後席空間に新しい価値を創造した、\nショーファーカーのもう一つの理想。',
            description2:
                '日本の美、匠の技、唯一無二の存在感\nより有意義な移動時間を提供する後席著\nしい進化を遂げた静けさと乗り心地',
        },
        {
            id: 0,
            images: [
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/alphard/alphard_pc_1.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/alphard/alphard_pc_2.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/alphard/alphard_pc_3.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/alphard/alphard_pc_4.jpg',
                },
            ],
            type: 'ミニバン',
            name: 'ALPHARD',
            description1:
                '一歩先へ進化を遂げた究極のもてなし空間。\n隅々に行き渡る快適さが、\nあらゆる移動をくつろぎに変えていく。',
            description2:
                'おもてなし装備に満ちた後席空間\n上質を磨き上げたエクステリアデザイン\n大切な人を守り抜く安全性能',
        },
        {
            id: 0,
            images: [
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/vellfire/vellfire_pc_1.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/vellfire/vellfire_pc_2.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/vellfire/vellfire_pc_3.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/vellfire/vellfire_pc_4.jpg',
                },
            ],
            type: 'ミニバン',
            name: 'VELLFIRE',
            description1:
                '毎日の移動を、アグレシッブに。\n圧倒的な力強さと極上の快適さに\n心が昂ぶる、大空間サルーン。',
            description2:
                '力強さと心地よさを両立した動的性\n能移動の快適さを極めた後席空間\n周囲を圧倒するエクステリアデザイン',
        },
        {
            id: 0,
            images: [
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/prius/prius_pc_1.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/prius/prius_pc_2.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/prius/prius_pc_3.jpg',
                },
                {
                    id: 0,
                    image_url:
                        'https://toyota.jp/pages/contents/top/image/pr_area/prius/prius_pc_4.jpg',
                },
            ],
            type: 'セダン',
            name: 'PRIUS',
            description1:
                '一目惚れするデザインと虜になる走りで\n乗るほどに愛が深まる、\nハイブリッドカーの先駆け。',
            description2:
                '感性に響くスタイリッシュデザイン\n走りへのワクワク感と上質さを両立した空間\nPHEVとHEVの虜になる走行性能',
        },
    ],
});
