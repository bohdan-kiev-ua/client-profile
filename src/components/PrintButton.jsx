import React from 'react';

const PrintButton = () => {
    return (
        <div className={`flex justify-center items-center w-full h-full rounded-[5px] bg-[rgb(43,43,43)] hover:bg-[rgb(112,0,149)] cursor-pointer`}>
            <img className={`mr-[8px] h-[18px] w-[18px]`} src="https://d3n32ilufxuvd1.cloudfront.net/55cb17574e0418130b543ea2/643ffdd72a265a10f3f4c1cc/RasterizedImage-bf70ed3f-f846-426a-82d8-6164c1e3e6cc.png" alt=""/>
            <div className={`text-[12px] text-white font-extrabold`}>Друкувати CV</div>
        </div>
    );
};

export default PrintButton;