const initialState = [];

const handleCart = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADDITEM":
            const existingProduct = state.find((item) => item.id === payload.id);

            if (existingProduct) {
                return state.map((item) =>
                    item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
                );      
            } else {
                return [...state, { ...payload, qty: 1 }];
            }

        case "DELITEM":
            const productToRemove = state.find((item) => item.id === payload.id);

            if (productToRemove.qty === 1) {
                return state.filter((item) => item.id !== payload.id);
            } else {
                return state.map((item) =>
                    item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
                );
            }

        default:
            return state;
    }
};

export default handleCart;
