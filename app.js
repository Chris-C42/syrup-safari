/* =============================================
   SYRUP SAFARI - Main Application
   ============================================= */

// =============================================
// DATA & STATE
// =============================================
const STORAGE_KEY = 'syrupSafari_syrups';
const ACHIEVEMENTS_KEY = 'syrupSafari_achievements';

// =============================================
// ACHIEVEMENT DEFINITIONS
// =============================================
const ACHIEVEMENTS = {
    // Creation Achievements
    first_drip: {
        id: 'first_drip',
        name: 'First Drip',
        description: 'Create your first syrup recipe',
        icon: '🍯',
        category: 'creation',
        secret: false
    },
    getting_sticky: {
        id: 'getting_sticky',
        name: 'Getting Sticky',
        description: 'Create 5 syrup recipes',
        icon: '🥄',
        category: 'creation',
        secret: false
    },
    sweet_obsession: {
        id: 'sweet_obsession',
        name: 'Sweet Obsession',
        description: 'Create 10 syrup recipes',
        icon: '🧪',
        category: 'creation',
        secret: false
    },
    syrup_sommelier: {
        id: 'syrup_sommelier',
        name: 'Syrup Sommelier',
        description: 'Create 25 syrup recipes',
        icon: '🎩',
        category: 'creation',
        secret: false
    },
    master_of_the_pour: {
        id: 'master_of_the_pour',
        name: 'Master of the Pour',
        description: 'Create 50 syrup recipes',
        icon: '👑',
        category: 'creation',
        secret: false
    },

    // Rating Achievements
    harsh_critic: {
        id: 'harsh_critic',
        name: 'Harsh Critic',
        description: 'Give a syrup a 1-heart rating',
        icon: '💔',
        category: 'rating',
        secret: false
    },
    five_heart_chef: {
        id: 'five_heart_chef',
        name: 'Five Heart Chef',
        description: 'Create a 5-heart masterpiece',
        icon: '❤️',
        category: 'rating',
        secret: false
    },
    quality_control: {
        id: 'quality_control',
        name: 'Quality Control',
        description: 'Rate 10 different syrups',
        icon: '📋',
        category: 'rating',
        secret: false
    },
    perfectionist: {
        id: 'perfectionist',
        name: 'Perfectionist',
        description: 'Have 5 syrups all rated 5 hearts',
        icon: '✨',
        category: 'rating',
        secret: false
    },

    // Ingredient Achievements
    minimalist: {
        id: 'minimalist',
        name: 'Minimalist',
        description: 'Create a syrup with only 2 ingredients',
        icon: '🎯',
        category: 'ingredients',
        secret: false
    },
    mad_scientist: {
        id: 'mad_scientist',
        name: 'Mad Scientist',
        description: 'Create a syrup with 8+ ingredients',
        icon: '🔬',
        category: 'ingredients',
        secret: false
    },
    herb_whisperer: {
        id: 'herb_whisperer',
        name: 'Herb Whisperer',
        description: 'Use mint, basil, rosemary, or thyme in a syrup',
        icon: '🌿',
        category: 'ingredients',
        secret: false
    },
    spice_trader: {
        id: 'spice_trader',
        name: 'Spice Trader',
        description: 'Use cinnamon, cardamom, ginger, or clove',
        icon: '🫚',
        category: 'ingredients',
        secret: false
    },
    citrus_burst: {
        id: 'citrus_burst',
        name: 'Citrus Burst',
        description: 'Create a syrup with lemon, lime, or orange',
        icon: '🍋',
        category: 'ingredients',
        secret: false
    },

    // Tag & Organization Achievements
    tag_enthusiast: {
        id: 'tag_enthusiast',
        name: 'Tag Enthusiast',
        description: 'Use 5 or more tags on a single syrup',
        icon: '🏷️',
        category: 'organization',
        secret: false
    },
    well_organized: {
        id: 'well_organized',
        name: 'Well Organized',
        description: 'Have syrups using at least 5 different tags',
        icon: '📁',
        category: 'organization',
        secret: false
    },
    flavor_explorer: {
        id: 'flavor_explorer',
        name: 'Flavor Explorer',
        description: 'Use Floral, Fruity, Spicy, Herbal, and Citrus tags',
        icon: '🧭',
        category: 'organization',
        secret: false
    },

    // Collection Achievements
    rainbow_collection: {
        id: 'rainbow_collection',
        name: 'Rainbow Collection',
        description: 'Have syrups in 7 distinctly different colors',
        icon: '🌈',
        category: 'collection',
        secret: false
    },
    seasonal_sweetness: {
        id: 'seasonal_sweetness',
        name: 'Seasonal Sweetness',
        description: 'Create syrups tagged Spring, Summer, Fall, and Winter',
        icon: '🍂',
        category: 'collection',
        secret: true
    },

    // Special & Secret Achievements
    night_owl: {
        id: 'night_owl',
        name: 'Night Owl',
        description: 'Create a syrup between midnight and 4am',
        icon: '🦉',
        category: 'special',
        secret: true
    },
    early_bird: {
        id: 'early_bird',
        name: 'Early Bird',
        description: 'Create a syrup between 5am and 7am',
        icon: '🐦',
        category: 'special',
        secret: true
    },
    backup_believer: {
        id: 'backup_believer',
        name: 'Backup Believer',
        description: 'Export your syrup collection',
        icon: '💾',
        category: 'special',
        secret: false
    },
    data_archeologist: {
        id: 'data_archeologist',
        name: 'Data Archeologist',
        description: 'Import a syrup collection',
        icon: '📦',
        category: 'special',
        secret: false
    },
    second_chance: {
        id: 'second_chance',
        name: 'Second Chance',
        description: 'Edit a syrup after creating it',
        icon: '✏️',
        category: 'special',
        secret: true
    },
    indecisive: {
        id: 'indecisive',
        name: 'Indecisive',
        description: 'Edit the same syrup 5 times',
        icon: '🤔',
        category: 'special',
        secret: true
    },
    sweet_tooth: {
        id: 'sweet_tooth',
        name: 'Sweet Tooth',
        description: 'Use sugar, honey, maple, or agave in 5 syrups',
        icon: '🦷',
        category: 'special',
        secret: true
    },
    naming_master: {
        id: 'naming_master',
        name: 'Naming Master',
        description: 'Create a syrup with a name longer than 30 characters',
        icon: '📜',
        category: 'special',
        secret: true
    },
    storyteller: {
        id: 'storyteller',
        name: 'Storyteller',
        description: 'Write a description longer than 200 characters',
        icon: '📖',
        category: 'special',
        secret: true
    }
};

// Achievement state
let unlockedAchievements = {};
let editCounts = {}; // Track edit counts per syrup for "Indecisive" achievement
let newlyUnlocked = []; // Queue for showing unlock notifications

let syrups = [];
let currentSyrupId = null;
let currentTags = [];
let currentIngredients = [];
let currentRating = 0;
let currentColor = '#e8d4d4';

// Common kitchen measurements
const MEASUREMENTS = [
    { value: 'cups', label: 'cups' },
    { value: 'tbsp', label: 'tbsp' },
    { value: 'tsp', label: 'tsp' },
    { value: 'oz', label: 'oz' },
    { value: 'ml', label: 'ml' },
    { value: 'g', label: 'g' },
    { value: 'lb', label: 'lb' },
    { value: 'pieces', label: 'pieces' },
    { value: 'sprig', label: 'sprig' },
    { value: 'whole', label: 'whole' },
    { value: 'pinch', label: 'pinch' },
    { value: 'dash', label: 'dash' },
    { value: '', label: '—' }
];

// Filter state
let filterState = {
    sort: 'date-desc',
    rating: 'all',
    tag: 'all',
    search: ''
};

