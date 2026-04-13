// Minecraft Tier Data
const minecraftData = {
    items: {
        S: [
            { id: 'diamond', name: 'Diamond', emoji: '💎', desc: 'Rarest ore, essential for endgame tools', usefulness: 95, rarity: 80, value: 90 },
            { id: 'netherite', name: 'Netherite', emoji: '🔱', desc: 'Most powerful material, immune to lava', usefulness: 100, rarity: 95, value: 100 },
            { id: 'emerald', name: 'Emerald', emoji: '✨', desc: 'Trading currency, very valuable', usefulness: 85, rarity: 75, value: 85 },
            { id: 'enchbook', name: 'Enchanted Book', emoji: '📖', desc: 'Source of powerful enchantments', usefulness: 90, rarity: 70, value: 88 }
        ],
        A: [
            { id: 'gold', name: 'Gold Block', emoji: '🟨', desc: 'Valuable, used for beacons', usefulness: 70, rarity: 50, value: 75 },
            { id: 'redstone', name: 'Redstone', emoji: '🔴', desc: 'Power source for mechanisms', usefulness: 85, rarity: 60, value: 70 },
            { id: 'obsidian', name: 'Obsidian', emoji: '💜', desc: 'Nether portal block, very durable', usefulness: 80, rarity: 65, value: 72 },
            { id: 'blaze', name: 'Blaze Rod', emoji: '🔥', desc: 'Fuel and brewing ingredient', usefulness: 75, rarity: 70, value: 68 }
        ],
        B: [
            { id: 'iron', name: 'Iron Ingot', emoji: '⚙️', desc: 'Common crafting material', usefulness: 80, rarity: 40, value: 65 },
            { id: 'copper', name: 'Copper', emoji: '🟧', desc: 'Building block, oxidizes over time', usefulness: 55, rarity: 45, value: 50 },
            { id: 'lapis', name: 'Lapis Lazuli', emoji: '🔵', desc: 'Enchanting ingredient', usefulness: 70, rarity: 55, value: 60 },
            { id: 'amethyst', name: 'Amethyst', emoji: '💜', desc: 'Decorative crystal', usefulness: 45, rarity: 50, value: 55 }
        ],
        C: [
            { id: 'coal', name: 'Coal', emoji: '⬛', desc: 'Basic fuel source', usefulness: 60, rarity: 30, value: 45 },
            { id: 'clay', name: 'Clay', emoji: '🟫', desc: 'Crafting and building', usefulness: 50, rarity: 35, value: 40 },
            { id: 'stone', name: 'Stone', emoji: '🪨', desc: 'Basic building block', usefulness: 55, rarity: 20, value: 30 },
            { id: 'dirt', name: 'Dirt', emoji: '🟤', desc: 'Common block for terraforming', usefulness: 40, rarity: 10, value: 15 }
        ],
        D: [
            { id: 'oak_log', name: 'Oak Log', emoji: '🪵', desc: 'Basic wood source', usefulness: 50, rarity: 25, value: 35 },
            { id: 'sand', name: 'Sand', emoji: '🟨', desc: 'Common desert block', usefulness: 45, rarity: 15, value: 25 },
            { id: 'gravel', name: 'Gravel', emoji: '⚫', desc: 'Falls and has limited use', usefulness: 35, rarity: 20, value: 20 },
            { id: 'leaves', name: 'Leaves', emoji: '🍃', desc: 'Tree decoration', usefulness: 30, rarity: 15, value: 10 }
        ],
        F: [
            { id: 'sponge', name: 'Sponge', emoji: '🧽', desc: 'Limited use, mostly decorative', usefulness: 25, rarity: 60, value: 20 },
            { id: 'end_rod', name: 'End Rod', emoji: '➡️', desc: 'Decorative light', usefulness: 20, rarity: 50, value: 22 },
            { id: 'hay', name: 'Hay Block', emoji: '🌾', desc: 'Food for animals only', usefulness: 15, rarity: 10, value: 8 },
            { id: 'string', name: 'String', emoji: '🧵', desc: 'Dropped by spiders rarely useful', usefulness: 20, rarity: 25, value: 12 }
        ]
    },
    blocks: {
        S: [
            { id: 'deepslate', name: 'Deepslate', emoji: '⬛', desc: 'Deep cave building block', usefulness: 85, rarity: 75, value: 80 },
            { id: 'amethyst_block', name: 'Amethyst Block', emoji: '💜', desc: 'Magical building block', usefulness: 80, rarity: 80, value: 85 },
            { id: 'blackstone', name: 'Blackstone', emoji: '🟫', desc: 'Nether building material', usefulness: 75, rarity: 70, value: 72 },
            { id: 'crying_obsidian', name: 'Crying Obsidian', emoji: '😢', desc: 'Respawn anchor material', usefulness: 70, rarity: 85, value: 75 }
        ],
        A: [
            { id: 'oak_log', name: 'Oak Logs', emoji: '🪵', desc: 'Natural building material', usefulness: 80, rarity: 50, value: 65 },
            { id: 'cobblestone', name: 'Cobblestone', emoji: '🧱', desc: 'Basic building block', usefulness: 75, rarity: 40, value: 60 },
            { id: 'grass_block', name: 'Grass Block', emoji: '🌱', desc: 'Beautiful terrain layer', usefulness: 70, rarity: 45, value: 58 },
            { id: 'diorite', name: 'Diorite', emoji: '⚪', desc: 'White building stone', usefulness: 65, rarity: 60, value: 62 }
        ],
        B: [
            { id: 'andesite', name: 'Andesite', emoji: '🔘', desc: 'Gray building stone', usefulness: 60, rarity: 55, value: 55 },
            { id: 'granite', name: 'Granite', emoji: '🌄', desc: 'Red/brown stone variant', usefulness: 60, rarity: 58, value: 56 },
            { id: 'glass', name: 'Glass', emoji: '🟦', desc: 'Transparent building block', usefulness: 70, rarity: 50, value: 60 },
            { id: 'sand', name: 'Sand Block', emoji: '🟨', desc: 'Desert terrain', usefulness: 50, rarity: 35, value: 45 }
        ],
        C: [
            { id: 'dirt_path', name: 'Dirt Path', emoji: '🛤️', desc: 'Decorative pathways', usefulness: 40, rarity: 25, value: 30 },
            { id: 'podzol', name: 'Podzol', emoji: '🟤', desc: 'Forest soil variant', usefulness: 45, rarity: 30, value: 35 },
            { id: 'mycelium', name: 'Mycelium', emoji: '🍄', desc: 'Mushroom tree soil', usefulness: 35, rarity: 40, value: 38 },
            { id: 'water', name: 'Water', emoji: '💧', desc: 'Liquid for farming', usefulness: 65, rarity: 20, value: 40 }
        ],
        D: [
            { id: 'gravel', name: 'Gravel Block', emoji: '⚫', desc: 'Unstable falling block', usefulness: 30, rarity: 25, value: 20 },
            { id: 'soul_sand', name: 'Soul Sand', emoji: '👻', desc: 'Nether slowness block', usefulness: 25, rarity: 35, value: 22 },
            { id: 'magma', name: 'Magma', emoji: '🌋', desc: 'Nether hazard block', usefulness: 20, rarity: 40, value: 25 },
            { id: 'warped_wart', name: 'Warped Wart', emoji: '🌀', desc: 'Nether plants', usefulness: 15, rarity: 45, value: 20 }
        ],
        F: [
            { id: 'moving_piston', name: 'Moving Piston', emoji: '➡️', desc: 'Technical block', usefulness: 10, rarity: 50, value: 15 },
            { id: 'barrier', name: 'Barrier', emoji: '🚫', desc: 'Invisible wall block', usefulness: 15, rarity: 85, value: 18 },
            { id: 'structure_void', name: 'Structure Void', emoji: '⬜', desc: 'Structure only block', usefulness: 5, rarity: 90, value: 10 },
            { id: 'end_portal_frame', name: 'End Portal Frame', emoji: '🟪', desc: 'End dimension portal', usefulness: 8, rarity: 100, value: 25 }
        ]
    },
    mobs: {
        S: [
            { id: 'wither', name: 'Wither', emoji: '💀', desc: 'Dangerous boss, drops nether star', usefulness: 90, rarity: 95, value: 85 },
            { id: 'ender_dragon', name: 'Ender Dragon', emoji: '🐉', desc: 'Final boss of the game', usefulness: 95, rarity: 100, value: 95 },
            { id: 'warden', name: 'Warden', emoji: '👹', desc: 'Powerful deep dark mob', usefulness: 85, rarity: 90, value: 80 },
            { id: 'elder_guardian', name: 'Elder Guardian', emoji: '🐙', desc: 'Ocean temple guardian', usefulness: 75, rarity: 85, value: 70 }
        ],
        A: [
            { id: 'enderman', name: 'Enderman', emoji: '🟦', desc: 'Teleporting ender mob', usefulness: 75, rarity: 70, value: 65 },
            { id: 'blaze', name: 'Blaze', emoji: '🔥', desc: 'Nether fire mob, drops rods', usefulness: 80, rarity: 75, value: 72 },
            { id: 'creeper', name: 'Creeper', emoji: '💚', desc: 'Iconic explosive mob', usefulness: 70, rarity: 60, value: 60 },
            { id: 'ghast', name: 'Ghast', emoji: '👻', desc: 'Nether fireball shooter', usefulness: 65, rarity: 65, value: 58 }
        ],
        B: [
            { id: 'piglin', name: 'Piglin', emoji: '🐷', desc: 'Nether trader mob', usefulness: 60, rarity: 50, value: 50 },
            { id: 'husk', name: 'Husk', emoji: '🧟', desc: 'Desert zombie variant', usefulness: 45, rarity: 55, value: 45 },
            { id: 'skeleton', name: 'Skeleton', emoji: '💀', desc: 'Ranged undead mob', usefulness: 55, rarity: 45, value: 48 },
            { id: 'spider', name: 'Spider', emoji: '🕷️', desc: 'Climbs walls, drops string', usefulness: 50, rarity: 50, value: 45 }
        ],
        C: [
            { id: 'zombie', name: 'Zombie', emoji: '🧟', desc: 'Basic undead mob', usefulness: 40, rarity: 30, value: 35 },
            { id: 'slime', name: 'Slime', emoji: '🟩', desc: 'Bouncy jelly block mob', usefulness: 35, rarity: 40, value: 32 },
            { id: 'witch', name: 'Witch', emoji: '👩', desc: 'Potion-drinking mob', usefulness: 30, rarity: 35, value: 28 },
            { id: 'cave_spider', name: 'Cave Spider', emoji: '🕸️', desc: 'Small poison spider', usefulness: 25, rarity: 40, value: 22 }
        ],
        D: [
            { id: 'bat', name: 'Bat', emoji: '🦇', desc: 'Passive cave mob', usefulness: 5, rarity: 25, value: 8 },
            { id: 'silverfish', name: 'Silverfish', emoji: '🐛', desc: 'Annoying stone bugs', usefulness: 15, rarity: 30, value: 12 },
            { id: 'strider', name: 'Strider', emoji: '🚴', desc: 'Passive lava mount', usefulness: 20, rarity: 35, value: 18 },
            { id: 'endermite', name: 'Endermite', emoji: '🐜', desc: 'Tiny annoying mob', usefulness: 10, rarity: 25, value: 8 }
        ],
        F: [
            { id: 'armor_stand', name: 'Armor Stand', emoji: '🤖', desc: 'Decorative entity', usefulness: 15, rarity: 45, value: 20 },
            { id: 'chicken', name: 'Chicken', emoji: '🐔', desc: 'Weak farm animal', usefulness: 20, rarity: 20, value: 15 },
            { id: 'pig', name: 'Pig', emoji: '🐷', desc: 'Passive pork source', usefulness: 25, rarity: 15, value: 18 },
            { id: 'donkey', name: 'Donkey', emoji: '🫏', desc: 'Slow transport', usefulness: 20, rarity: 30, value: 22 }
        ]
    },
    tools: {
        S: [
            { id: 'netherite_pickaxe', name: 'Netherite Pickaxe', emoji: '⛏️', desc: 'Best mining tool, unbreakable', usefulness: 100, rarity: 95, value: 95 },
            { id: 'netherite_sword', name: 'Netherite Sword', emoji: '⚔️', desc: 'Most powerful weapon', usefulness: 95, rarity: 95, value: 92 },
            { id: 'mending_book', name: 'Mending Book', emoji: '📚', desc: 'Tool repair enchantment', usefulness: 100, rarity: 90, value: 98 },
            { id: 'sharpness_v', name: 'Sharpness V', emoji: '✨', desc: 'Maximum damage enchantment', usefulness: 90, rarity: 85, value: 88 }
        ],
        A: [
            { id: 'diamond_pickaxe', name: 'Diamond Pickaxe', emoji: '⛏️', desc: 'Fine mining tool', usefulness: 85, rarity: 70, value: 75 },
            { id: 'diamond_sword', name: 'Diamond Sword', emoji: '⚔️', desc: 'Strong melee weapon', usefulness: 80, rarity: 70, value: 72 },
            { id: 'bow', name: 'Bow', emoji: '🏹', desc: 'Ranged weapon', usefulness: 75, rarity: 60, value: 65 },
            { id: 'trident', name: 'Trident', emoji: '🔱', desc: 'Ocean weapon', usefulness: 70, rarity: 85, value: 70 }
        ],
        B: [
            { id: 'iron_pickaxe', name: 'Iron Pickaxe', emoji: '⛏️', desc: 'Standard mining tool', usefulness: 70, rarity: 50, value: 60 },
            { id: 'iron_sword', name: 'Iron Sword', emoji: '⚔️', desc: 'Standard weapon', usefulness: 65, rarity: 50, value: 55 },
            { id: 'shield', name: 'Shield', emoji: '🛡️', desc: 'Defensive equipment', usefulness: 60, rarity: 55, value: 58 },
            { id: 'crossbow', name: 'Crossbow', emoji: '🎯', desc: 'Advanced ranged weapon', usefulness: 65, rarity: 60, value: 62 }
        ],
        C: [
            { id: 'stone_pickaxe', name: 'Stone Pickaxe', emoji: '⛏️', desc: 'Early game tool', usefulness: 50, rarity: 30, value: 40 },
            { id: 'wooden_pickaxe', name: 'Wood Pickaxe', emoji: '⛏️', desc: 'First mining tool', usefulness: 45, rarity: 25, value: 30 },
            { id: 'fishing_rod', name: 'Fishing Rod', emoji: '🎣', desc: 'For fishing', usefulness: 35, rarity: 40, value: 35 },
            { id: 'bucket', name: 'Bucket', emoji: '🪣', desc: 'Liquid container', usefulness: 55, rarity: 35, value: 45 }
        ],
        D: [
            { id: 'hoe', name: 'Hoe', emoji: '🌾', desc: 'Farming tool', usefulness: 40, rarity: 30, value: 35 },
            { id: 'shovel', name: 'Shovel', emoji: '⬇️', desc: 'Digging tool', usefulness: 35, rarity: 25, value: 30 },
            { id: 'axe', name: 'Axe', emoji: '🪓', desc: 'Wood cutting tool', usefulness: 45, rarity: 40, value: 42 },
            { id: 'flint_steel', name: 'Flint & Steel', emoji: '🔥', desc: 'Fire starting tool', usefulness: 30, rarity: 45, value: 35 }
        ],
        F: [
            { id: 'stick', name: 'Stick', emoji: '🪵', desc: 'Basic crafting material', usefulness: 15, rarity: 10, value: 5 },
            { id: 'string', name: 'String', emoji: '🧵', desc: 'Rare spider drop', usefulness: 20, rarity: 25, value: 15 },
            { id: 'bone', name: 'Bone', emoji: '🦴', desc: 'Skeleton drop', usefulness: 25, rarity: 20, value: 18 },
            { id: 'bamboo', name: 'Bamboo', emoji: '🎋', desc: 'Decorative plant', usefulness: 10, rarity: 30, value: 12 }
        ]
    }
};

// Initialize vote storage
function initializeVotes() {
    if (!localStorage.getItem('minecraftVotes')) {
        const votes = {};
        for (let category in minecraftData) {
            votes[category] = {};
            for (let tier in minecraftData[category]) {
                minecraftData[category][tier].forEach(item => {
                    votes[category][item.id] = {};
                    votes[category][item.id].totalVotes = Math.floor(Math.random() * 1000) + 100;
                    votes[category][item.id].currentTier = tier;
                });
            }
        }
        localStorage.setItem('minecraftVotes', JSON.stringify(votes));
    }
}

// Get votes from storage
function getVotes() {
    initializeVotes();
    return JSON.parse(localStorage.getItem('minecraftVotes'));
}

// Save votes to storage
function saveVotes(votes) {
    localStorage.setItem('minecraftVotes', JSON.stringify(votes));
}
