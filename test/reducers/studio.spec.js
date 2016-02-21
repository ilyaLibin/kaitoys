import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import studio from '../../app/reducers/studio'
import {CREATE_FRAME, DELETE_FRAME} from '../../app/actions/studioActions';

describe('studio reducer', () => {
    it('handles CREATE_FRAME and create a new frame with unique ID', () => {
        const initState = fromJS({
            data: [
                {
                    id: 'frame01',
                    duration: 0.3    
                }
            ]
        });
        const timeStamp = Date.now();
        const action = {
            type: CREATE_FRAME,
            frame: fromJS({
                id: 'frame' + timeStamp,
                duration: 0.3
            })
        }; 

        const newState = studio(initState, action);

        expect(newState).to.equal(fromJS({
            data: [
                {
                    id: 'frame01',
                    duration: 0.3    
                },
                {
                    id: 'frame' + timeStamp,
                    duration: 0.3
                }
            ]
        }))

        const filtered = newState.get('data').filter(frame => frame.get('id') === ('frame' + timeStamp))
        expect(filtered.size).to.equal(1);
    });

    it('handles CREATE_FRAME and ignore the frame if the image name already exists', () => {
        const initState = fromJS({
            data: [
                {
                    id: 'frame01',
                    duration: 0.3    
                }
            ]
        });

        const action = {
            type: CREATE_FRAME,
            frame: fromJS({
                id: 'frame01',
                duration: 0.3
            })
        };

        const newState = studio(initState, action);

        expect(newState).to.equal(fromJS({
            data: [
                {
                    id: 'frame01',
                    duration: 0.3    
                }
            ]
        }))
    })
})