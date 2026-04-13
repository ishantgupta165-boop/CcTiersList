// Player Data with Tier Rankings
const playersData = [];

// Tier Points System - HT (High Tier) always > LT (Low Tier)
const tierPoints = {
    'Unranked': 0,
    'HT1': 100,
    'LT1': 90,
    'HT2': 80,
    'LT2': 70,
    'HT3': 60,
    'LT3': 50,
    'HT4': 40,
    'LT4': 30,
    'HT5': 20,
    'LT5': 10
};

// Tier Color Map
const tierColors = {
    'Unranked': '#999999',
    'HT1': '#ffa500',
    'LT1': '#ccaa44',
    'HT2': '#b366ff',
    'LT2': '#9944cc',
    'HT3': '#3366ff',
    'LT3': '#2244dd',
    'HT4': '#00cc44',
    'LT4': '#00aa33',
    'HT5': '#888888',
    'LT5': '#666666'
};

// Gamemode list (removed crystal since vanilla is the crystal)
const gamemodes = [
    'overall',
    'vanilla',
    'uhc',
    'sword',
    'axe',
    'mace',
    'smp',
    'nethpot',
    'pot'
];

// Calculate total points for a player
function calculatePlayerPoints(player) {
    const gamemodeList = ['vanilla', 'uhc', 'sword', 'axe', 'mace', 'smp', 'nethpot', 'pot'];
    let totalPoints = 0;
    gamemodeList.forEach(gamemode => {
        if (player.tiers[gamemode] && player.tiers[gamemode] !== '') {
            totalPoints += tierPoints[player.tiers[gamemode]] || 0;
        }
    });
    return totalPoints;
}

// Calculate average tier for a player (returns numeric representation)
function calculateAverageTier(player) {
    const gamemodeList = ['vanilla', 'uhc', 'sword', 'axe', 'mace', 'smp', 'nethpot', 'pot'];
    let totalTierValue = 0;
    let count = 0;
    
    gamemodeList.forEach(gamemode => {
        if (player.tiers[gamemode] && player.tiers[gamemode] !== '') {
            totalTierValue += tierPoints[player.tiers[gamemode]] || 0;
            count++;
        }
    });
    
    const average = count > 0 ? totalTierValue / count : 0;
    return average.toFixed(2);
}

// Convert numeric tier value to tier name
function getTierNameFromValue(value) {
    value = parseFloat(value);
    if (value >= 95) return 'HT1';
    if (value >= 85) return 'LT1';
    if (value >= 75) return 'HT2';
    if (value >= 65) return 'LT2';
    if (value >= 55) return 'HT3';
    if (value >= 45) return 'LT3';
    if (value >= 35) return 'HT4';
    if (value >= 25) return 'LT4';
    if (value >= 15) return 'HT5';
    if (value > 0) return 'LT5';
    return 'Unranked';
}

// Sort players by total points and assign overall tier
function getRankedPlayers() {
    const allPlayers = getAllPlayers();
    const rankedPlayers = allPlayers.map(player => {
        const totalPoints = calculatePlayerPoints(player);
        const avgTier = calculateAverageTier(player);
        const tierName = getTierNameFromValue(avgTier);
        
        return {
            ...player,
            totalPoints: totalPoints,
            avgTier: avgTier,
            tierName: tierName,
            rank: 0
        };
    });

    // Sort by avgTier (descending) for proper ranking - better average tier ranks higher
    rankedPlayers.sort((a, b) => {
        const avgA = parseFloat(a.avgTier);
        const avgB = parseFloat(b.avgTier);
        if (avgB !== avgA) {
            return avgB - avgA; // Higher average tier first
        }
        return a.username.localeCompare(b.username); // Alphabetical order for ties
    });

    rankedPlayers.forEach((player, index) => {
        player.rank = index + 1;
    });

    return rankedPlayers;
}

// Filter players by gamemode
function filterPlayersByGamemode(gamemode) {
    const ranked = getRankedPlayers();
    
    if (gamemode === 'overall') {
        // Sort by totalPoints in descending order (higher points = better tier)
        return ranked.sort((a, b) => b.totalPoints - a.totalPoints);
    }

    return ranked
        .filter(player => player.tiers[gamemode] && player.tiers[gamemode] !== '')
        .sort((a, b) => {
            const pointsA = tierPoints[a.tiers[gamemode]] || 0;
            const pointsB = tierPoints[b.tiers[gamemode]] || 0;
            return pointsB - pointsA; // Higher points first (better tier)
        });
}

// Get all players (stock + custom from localStorage)
function getAllPlayers() {
    const customPlayers = JSON.parse(localStorage.getItem('customPlayers') || '[]');
    return [...playersData, ...customPlayers];
}

// Save players to localStorage
function savePlayersToStorage(players) {
    localStorage.setItem('customPlayers', JSON.stringify(players));
}

// Load players from localStorage
function loadPlayersFromStorage() {
    return JSON.parse(localStorage.getItem('customPlayers') || '[]');
}
