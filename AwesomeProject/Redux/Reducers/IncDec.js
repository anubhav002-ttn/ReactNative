const initialState = [
    {
        id: 1,
        name: 'Orange',
        Price: '2.5',
        image: require('../../assets/Images/orange.webp'),
        count: 5
    },
    {
        id: 2,
        name: 'Apple',
        Price: '3',
        image: require('../../assets/Images/apple.jpg'),
        count: 5
    },
    {
        id: 3,
        name: 'Strawberry',
        Price: '3',
        image: require('../../assets/Images/strawberry.jpg'),
        count: 5
    }
]

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log('action', action.id)
            return state.map((item) => {
                if (item.id !== action.id) {
                    console.log('state', item)
                    return item;
                }
                console.log('state1', item)
                return {
                    ...item,
                    count: item.count + 1
                };
            })
        case "DECREMENT":
            return state.map((item) => {
                if (item[action.id-1].count > 0) {
                    if (item.id !== action.id) {
                        return item;
                    }
                    // if(item.count>0){
                    return {
                        ...item,
                        count: item.count - 1
                    };
                }
                // else if(item.id !== action.id) {
                //     return item;
                // }
            })
        //   case "DELETE_ITEM":
        //     return (state = 0);
        default:
            return state;
    }
};

export default counterReducer;

