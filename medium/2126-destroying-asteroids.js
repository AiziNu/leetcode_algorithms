/**
 * LeetCode 2126. Destroying Asteroids
 * https://leetcode.com/problems/destroying-asteroids/
 *
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    if (!asteroids || asteroids.length === 0) return false;

    // Sort asteroids in ascending order
    asteroids.sort((a, b) => a - b);

    for (let i = 0; i < asteroids.length; i++) {
        if (mass < asteroids[i]) {
            return false;
        }
        mass += asteroids[i];
    }
    return true;
};

// Time Complexity: O(n log n) - due to sorting
// Space Complexity: O(1) - sorting is in-place (or O(log n) depending on engine)