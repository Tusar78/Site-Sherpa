import React from 'react';
import { mailIcon, footerLogo } from "../../assets/images";

const NavLink = ({ label, onClick, className }) => (
    <button
        onClick={onClick}
        className={`bg-transparent border-0 p-0 m-0 cursor-pointer text-primary font-base font-medium text-regular text-left transition-opacity duration-200 ease-in-out hover:opacity-60 ${className || ''}`}
    >
        {label}
    </button>
);

const SectionHeader = ({ title, className }) => (
    <span className={`block text-primary/70 font-body font-semibold text-regular uppercase ${className || ''}`}>
        {title}
    </span>
);

const NavColumn = ({ title, items, className }) => (
    <div
        className={`
            h-auto flex-auto 
            md:flex-[1_1_222px]
            bg-bge rounded-[8px] 
            p-8 md:px-8 md:pl-10 
            box-border flex flex-col gap-6 
            ${className || ''}
        `}
    >
        <SectionHeader title={title} />
        <div className="flex flex-col gap-5">
            {items.map((item, index) => (
                <NavLink key={index} label={item} />
            ))}
        </div>
    </div>
);

export const Footer = () => {
    // 1. Main Branding Column (handled separately below)
    // 2. Company Column
    const companyItems = ['About', 'Careers', 'Partners', 'Contact', 'Roadmap'];
    // 3. Quick Links Column
    const quickLinksItems = ['Platform', 'Industries', 'Pricing', 'Consulting', 'ISO Pre-Audit', 'About'];
    // 4. Resources Column
    const resourcesItems = ['Blog', 'Help Centre', 'Free Templates', 'WHS Glossary'];
    // 5. Legal & Trust Column
    const legalTrustItems = ['Trust Centre', 'Security', 'Terms & Conditions', 'Privacy & Cookies Policy', 'Product Schedule'];

    return (
        <footer className="container-regular pb-6 relative font-base">
            {/* 
                Mobile: flex-col 
                Desktop (md+): flex-row with wrap. 
                Total min-width: 340px + (222px * 4) = 1228px (fits perfectly in 1240px container)
            */}
            <div className="w-full bg-surface-alt rounded-[10px] p-0.5 flex flex-col md:flex-row md:flex-wrap gap-0.5 box-border">

                {/* Column 1: Main Branding & Contact */}
                <div className="
                    w-full h-auto flex-auto 
                    md:flex-[1_1_340px] md:min-h-[376px] 
                    bg-bge rounded-[8px] 
                    p-8 md:px-8 md:py-10 
                    box-border flex flex-col justify-between
                ">
                    <div>
                        <img
                            src={footerLogo}
                            alt="SiteSherpa Logo"
                            className="w-[125.1px] h-12 mb-[16.85px] cursor-pointer"
                            onClick={() => (window.location.href = '/')}
                        />
                        <p className="m-0 text-primary/70 font-base font-regular text-regular max-w-[280px]">
                            Safety software that doesn’t suck. Built for construction, mining, and high-risk industries.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SectionHeader title="contact" />
                        <div className="flex items-center gap-2.5">
                            <img
                                src={mailIcon}
                                alt="Email"
                                className="w-[18px] h-[18px]"
                            />
                            <span className="text-primary font-base font-medium text-caption">
                                1300 790 699
                            </span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Company */}
                <NavColumn title="company" items={companyItems} />

                {/* Column 3: Quick Links */}
                <NavColumn title="quick links" items={quickLinksItems} />

                {/* Column 4: Resources */}
                <NavColumn title="resources" items={resourcesItems} />

                {/* Column 5: Legal & Trust */}
                <NavColumn title="legal & trust" items={legalTrustItems} />
            </div>

            {/* Copyright Footer */}
            {/* <div className="reletive w-full mt-7 text-center px-5 box-border">
                <span className="text-primary font-base font-medium text-regular">
                    © 2026 SiteSherpa Pty Ltd (SiteSherpa). We are SFZ Safety Pty Ltd. All rights reserved.
                </span>
            </div> */}
            <div className="mt-8 md:mt-12 lg:mt-20">
                <div className="flex flex-col items-center text-center gap-4 lg:flex-row justify-center  lg:justify-between">

                    {/* Copyright */}
                    <span className="text-primary font-medium text-regular">
                        © 2026 SiteSherpa Pty Ltd (SiteSherpa). We are SFZ Safety Pty Ltd. All rights reserved.
                    </span>

                    {/* Built by */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 text-center">
                        <span className="text-sm text-gray-500">built by</span>

                        <a
                            href="https://designwithclarity.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold text-gray-800 transition-opacity duration-200 hover:opacity-70"
                            aria-label="Clarity Design Studio"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="15" viewBox="0 0 57 15" fill="none" className="align-middle">
                                <path d="M14.0098 7.14814C14.0098 4.49793 15.4849 2.80664 17.9927 2.80664C20.0983 2.80664 21.4453 4.19585 21.4593 5.72908C21.2732 5.78703 21.0291 5.85728 20.5707 5.85728C20.1844 5.85728 19.9122 5.81513 19.712 5.72908C19.6119 5.17058 19.0955 4.42592 17.9927 4.42592C16.6598 4.42592 15.873 5.42875 15.873 7.14814C15.873 8.86753 16.6475 9.92832 18.0067 9.92832C19.2958 9.92832 19.712 9.0695 19.784 8.4952C20.0281 8.39509 20.3003 8.36699 20.6866 8.36699C21.1169 8.36699 21.3592 8.42495 21.5313 8.4952C21.4312 10.2567 20.1282 11.5757 17.9646 11.5757C15.4428 11.5757 14.0115 9.82821 14.0115 7.14814H14.0098Z" fill="currentColor" />
                                <path d="M22.6902 11.2472V0.172114C22.9343 0.0579562 23.1485 0 23.6209 0C24.0933 0 24.3515 0.0720063 24.5956 0.172114V11.2472C24.3234 11.3473 24.009 11.4052 23.6367 11.4052C23.2644 11.4052 22.9641 11.3473 22.6919 11.2472H22.6902Z" fill="currentColor" />
                                <path d="M33.9646 10.8293C33.9646 10.9873 33.9506 11.1437 33.9067 11.2736C33.5484 11.4317 33.004 11.5318 32.4175 11.5318C31.6448 11.5318 31.3427 11.1735 31.3006 10.7151C31.2865 10.5869 31.2865 10.471 31.2865 10.2708H31.2725C30.7702 10.9733 29.9115 11.5739 28.6084 11.5739C26.775 11.5739 25.7582 10.6572 25.7582 9.1099C25.7582 7.41861 26.8048 6.7319 28.3801 6.60194L29.8272 6.48778C30.8299 6.40173 31.2163 6.22961 31.2163 5.499C31.2163 5.11262 31.0881 4.8685 30.8721 4.68234C30.5138 4.38202 29.9115 4.2661 29.353 4.2661C28.222 4.2661 27.6917 4.72449 27.6917 5.41295V5.4709C27.4915 5.57101 27.1613 5.59911 26.9032 5.59911C26.573 5.59911 26.3166 5.52711 26.1445 5.4709C26.1164 5.3708 26.1024 5.22678 26.1024 5.12667C26.1024 3.90958 27.1912 2.80664 29.5269 2.80664C30.7298 2.80664 31.6904 3.15087 32.2489 3.73746C32.7652 4.26786 33.0075 4.96861 33.0075 6.14355L32.9935 9.59638C32.9935 10.1988 33.0795 10.3551 33.4518 10.3551C33.6099 10.3551 33.724 10.341 33.9102 10.3129C33.9523 10.4411 33.9681 10.5992 33.9681 10.8293H33.9646ZM31.2005 7.70664V7.49237C30.8282 7.63638 30.3698 7.66448 29.9676 7.69258L29.1651 7.73649C27.9621 7.8085 27.4739 8.16678 27.4739 8.88334C27.4739 9.65609 28.0903 10.0442 28.9069 10.0442C30.3821 10.0442 31.1987 9.0414 31.1987 7.70839L31.2005 7.70664Z" fill="currentColor" />
                                <path d="M40.1393 3.70895C40.1393 4.10938 40.0972 4.3974 39.9953 4.66787C39.6511 4.59586 39.3789 4.56776 39.1208 4.56776C37.9319 4.56776 36.8571 5.27027 36.8571 6.85969V11.2433C36.6288 11.3294 36.3127 11.4014 35.8982 11.4014C35.5259 11.4014 35.2098 11.3435 34.9236 11.2433V3.13465C35.1519 3.04859 35.3538 2.97658 35.8403 2.97658C36.1845 2.97658 36.4268 3.04859 36.6709 3.13465V4.50981L36.7289 4.52386C37.1872 3.50698 38.104 2.77637 39.2929 2.77637C39.5791 2.77637 39.7512 2.82028 39.9953 2.87648C40.0954 3.10479 40.1393 3.43497 40.1393 3.70719V3.70895Z" fill="currentColor" />
                                <path d="M40.8257 1.80545V0.186164C41.0698 0.0720066 41.2841 0 41.7705 0C42.257 0 42.5151 0.0860568 42.7733 0.186164V1.80545C42.487 1.8915 42.1569 1.96351 41.7846 1.96351C41.4123 1.96351 41.0962 1.8915 40.824 1.80545H40.8257ZM40.8415 11.2472V3.16655C41.0856 3.0524 41.2999 2.98039 41.7723 2.98039C42.2447 2.98039 42.5028 3.06645 42.761 3.16655V11.2472C42.4747 11.3473 42.1586 11.4052 41.7863 11.4052C41.414 11.4052 41.1137 11.3473 40.8415 11.2472Z" fill="currentColor" />
                                <path d="M48.7916 9.69816C48.8776 9.92648 48.9198 10.1706 48.9198 10.4288C48.9198 10.6869 48.8759 10.9592 48.7916 11.2454C48.4772 11.3315 48.061 11.4035 47.3305 11.4035C46.5999 11.4035 45.9835 11.2454 45.5831 10.845C45.0668 10.3445 44.9105 9.78422 44.9105 8.18074V4.59971H43.6935C43.6215 4.36964 43.5653 4.15537 43.5653 3.841C43.5653 3.56878 43.6233 3.36857 43.6935 3.13849H44.9105V1.10473C45.1827 1.00463 45.469 0.932617 45.8553 0.932617C46.1697 0.932617 46.4858 1.00463 46.772 1.10473V3.12444L48.7916 3.11039C48.8776 3.36857 48.9198 3.61268 48.9198 3.85505C48.9198 4.11322 48.8759 4.34154 48.7916 4.59971H46.7422V8.2668C46.7422 9.11157 46.7861 9.36974 46.9863 9.5559C47.1584 9.71397 47.3867 9.78597 47.9469 9.78597C48.2472 9.78597 48.4474 9.75787 48.7916 9.69992V9.69816Z" fill="currentColor" />
                                <path d="M57 3.209L54.0497 11.3897C53.3051 13.4393 52.4306 14.1119 51.542 14.3402C51.1837 14.4263 50.8255 14.4983 50.4532 14.4983C50.181 14.4983 49.9088 14.4702 49.6225 14.4263C49.4504 14.198 49.3644 13.924 49.3644 13.6518C49.3644 13.3216 49.4504 13.0792 49.6225 12.8351C49.8526 12.8931 50.0809 12.9071 50.3812 12.9071C50.9115 12.9071 51.2698 12.807 51.5982 12.5629C51.9125 12.3188 52.2005 11.9763 52.3726 11.3458L48.92 3.209C49.1641 3.0808 49.3784 3.00879 49.9228 3.00879C50.4093 3.00879 50.7113 3.09485 51.0116 3.209L53.2454 9.25408L55.0929 3.209C55.3651 3.09485 55.6654 3.00879 56.1237 3.00879C56.6102 3.00879 56.7682 3.0808 56.9983 3.209H57Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.12282 2.96702L7.33707 0.466095C7.35287 0.274662 7.17199 0.111328 6.94369 0.111328H5.33331C5.10501 0.111328 4.92413 0.274662 4.93994 0.466095L5.15419 2.96702C5.15419 2.97756 5.15419 2.9881 5.15419 2.99864L4.91711 11.1899C4.91184 11.376 5.08921 11.5288 5.31224 11.5288H6.96301C7.18428 11.5288 7.36341 11.376 7.35814 11.1899L7.12106 2.99864C7.12106 2.9881 7.12106 2.97756 7.12106 2.96702H7.12282Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.277 9.86153V11.1348C12.277 11.3526 12.0996 11.5282 11.8819 11.5282H10.6086C10.3909 11.5282 10.2153 11.3526 10.2153 11.1348V9.72806C10.2135 9.58404 10.0959 9.46813 9.95185 9.46813H8.54694C8.32918 9.46813 8.15356 9.29075 8.15356 9.07297V4.70864C8.15356 4.4891 8.32918 4.31348 8.54694 4.31348H9.82014C10.0379 4.31348 10.2153 4.4891 10.2153 4.70864V9.20469C10.2153 9.3487 10.3329 9.46813 10.4787 9.46813H11.8819C12.0996 9.46813 12.277 9.64375 12.277 9.86153Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.12342 4.70864V9.07297C4.12342 9.29075 3.94605 9.46813 3.72829 9.46813H2.32513C2.17937 9.46813 2.06347 9.58404 2.06171 9.72806V11.1348C2.06171 11.3526 1.88434 11.5282 1.66658 11.5282H0.395132C0.17737 11.5282 0 11.3526 0 11.1348V9.86153C0 9.64375 0.17737 9.46813 0.395132 9.46813H1.79829C1.94405 9.46813 2.06171 9.3487 2.06171 9.20469V4.70864C2.06171 4.4891 2.23732 4.31348 2.45684 4.31348H3.72829C3.94605 4.31348 4.12342 4.4891 4.12342 4.70864Z" fill="currentColor" />
                            </svg>
                        </a>

                        <span className="text-sm text-gray-500">design studio</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;