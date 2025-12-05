/* =============================================
   SYRUP SAFARI - Main Application
   ============================================= */

// =============================================
// DATA & STATE
// =============================================
const STORAGE_KEY = 'syrupSafari_syrups';

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
        elements.syrupGrid.innerHTML = filtered.map((syrup, index) => `
            <div class="syrup-card" data-id="${syrup.id}" style="animation-delay: ${index * 0.05}s">
                <div class="card-color-bar" style="background: ${syrup.color}">
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
        `).join('');

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

    // First, check keyword matches for known ingredients
    for (const [keyword, color] of Object.entries(colorKeywords)) {
        if (lower.includes(keyword)) {
            return color;
        }
    }

    // No keyword match - generate a unique pastel from the name
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

    if (currentSyrupId) {
        // Update existing
        const index = syrups.findIndex(s => s.id === currentSyrupId);
        if (index !== -1) {
            syrups[index] = { ...syrups[index], ...syrupData };
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
        showToast('Syrup added!');
    }

    saveSyrups();
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

    elements.detailContent.innerHTML = `
        <div class="detail-color-header" style="background: ${syrup.color}">
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
    elements.settingsBtn.addEventListener('click', () => showView('settingsView'));
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
// INITIALIZATION
// =============================================
function init() {
    loadSyrups();
    renderSyrups();
    initEventListeners();
    registerServiceWorker();

    // Set initial color
    setColor(currentColor);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
