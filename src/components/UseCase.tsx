import React from "react";

export default function UseCase({value, attributes, children}) {
    return <>
        <div className='usecase'>
            <span>{attributes}</span><br />
            <span className='uc'>value = &#123; new Date("<span className='attrvalue'>{value}</span>") &#125;</span>&nbsp;&rarr;&nbsp;&nbsp;<div className='rendered'>{children}</div>
        </div>
    </>
}
