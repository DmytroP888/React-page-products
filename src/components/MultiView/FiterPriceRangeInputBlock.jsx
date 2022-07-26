import React, { useRef, useState } from "react"
import { Range, getTrackBackground } from "react-range"
import styled from 'styled-components'
import "./MultiView.css"

const TumblerRangeBlack = styled.div`
height: 12px;
width: 12px;
border-radius: 50%;
background-color: black;
`

const FilterPriceRangeInputBlock = () => {

    const STEP = 10
    const MIN = 1
    const MAX = 50000
    const [minVal, setMinVal] = useState(2000)
    const [maxVal, setMaxVal] = useState(20000)
    const values = [minVal, maxVal]
    const tooltipInputMaxFilterRef = useRef('tooltip-Maxinput-filter-none')
    const comparsMaxMinInputFilter = () => {
        (((Number(maxVal) - Number(minVal)) < 0) && (maxVal !== '')) ?
            tooltipInputMaxFilterRef.current.className = 'tooltip-Maxinput-filter' :
            tooltipInputMaxFilterRef.current.className = 'tooltip-Maxinput-filter-none'
    }
    const closeTooltipInput = () => {
        if ((maxVal - minVal) > 0) {
            tooltipInputMaxFilterRef.current.className = 'tooltip-Maxinput-filter-none'
        }
    }
    const handleInputMinFilterChange = (e) => {
        if (e.target.validity.valid) {
            setMinVal(Number(e.target.value))
        }
    }
    const handleInputMaxFilterChange = (e) => {
        if (e.target.validity.valid) {
            setMaxVal(Number(e.target.value))
        }
    }
    const handleRangePriceFilterChange = (values) => {
        console.log(values);
        setMinVal(values[0]);
        setMaxVal(values[1]);
    }

    return (
        <>
            <Range
                values={[minVal, maxVal]} step={STEP} min={MIN} max={MAX}
                onChange={handleRangePriceFilterChange}
                renderTrack={({ props, children }) => (
                    <div onMousDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "2px", width: "310px", left: "34px", top: '155px', position: "relative",
                                background: getTrackBackground({
                                    values: [minVal, maxVal],
                                    colors: ["#E8AA31", "black", "#E8AA31"],
                                    min: MIN,
                                    max: MAX
                                })
                            }}
                        >
                            {children}

                        </div>
                    </div>
                )}
                renderThumb={({ index, props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            backgroundColor: "#E8AA31",
                            boxShadow: "0px 4px 20px rgb(232 170 49 / 30%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <TumblerRangeBlack>
                        </TumblerRangeBlack>
                        <div className="textrange-label montserrat-medium-licorice-14px"> {values[index]} </div>
                    </div>
                )}
            />

            {/* ----------------------- INPUT price FILTER start ---------------------- */}
            <div className="filterboxSelectPrice">
                <div className="filter-input-price">
                    <input className="address-2 input-range" placeholder="2000" name="minPriceFilter" pattern="[0-9]*" type="text"
                        value={minVal}
                        onChange={handleInputMinFilterChange}
                        onMouseLeave={comparsMaxMinInputFilter} onBlur={comparsMaxMinInputFilter} onInput={closeTooltipInput}
                    />
                    <div className="montserrat-medium-licorice-16px">грн.</div>
                </div>
                <div className="rectangle-center">
                </div>
                <div className="filter-input-price" >
                    <div ref={tooltipInputMaxFilterRef} className='tooltip-Maxinput-filter-none'>Введіть вартість вищу мінімальної
                        <div className="arrowTooltip"></div>
                    </div>
                    <input className="address-2 input-range" placeholder="5000" name="maxPriceFilter" pattern="[0-9]*" type="text"
                        value={maxVal}
                        onChange={handleInputMaxFilterChange}
                        onMouseLeave={comparsMaxMinInputFilter} onBlur={comparsMaxMinInputFilter} onInput={closeTooltipInput}
                    />
                    <div className="montserrat-medium-licorice-16px">грн.</div>
                </div>
            </div>
            {/* ----------------------- INPUT price FILTER end ---------------------- */}
        </>
    );
};

export default FilterPriceRangeInputBlock

