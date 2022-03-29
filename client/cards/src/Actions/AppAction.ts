import axios from 'axios';

export interface IPostData {
    name: string;
    email: string;
    address: string;
}

export const postDataAction = async (reqData:IPostData, dispatch: any) => {
    const res = await axios.post('apply', reqData)
    const jsonResponse = await res.data;

    return dispatch({
        type: 'POST_DATA_RESPONSE',
        payload: jsonResponse.eligibleCards
    })
}