// =============================================
// EXTENDED COLOR NAME DATABASE
// =============================================
// Comprehensive color database for better color suggestions
const colorDatabase = {
    // Reds & Pinks
    'crimson': '#dc143c', 'ruby': '#e0115f', 'scarlet': '#ff2400', 'cherry': '#de3163',
    'raspberry': '#e30b5c', 'strawberry': '#fc5a8d', 'rose': '#ff007f', 'coral': '#ff7f50',
    'salmon': '#fa8072', 'blush': '#de5d83', 'rouge': '#a94064', 'burgundy': '#800020',
    'maroon': '#800000', 'garnet': '#733635', 'wine': '#722f37', 'cranberry': '#9e003a',
    'raspberry': '#e30b5d', 'magenta': '#ff00ff', 'fuchsia': '#ff00ff', 'cerise': '#de3163',
    'carnation': '#ffa6c9', 'flamingo': '#fc8eac', 'watermelon': '#fd4659', 'pomegranate': '#c41e3a',

    // Oranges
    'orange': '#ffa500', 'tangerine': '#ff9966', 'peach': '#ffcba4', 'apricot': '#fbceb1',
    'cantaloupe': '#ffa62f', 'mango': '#ff8243', 'papaya': '#ffefd5', 'carrot': '#ed9121',
    'pumpkin': '#ff7518', 'amber': '#ffbf00', 'marigold': '#eaa221', 'rust': '#b7410e',
    'terracotta': '#e2725b', 'copper': '#b87333', 'ginger': '#b06500', 'cinnamon': '#d2691e',
    'sienna': '#a0522d', 'persimmon': '#ec5800', 'clementine': '#e96e00', 'nectarine': '#ff6347',

    // Yellows & Golds
    'yellow': '#ffff00', 'lemon': '#fff44f', 'gold': '#ffd700', 'canary': '#ffef00',
    'banana': '#ffe135', 'butter': '#fffacd', 'cream': '#fffdd0', 'honey': '#eb9605',
    'mustard': '#ffdb58', 'saffron': '#f4c430', 'sunflower': '#ffda03', 'daffodil': '#ffff31',
    'champagne': '#f7e7ce', 'flax': '#eedc82', 'maize': '#fbec5d', 'goldenrod': '#daa520',
    'turmeric': '#ffc40c', 'citrine': '#e4d00a', 'primrose': '#f6edc3', 'blonde': '#faf0be',

    // Greens
    'green': '#008000', 'lime': '#32cd32', 'mint': '#98ff98', 'sage': '#bcb88a',
    'olive': '#808000', 'emerald': '#50c878', 'jade': '#00a86b', 'forest': '#228b22',
    'hunter': '#355e3b', 'basil': '#5d8347', 'herb': '#4f7942', 'fern': '#4f7942',
    'moss': '#8a9a5b', 'pine': '#01796f', 'eucalyptus': '#44d7a8', 'seafoam': '#93e9be',
    'pistachio': '#93c572', 'avocado': '#568203', 'kiwi': '#8ee53f', 'pickle': '#7b8b3a',
    'shamrock': '#009e60', 'clover': '#384910', 'grass': '#7cfc00', 'chartreuse': '#7fff00',
    'spruce': '#2e8b57', 'juniper': '#3a5f0b', 'seaweed': '#2e8b57', 'matcha': '#c5e17a',
    'cucumber': '#77ab59', 'celery': '#b4c424', 'asparagus': '#7ba05b', 'spinach': '#3b7a57',
    'rosemary': '#5e8c6a', 'thyme': '#7d8471', 'cilantro': '#4a7023', 'dill': '#6b8e23',

    // Blues
    'blue': '#0000ff', 'navy': '#000080', 'azure': '#007fff', 'sky': '#87ceeb',
    'ocean': '#4f42b5', 'cobalt': '#0047ab', 'sapphire': '#0f52ba', 'royal': '#4169e1',
    'cerulean': '#007ba7', 'indigo': '#4b0082', 'teal': '#008080', 'turquoise': '#40e0d0',
    'aqua': '#00ffff', 'cyan': '#00ffff', 'periwinkle': '#ccccff', 'cornflower': '#6495ed',
    'steel': '#4682b4', 'powder': '#b0e0e6', 'ice': '#e0ffff', 'slate': '#708090',
    'blueberry': '#4f86f7', 'denim': '#1560bd', 'midnight': '#191970', 'twilight': '#4e5180',
    'arctic': '#82a7cd', 'glacier': '#80b3c4', 'pacific': '#1c6b8a', 'aegean': '#1f456e',

    // Purples & Violets
    'purple': '#800080', 'violet': '#ee82ee', 'lavender': '#e6e6fa', 'lilac': '#c8a2c8',
    'plum': '#dda0dd', 'mauve': '#e0b0ff', 'orchid': '#da70d6', 'amethyst': '#9966cc',
    'grape': '#6f2da8', 'eggplant': '#614051', 'mulberry': '#c54b8c', 'boysenberry': '#873260',
    'heather': '#b7a8b8', 'wisteria': '#c9a0dc', 'iris': '#5a4fcf', 'petunia': '#9878b0',
    'hibiscus': '#b6316c', 'elderflower': '#f9f7f3', 'thistle': '#d8bfd8', 'periwinkle': '#c3cde6',
    'hyacinth': '#8b5cf6', 'crocus': '#9e4f88', 'foxglove': '#b65fcf', 'verbena': '#ad8de7',

    // Browns & Neutrals
    'brown': '#a52a2a', 'chocolate': '#7b3f00', 'coffee': '#6f4e37', 'espresso': '#3c2415',
    'mocha': '#967969', 'caramel': '#ffd59a', 'toffee': '#755139', 'maple': '#c9884b',
    'hazel': '#8e7618', 'chestnut': '#954535', 'mahogany': '#c04000', 'walnut': '#773f1a',
    'cacao': '#3d1c02', 'cocoa': '#d2691e', 'tan': '#d2b48c', 'beige': '#f5f5dc',
    'sand': '#c2b280', 'khaki': '#c3b091', 'wheat': '#f5deb3', 'oat': '#f8f0dc',
    'almond': '#efdecd', 'biscuit': '#d6c5a9', 'taupe': '#483c32', 'umber': '#635147',
    'sepia': '#704214', 'acorn': '#7d5a4f', 'pecan': '#845b3c', 'hazelnut': '#a67b5b',

    // Whites & Creams
    'white': '#ffffff', 'ivory': '#fffff0', 'pearl': '#f0ead6', 'vanilla': '#f3e5ab',
    'eggshell': '#f0ead6', 'snow': '#fffafa', 'cotton': '#fbfbfb', 'coconut': '#fff1e0',
    'milk': '#fdfff5', 'linen': '#faf0e6', 'rice': '#faf0d1', 'cloud': '#f0f8ff',
    'bone': '#e3dac9', 'porcelain': '#f0ebe3', 'flour': '#f5f0eb', 'sugar': '#fffafa',

    // Grays & Blacks
    'gray': '#808080', 'grey': '#808080', 'silver': '#c0c0c0', 'charcoal': '#36454f',
    'slate': '#708090', 'ash': '#b2beb5', 'stone': '#928e85', 'graphite': '#383838',
    'iron': '#48494b', 'pewter': '#96a3ab', 'nickel': '#727472', 'smoke': '#848884',
    'black': '#000000', 'onyx': '#353935', 'jet': '#343434', 'obsidian': '#3d3d3d',

    // Florals & Botanicals
    'chamomile': '#e8e4d4', 'jasmine': '#f8de7e', 'gardenia': '#fff9ef', 'magnolia': '#f8f4ff',
    'peony': '#ff91a4', 'tulip': '#ff878d', 'dahlia': '#d8a903', 'zinnia': '#f4722b',
    'chrysanthemum': '#ffb200', 'poppy': '#e35335', 'daisy': '#ffff99', 'sunflower': '#ffda03',
    'violet': '#8f00ff', 'pansy': '#5946b2', 'snapdragon': '#f19cbb', 'ranunculus': '#f88379',
    'anemone': '#de5d83', 'camellia': '#e4007c', 'azalea': '#f19cbb', 'rhododendron': '#cc3366',
    'geranium': '#d73b3e', 'begonia': '#fa6775', 'impatiens': '#ff6f61', 'primrose': '#eedcb3',

    // Food & Drinks
    'tea': '#ca8d5d', 'chai': '#b97f4f', 'earl': '#7b6f7b', 'matcha': '#9dc183',
    'latte': '#c6a664', 'cappuccino': '#a67b5b', 'espresso': '#3c2415', 'americano': '#6f4e37',
    'beer': '#f5a623', 'ale': '#964b00', 'stout': '#362d26', 'whiskey': '#d59563',
    'brandy': '#87413f', 'cognac': '#9a463d', 'rum': '#81613c', 'bourbon': '#af6e4d',
    'wine': '#722f37', 'merlot': '#7f1734', 'cabernet': '#4c0013', 'rosé': '#ffb7c3',
    'sangria': '#8e1c3a', 'port': '#5c003c', 'sherry': '#b47747',

    // Herbs & Spices
    'cardamom': '#a4be7b', 'clove': '#683e3a', 'nutmeg': '#a87b5e', 'allspice': '#7d5d3b',
    'cumin': '#d4a056', 'coriander': '#9eb23b', 'paprika': '#b22222', 'cayenne': '#8b0000',
    'pepper': '#3b3b3b', 'salt': '#f8f8ff', 'oregano': '#6b8e23', 'parsley': '#2e8b57',
    'tarragon': '#87a96b', 'anise': '#e0c8ac', 'fennel': '#a3d977', 'bay': '#4d5d4a',

    // Seasonal
    'autumn': '#eb9605', 'fall': '#cc7722', 'spring': '#a7fc00', 'summer': '#ffbd31',
    'winter': '#a6e2e5', 'frost': '#e6f2ff', 'harvest': '#da9100', 'holiday': '#c30f16',
    'gingerbread': '#b5651d', 'peppermint': '#e2f0d9', 'eggnog': '#f9e8c9', 'candy': '#ff69b4',
    'cider': '#b5651d', 'spiced': '#8b4513'
};

