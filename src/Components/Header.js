import React from 'react'

export const Header = (props) => {
    return (
        <header style={{display:'flex', justifyContent :'center',textTransform :'uppercase',
        fontSize :'20px',background :'#9B280F', fontWeight :'bold', padding : '10px'}}>
            {props.name}
        </header>
    )
}