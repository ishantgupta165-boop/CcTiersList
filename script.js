// State Management
let currentCategory = 'items';
let currentItem = null;
let votes = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeVotes();
    votes = getVotes();
    renderTierList();
});

// Category Switching
function switchCategory(category) {
    currentCategory = category;
    
    // Update button styling
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Reset modal
    closeItemModal();
    
    // Render new tier list
    renderTierList();
}

// Render Tier List
function renderTierList() {
    const tiers = ['S', 'A', 'B', 'C', 'D', 'F'];
    const categoryData = minecraftData[currentCategory];
    let totalVotes = 0;
    
    tiers.forEach(tier => {
        const tierContainer = document.getElementById(`tier${tier}`);
        const voteContainer = document.getElementById(`votes${tier}`);
        tierContainer.innerHTML = '';
        
        const items = categoryData[tier];
        let tierVotes = 0;
        
        items.forEach(item => {
            const itemVotes = votes[currentCategory][item.id].totalVotes;
            tierVotes += itemVotes;
            totalVotes += itemVotes;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'minecraft-item';
            itemElement.innerHTML = `
                <span class="minecraft-item-image">${item.emoji}</span>
                <span class="minecraft-item-name">${item.name}</span>
            `;
            itemElement.onclick = () => openItemModal(item, tier);
            tierContainer.appendChild(itemElement);
        });
        
        voteContainer.textContent = `Votes: ${tierVotes.toLocaleString()}`;
    });
    
    document.getElementById('totalVotes').textContent = totalVotes.toLocaleString();
}

// Modal Functions
function openItemModal(item, tier) {
    currentItem = { ...item, tier };
    
    document.getElementById('modalItemImage').textContent = item.emoji;
    document.getElementById('modalItemName').textContent = item.name;
    document.getElementById('modalItemTier').textContent = `Tier: ${tier}`;
    document.getElementById('modalItemDesc').textContent = item.desc;
    document.getElementById('modalUsefulness').style.width = item.usefulness + '%';
    document.getElementById('modalRarity').style.width = item.rarity + '%';
    document.getElementById('modalValue').style.width = item.value + '%';
    
    document.getElementById('itemModal').classList.add('open');
    document.getElementById('modalBackdrop').classList.add('open');
}

function closeItemModal() {
    document.getElementById('itemModal').classList.remove('open');
    document.getElementById('modalBackdrop').classList.remove('open');
    currentItem = null;
}

// Voting Function
function voteItem(newTier) {
    if (!currentItem) return;
    
    const itemId = currentItem.id;
    const oldTier = currentItem.tier;
    
    // Update votes in storage
    votes[currentCategory][itemId].totalVotes += 10;
    votes[currentCategory][itemId].currentTier = newTier;
    saveVotes(votes);
    
    // Move item to new tier
    const categoryData = minecraftData[currentCategory];
    const itemIndex = categoryData[oldTier].findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        const [movedItem] = categoryData[oldTier].splice(itemIndex, 1);
        categoryData[newTier].push(movedItem);
    }
    
    // Show feedback
    alert('✅ Vote recorded! Item moved to ' + newTier + ' tier.');
    
    // Close modal and refresh
    closeItemModal();
    renderTierList();
}

// Close modal when pressing Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeItemModal();
    }
});

// Close modal on backdrop click
document.addEventListener('click', (event) => {
    const modal = document.getElementById('itemModal');
    if (event.target.id === 'modalBackdrop' && modal.classList.contains('open')) {
        closeItemModal();
    }
});
