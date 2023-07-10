import React from 'react'

export const TrackSearchResult = (track) => {
    return (
        <div className='d-flex m-2 align-item-center'>
            <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
            {/* {track.title} */}
        </div>
    )
}
