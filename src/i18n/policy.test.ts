import { describe, expect, it } from 'vitest'
import { en } from './en'
import { id } from './id'
import { CREDITS } from '../lib/credits'

/**
 * What the site's own words must never do, carried over from the
 * simple-geolocation reference: call a place safe or unsafe, or advertise
 * or promote anything (the only links are to the data sources). A school's
 * quality is not this site's to judge either: no rankings.
 */

/** Every string the dictionaries can produce: leaves, and functions called with a sample argument. */
function texts(value: unknown, out: string[] = []): string[] {
    if (typeof value === 'string') out.push(value)
    else if (typeof value === 'function') {
        out.push(String((value as (a: unknown) => unknown)('CC BY 4.0')))
    } else if (value && typeof value === 'object') {
        for (const child of Object.values(value)) texts(child, out)
    }
    return out
}

const VERDICT = [
    /\bsafe\b/i,
    /\bunsafe\b/i,
    /\baman\b/i,
    /\btidak aman\b/i,
    /\bbest\b/i,
    /\bterbaik\b/i,
    /\branking\b/i,
    /\bperingkat\b/i,
    /\bfavorit\b/i,
]

const PROMOTION = [
    /\bdownload\b/i,
    /\bunduh\b/i,
    /\binstall\b/i,
    /\bpasang aplikasi\b/i,
    /\bplay store\b/i,
    /\bapp store\b/i,
    /\bpremium\b/i,
    /\bupgrade\b/i,
    /\bsubscribe\b/i,
    /\blangganan\b/i,
    /\biklan\b/i,
    /\badvert/i,
    /\bsponsor/i,
    /\bdonat/i,
    /\bbuy\b/i,
    /\bbeli\b/i,
    /\bfollow us\b/i,
    /\bikuti kami\b/i,
    /\brate (us|the app)\b/i,
]

describe("the site's own words", () => {
    const all = [...texts(id), ...texts(en)]

    it('exist (the scan is not vacuous)', () => {
        expect(all.length).toBeGreaterThan(20)
    })

    it('never judge a place or a school', () => {
        for (const text of all) {
            for (const pattern of VERDICT) {
                expect(text, `"${text}" matches ${pattern}`).not.toMatch(
                    pattern
                )
            }
        }
    })

    it('carry no ads or promotion — nor do the credit lines', () => {
        const credits = Object.values(CREDITS).flatMap((c) => [
            c.text.id,
            c.text.en,
            c.name,
        ])
        for (const text of [...all, ...credits]) {
            for (const pattern of PROMOTION) {
                expect(text, `"${text}" matches ${pattern}`).not.toMatch(
                    pattern
                )
            }
        }
    })
})
