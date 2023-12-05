import React from 'react';
import PrintButton from "@/components/PrintButton";

const InfoDesktop = () => {
    return (
        <div className={`hidden sm:flex xl:justify-between gap-[30px]`}>
            <div className={`flex flex-col w-[370px]`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Актор</div>
                <h4 className={`text-[31px] font-black text-white mb-[20px]`}>Гончаров Іван Сергійович</h4>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Освіта</div>
                <h5 className={`text-white text-[24px] font-bold`}>Ukrainian Film School</h5>
                <h5 className={`text-white text-[16px] font-bold mb-[26px]`}>Акторcький курс, 2023-2024</h5>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Додаткові навички</div>
                <div>
                    <div className={`text-white text-[12px]`}>▸ Мови: українська, англійська(вільна)</div>
                </div>

            </div>
            <div className={`flex flex-col w-[148px]`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Контакти</div>
                <h5 className={`text-white text-[13px] leading-[18px] pb-px font-semibold`}>+38 (063) 398 82 75</h5>
                <h5 className={`text-white text-[11px] font-semibold mb-[12px]`}>ivan.goncharofff@gmail.com</h5>
                <div className={`flex gap-2 mb-8`}>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/instagram.png"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/facebook.svg"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/youtube.png"
                            className="w-[24px]"
                        />
                    </div>
                </div>
                <div className={`w-[140px] h-[31px] mb-6`}>
                    <PrintButton />
                </div>

                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Тіло</div>
                <div>
                    <div className={`text-white text-[12px]`}>Народився: 27.08.1997</div>
                    <div className={`text-white text-[12px]`}>Зріст: 195 см</div>
                    <div className={`text-white text-[12px]`}>Вага: 82 кг </div>
                    <div className={`text-white text-[12px]`}>Розмір одягу: L (52)</div>
                    <div className={`text-white text-[12px]`}>Розмір взуття: 45</div>
                </div>

            </div>
        </div>
    );
};

export default InfoDesktop;