// Color suggestions based on keywords
const colorKeywords = {
    // Florals - soft pinks and purples
    lavender: '#d4d4e8',
    rose: '#e8d4d4',
    hibiscus: '#e8d4dc',
    elderflower: '#e8e4dc',
    chamomile: '#e8e4d4',
    jasmine: '#f0e8dc',
    violet: '#d8d4e8',

    // Fruits - warm and vibrant pastels
    strawberry: '#e8d4d4',
    raspberry: '#e8d4dc',
    blueberry: '#d4d8e8',
    blackberry: '#dcd4e8',
    peach: '#e8dcd4',
    mango: '#e8e0d4',
    lemon: '#e8e8d4',
    lime: '#dce8d4',
    orange: '#e8dcd4',
    cherry: '#e8d4d8',
    apple: '#dce8d8',
    pear: '#e4e8d4',
    grape: '#dcd4e8',
    watermelon: '#e8d8d8',
    passion: '#e8dcd8',
    guava: '#e8dcd4',
    pineapple: '#e8e4d4',
    coconut: '#e8e8e4',
    banana: '#e8e8d8',
    fig: '#dcd4dc',
    pomegranate: '#e4d4d8',
    cranberry: '#e4d4d4',
    grapefruit: '#e8dcd8',

    // Herbs - greens
    mint: '#d4e8dc',
    basil: '#d4e8d8',
    rosemary: '#d8e8d4',
    thyme: '#dce8d8',
    sage: '#dce8dc',
    cilantro: '#d8e8d8',
    dill: '#d8e8dc',
    tarragon: '#dce8d4',

    // Spices - warm browns and oranges
    cinnamon: '#e0d4c8',
    vanilla: '#e8e4dc',
    ginger: '#e4dcd4',
    cardamom: '#e0dcd4',
    clove: '#dcd4cc',
    nutmeg: '#e0d8cc',
    allspice: '#dcd4c8',
    star: '#e4dcd8', // star anise
    anise: '#e4dcd8',
    pepper: '#dcd8d4',
    turmeric: '#e8e0d4',
    saffron: '#e8e4d4',

    // Others
    honey: '#e8dcc8',
    maple: '#e0d4c4',
    caramel: '#e4d8c8',
    coffee: '#d8d0c8',
    espresso: '#d4ccc4',
    mocha: '#d8d0c8',
    chocolate: '#d8d0cc',
    cocoa: '#d8d0cc',
    matcha: '#dce8d8',
    tea: '#e0dcd4',
    earl: '#d8d4dc',
    chai: '#e0d8d0',
    brown: '#e0d8cc',
    sugar: '#e8e8e4',
    simple: '#e8e8e4',

    // Seasonal
    pumpkin: '#e4dcd4',
    apple: '#e0dcd4',
    eggnog: '#e8e4dc',
    gingerbread: '#e0d8cc',
    peppermint: '#d8e8e4',
    candy: '#e8d8dc',

    // Nature
    floral: '#e8dce8',
    flower: '#e8dce8',
    herb: '#d8e8d8',
    herbal: '#d8e8d8',
    botanical: '#d8e8dc',
    garden: '#dce8dc',
    forest: '#d4dcd4',
    tropical: '#dce8d8',
    citrus: '#e8e8d4',
    berry: '#e4d4dc',
    fruit: '#e8dcd8',
    spice: '#e0d8cc',
    spicy: '#e0d8cc'
};

// =============================================
// DOM ELEMENTS
// =============================================
const elements = {
    // Views
    homeView: document.getElementById('homeView'),
    editView: document.getElementById('editView'),
    detailView: document.getElementById('detailView'),
    settingsView: document.getElementById('settingsView'),

    // Home
    syrupGrid: document.getElementById('syrupGrid'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    filterBtn: document.getElementById('filterBtn'),
    filterPanel: document.getElementById('filterPanel'),
    tagsFilter: document.getElementById('tagsFilter'),
    addBtn: document.getElementById('addBtn'),
    settingsBtn: document.getElementById('settingsBtn'),

    // Edit
    editTitle: document.getElementById('editTitle'),
    syrupForm: document.getElementById('syrupForm'),
    syrupName: document.getElementById('syrupName'),
    syrupDescription: document.getElementById('syrupDescription'),
    ratingInput: document.getElementById('ratingInput'),
    syrupTags: document.getElementById('syrupTags'),
    tagsList: document.getElementById('tagsList'),
    suggestedTags: document.getElementById('suggestedTags'),
    ingredientsList: document.getElementById('ingredientsList'),
    addIngredientBtn: document.getElementById('addIngredientBtn'),
    colorPreview: document.getElementById('colorPreview'),
    colorPicker: document.getElementById('colorPicker'),
    presetColors: document.getElementById('presetColors'),
    syrupId: document.getElementById('syrupId'),
    backBtn: document.getElementById('backBtn'),
    saveBtn: document.getElementById('saveBtn'),

    // Detail
    detailHeader: document.getElementById('detailHeader'),
    detailContent: document.getElementById('detailContent'),
    detailBackBtn: document.getElementById('detailBackBtn'),
    editSyrupBtn: document.getElementById('editSyrupBtn'),
    deleteSyrupBtn: document.getElementById('deleteSyrupBtn'),

    // Settings
    settingsBackBtn: document.getElementById('settingsBackBtn'),
    exportBtn: document.getElementById('exportBtn'),
    importBtn: document.getElementById('importBtn'),
    importFile: document.getElementById('importFile'),

    // Modal
    deleteModal: document.getElementById('deleteModal'),
    cancelDeleteBtn: document.getElementById('cancelDeleteBtn'),
    confirmDeleteBtn: document.getElementById('confirmDeleteBtn'),

    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage')
};

// =============================================
// LOCAL STORAGE
// =============================================
function loadSyrups() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            syrups = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading syrups:', e);
            syrups = [];
        }
    }
}

function saveSyrups() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(syrups));
}

