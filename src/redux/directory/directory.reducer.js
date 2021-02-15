const INITIAL_STATE = {
    section: [
        {
            id: 1,
            category: "hats",
            linkUrl: "hats",
            backGround: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            color: "ffffff"
        },
        {
            id: 2,
            category: 'sneakers',
            linkUrl: 'sneakers',
            backGround: "https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            color: "000000"
        },
        {
            id: 3,
            category: 'jackets',
            linkUrl: 'jackets',
            backGround: "https://images.unsplash.com/photo-1556098539-3019e1bdf05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
            color: "601828"
        },
        {
            id: 4,
            category: 'womens',
            linkUrl: 'womens',
            backGround: "https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            color: "0b58aa"
        },
        {
            id: 5,
            category: 'mens',
            linkUrl: 'mens',
            backGround: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            color: "CE9270"
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;