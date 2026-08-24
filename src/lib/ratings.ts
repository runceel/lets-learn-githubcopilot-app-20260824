/**
 * Pure formatting helpers for game star ratings.
 *
 * Kept framework-free and side-effect-free so the logic is unit-testable
 * without the Astro runtime (see `ratings.test.ts`). Consumed by the
 * `StarRating.astro` component.
 */

/**
 * Clamps a rating into the displayable 0–5 range.
 */
export function clampRating(rating: number): number {
    return Math.min(5, Math.max(0, rating));
}

/**
 * Builds a star glyph string for a rating between 0 and 5.
 *
 * Renders full (★) and empty (☆) stars. Returns `'Not yet rated'` when the
 * rating is `null`. Ratings are clamped and rounded down to the 0–5 range so
 * the output always contains exactly five star positions.
 */
export function formatStarRating(rating: number | null): string {
    if (rating === null) return 'Not yet rated';

    const fullStars = Math.floor(clampRating(rating));
    const emptyStars = 5 - fullStars;

    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
}
