// this used for convinience just constants
export const CREATE_FRAME = 'CREATE_FRAME';
export const DELETE_FRAME = 'DELETE_FRAME';

// this is action creators
export function createFrame(frame) {
    return {
        type: CREATE_FRAME,
        frame: frame
    }
}

export function deleteFrame(frame) {
    return {
        type: DELETE_FRAME,
        frame: frame
    }
}


/*
    studio: [
        {
            id: 'frame0',
            duration: 0.3
        }
    ]


*/