import { Strings } from './types'

export const id: Strings = {
    app: {
        title: 'Simple Geoducation',
        description:
            'Sekolah di Indonesia di atas peta, dari data terbuka. Tanpa akun, tanpa pelacakan.',
        roadmapHeading: 'Berikutnya',
        roadmap: {
            schools: 'Cari sekolah di sekitar suatu tempat, per jenjang',
            nearest: 'Sekolah terdekat per jenjang, beserta jaraknya',
            indicators: 'Partisipasi sekolah per provinsi, dari BPS',
            risk: 'Sekolah di dekat gempa dan banjir terbaru',
        },
    },
    language: {
        label: 'Bahasa',
    },
    nav: {
        label: 'Halaman',
        home: 'Beranda',
    },
    skipToContent: 'Lompat ke konten',
    map: {
        region: 'Peta',
        unavailable:
            'Peta tidak dapat ditampilkan di browser ini (WebGL tidak tersedia).',
        provincesFailed: 'Batas provinsi tidak dapat dimuat.',
    },
    credits: {
        heading: 'Sumber',
        licence: (name) => `Lisensi: ${name}`,
    },
}
