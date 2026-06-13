import type { Metadata } from "next";
import type { Organization, WebSite, WithContext } from "schema-dts";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PAGE_TITLE = "INCHAPIN — дома бизнес-класса";

export const PAGE_DESCRIPTION =
    "Дома бизнес-класса для ценителей роскоши. Квартиры от 65 до 356 м² с чистовой отделкой на закрытой охраняемой территории.";

export const homeMetadata: Metadata = {
    title: {
        default: PAGE_TITLE,
        template: "%s — INCHAPIN",
    },
    description: PAGE_DESCRIPTION,
    keywords: [
        "INCHAPIN",
        "дом бизнес-класса",
        "квартиры бизнес-класса",
        "недвижимость",
        "элитное жильё",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        locale: "ru_RU",
        type: "website",
        url: "/",
        siteName: "INCHAPIN",
        images: [
            {
                url: "/hero.webp",
                width: 1760,
                height: 600,
                alt: "INCHAPIN — дом бизнес-класса",
            },
        ],
    },
};

export const websiteJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "INCHAPIN",
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: "ru-RU",
};

export const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INCHAPIN",
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+7-495-527-21-21",
};

export const homeJsonLdSchemas = [websiteJsonLd, organizationJsonLd];
