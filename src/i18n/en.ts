import { Strings } from './types'

export const en: Strings = {
    app: {
        title: 'Simple Geoducation',
        description:
            'Schools in Indonesia on a map, from open data. No account, no tracking.',
        roadmapHeading: 'Coming next',
        roadmap: {
            schools: 'Find schools around a place, by level',
            nearest: 'The nearest school per level, with the distance',
            indicators: 'School participation by province, from BPS',
            risk: 'Schools near recent earthquakes and floods',
        },
    },
    language: {
        label: 'Language',
    },
    nav: {
        label: 'Pages',
        home: 'Home',
    },
    skipToContent: 'Skip to content',
    map: {
        region: 'Map',
        unavailable:
            'The map cannot be shown in this browser (WebGL is not available).',
        provincesFailed: 'Province outlines could not be loaded.',
    },
    credits: {
        heading: 'Sources',
        licence: (name) => `Licence: ${name}`,
    },
}
