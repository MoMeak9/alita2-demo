import {log} from "util";

const GlobalModel = {
    namespace: 'global',

    state: {
        name: '123123',
        counter: 0,
        list: [1, 2, 3, 4, 5]
    },

    effects: {
        * add({playload}: any, {call, put}: any) {
            yield call(async () => {
                console.log('add')
                await setTimeout(() => {
                    console.log('add timeout')
                }, 222)
                await console.log('add end')
            });
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