// =============================================
// ACHIEVEMENTS - Storage & Core Functions
// =============================================
function loadAchievements() {
    const stored = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (stored) {
        try {
            const data = JSON.parse(stored);
            unlockedAchievements = data.unlocked || {};
            editCounts = data.editCounts || {};
        } catch (e) {
            console.error('Error loading achievements:', e);
            unlockedAchievements = {};
            editCounts = {};
        }
    }
}

function saveAchievements() {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify({
        unlocked: unlockedAchievements,
        editCounts: editCounts
    }));
}

function unlockAchievement(achievementId) {
    if (unlockedAchievements[achievementId]) return false; // Already unlocked

    const achievement = ACHIEVEMENTS[achievementId];
    if (!achievement) return false;

    unlockedAchievements[achievementId] = {
        unlockedAt: new Date().toISOString()
    };
    saveAchievements();

    // Queue for notification
    newlyUnlocked.push(achievement);
    showNextAchievementNotification();

    return true;
}

function showNextAchievementNotification() {
    if (newlyUnlocked.length === 0) return;

    // Check if there's already a notification showing
    const existing = document.querySelector('.achievement-notification');
    if (existing) return;

    const achievement = newlyUnlocked.shift();
    showAchievementUnlock(achievement);
}

function showAchievementUnlock(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-notification-content">
            <div class="achievement-notification-icon">${achievement.icon}</div>
            <div class="achievement-notification-text">
                <span class="achievement-notification-label">Achievement Unlocked!</span>
                <span class="achievement-notification-name">${escapeHtml(achievement.name)}</span>
            </div>
        </div>
    `;

    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    // Remove after animation
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            showNextAchievementNotification(); // Show next if queued
        }, 500);
    }, 3500);
}

// =============================================
// ACHIEVEMENTS - Checking Functions
// =============================================
function checkAchievements(context = {}) {
    const { action, syrup, isNew } = context;

    // Creation achievements
    if (action === 'save' && isNew) {
        checkCreationAchievements();
        checkTimeAchievements();
    }

    // All save actions (new or edit)
    if (action === 'save' && syrup) {
        checkSyrupSpecificAchievements(syrup);
        checkCollectionAchievements();

        // Track edits
        if (!isNew && syrup.id) {
            editCounts[syrup.id] = (editCounts[syrup.id] || 0) + 1;
            saveAchievements();

            // Second Chance - first edit
            if (editCounts[syrup.id] === 1) {
                unlockAchievement('second_chance');
            }
            // Indecisive - 5 edits
            if (editCounts[syrup.id] >= 5) {
                unlockAchievement('indecisive');
            }
        }
    }

    // Export/Import
    if (action === 'export') {
        unlockAchievement('backup_believer');
    }
    if (action === 'import') {
        unlockAchievement('data_archeologist');
    }
}

function checkCreationAchievements() {
    const count = syrups.length;

    if (count >= 1) unlockAchievement('first_drip');
    if (count >= 5) unlockAchievement('getting_sticky');
    if (count >= 10) unlockAchievement('sweet_obsession');
    if (count >= 25) unlockAchievement('syrup_sommelier');
    if (count >= 50) unlockAchievement('master_of_the_pour');
}

function checkTimeAchievements() {
    const hour = new Date().getHours();

    // Night Owl: midnight to 4am (0-3)
    if (hour >= 0 && hour <= 3) {
        unlockAchievement('night_owl');
    }
    // Early Bird: 5am to 7am (5-6)
    if (hour >= 5 && hour <= 6) {
        unlockAchievement('early_bird');
    }
}

function checkSyrupSpecificAchievements(syrup) {
    // Rating achievements
    if (syrup.rating === 1) {
        unlockAchievement('harsh_critic');
    }
    if (syrup.rating === 5) {
        unlockAchievement('five_heart_chef');
    }

    // Ingredient achievements
    const ingredients = syrup.ingredients || [];
    const ingredientCount = ingredients.filter(i => i.name.trim()).length;
    const ingredientNames = ingredients.map(i => i.name.toLowerCase()).join(' ');

    if (ingredientCount === 2) {
        unlockAchievement('minimalist');
    }
    if (ingredientCount >= 8) {
        unlockAchievement('mad_scientist');
    }

    // Herb Whisperer
    if (/\b(mint|basil|rosemary|thyme)\b/i.test(ingredientNames)) {
        unlockAchievement('herb_whisperer');
    }

    // Spice Trader
    if (/\b(cinnamon|cardamom|ginger|clove)\b/i.test(ingredientNames)) {
        unlockAchievement('spice_trader');
    }

    // Citrus Burst
    if (/\b(lemon|lime|orange|grapefruit|citrus)\b/i.test(ingredientNames)) {
        unlockAchievement('citrus_burst');
    }

    // Tag achievements
    if (syrup.tags.length >= 5) {
        unlockAchievement('tag_enthusiast');
    }

    // Naming Master
    if (syrup.name.length > 30) {
        unlockAchievement('naming_master');
    }

    // Storyteller
    if (syrup.description && syrup.description.length > 200) {
        unlockAchievement('storyteller');
    }
}

function checkCollectionAchievements() {
    // Quality Control - 10 rated syrups
    const ratedSyrups = syrups.filter(s => s.rating > 0);
    if (ratedSyrups.length >= 10) {
        unlockAchievement('quality_control');
    }

    // Perfectionist - 5 syrups rated 5 hearts
    const fiveHeartSyrups = syrups.filter(s => s.rating === 5);
    if (fiveHeartSyrups.length >= 5) {
        unlockAchievement('perfectionist');
    }

    // Well Organized - 5 different tags used
    const allTags = new Set(syrups.flatMap(s => s.tags));
    if (allTags.size >= 5) {
        unlockAchievement('well_organized');
    }

    // Flavor Explorer - use all 5 main flavor tags
    const flavorTags = ['floral', 'fruity', 'spicy', 'herbal', 'citrus'];
    const lowerTags = [...allTags].map(t => t.toLowerCase());
    if (flavorTags.every(ft => lowerTags.includes(ft))) {
        unlockAchievement('flavor_explorer');
    }

    // Seasonal Sweetness - all 4 seasons
    const seasonTags = ['spring', 'summer', 'fall', 'winter'];
    if (seasonTags.every(st => lowerTags.includes(st))) {
        unlockAchievement('seasonal_sweetness');
    }

    // Rainbow Collection - 7 distinct colors
    const colors = [...new Set(syrups.map(s => s.color))];
    const distinctHues = getDistinctColorCount(colors);
    if (distinctHues >= 7) {
        unlockAchievement('rainbow_collection');
    }

    // Sweet Tooth - sugar/honey/maple/agave in 5 syrups
    const sweetSyrups = syrups.filter(s => {
        const ingredients = (s.ingredients || []).map(i => i.name.toLowerCase()).join(' ');
        return /\b(sugar|honey|maple|agave)\b/i.test(ingredients);
    });
    if (sweetSyrups.length >= 5) {
        unlockAchievement('sweet_tooth');
    }
}

function getDistinctColorCount(colors) {
    // Convert colors to hue values and count distinct hue ranges
    const hueRanges = new Set();

    colors.forEach(color => {
        const hsl = hexToHsl(color);
        // Group hues into 7 ranges (roughly: red, orange, yellow, green, cyan, blue, purple)
        const hueRange = Math.floor(hsl.h / 52); // 360 / 7 ≈ 51.4
        hueRanges.add(hueRange);
    });

    return hueRanges.size;
}

function getAchievementProgress() {
    const total = Object.keys(ACHIEVEMENTS).length;
    const unlocked = Object.keys(unlockedAchievements).length;
    return { total, unlocked, percentage: Math.round((unlocked / total) * 100) };
}

// =============================================
// VIEW NAVIGATION
// =============================================
function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        if (view.id === viewId) {
            view.classList.add('active');
            view.classList.remove('slide-out');
        } else {
            view.classList.remove('active');
            if (view.classList.contains('active')) {
                view.classList.add('slide-out');
            }
        }
    });
}

function goHome() {
    showView('homeView');
    renderSyrups();
}

// =============================================
// SYRUP RENDERING
// =============================================
function renderSyrups() {
    let filtered = [...syrups];

    // Apply search
    if (filterState.search) {
        const search = filterState.search.toLowerCase();
        filtered = filtered.filter(s =>
            s.name.toLowerCase().includes(search) ||
            s.description.toLowerCase().includes(search) ||
            s.tags.some(t => t.toLowerCase().includes(search))
        );
    }

    // Apply rating filter
    if (filterState.rating !== 'all') {
        const minRating = parseInt(filterState.rating);
        filtered = filtered.filter(s => s.rating >= minRating);
    }

    // Apply tag filter
    if (filterState.tag !== 'all') {
        filtered = filtered.filter(s => s.tags.includes(filterState.tag));
    }

    // Apply sort
    filtered.sort((a, b) => {
        switch (filterState.sort) {
            case 'date-desc':
                return new Date(b.createdAt) - new Date(a.createdAt);
            case 'date-asc':
                return new Date(a.createdAt) - new Date(b.createdAt);
            case 'rating-desc':
                return b.rating - a.rating;
            case 'rating-asc':
                return a.rating - b.rating;
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    // Render
    if (syrups.length === 0) {
        elements.syrupGrid.innerHTML = '';
        elements.emptyState.classList.remove('hidden');
    } else if (filtered.length === 0) {
        elements.syrupGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <p>No syrups match your filters</p>
            </div>
        `;
        elements.emptyState.classList.add('hidden');
    } else {
        elements.emptyState.classList.add('hidden');
        elements.syrupGrid.innerHTML = filtered.map((syrup, index) => {
            const artBackground = generateSyrupBackground(syrup.color, syrup.id);
            return `
            <div class="syrup-card" data-id="${syrup.id}" style="animation-delay: ${index * 0.05}s">
                <div class="card-color-bar card-art-bg" style="background-image: url('${artBackground}')">
                    <div class="card-rating">
                        ${renderHearts(syrup.rating, true)}
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-name">${escapeHtml(syrup.name)}</h3>
                    ${syrup.tags.length > 0 ? `
                        <div class="card-tags">
                            ${syrup.tags.slice(0, 2).map(tag => `<span class="card-tag">${escapeHtml(tag)}</span>`).join('')}
                            ${syrup.tags.length > 2 ? `<span class="card-tag">+${syrup.tags.length - 2}</span>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `}).join('');

        // Add click handlers
        elements.syrupGrid.querySelectorAll('.syrup-card').forEach(card => {
            card.addEventListener('click', () => {
                openDetail(card.dataset.id);
            });
        });
    }

    // Update tags filter
    updateTagsFilter();
}

