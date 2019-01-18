import React from 'react' ;

const Link = ({onClick, active, children}) => {
    return (<button
            onClick={onClick}
            disabled={active}
            style={{
                marginLeft: '4px'
            }}
        >
            {children}
        </button>
    )
};

export default Link ;