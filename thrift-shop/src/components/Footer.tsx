import React from "react";

export const Footer = (): JSX.Element => {
    return (
        <div className="relative w-[360px] h-[870px] bg-[url(rectangle-9.svg)] bg-[100%_100%]">
            <div className="absolute w-[207px] h-[18px] top-[826px] left-[30px]">
                <div className="relative w-[209px] h-[18px]">
                    <p className="absolute top-0 left-0 [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-[12px] text-center tracking-[-0.13px] leading-[18px] whitespace-nowrap">
                        Сите права задржани © 2023 igralishtesk.mk
                    </p>
                </div>
            </div>
            <div className="top-[650px] [font-family:'Cormorant_Garamond-SemiBoldItalic',Helvetica] font-semibold italic text-fancy-olive absolute left-[30px] text-[20px] tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Следи не на:
            </div>
            <div className="top-[692px] absolute left-[59px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-[20px] text-center tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                igralishte.sk
            </div>
            <div className="top-[734px] absolute left-[59px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-[20px] text-center tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                igralishte.sk
            </div>
            <img className="top-[698px] absolute w-[20px] h-[20px] left-[30px]" alt="Vector" src="vector.svg" />
            <img className="top-[740px] absolute w-[20px] h-[20px] left-[30px]" alt="Vector" src="image.svg" />
            <div className="top-[428px] left-[30px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-[20px] text-center tracking-[-0.22px] leading-[30px] absolute text-black whitespace-nowrap">
                За нас
            </div>
            <div className="absolute top-[468px] left-[30px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-[20px] text-center tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Контакт
            </div>
            <div className="top-[508px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-center absolute left-[30px] text-[20px] tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Локатор на продавницата
            </div>
            <div className="absolute top-[548px] left-[30px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-black text-[20px] text-center tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Често поставувани прашања (FAQ)
            </div>
            <p className="top-[588px] left-[30px] [font-family:'Cormorant_Garamond-Medium',Helvetica] font-medium text-[20px] tracking-[-0.22px] leading-[30px] absolute text-black text-center whitespace-nowrap">
                Регистрирај се / логирај се
            </p>
            <div className="-top-px left-[32px] [font-family:'Century-Regular',Helvetica] font-normal text-[22px] tracking-[-0.24px] leading-[33px] absolute text-black text-center whitespace-nowrap">
                Следи ги нашите новости!
            </div>
            <p className="absolute w-[300px] top-[56px] left-[32px] [font-family:'Cormorant_Garamond-Regular',Helvetica] font-normal text-dark-grey text-[20px] tracking-[-0.22px] leading-[30px]">
                Биди дел од нашиот newsletter и дознавај прва за промоции, попусти <br />и нови колекции.
            </p>
            <div className="absolute w-[300px] h-[51px] top-[290px] left-[32px] rounded-[15px] border-[1.5px] border-solid border-light-grey shadow-[0px_0px_4.5px_#c2c2c2] [background:linear-gradient(180deg,rgb(255,240.08,191.25)_3.9%,rgb(239.06,200.98,144.43)_28.93%,rgb(252.88,210.05,146.46)_51.27%,rgba(240.39,198.55,73.16,0.42)_83.65%,rgb(212,175,55)_100%)]">
                <div className="top-[4px] left-[94px] [font-family:'Cormorant_Garamond-Regular',Helvetica] font-normal text-[25px] tracking-[-0.28px] leading-[37.5px] absolute text-black whitespace-nowrap">
                    Зачлени се!
                </div>
            </div>
            <div className="absolute top-[176px] left-[32px] [font-family:'Cormorant_Garamond-Regular',Helvetica] font-normal text-dark-grey text-[20px] tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                E-mail адреса:
            </div>
            <div className="absolute w-[300px] h-[50px] top-[215px] left-[32px] rounded-[18px] border-[1.8px] border-solid border-light-grey shadow-[0px_0px_5.4px_#c2c2c2]" />
            <img className="absolute w-[300px] h-px top-[396px] left-[30px] object-cover" alt="Line" src="line-15.svg" />
        </div>
    );
};