function renderHearts(rating, small = false) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (small) {
            if (i <= rating) {
                html += `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
            }
        } else {
            html += `<svg viewBox="0 0 24 24" class="${i <= rating ? 'filled' : ''}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        }
    }
    return html;
}

function updateTagsFilter() {
    const allTags = [...new Set(syrups.flatMap(s => s.tags))].sort();

    if (allTags.length === 0) {
        elements.tagsFilter.innerHTML = '<span class="filter-option active" data-tag="all">No tags yet</span>';
    } else {
        elements.tagsFilter.innerHTML = `
            <button class="filter-option ${filterState.tag === 'all' ? 'active' : ''}" data-tag="all">All</button>
            ${allTags.map(tag => `
                <button class="filter-option ${filterState.tag === tag ? 'active' : ''}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
            `).join('')}
        `;

        elements.tagsFilter.querySelectorAll('.filter-option').forEach(btn => {
            btn.addEventListener('click', () => {
                filterState.tag = btn.dataset.tag;
                elements.tagsFilter.querySelectorAll('.filter-option').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderSyrups();
            });
        });
    }
}

// =============================================
// COLOR AUTO-SUGGESTION
// =============================================

// Generate a consistent hash from a string
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

// Convert HSL to Hex
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

// Generate a pleasing pastel color from any name
function generatePastelFromName(name) {
    const hash = hashString(name.toLowerCase());

    // Use hash to generate HSL values
    // Hue: full range (0-360) for variety
    // Saturation: 25-40% for soft, muted pastels
    // Lightness: 85-92% for light, airy feel
    const hue = hash % 360;
    const saturation = 25 + (hash % 15); // 25-40%
    const lightness = 85 + (hash % 7);   // 85-92%

    return hslToHex(hue, saturation, lightness);
}

function suggestColor(name) {
    const lower = name.toLowerCase();
    const words = lower.split(/\s+/);

    // First, check extended color database for exact word matches (most accurate)
    for (const word of words) {
        if (colorDatabase[word]) {
            // Found a match - soften it to fit our pastel theme
            return softenToPastel(colorDatabase[word]);
        }
    }

    // Second, check partial matches in extended database
    for (const [colorName, hex] of Object.entries(colorDatabase)) {
        if (lower.includes(colorName)) {
            return softenToPastel(hex);
        }
    }

    // Third, fall back to curated pastel keywords for common syrup ingredients
    for (const [keyword, color] of Object.entries(colorKeywords)) {
        if (lower.includes(keyword)) {
            return color;
        }
    }

    // No match found - generate a unique pastel from the name
    return generatePastelFromName(name);
}

function updateColorFromName() {
    // Only auto-suggest for new syrups, not when editing
    if (currentSyrupId) return;

    const name = elements.syrupName.value.trim();
    if (name) {
        const suggested = suggestColor(name);
        setColor(suggested, true); // true = animate
    }
}

function setColor(color, animate = false) {
    currentColor = color;
    elements.colorPreview.style.background = color;
    elements.colorPicker.value = color;

    // Update preset active states
    elements.presetColors.querySelectorAll('.preset-color').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === color);
    });

    // Animate the color preview to show it was auto-suggested
    if (animate) {
        elements.colorPreview.classList.add('pulse');
        setTimeout(() => {
            elements.colorPreview.classList.remove('pulse');
        }, 600);
    }
}

// =============================================
// COLOR PALETTE GENERATION
// =============================================

// Convert hex to HSL
function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Soften a color to pastel while preserving hue identity
function softenToPastel(hex) {
    const hsl = hexToHsl(hex);
    // Keep strong saturation for vivid color distinction
    const softS = Math.min(hsl.s * 0.85, 75); // More saturated pastels
    const softL = 72 + (hsl.l / 100) * 10; // Lightness between 72-82%
    return hslToHex(hsl.h, softS, Math.min(softL, 82));
}

// Generate a harmonious palette from a base color
function generatePalette(baseHex) {
    const hsl = hexToHsl(baseHex);
    const palette = {
        base: baseHex,
        pastelBase: softenToPastel(baseHex),
        colors: []
    };

    // Generate variations with vivid color distinction
    // Main pastel (strongest color presence)
    const mainPastel = hslToHex(hsl.h, Math.min(hsl.s * 0.8, 70), 75);

    // Lighter version of base - still recognizable
    const lightTint = hslToHex(hsl.h, Math.min(hsl.s * 0.6, 55), 80);

    // Analogous colors (nearby on color wheel) - good saturation
    const analogous1 = hslToHex((hsl.h + 25) % 360, Math.min(hsl.s * 0.7, 60), 77);
    const analogous2 = hslToHex((hsl.h - 25 + 360) % 360, Math.min(hsl.s * 0.65, 60), 79);

    // Soft complementary accent - subtle but visible
    const complement = hslToHex((hsl.h + 180) % 360, Math.min(hsl.s * 0.5, 40), 82);

    // Warm neutral from theme
    const warmNeutral = '#f5ebe0';

    palette.colors = [
        palette.pastelBase,  // 0: main color
        mainPastel,          // 1: slightly different pastel
        lightTint,           // 2: very light tint
        analogous1,          // 3: nearby color 1
        analogous2,          // 4: nearby color 2
        complement,          // 5: soft accent
        warmNeutral          // 6: warm background
    ];

    return palette;
}

// =============================================
// GENERATIVE ART - FLOWING BLOBS
// =============================================

