const GlobalModel = {
    namespace: 'global',

    state: {
        name: '123123',
        counter: 0
    },

    effects: {
        * add({playload}: any, {put}: any) {
            yield put({
                type: 'save',
                payload: {
                    counter: playload.counter + 1
                }
            })
        }
    },

    reducers: {
        save(state: any, action: { payload: any; }): any {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default GlobalModel;
