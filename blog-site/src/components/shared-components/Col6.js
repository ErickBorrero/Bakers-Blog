import React from 'react'

function Col6(props) {
    const { children, className } = props;
    return (
        <>
            <div className={`col-lg-6 ${className}`}>
                {children}
            </div>
        </>
    )
}

export default Col6
