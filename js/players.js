// Players Page Logic
let currentGamemode = 'overall';
let currentModalPlayer = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupGamemodeButtons();
    renderLeaderboard();
});

// Setup gamemode button listeners
function setupGamemodeButtons() {
    const gamemodeButtons = document.querySelectorAll('.gamemode-btn');
    gamemodeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            gamemodeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current gamemode and render
            currentGamemode = button.dataset.gamemode;
            renderLeaderboard();
        });
    });
}

// Render the leaderboard
function renderLeaderboard() {
    const playersList = document.getElementById('playersList');
    const players = filterPlayersByGamemode(currentGamemode);
    
    playersList.innerHTML = players.map((player, index) => {
        let displayTier, tierLabel;
        let rankClass = 'rank-other';
        
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        
        if (currentGamemode === 'overall') {
            displayTier = player.tierName;
            tierLabel = player.tierName;
        } else {
            displayTier = player.tiers[currentGamemode];
            tierLabel = displayTier;
        }
        
        return `
            <div class="player-row ${rankClass}" onclick="openPlayerModal(this, ${index})">
                <div class="col-rank">#${index + 1}</div>
                <div class="col-player">
                    <img class="player-avatar" src="https://mc-heads.net/avatar/${player.username}" alt="${player.username}">
                    <div class="player-info">
                        <div class="player-name">${player.username}</div>
                        <div class="player-badge">${player.badge === 'Unranked' ? '-' : player.badge}</div>
                    </div>
                </div>
                <div class="col-region">${player.region}</div>
                <div class="col-points">
                    <span class="avg-tier-badge tier-${displayTier?.toLowerCase() || 'ht1'}">${tierLabel}</span>
                </div>
                <div class="col-tiers">
                    ${getTopTierBadgesWithGamemodes(player)}
                </div>
            </div>
        `;
    }).join('');
}

// Get top tier badges for display
function getTopTierBadges(player) {
    const gamemodeList = ['vanilla', 'uhc', 'sword', 'axe'];
    return gamemodeList.map(gamemode => {
        const tier = player.tiers[gamemode];
        return `<div class="tier-badge tier-${tier.toLowerCase()}" title="${gamemode}: ${tier}">${tier}</div>`;
    }).join('');
}

// Get top tier badges with gamemode icons
function getTopTierBadgesWithGamemodes(player) {
    const gamemodeImages = {
        'vanilla': 'assets/vanilla.png',
        'uhc': 'assets/uhc.png',
        'sword': 'assets/sword.png',
        'axe': 'assets/axe.png',
        'mace': 'assets/mace.png',
        'smp': 'assets/smp.png',
        'nethpot': 'assets/netheritepot.png',
        'pot': 'assets/pot.png'
    };
    
    const gamemodeList = ['vanilla', 'uhc', 'sword', 'axe', 'mace', 'smp', 'nethpot', 'pot'];
    return gamemodeList.map(gamemode => {
        const tier = player.tiers[gamemode] || 'Unranked';
        const img = gamemodeImages[gamemode];
        return `<div class="tier-badge-with-gamemode tier-${tier.toLowerCase()}" title="${gamemode}: ${tier}">
            <img src="${img}" alt="${gamemode}" class="gamemode-icon-small">
            <span class="tier-name">${tier}</span>
        </div>`;
    }).join('');
}

// Open player modal
function openPlayerModal(rowElement, playerIndex) {
    const players = filterPlayersByGamemode(currentGamemode);
    const player = players[playerIndex];
    
    if (!player) return;
    
    currentModalPlayer = player;
    
    // Fill modal with player data
    document.getElementById('modalPlayerHead').src = `https://mc-heads.net/avatar/${player.username}`;
    document.getElementById('modalPlayerName').textContent = player.username;
    document.getElementById('modalPlayerBadge').textContent = player.badge === 'Unranked' ? '-' : player.badge;
    document.getElementById('modalPlayerRegion').textContent = `Region: ${player.region}`;
    document.getElementById('namemcBtn').href = `https://namemc.com/profile/${player.username}`;
    
    // Overall rank
    const allPlayers = getRankedPlayers();
    const overallRank = allPlayers.findIndex(p => p.username === player.username) + 1;
    document.getElementById('modalOverallRank').textContent = `#${overallRank} OVERALL`;
    document.getElementById('modalTotalPoints').textContent = `Avg Tier: ${player.tierName}`;
    
    // Fill gamemodes grid
    const gamemodesGrid = document.getElementById('gamemodesGrid');
    const gamemodeImages = {
        'vanilla': 'assets/vanilla.png',
        'uhc': 'assets/uhc.png',
        'sword': 'assets/sword.png',
        'axe': 'assets/axe.png',
        'mace': 'assets/mace.png',
        'smp': 'assets/smp.png',
        'nethpot': 'assets/netheritepot.png',
        'pot': 'assets/pot.png',
        'overall': 'assets/cctiers-logo.png'
    };
    
    gamemodesGrid.innerHTML = gamemodes.map(gamemode => {
        const tier = player.tiers[gamemode] || 'Unranked';
        const tierColor = tierColors[tier];
        const img = gamemodeImages[gamemode];
        return `
            <div class="gamemode-tier-box">
                <img src="${img}" alt="${gamemode}" class="gamemode-icon-modal">
                <div class="gamemode-name">${formatGamemodeName(gamemode)}</div>
                <div class="gamemode-tier-value" style="color: ${tierColor};">${tier}</div>
            </div>
        `;
    }).join('');
    
    // Show modal
    const modal = document.getElementById('playerModal');
    modal.classList.add('active');
}

// Format gamemode name
function formatGamemodeName(gamemode) {
    const names = {
        'overall': 'Overall',
        'vanilla': 'Vanilla',
        'uhc': 'UHC',
        'sword': 'Sword',
        'axe': 'Axe',
        'mace': 'Mace',
        'smp': 'SMP',
        'nethpot': 'NethPot',
        'pot': 'Pot'
    };
    return names[gamemode] || gamemode;
}

// Close modal
function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    modal.classList.remove('active');
    currentModalPlayer = null;
}

// Modal close button and backdrop listeners
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closePlayerModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closePlayerModal);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlayerModal();
    }
});

// Prevent modal from closing when clicking inside the card
document.addEventListener('DOMContentLoaded', () => {
    const modalCard = document.querySelector('.modal-card');
    if (modalCard) {
        modalCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
