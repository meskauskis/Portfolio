import React, { useState } from 'react';

import SizerItem from './sizerItem';

const ListItems = ({ sizerList, updateFunction }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    const clickHandler = (itemId) => {
        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });

        updateFunction(sizerList => reducedList);
    }

    return (
        <>
            {sizerList.map((item, index) => {
                const itemId = item.id;
                const itemHeight = item.height;

                const itemSize = (itemHeight / tallestHeight) * 100;

                return (
                    <div className="colBig">
                        <div className="col" key={index + itemId}>
                            <SizerItem itemId={itemId} itemSize={itemSize}/>
                            {index != 0 
                                ? <div className="remove" onClick={() => clickHandler(itemId)}>X</div>
                                : ''
                            }
                        </div>
                        <div className="line" style={{ 'top': (100 - itemSize) + '%' }}></div>
                    </div>
                );
            })} 
        </>
    );
}

const SizerItems = ({ sizerList, updateFunction }) => {
    return (
        <div className="container">
            <ListItems sizerList={sizerList} updateFunction={updateFunction}/>
        </div>
    );
}

export default SizerItems;
