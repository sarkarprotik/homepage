import React from 'react'

const Loading = () => {
    return (
        <div style={{justifyItems: 'center', alignItems: 'center', backgroundColor: '#292c35',marginRight: 'auto', marginLeft: 'auto', padding: 20, rotate: 1 }}>
            <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
                width="100"
                height="100"
                frameBorder="0"
                style={{ borderRadius: '5%', backgroundColor: 'black', borderWidth: 5, borderColor: 'pink' }}
                allowFullScreen></iframe>

        </div>
    )
}

export default Loading