const initialState= [
    {
        id: 1,
        name: 'Orange',
        Price: '2.5',
        image:  require('../../assets/Images/orange.webp'),
        count:  '5'
    },
    {
        id: 2,
        name: 'Apple',
        Price: '3',
        image:  require('../../assets/Images/apple.jpg'),
        count:  '5'
    },
    {
        id: 3,
        name: 'Strawberry',
        Price: '3',
        image: require('../../assets/Images/strawberry.jpg'),
        count:  '5'
    }
]

const counterReducer = (state=initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        state.map((item)=>{
            if (item.id !== action.id) {
                console.log('state',item)
                return item;
              }
              console.log('state1',item)
              return {
                ...item,
                count: item.count++
              };
        })
        console.log('state2',state)
      case "DECREMENT":
        state.map((item)=>{
            if (item.id !== action.id) {
                return item;
              }
              return {
                ...item,
                count: item.count - 1
              };
        })
    //   case "DELETE_ITEM":
    //     return (state = 0);
      default:
        return state;
    }
  };

  export default counterReducer;
