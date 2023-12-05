import React from 'react';
import PrintButton from "@/components/PrintButton";

const InfoMobile = () => {
    return (
        <div className={`flex sm:hidden flex-col`}>
            <div className={`px-10`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Актор</div>
                <h4 className={`text-[31px] font-black text-white mb-[20px]`}>Гончаров Іван Сергійович</h4>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Освіта</div>
                <h5 className={`text-white text-[24px] font-bold`}>Ukrainian Film School</h5>
                <h5 className={`text-white text-[16px] font-bold mb-[26px]`}>Акторcький курс, 2023-2024</h5>

                <div className={`leading-[28px] font-medium text-[14px] text-[#9a9a9a]`}>Контакти</div>
                <h5 className={`text-white text-[13px] leading-[18px] pb-px font-semibold`}>+38 (063) 398 82 75</h5>
                <h5 className={`text-white text-[11px] font-semibold mb-6`}>ivan.goncharofff@gmail.com</h5>
                <div className={`flex gap-6 mb-10`}>
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

                <div className={`w-full h-8 max-w-[400px] mb-8`}>
                    <PrintButton />
                </div>
            </div>

            <div className={`w-full pt-4 pb-6 bg-white px-10`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Додаткові навички</div>
                <div className={`mb-3`}>
                    <div className={`text-[12px] text-black leading-6`}>▸ Мови: українська, англійська(вільна)</div>
                </div>
                <div className={`w-full h-px bg-[#9a9a9a] mb-3`}/>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Тіло</div>
                <div className={`grid grid-cols-2`}>
                    <div>
                        <div className={`text-[12px] text-black leading-6`}>Народився: 27.08.1997</div>
                        <div className={`text-[12px] text-black leading-6`}>Зріст: 195 см</div>
                        <div className={`text-[12px] text-black leading-6`}>Вага: 82 кг</div>
                    </div>
                    <div>
                        <div className={`text-[12px] text-black leading-6`}>Розмір одягу: L (52)</div>
                        <div className={`text-[12px] text-black leading-6`}>Розмір взуття: 45</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoMobile;