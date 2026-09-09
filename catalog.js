import { sanitize } from './utils/sanitizer.js';

const safeText = (value) => sanitize.text(String(value ?? ''));

const isEnglishCatalog = Boolean(window.IS_ENGLISH);

const CATEGORY_PAGES = {
    seeds: {
        url: 'seedsandseedlings.html',
        navLabel: isEnglishCatalog ? '🌶️ Superhot seeds' : '🌶️ Насіння суперхотів',
        title: isEnglishCatalog ? 'Hot pepper seeds (Superhots)' : 'Насіння гострих перців (Superhots)',
        description: '',
        filterTitle: isEnglishCatalog ? 'Heat level:' : 'Рівень вогню:',
        filters: isEnglishCatalog ? [
            ['all', 'All'],
            ['1', '🔥'],
            ['2', '🔥🔥'],
            ['3', '🔥🔥🔥'],
            ['4', '☠️']
        ] : [
            ['all', 'Всі'],
            ['1', '🔥'],
            ['2', '🔥🔥'],
            ['3', '🔥🔥🔥'],
            ['4', '☠️']
        ]
    },
    sauces: {
        url: 'sauces.html',
        navLabel: isEnglishCatalog ? '🔥 Craft sauces' : '🔥 Крафтові Соуси',
        title: isEnglishCatalog ? 'INFERNO craft sauces' : 'Крафтові соуси INFERNO',
        description: isEnglishCatalog ? 'Small-batch sauces made from our own peppers: from gentle warmth to total fire.' : 'Малі партії соусів із власних перців: від лагідного тепла до повного вогню.',
        filterTitle: isEnglishCatalog ? 'Heat level:' : 'Рівень гостроти:',
        filters: isEnglishCatalog ? [
            ['all', 'All'],
            ['1', '🔥 Mild'],
            ['2', '🔥🔥 Hot'],
            ['3', '🔥🔥🔥 Infernal']
        ] : [
            ['all', 'Всі'],
            ['1', '🔥 Лагідні'],
            ['2', '🔥🔥 Гарячі'],
            ['3', '🔥🔥🔥 Пекельні']
        ]
    },
    otherseeds: {
        url: 'otherseeds.html',
        navLabel: isEnglishCatalog ? '🌱 Vegetable seeds' : '🌱 Насіння овочів',
        title: isEnglishCatalog ? 'Vegetable seeds' : 'Насіння овочів',
        description: '',
        filterTitle: isEnglishCatalog ? 'Vegetable type:' : 'Тип овочів:',
        filters: isEnglishCatalog ? [
            ['all', 'All'],
            ['1', '🍅 Tomatoes'],
            ['2', '🫑 Peppers'],
            ['3', '🥒 Cucumbers'],
            ['4', 'Other seeds']
        ] : [
            ['all', 'Всі'],
            ['1', '🍅 Помідори'],
            ['2', '🫑 Перець'],
            ['3', '🥒 Огірки'],
            ['4', 'Інше насіння']
        ]
    },
    'fresh-peppers': {
        url: 'fresh-peppers.html',
        navLabel: isEnglishCatalog ? '🌶️ Inferno harvest' : '🌶️ Врожай Пекла',
        title: isEnglishCatalog ? 'Inferno harvest: fresh and dried peppers' : 'Врожай Пекла: свіжі та сушені перці',
        description: isEnglishCatalog ? 'Fresh produce from our own beds will appear here. Fresh superhots will be available in autumn 2026.' : 'Тут з\'являтимуться плоди, які ми збираємо на власних грядках. Свіжі суперхоти будуть доступні восени 2026.',
        filterTitle: isEnglishCatalog ? 'Product type:' : 'Тип продукту:',
        filters: isEnglishCatalog ? [
            ['all', 'All'],
            ['1', '🥗 Fresh'],
            ['2', '💨 Dried']
        ] : [
            ['all', 'Всі'],
            ['1', '🥗 Свіжі'],
            ['2', '💨 Сушені']
        ]
    },
    poultry: {
        url: 'orpington-eggs.html',
        navLabel: isEnglishCatalog ? '🥚 Farm eggs' : '🥚 Яйця ферми',
        title: isEnglishCatalog ? 'Incubation eggs and table eggs' : 'Інкубаційні яйця та яйця для вживання',
        description: isEnglishCatalog ? 'Small farm batches: hatching eggs and fresh eggs for the kitchen.' : 'Невеликі фермерські партії: інкубаційні яйця породистої птиці та свіжі яйця для кухні.',
        filterTitle: isEnglishCatalog ? 'Egg type:' : 'Тип яєць:',
        filters: isEnglishCatalog ? [
            ['all', 'All'],
            ['1', '🐣 Hatching'],
            ['2', '🍳 Table eggs']
        ] : [
            ['all', 'Всі'],
            ['1', '🐣 Інкубаційні'],
            ['2', '🍳 Для вживання']
        ]
    }
};

const CATEGORY_ORDER = ['seeds', 'sauces', 'otherseeds', 'fresh-peppers', 'poultry'];

const HEAT_LEVELS = {
    "1": { shu: "1k-50k", width: "25%" },
    "2": { shu: "50k-500k", width: "50%" },
    "3": { shu: "500k-1M", width: "75%" },
    "4": { shu: "1M-2.2M+", width: "100%" }
};

const SCOVILLE_HELP = isEnglishCatalog ? {
    title: 'What do these numbers mean?',
    text: 'SHU means Scoville Heat Units. The higher the number, the more capsaicin and the stronger the heat.',
    linkLabel: 'Scoville guide',
    link: ''
} : {
    title: 'Що означають ці цифри?',
    text: 'SHU — це одиниці гостроти за шкалою Сковілла. Чим більше число, тим більше капсаїцину й сильніше пече.',
    linkLabel: 'Читати гід по Сковіллу',
    link: 'blog-article.html?id=scoville-scale-explained'
};

const SCOVILLE_DATA = isEnglishCatalog ? {
    "1": { name: "Ancho, Aji Melocoton", shu: "~1,000-50,000", status: "Spicy aroma 🌿", color: "#4C9900" },
    "2": { name: "Sugar Rush, Habanero Dominica", shu: "50,000-577,000", status: "Serious challenge! 🔥", color: "#ffcc00" },
    "3": { name: "Ghost, 7 Pot", shu: "577,000-1,000,000+", status: "Blazing ghost! 🔥🔥", color: "#ff4d00" },
    "4": { name: "Scorpion, Carolina Reaper", shu: "1,000,000-2,200,000+", status: "TOTAL ERUPTION ☠️", color: "#8b0000" }
} : {
    "1": { name: "Ancho, Aji Melocoton", shu: "~1,000-50,000", status: "Пряний аромат 🌿", color: "#4C9900" },
    "2": { name: "Sugar Rush, Habanero Dominica", shu: "50,000-577,000", status: "Серйозний виклик! 🔥", color: "#ffcc00" },
    "3": { name: "Ghost, 7 Pot", shu: "577,000-1,000,000+", status: "Палаючий привид! 🔥🔥", color: "#ff4d00" },
    "4": { name: "Scorpion, Carolina Reaper", shu: "1,000,000-2,200,000+", status: "ПОВНА АНІГІЛЯЦІЯ ☠️", color: "#8b0000" }
};

function buildCategorySidebar(activeCategory) {
    document.querySelectorAll('.main-layout > .sidebar nav ul').forEach(list => {
        list.innerHTML = CATEGORY_ORDER.map(categoryKey => {
            const category = CATEGORY_PAGES[categoryKey];
            const activeClass = categoryKey === activeCategory ? ' class="theme-active active"' : '';
            return `<li><a href="${category.url}"${activeClass}>${safeText(category.navLabel)}</a></li>`;
        }).join('');
    });
}

function renderCategoryIntro(mainGrid, category) {
    const title = mainGrid.querySelector('.page-title');
    if (title) title.textContent = category.title;

    let description = Array.from(mainGrid.children).find(child => child.classList?.contains('description'));
    if (category.description) {
        if (!description) {
            description = document.createElement('p');
            description.className = 'description category-description';
            title?.insertAdjacentElement('afterend', description);
        }
        description.textContent = category.description;
        description.classList.add('category-description');
    } else if (description) {
        description.remove();
    }
}

function renderCategoryFilters(mainGrid, category) {
    let filterSection = mainGrid.querySelector('.filter-section');
    const catalogContainer = mainGrid.querySelector('#catalog-container');

    if (!filterSection) {
        filterSection = document.createElement('div');
        filterSection.className = 'filter-section';
        catalogContainer?.insertAdjacentElement('beforebegin', filterSection);
    }

    filterSection.innerHTML = `
        <span class="filter-title">${safeText(category.filterTitle)}</span>
        <div class="filter-buttons">
            ${category.filters.map(([value, label], index) => `
                <button class="filter-btn ${index === 0 ? 'active' : ''}" data-heat="${safeText(value)}">
                    ${safeText(label)}
                </button>
            `).join('')}
        </div>
    `;
}

function prepareCategoryPage(mainGrid, pageCategory) {
    const category = CATEGORY_PAGES[pageCategory];
    if (!category) return;

    buildCategorySidebar(pageCategory);
    renderCategoryIntro(mainGrid, category);
    renderCategoryFilters(mainGrid, category);
}

function getDescriptionText(product) {
    return product.description
        ? product.description.replace(/<[^>]*>/g, '').substring(0, 130) + '...'
        : '';
}

function getMiniSpecsHTML(product) {
    if (!product.specs) return '';

    const spec1 = product.specs.height || 'N/A';
    const spec2 = product.specs.yield || (product.category === 'vegetables' ? product.specs.color : 'N/A');
    const spec3 = product.heatLevel ? product.heatLevel.split('(')[0].trim() : 'N/A';
    const label1 = product.category === 'poultry' ? 'Походження' : 'Висота';
    const label2 = product.category === 'vegetables' ? 'Колір' : product.category === 'poultry' ? 'Формат' : 'Врожайність';
    const label3 = product.category === 'poultry' ? 'Тип' : 'Гострота';

    return `
        <div class="product-specs-mini">
            <div class="spec-item">
                <span class="spec-label">${safeText(label1)}</span>
                <span class="spec-value">${safeText(spec1)}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${safeText(label2)}</span>
                <span class="spec-value">${safeText(spec2)}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${safeText(label3)}</span>
                <span class="spec-value">${safeText(spec3)}</span>
            </div>
        </div>
    `;
}

function hasScovilleInfo(product) {
    return product.category === 'sauces' || /\bSHU\b/i.test(product.heatLevel || '');
}

function getTagsHTML(product) {
    let tagsHTML = '';
    if (product.isNew) tagsHTML += '<span class="product-tag">NEW</span>';
    if (product.isHot) tagsHTML += '<span class="product-tag hot">🔥 HOT</span>';
    if (product.isFlavor) tagsHTML += `<span class="product-tag flavor">${safeText(product.isFlavor)}</span>`;
    return tagsHTML;
}

function renderProductCard(id, product) {
    const currentHeat = HEAT_LEVELS[product.heatScore] || { shu: "Unknown", width: "0%" };
    const hasHeatInfo = hasScovilleInfo(product);
    const isInStock = product.inStock !== false;
    const descriptionText = getDescriptionText(product);
    const mutedImageClass = isInStock ? '' : ' muted-product-img';
    const mutedPriceClass = isInStock ? '' : ' muted-card-price';

    return `
        <a href="product.html?id=${safeText(id)}" class="product-card ${isInStock ? '' : 'out-of-stock'}" data-id="${safeText(id)}">
            <div class="product-tags">${getTagsHTML(product)}</div>
            <div class="img-container">
                <img src="${safeText(product.images[0])}" alt="${safeText(product.name)}" loading="lazy" class="${mutedImageClass}">

                ${hasHeatInfo ? `
                    <div class="scoville-overlay heat-${safeText(product.heatScore || 'unknown')}">
                        <button class="scoville-help" type="button" aria-label="${safeText(SCOVILLE_HELP.title)}" aria-describedby="scoville-help-${safeText(id)}" onclick="event.stopPropagation(); event.preventDefault(); this.classList.toggle('is-open'); return false;">
                            <span aria-hidden="true">?</span>
                            <span class="scoville-help-tooltip" id="scoville-help-${safeText(id)}" role="tooltip">
                                <strong>${safeText(SCOVILLE_HELP.title)}</strong>
                                <span>${safeText(SCOVILLE_HELP.text)}</span>
                                ${SCOVILLE_HELP.link ? `<span class="scoville-help-link" role="link" tabindex="0" onclick="event.stopPropagation(); event.preventDefault(); window.location.href='${SCOVILLE_HELP.link}'; return false;" onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }">${safeText(SCOVILLE_HELP.linkLabel)} <span aria-hidden="true">↗</span></span>` : ''}
                            </span>
                        </button>
                        <div class="shu-value">${safeText(currentHeat.shu)}</div>
                        <div class="scoville-bar-container">
                            <div class="scoville-bar-fill" style="width: ${safeText(currentHeat.width)}"></div>
                        </div>
                        <div class="scoville-label">Scoville Units</div>
                    </div>
                ` : ''}

                ${isInStock ? `
                    <button class="quick-add-btn"
                            onclick="event.stopPropagation(); event.preventDefault(); addToCartDirectly('${safeText(id)}', this); return false;"
                            aria-label="Додати ${safeText(product.name)} у кошик">
                        🛒
                    </button>
                ` : ''}
            </div>

            <div class="product-label">
                <div class="name-price-row">
                    <h3 class="p-name">${safeText(product.name)}</h3>
                    <p class="card-price${mutedPriceClass}"
                       data-base-price="${safeText(product.price)}"
                       data-allow-sale="${product.allowSale === true ? 'true' : 'false'}">
                        ${window.IS_ENGLISH && typeof window.formatEnglishPrice === 'function' 
                            ? window.formatEnglishPrice(product.price)
                            : `${safeText(product.price)} ₴`}
                    </p>
                </div>
                ${descriptionText ? `<p class="product-description-short">${safeText(descriptionText)}</p>` : '<p class="product-description-short is-empty"></p>'}
                ${getMiniSpecsHTML(product)}
            </div>
        </a>
    `;
}

function renderCatalog(container, pageCategory) {
    container.innerHTML = '';

    Object.keys(allProducts).forEach(id => {
        const product = allProducts[id];
        if (!pageCategory || product.category === pageCategory) {
            container.insertAdjacentHTML('beforeend', renderProductCard(id, product));
        }
    });

    if (typeof applyGlobalSale === 'function') {
        applyGlobalSale();
    }
}

function initFilters(mainGrid) {
    const filterButtons = mainGrid.querySelectorAll('.filter-btn');

    const applyFilter = (selectedHeat) => {
        mainGrid.querySelectorAll('.product-card').forEach(card => {
            const productId = card.getAttribute('data-id');
            const product = allProducts[productId];
            if (!product) return;

            const productHeat = String(product.heatScore || '');
            card.classList.toggle('is-filtered-out', selectedHeat !== 'all' && productHeat !== selectedHeat);
        });
    };

    // Фильтры работают ВСЕГДА
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.getAttribute('data-heat'));
        });
    });

    // Слайдер инициализируется ТОЛЬКО если он есть
    const slider = document.getElementById('scoville-slider');
    if (!slider) return;

    const pepperName = document.getElementById('pepper-name');
    const pepperShu = document.getElementById('pepper-shu');
    const heatStatus = document.getElementById('heat-status');
    const display = document.getElementById('thermometer-display');
    const resetBtn = document.getElementById('reset-scoville');

    const updateThermometerDisplay = (value) => {
        const data = SCOVILLE_DATA[value];
        if (!data) return;

        if (pepperName) pepperName.innerText = data.name;
        if (pepperShu) pepperShu.innerText = data.shu + " SHU";
        if (heatStatus) heatStatus.innerText = "Рівень: " + data.status;
        if (display) {
            display.style.borderColor = data.color;
            display.style.boxShadow = `inset 0 0 10px ${data.color}`;
        }
    };

    resetBtn?.addEventListener('click', () => {
        slider.value = 1;
        updateThermometerDisplay('1');
        applyFilter('all');
        filterButtons.forEach(button => button.classList.remove('active'));
        mainGrid.querySelector('.filter-btn[data-heat="all"]')?.classList.add('active');
    });

    slider.addEventListener('input', function() {
        updateThermometerDisplay(this.value);
    });

    slider.addEventListener('change', function() {
        const value = this.value;
        updateThermometerDisplay(value);
        const targetBtn = mainGrid.querySelector(`.filter-btn[data-heat="${value}"]`);
        if (targetBtn) {
            filterButtons.forEach(button => button.classList.remove('active'));
            targetBtn.classList.add('active');
        }
        applyFilter(value);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('catalog-container');
    const mainGrid = document.querySelector('.products-grid');

    if (container && mainGrid && typeof allProducts !== 'undefined') {
        const pageCategory = mainGrid.getAttribute('data-category');
        prepareCategoryPage(mainGrid, pageCategory);
        renderCatalog(container, pageCategory);
        initFilters(mainGrid);
    }
});

function goBack() {
    if (window.history.length > 1) window.history.back();
    else window.location.href = 'index.html';
}

window.goBack = goBack;

const topBtn = document.createElement('button');
topBtn.innerHTML = '🔝🌶️';
topBtn.className = 'back-to-top';
document.body.appendChild(topBtn);

window.onscroll = function() {
    topBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
