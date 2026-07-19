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

                    {/* <div className="flex flex-col gap-6">
                        <SectionHeader title="contact" />
                        <div className="flex items-center gap-2.5">
                            <img
                                src={mailIcon}
                                alt="Email"
                                className="w-[18px] h-[18px]"
                            />
                            <span className="text-primary font-base font-medium text-caption">
                                <b>ABN</b> 72 667 065 518
                            </span>
                        </div>
                    </div> */}
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
            <div className="w-full mt-7 text-center px-5 box-border">
                <span className="text-primary font-base font-medium text-regular">
                    © 2026 SiteSherpa Pty Ltd (SiteSherpa). We are SFZ Safety Pty Ltd. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;