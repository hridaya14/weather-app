import {atom} from 'recoil';


export const locationState = atom<string>({
    key: 'locationState',
    default: 'Delhi,In',
    });


export const locationCoordinates = atom <string>({
    key: 'locationCoordinates',
    default: '+28.6139+077.2090'
})