// Seeded random number generator for consistent results
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Generate smooth blob path using Bezier curves with shape variety
function generateBlobPath(cx, cy, radius, points, seed, variation = 0.4, stretch = 1, rotation = 0) {
    const angleStep = (Math.PI * 2) / points;
    const controlPoints = [];

    // Generate points around the center with random variation
    for (let i = 0; i < points; i++) {
        const angle = i * angleStep + rotation;
        const radiusVar = radius * (1 + (seededRandom(seed + i) - 0.5) * variation);

        // Apply stretch (elongation) - stretch > 1 makes it wider, < 1 makes it taller
        const rx = radiusVar * stretch;
        const ry = radiusVar / stretch;

        // Calculate point with rotation
        const baseX = Math.cos(angle) * rx;
        const baseY = Math.sin(angle) * ry;

        // Rotate the stretched point
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const x = cx + baseX * cosR - baseY * sinR;
        const y = cy + baseX * sinR + baseY * cosR;

        controlPoints.push({ x, y });
    }

    // Create smooth curve through points
    let path = `M ${controlPoints[0].x} ${controlPoints[0].y}`;

    for (let i = 0; i < points; i++) {
        const p0 = controlPoints[i];
        const p1 = controlPoints[(i + 1) % points];
        const p2 = controlPoints[(i + 2) % points];

        // Calculate control points for smooth curve
        const cp1x = p0.x + (p1.x - controlPoints[(i - 1 + points) % points].x) * 0.25;
        const cp1y = p0.y + (p1.y - controlPoints[(i - 1 + points) % points].y) * 0.25;
        const cp2x = p1.x - (p2.x - p0.x) * 0.25;
        const cp2y = p1.y - (p2.y - p0.y) * 0.25;

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }

    path += ' Z';
    return path;
}

