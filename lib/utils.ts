import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function constructMetadata({
    title = "Twinverse Technology - Augmented Reality/Virtual Reality Company ",
    description = "We are a dynamic augmented reality/virtual reality company specializing in crafting custom experiences that transport your audience to extraordinary realms, showcasing your brand, products, and locations in ways that leave a lasting impression",
    image = "/pin.jpg",
    icons = "/favicon.ico",
    url = "https://twinverse.in",
    noIndex = false,
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    url?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
            url,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            site: "https://twinverse.in",
            creator: "@twinverse",
        },
        icons,
        metadataBase: new URL("https://twinverse.in"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            }
        })
    }
}