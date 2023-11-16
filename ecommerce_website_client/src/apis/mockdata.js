export const mockData = {
    products: [
        {
            _id: 'product-id-01',
            name: 'Bánh gạo',
            description: 'Pro MERN stack Course',
            price: 27000,
            image: 'https://cf.shopee.vn/file/7af07542440785944f35316f30ba53d7',
            category: [
                {
                    name: 'Thực phẩm'
                },
                {
                    name: 'Nước uống'
                },
                {
                    name: 'Dao cạo'
                }
            ],
            provider: 'MasanGroup',
            reviews: [
                {
                    _id: 'reviews-id-01',
                    comment: 'Bánh gạo ngon',
                    avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
                    name: 'thach'
                },
                {
                    _id: 'reviews-id-02',
                    comment: 'Bánh gạo dở',
                    avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
                    name: 'khánh'
                },
                {
                    _id: 'reviews-id-03',
                    comment: 'Bánh gạo ngon 123',
                    avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
                    name: 'thach'
                },
            ]
        },
        {
            _id: 'product-id-02',
            name: 'Chai nước',
            description: 'Pro MERN stack Course',
            price: 5000,
            image: 'https://nuocsuoi.com.vn/wp-content/uploads/2021/04/nuoc-suoi-13.jpg',
            category: 'Nước uống',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-03',
            name: 'Mì omachi',
            description: 'Pro MERN stack Course',
            price: 8000,
            image: 'https://trongoivanphongpham.com/wp-content/uploads/2021/09/mi-omachi-1757.jpg',
            category: 'Thực phẩm',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-04',
            name: 'Bóng đèn 10W',
            description: 'Pro MERN stack Course',
            price: 45000,
            image: 'https://th.bing.com/th/id/OIP.i0-PyGivP2vkxU28CioLiAHaHa?pid=ImgDet&rs=1',
            category: 'Đồ điện tử',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-05',
            name: 'Dao thái',
            description: 'Pro MERN stack Course',
            price: 100000,
            image: 'https://topcomshop.com/uploads/images/a-adao/2/12070802423-1778177338.jpg',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-06',
            name: 'Snack Lays',
            description: 'Pro MERN stack Course',
            price: 10000,
            image: 'https://th.bing.com/th/id/OIP.R_Uyabt-iEE7oki8DCJp2AHaHa?pid=ImgDet&rs=1',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-07',
            name: 'Keo mut Chupa Chups',
            description: 'Pro MERN stack Course',
            price: 1000,
            image: 'https://th.bing.com/th/id/OIP.LPJAyms0EE1ZUJjrGAOMmAHaHa?pid=ImgDet&rs=1',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-08',
            name: 'Sữa tươi Vinamilk hộp',
            description: 'Pro MERN stack Course',
            price: 7000,
            image: 'https://th.bing.com/th/id/OIP.uAsn1C6xKHXsub6DpMKvFgHaHa?pid=ImgDet&rs=1',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-09',
            name: 'Sữa Milo Hộp',
            description: 'Pro MERN stack Course',
            price: 9000,
            image: 'https://th.bing.com/th/id/OIP.dOpwJcAms5LhC5px-IjYHgHaFj?pid=ImgDet&rs=1',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
        {
            _id: 'product-id-010',
            name: 'Sữa ovaltine Hộp',
            description: 'Pro MERN stack Course',
            price: 100000,
            image: 'https://th.bing.com/th/id/R.c2b295844c82ab01ad9675685b928a9f?rik=N4Y3IM2U2m%2b%2bfw&pid=ImgRaw&r=0',
            category: 'Đồ gia dụng',
            provider: 'MasanGroup'
        },
    ],
    categories: [
        {
            _id: 'category-id-01',
            name: 'Đồ gia dụng'
        },
        {
            _id: 'category-id-02',
            name: 'Thực phẩm'
        },
        {
            _id: 'category-id-03',
            name: 'Nước uống'
        },
        {
            _id: 'category-id-04',
            name: 'Đồ điện tử'
        }

    ],
    promotions: [
        {
            _id: 'promotion-id-01',
            name: 'Omachi Sốt Spaghetty',
            image: 'https://cdn-www.vinid.net/2020/10/c82b07dc-c%C3%A1ch-n%E1%BA%A5u-m%C3%AC-omachi-ngon.jpg'
        },
        {
            _id: 'promotion-id-02',
            name: 'Hảo hảo Chua Cay',
            image: 'https://poongsankorea.vn/medias/e51/images/2022/07/1-goi-mi-hao-hao-bao-nhieu-calo-1-1.jpg'
        },
        {
            _id: 'promotion-id-03',
            name: 'Miến phú hương',
            image: 'https://cdn.fast.vn/tmp/20200919065808-mien-phu-huong-thit-heo-nau-mang-1.jpg'
        },
        {
            _id: 'promotion-id-04',
            name: 'Mì hải sản siêu cay',
            image: 'https://bizweb.dktcdn.net/100/345/470/products/4261222092-1974521184.jpg?v=1584683941813'
        }

    ],
    users: [
        {
            _id: 'user-id-01',
            fullname: 'Đào Ngọc Thạch',
            username: 'pemeoh1',
            email: 'thach752002@gmail.com',
            password: '12345',
            phone: '012345678',
            address: 'TPHCM',
            avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
            role: 0
        },
        {
            _id: 'user-id-02',
            fullname: 'Trần Khánh',
            username: 'pemeoh2',
            email: 'khanh@gmail.com',
            password: '12345',
            phone: '012345678',
            address: 'TPHCM',
            avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
            role: 0
        },
        {
            _id: 'user-id-03',
            fullname: 'Trần Duy',
            username: 'pemeoh3',
            email: 'duy@gmail.com',
            password: '12345',
            phone: '012345678',
            address: 'TPHCM',
            avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
            role: 0
        },
        {
            _id: 'user-id-04',
            fullname: 'Lê Cường',
            username: 'pemeoh4',
            email: 'cuong@gmail.com',
            password: '12345',
            phone: '012345678',
            address: 'TPHCM',
            avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
            role: 0
        }

    ],
}