// Generate flowing wave path
function generateWavePath(width, height, seed, amplitude = 20, frequency = 3) {
    const points = [];
    const steps = 20;

    for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * width;
        const baseY = height * 0.5;
        const wave1 = Math.sin((i / steps) * Math.PI * frequency + seededRandom(seed) * Math.PI) * amplitude;
        const wave2 = Math.sin((i / steps) * Math.PI * frequency * 1.5 + seededRandom(seed + 1) * Math.PI) * (amplitude * 0.5);
        const y = baseY + wave1 + wave2;
        points.push({ x, y });
    }

    let path = `M 0 ${height}`;
    path += ` L ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const cpx = (p0.x + p1.x) / 2;
        path += ` Q ${p0.x + (p1.x - p0.x) * 0.5} ${p0.y}, ${p1.x} ${p1.y}`;
    }

    path += ` L ${width} ${height} Z`;
    return path;
}

// Generate SVG art for a syrup card - Paper cutout style with high variety
function generateSyrupArt(color, syrupId) {
    const palette = generatePalette(color);
    const seed = hashString(syrupId);
    const width = 200;
    const height = 120;

    // Use seed to determine layout style and number of shapes
    const layoutStyle = Math.floor(seededRandom(seed) * 5); // 0-4 different layouts
    const numShapes = 10 + Math.floor(seededRandom(seed + 1) * 10); // 6-10 shapes
    const layers = [];

    // Helper to get random position - expanded scatter range
    const randX = (s) => width * (-0.1 + seededRandom(s) * 1.2); // allow blobs to extend past edges
    const randY = (s) => height * (-0.1 + seededRandom(s) * 1.2);
    const randSize = (s, min, max) => min + seededRandom(s) * (max - min);
    const randPoints = (s) => 5 + Math.floor(seededRandom(s) * 4); // 5-8 points for wavier shapes
    const randVariation = (s) => 0.35 + seededRandom(s) * 0.4; // 0.35-0.75 for more wavy edges
    // Shape variety helpers - subtle stretch and rotation
    const randStretch = (s) => {
        // Keep stretch subtle: 0.8-1.25 range for organic look
        const r = seededRandom(s);
        if (r < 0.35) return 0.8 + seededRandom(s + 0.5) * 0.1; // slightly tall (0.8-0.9)
        if (r < 0.65) return 0.9 + seededRandom(s + 0.5) * 0.2; // roundish (0.9-1.1)
        return 1.1 + seededRandom(s + 0.5) * 0.15; // slightly wide (1.1-1.25)
    };
    const randRotation = (s) => seededRandom(s) * Math.PI * 2; // full rotation range

    // Shuffle color indices based on seed for variety
    const colorIndices = [0, 1, 2, 3, 4, 5];
    for (let i = colorIndices.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i * 7) * (i + 1));
        [colorIndices[i], colorIndices[j]] = [colorIndices[j], colorIndices[i]];
    }

    // Background shape (always present, but position varies)
    const bgX = width * (0.3 + seededRandom(seed + 10) * 0.4);
    const bgY = height * (0.3 + seededRandom(seed + 11) * 0.4);
    layers.push({
        path: generateBlobPath(bgX, bgY, randSize(seed + 12, 70, 100), randPoints(seed + 13), seed + 14, randVariation(seed + 15), randStretch(seed + 16), randRotation(seed + 17)),
        color: palette.colors[6] // warm neutral background
    });

    // Generate varied shapes based on layout style
    for (let i = 0; i < numShapes; i++) {
        const shapeSeed = seed + (i + 1) * 100;
        let cx, cy, radius;

        // Different positioning strategies based on layout
        switch (layoutStyle) {
            case 0: // Scattered
                cx = randX(shapeSeed);
                cy = randY(shapeSeed + 1);
                break;
            case 1: // Left-heavy
                cx = width * (0.1 + seededRandom(shapeSeed) * 0.5);
                cy = randY(shapeSeed + 1);
                break;
            case 2: // Right-heavy
                cx = width * (0.4 + seededRandom(shapeSeed) * 0.5);
                cy = randY(shapeSeed + 1);
                break;
            case 3: // Diagonal
                const t = seededRandom(shapeSeed);
                cx = width * (0.1 + t * 0.8);
                cy = height * (0.1 + t * 0.8 + (seededRandom(shapeSeed + 1) - 0.5) * 0.3);
                break;
            case 4: // Clustered center
                cx = width * (0.3 + seededRandom(shapeSeed) * 0.4);
                cy = height * (0.25 + seededRandom(shapeSeed + 1) * 0.5);
                break;
            default:
                cx = randX(shapeSeed);
                cy = randY(shapeSeed + 1);
        }

        // Vary size based on layer (earlier = larger, but with randomness)
        const baseSize = 60 - (i * 8);
        radius = randSize(shapeSeed + 2, Math.max(baseSize - 15, 20), baseSize + 20);

        // Pick color from shuffled palette
        const colorIdx = colorIndices[i % colorIndices.length];

        layers.push({
            path: generateBlobPath(cx, cy, radius, randPoints(shapeSeed + 3), shapeSeed + 4, randVariation(shapeSeed + 5), randStretch(shapeSeed + 6), randRotation(shapeSeed + 7)),
            color: palette.colors[colorIdx],
            shadow: true
        });
    }

    // Add small accent shapes for more coverage
    const numAccents = 5 + Math.floor(seededRandom(seed + 900) * 3); // 2-4 accents
    for (let i = 0; i < numAccents; i++) {
        const accentSeed = seed + 1000 + i * 50;
        layers.push({
            path: generateBlobPath(
                randX(accentSeed),
                randY(accentSeed + 1),
                randSize(accentSeed + 2, 15, 30),
                randPoints(accentSeed + 3),
                accentSeed + 4,
                randVariation(accentSeed + 5),
                randStretch(accentSeed + 6),
                randRotation(accentSeed + 7)
            ),
            color: palette.colors[colorIndices[(numShapes + i) % colorIndices.length]],
            shadow: true
        });
    }

    // Create SVG with paper cutout effect
    const svg = `
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="shadow-${syrupId}" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="#000" flood-opacity="0.12"/>
                </filter>
            </defs>
            <rect width="${width}" height="${height}" fill="${palette.colors[6]}"/>
            ${layers.map((layer) => `
                <path d="${layer.path}" fill="${layer.color}" ${layer.shadow ? `filter="url(#shadow-${syrupId})"` : ''}/>
            `).join('')}
        </svg>
    `;

    return svg;
}

// Convert SVG to data URL for use as background
function svgToDataUrl(svg) {
    const encoded = encodeURIComponent(svg)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');
    return `data:image/svg+xml,${encoded}`;
}

// Generate background style for a syrup
function generateSyrupBackground(color, syrupId) {
    const svg = generateSyrupArt(color, syrupId);
    return svgToDataUrl(svg);
}

// =============================================
// ADD/EDIT SYRUP
// =============================================
function openAddForm() {
    currentSyrupId = null;
    currentTags = [];
    currentIngredients = [];
    currentRating = 0;
    currentColor = '#e8e4dc';

    elements.editTitle.textContent = 'New Syrup';
    elements.syrupForm.reset();
    elements.tagsList.innerHTML = '';
    elements.ingredientsList.innerHTML = '';
    setColor(currentColor);
    updateRatingUI();

    showView('editView');
    elements.syrupName.focus();
}

function openEditForm(id) {
    const syrup = syrups.find(s => s.id === id);
    if (!syrup) return;

    currentSyrupId = id;
    currentTags = [...syrup.tags];
    currentIngredients = (syrup.ingredients || []).map(ing => ({
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        ...ing
    }));
    currentRating = syrup.rating;
    currentColor = syrup.color;

    elements.editTitle.textContent = 'Edit Syrup';
    elements.syrupName.value = syrup.name;
    elements.syrupDescription.value = syrup.description;
    elements.syrupId.value = id;

    setColor(currentColor);
    updateRatingUI();
    renderTags();
    renderIngredients();

    showView('editView');
}

function saveSyrup() {
    const name = elements.syrupName.value.trim();
    if (!name) {
        showToast('Please enter a name');
        elements.syrupName.focus();
        return;
    }

    const syrupData = {
        name,
        description: elements.syrupDescription.value.trim(),
        ingredients: getCleanIngredients(),
        rating: currentRating,
        tags: currentTags,
        color: currentColor,
        updatedAt: new Date().toISOString()
    };

    const isNew = !currentSyrupId;
    let savedSyrup;

    if (currentSyrupId) {
        // Update existing
        const index = syrups.findIndex(s => s.id === currentSyrupId);
        if (index !== -1) {
            syrups[index] = { ...syrups[index], ...syrupData };
            savedSyrup = syrups[index];
            showToast('Syrup updated!');
        }
    } else {
        // Create new
        const newSyrup = {
            id: generateId(),
            ...syrupData,
            createdAt: new Date().toISOString()
        };
        syrups.unshift(newSyrup);
        savedSyrup = newSyrup;
        showToast('Syrup added!');
    }

    saveSyrups();

    // Check achievements after save
    if (savedSyrup) {
        checkAchievements({ action: 'save', syrup: savedSyrup, isNew });
    }

    goHome();
}

// =============================================
// DETAIL VIEW
// =============================================
function openDetail(id) {
    const syrup = syrups.find(s => s.id === id);
    if (!syrup) return;

    currentSyrupId = id;
    const ingredients = syrup.ingredients || [];
    const artBackground = generateSyrupBackground(syrup.color, syrup.id);

    elements.detailContent.innerHTML = `
        <div class="detail-color-header detail-art-bg" style="background-image: url('${artBackground}')">
            <h2 class="detail-name">${escapeHtml(syrup.name)}</h2>
        </div>
        <div class="detail-rating">
            ${renderHearts(syrup.rating)}
        </div>
        ${syrup.description ? `
            <div class="detail-section">
                <h3>Description</h3>
                <p class="detail-description">${escapeHtml(syrup.description)}</p>
            </div>
        ` : ''}
        ${ingredients.length > 0 ? `
            <div class="detail-section">
                <h3>Ingredients</h3>
                <ul class="detail-ingredients">
                    ${ingredients.map(ing => `
                        <li class="detail-ingredient">
                            <span class="ingredient-quantity">${escapeHtml(ing.amount)}${ing.unit ? ' ' + escapeHtml(ing.unit) : ''}</span>
                            <span class="ingredient-item">${escapeHtml(ing.name)}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        ` : ''}
        ${syrup.tags.length > 0 ? `
            <div class="detail-section">
                <h3>Tags</h3>
                <div class="detail-tags">
                    ${syrup.tags.map(tag => `<span class="detail-tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
        ` : ''}
        <div class="detail-section">
            <h3>Added</h3>
            <p class="detail-date">${formatDate(syrup.createdAt)}</p>
        </div>
    `;

    showView('detailView');
}

function deleteSyrup() {
    elements.deleteModal.classList.remove('hidden');
}

function confirmDelete() {
    syrups = syrups.filter(s => s.id !== currentSyrupId);
    saveSyrups();
    elements.deleteModal.classList.add('hidden');
    showToast('Syrup deleted');
    goHome();
}

// =============================================
// TAGS
// =============================================
function addTag(tag) {
    tag = tag.trim();
    if (tag && !currentTags.includes(tag)) {
        currentTags.push(tag);
        renderTags();
    }
    elements.syrupTags.value = '';
}

function removeTag(tag) {
    currentTags = currentTags.filter(t => t !== tag);
    renderTags();
}

function renderTags() {
    elements.tagsList.innerHTML = currentTags.map(tag => `
        <span class="tag">
            ${escapeHtml(tag)}
            <button type="button" class="tag-remove" data-tag="${escapeHtml(tag)}">&times;</button>
        </span>
    `).join('');

    elements.tagsList.querySelectorAll('.tag-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            removeTag(btn.dataset.tag);
        });
    });
}

// =============================================
// INGREDIENTS
// =============================================
function addIngredient() {
    const id = Date.now().toString(36);
    currentIngredients.push({
        id,
        amount: '',
        unit: 'cups',
        name: ''
    });
    renderIngredients();

    // Focus the new ingredient's amount field
    setTimeout(() => {
        const newRow = elements.ingredientsList.querySelector(`[data-id="${id}"] .ingredient-amount`);
        if (newRow) newRow.focus();
    }, 50);
}

function removeIngredient(id) {
    currentIngredients = currentIngredients.filter(ing => ing.id !== id);
    renderIngredients();
}

function updateIngredient(id, field, value) {
    const ingredient = currentIngredients.find(ing => ing.id === id);
    if (ingredient) {
        ingredient[field] = value;
    }
}

function renderIngredients() {
    if (currentIngredients.length === 0) {
        elements.ingredientsList.innerHTML = '';
        return;
    }

    elements.ingredientsList.innerHTML = currentIngredients.map(ing => `
        <div class="ingredient-row" data-id="${ing.id}">
            <input type="text"
                   class="ingredient-amount"
                   placeholder="1"
                   value="${escapeHtml(ing.amount)}"
                   inputmode="decimal">
            <select class="ingredient-unit">
                ${MEASUREMENTS.map(m => `
                    <option value="${m.value}" ${ing.unit === m.value ? 'selected' : ''}>
                        ${m.label}
                    </option>
                `).join('')}
            </select>
            <input type="text"
                   class="ingredient-name"
                   placeholder="Ingredient name"
                   value="${escapeHtml(ing.name)}">
            <button type="button" class="remove-ingredient-btn" aria-label="Remove ingredient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `).join('');

    // Add event listeners
    elements.ingredientsList.querySelectorAll('.ingredient-row').forEach(row => {
        const id = row.dataset.id;

        row.querySelector('.ingredient-amount').addEventListener('input', (e) => {
            updateIngredient(id, 'amount', e.target.value);
        });

        row.querySelector('.ingredient-unit').addEventListener('change', (e) => {
            updateIngredient(id, 'unit', e.target.value);
        });

        row.querySelector('.ingredient-name').addEventListener('input', (e) => {
            updateIngredient(id, 'name', e.target.value);
        });

        row.querySelector('.remove-ingredient-btn').addEventListener('click', () => {
            removeIngredient(id);
        });
    });
}

function getCleanIngredients() {
    // Return only ingredients with at least a name
    return currentIngredients
        .filter(ing => ing.name.trim())
        .map(ing => ({
            amount: ing.amount.trim(),
            unit: ing.unit,
            name: ing.name.trim()
        }));
}

// =============================================
// RATING
// =============================================
function setRating(rating) {
    currentRating = rating;
    updateRatingUI();
}

function updateRatingUI() {
    elements.ratingInput.querySelectorAll('.heart-btn').forEach(btn => {
        const rating = parseInt(btn.dataset.rating);
        btn.classList.toggle('active', rating <= currentRating);
    });
}

// =============================================
// FILTERING
// =============================================
function toggleFilterPanel() {
    elements.filterPanel.classList.toggle('hidden');
    elements.filterBtn.classList.toggle('active');
}

// =============================================
// EXPORT/IMPORT
// =============================================
function exportData() {
    const data = {
        version: 1,
        exportedAt: new Date().toISOString(),
        syrups: syrups
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `syrup-safari-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Collection exported!');
    checkAchievements({ action: 'export' });
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.syrups && Array.isArray(data.syrups)) {
                // Merge or replace? Let's merge and skip duplicates by ID
                const existingIds = new Set(syrups.map(s => s.id));
                const newSyrups = data.syrups.filter(s => !existingIds.has(s.id));

                if (newSyrups.length > 0) {
                    syrups = [...syrups, ...newSyrups];
                    saveSyrups();
                    renderSyrups();
                    showToast(`Imported ${newSyrups.length} syrup(s)!`);
                    checkAchievements({ action: 'import' });
                } else {
                    showToast('No new syrups to import');
                }
            } else {
                showToast('Invalid backup file');
            }
        } catch (err) {
            console.error('Import error:', err);
            showToast('Error reading file');
        }
    };
    reader.readAsText(file);
}

// =============================================
// UTILITIES
// =============================================
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.remove('hidden');
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
        setTimeout(() => {
            elements.toast.classList.add('hidden');
        }, 300);
    }, 2500);
}

// =============================================
// EVENT LISTENERS
// =============================================
function initEventListeners() {
    // Navigation
    elements.addBtn.addEventListener('click', openAddForm);
    elements.settingsBtn.addEventListener('click', () => {
        showView('settingsView');
        renderAchievements();
    });
    elements.backBtn.addEventListener('click', goHome);
    elements.detailBackBtn.addEventListener('click', goHome);
    elements.settingsBackBtn.addEventListener('click', goHome);

    // Save
    elements.saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        saveSyrup();
    });

    // Form submission
    elements.syrupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveSyrup();
    });

    // Detail actions
    elements.editSyrupBtn.addEventListener('click', () => openEditForm(currentSyrupId));
    elements.deleteSyrupBtn.addEventListener('click', deleteSyrup);

    // Delete modal
    elements.cancelDeleteBtn.addEventListener('click', () => {
        elements.deleteModal.classList.add('hidden');
    });
    elements.confirmDeleteBtn.addEventListener('click', confirmDelete);
    document.querySelector('.modal-backdrop')?.addEventListener('click', () => {
        elements.deleteModal.classList.add('hidden');
    });

    // Rating
    elements.ratingInput.querySelectorAll('.heart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setRating(parseInt(btn.dataset.rating));
        });
    });

    // Tags input
    elements.syrupTags.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(elements.syrupTags.value);
        }
    });

    // Suggested tags
    elements.suggestedTags.querySelectorAll('.suggested-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            addTag(tag.dataset.tag);
        });
    });

    // Add ingredient button
    elements.addIngredientBtn.addEventListener('click', addIngredient);

    // Color - auto-suggest when name field loses focus
    elements.syrupName.addEventListener('blur', updateColorFromName);
    elements.colorPicker.addEventListener('input', (e) => setColor(e.target.value));
    elements.colorPreview.addEventListener('click', () => elements.colorPicker.click());

    elements.presetColors.querySelectorAll('.preset-color').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setColor(btn.dataset.color);
        });
    });

    // Search
    let searchTimeout;
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterState.search = elements.searchInput.value;
            renderSyrups();
        }, 200);
    });

    // Filter toggle
    elements.filterBtn.addEventListener('click', toggleFilterPanel);

    // Sort options
    elements.filterPanel.querySelectorAll('[data-sort]').forEach(btn => {
        btn.addEventListener('click', () => {
            filterState.sort = btn.dataset.sort;
            elements.filterPanel.querySelectorAll('[data-sort]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSyrups();
        });
    });

    // Rating filter
    elements.filterPanel.querySelectorAll('[data-rating]').forEach(btn => {
        btn.addEventListener('click', () => {
            filterState.rating = btn.dataset.rating;
            elements.filterPanel.querySelectorAll('[data-rating]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSyrups();
        });
    });

    // Export/Import
    elements.exportBtn.addEventListener('click', exportData);
    elements.importBtn.addEventListener('click', () => elements.importFile.click());
    elements.importFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            importData(e.target.files[0]);
            e.target.value = ''; // Reset
        }
    });
}

// =============================================
// SERVICE WORKER REGISTRATION
// =============================================
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('Service Worker registered:', registration.scope);
        } catch (error) {
            console.log('Service Worker registration failed:', error);
        }
    }
}

// =============================================
// ACHIEVEMENTS UI RENDERING
// =============================================
function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    const achievementProgress = document.getElementById('achievementProgress');

    if (!achievementsGrid) return;

    const progress = getAchievementProgress();

    // Update progress bar
    if (achievementProgress) {
        achievementProgress.innerHTML = `
            <div class="achievement-progress-bar">
                <div class="achievement-progress-fill" style="width: ${progress.percentage}%"></div>
            </div>
            <div class="achievement-progress-text">
                ${progress.unlocked} / ${progress.total} achievements unlocked (${progress.percentage}%)
            </div>
        `;
    }

    // Group achievements by category
    const categories = {
        creation: { name: 'Creation', icon: '🍯', achievements: [] },
        rating: { name: 'Rating', icon: '❤️', achievements: [] },
        ingredients: { name: 'Ingredients', icon: '🥄', achievements: [] },
        organization: { name: 'Organization', icon: '📁', achievements: [] },
        collection: { name: 'Collection', icon: '🌈', achievements: [] },
        special: { name: 'Special', icon: '✨', achievements: [] }
    };

    Object.values(ACHIEVEMENTS).forEach(achievement => {
        if (categories[achievement.category]) {
            categories[achievement.category].achievements.push(achievement);
        }
    });

    // Render achievements
    achievementsGrid.innerHTML = Object.entries(categories).map(([key, category]) => `
        <div class="achievement-category">
            <h4 class="achievement-category-title">
                <span class="achievement-category-icon">${category.icon}</span>
                ${category.name}
            </h4>
            <div class="achievement-list">
                ${category.achievements.map(achievement => {
                    const isUnlocked = !!unlockedAchievements[achievement.id];
                    const isSecret = achievement.secret && !isUnlocked;
                    return `
                        <div class="achievement-item ${isUnlocked ? 'unlocked' : 'locked'} ${isSecret ? 'secret' : ''}">
                            <div class="achievement-icon">${isSecret ? '❓' : achievement.icon}</div>
                            <div class="achievement-info">
                                <span class="achievement-name">${isSecret ? '???' : escapeHtml(achievement.name)}</span>
                                <span class="achievement-desc">${isSecret ? 'Secret achievement' : escapeHtml(achievement.description)}</span>
                            </div>
                            ${isUnlocked ? '<div class="achievement-check">✓</div>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
}

// =============================================
// INITIALIZATION
// =============================================
function init() {
    loadSyrups();
    loadAchievements();
    renderSyrups();
    initEventListeners();
    registerServiceWorker();

    // Set initial color
    setColor(currentColor);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
