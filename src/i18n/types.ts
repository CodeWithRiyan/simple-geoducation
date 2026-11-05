/** Languages the UI is translated into. */
export type Language = 'id' | 'en'

/**
 * Every user-facing string. Each dictionary must implement all of it, so a
 * missing translation is a type error rather than a blank label at runtime.
 */
export interface Strings {
    app: {
        /** The site's name (the same in every language). */
        title: string
        /** One sentence under the title: what the site is for. */
        description: string
        /** Heading of the list of what is coming. */
        roadmapHeading: string
        /** What each coming release adds, in release order. */
        roadmap: {
            schools: string
            nearest: string
            indicators: string
            risk: string
        }
    }
    language: {
        /** Label of the language picker. */
        label: string
    }
    nav: {
        /** Accessible name of the page navigation landmark. */
        label: string
        /** Link text per page (see src/pages.ts). */
        home: string
    }
    /** The "skip to content" link, the first thing Tab reaches. */
    skipToContent: string
    map: {
        /** Accessible name of the map canvas. */
        region: string
        /** Shown instead of the map when it cannot start (no WebGL). */
        unavailable: string
        /** Shown under the map when the province outlines failed to load. */
        provincesFailed: string
    }
    /** The sources footer on every page. */
    credits: {
        heading: string
        /** "Licence: CC BY 4.0". */
        licence: (name: string) => string
    }
}
