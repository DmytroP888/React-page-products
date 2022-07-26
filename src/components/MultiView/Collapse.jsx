import React from "react"
import "./MultiView.css"

const Collapse = ({ collapsed, children, styleTitleFilter, titleFilter, classElementMenuFilter, arrowFilter }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed)
    return (
        <>
            <div className={classElementMenuFilter} onClick={() => setIsCollapsed(!isCollapsed)} >
                <div className={styleTitleFilter}>{titleFilter}</div>
                <div className={`${isCollapsed ? 'group-7' : 'group-77'} `}>
                    {arrowFilter}
                </div>
            </div>

            <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'} `}
                aria-expanded={isCollapsed} >
                {children}
            </div>
        </>
    )
}

export default Collapse