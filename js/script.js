// ========================================
// SOUTH INDIA TRAVEL WEBSITE - JAVASCRIPT
// ========================================

// Destination Data
const destinations = [
    {
        id: 'munnar',
        name: 'Munnar, Kerala',
        region: 'Kerala',
        description: 'A picturesque hill station in Kerala known for its tea gardens, misty hills, and cool climate.',
        fullDescription: 'Munnar is a stunning hill station located in the Western Ghats of Kerala. Famous for its sprawling tea plantations, misty mountains, and pleasant climate. Perfect for nature lovers and adventure seekers.',
        image: 'images/munnar.jpg',
        bestTime: 'September - March',
        temperature: '8°C - 25°C',
        budget: '₹8,000 - ₹30,000',
        budgetCategory: 'midrange',
        season: 'autumn',
        travelStyle: 'adventure',
        highlights: ['Tea Gardens', 'Eravikulam National Park', 'Anamudi Peak', 'Mattupetty Dam'],
        activities: ['Trekking', 'Tea plantation tours', 'Nature walks', 'Photography'],
        tips: 'Book accommodations 2 weeks in advance during peak season.',
        nearbyAttractions: ['Kochi (120km)', 'Thekkady (70km)', 'Cochin Port'],
        costs: {
            'Accommodation': '₹2,000-8,000/night',
            'Food': '₹500-2,000/day',
            'Transport': '₹2,000-5,000',
            'Activities': '₹1,000-3,000'
        }
    },
    {
        id: 'ooty',
        name: 'Ooty, Tamil Nadu',
        region: 'Tamil Nadu',
        description: 'The Queen of the Nilgiris, Ooty offers cool climate, beautiful gardens, and scenic beauty.',
        fullDescription: 'Ooty (Udagamandalam) is a popular hill station in the Nilgiri mountains. Known for its botanical gardens, toy train, and pleasant weather year-round.',
        image: 'images/ooty.jpg',
        bestTime: 'April - June, September - October',
        temperature: '10°C - 24°C',
        budget: '₹7,500 - ₹28,000',
        budgetCategory: 'midrange',
        season: 'spring',
        travelStyle: 'leisure',
        highlights: ['Botanical Gardens', 'Toy Train', 'Doddabetta Peak', 'Ooty Lake'],
        activities: ['Garden visits', 'Toy train ride', 'Boating', 'Mountain trekking'],
        tips: 'The toy train is crowded during peak season. Book in advance.',
        nearbyAttractions: ['Coonoor (30km)', 'Kotagiri (35km)', 'Mysore (150km)'],
        costs: {
            'Accommodation': '₹1,500-7,000/night',
            'Food': '₹500-1,500/day',
            'Transport': '₹2,000-4,000',
            'Activities': '₹1,000-2,000'
        }
    },
    {
        id: 'coorg',
        name: 'Coorg, Karnataka',
        region: 'Karnataka',
        description: 'The coffee capital of India with misty hills, waterfalls, and adventure activities.',
        fullDescription: 'Coorg (Kodagu) is famous for its coffee plantations, misty hills, and adventure opportunities. A perfect destination for trekking, camping, and exploring nature.',
        image: 'images/coorg.jpg',
        bestTime: 'September - November, January - March',
        temperature: '12°C - 28°C',
        budget: '₹19,000 - ₹32,000',
        budgetCategory: 'luxury',
        season: 'autumn',
        travelStyle: 'adventure',
        highlights: ['Coffee Plantations', 'Jathari Waterfall', 'Nagarhole National Park', 'Brahmagiri Peak'],
        activities: ['Coffee farm tours', 'Trekking', 'Waterfall visits', 'Camping'],
        tips: 'Visit coffee plantations during harvest season (October-November) for best experience.',
        nearbyAttractions: ['Mysore (120km)', 'Bangalore (260km)', 'Hassan (90km)'],
        costs: {
            'Accommodation': '₹2,000-8,000/night',
            'Food': '₹600-2,000/day',
            'Transport': '₹2,500-5,000',
            'Activities': '₹1,500-3,500'
        }
    },
    {
        id: 'pondicherry',
        name: 'Pondicherry',
        region: 'Pondicherry',
        description: 'A charming beach town with French colonial architecture and peaceful beaches.',
        fullDescription: 'Pondicherry is a coastal town with unique French colonial heritage. Known for its clean beaches, ashrams, and laid-back atmosphere.',
        image: 'images/pondicherry.jpg',
        bestTime: 'October - March',
        temperature: '18°C - 35°C',
        budget: '₹6,500 - ₹15,000',
        budgetCategory: 'budget',
        season: 'winter',
        travelStyle: 'leisure',
        highlights: ['Promenade Beach', 'Auroville', 'Sri Aurobindo Ashram', 'Paradise Beach'],
        activities: ['Beach walks', 'Scuba diving', 'Cycling', 'Exploring colonial architecture'],
        tips: 'Visit Auroville early morning to avoid crowds.',
        nearbyAttractions: ['Chennai (160km)', 'Tirupati (140km)', 'Mahabalipuram (90km)'],
        costs: {
            'Accommodation': '₹1,200-6,000/night',
            'Food': '₹400-1,500/day',
            'Transport': '₹1,500-3,000',
            'Activities': '₹800-2,000'
        }
    },
    {
        id: 'wayanad',
        name: 'Wayanad, Kerala',
        region: 'Kerala',
        description: 'A scenic destination with waterfalls, wildlife, and adventure activities.',
        fullDescription: 'Wayanad is known for its lush greenery, waterfalls, and wildlife. Perfect for adventure lovers and nature enthusiasts.',
        image: 'images/wayanad.jpg',
        bestTime: 'August - May',
        temperature: '15°C - 30°C',
        budget: '₹7,000 - ₹20,000',
        budgetCategory: 'midrange',
        season: 'monsoon',
        travelStyle: 'adventure',
        highlights: ['Soochipara Waterfall', 'Kabini River', 'Wayanad Wildlife Sanctuary', 'Banasura Sagar Dam'],
        activities: ['Trekking', 'Wildlife safari', 'Rock climbing', 'Bamboo rafting'],
        tips: 'Monsoon season offers the best green landscapes but roads can be slippery.',
        nearbyAttractions: ['Mysore (110km)', 'Ooty (120km)', 'Kalpetta (20km)'],
        costs: {
            'Accommodation': '₹1,500-7,000/night',
            'Food': '₹500-1,800/day',
            'Transport': '₹2,000-4,000',
            'Activities': '₹1,000-2,500'
        }
    },
    {
        id: 'mysore',
        name: 'Mysore, Karnataka',
        region: 'Karnataka',
        description: 'The cultural capital with magnificent palaces, temples, and vibrant markets.',
        fullDescription: 'Mysore is rich in history and culture. Home to the famous Mysore Palace, silk weaving, and fragrant gardens.',
        image: 'images/mysore.jpg',
        bestTime: 'October - February',
        temperature: '15°C - 32°C',
        budget: '₹16,000 - ₹22,000',
        budgetCategory: 'luxury',
        season: 'winter',
        travelStyle: 'cultural',
        highlights: ['Mysore Palace', 'Sri Ranganathaswamy Temple', 'Brindavan Gardens', 'Chamundi Temple'],
        activities: ['Palace tours', 'Temple visits', 'Market shopping', 'Garden walks'],
        tips: 'Palace is beautifully lit on Sundays and national holidays. Visit in evening for best photos.',
        nearbyAttractions: ['Bandipur (80km)', 'Nandi Hills (100km)', 'Chikmagalur (150km)'],
        costs: {
            'Accommodation': '₹1,000-5,500/night',
            'Food': '₹400-1,200/day',
            'Transport': '₹1,500-3,000',
            'Activities': '₹800-2,000'
        }
    },
    {
        id: 'hyderabad',
        name: 'Hyderabad, Telangana',
        region: 'Telangana',
        description: 'A modern city with historic monuments and delicious biryani cuisine.',
        fullDescription: 'Hyderabad is a blend of old and new, with historic monuments, modern IT parks, and famous Hyderabadi cuisine.',
        image: 'images/hyderabad.jpg',
        bestTime: 'October - February',
        temperature: '15°C - 35°C',
        budget: '₹7,000 - ₹27,000',
        budgetCategory: 'midrange',
        season: 'winter',
        travelStyle: 'cultural',
        highlights: ['Charminar', 'Golconda Fort', 'Qutb Shahi Tombs', 'Hussain Sagar Lake'],
        activities: ['Monument visits', 'Lake boating', 'Biryani tasting', 'Market exploration'],
        tips: 'Try authentic Hyderabadi biryani at local restaurants, not tourist spots.',
        nearbyAttractions: ['Charminar Market', 'Secunderabad', 'Osman Sagar Lake'],
        costs: {
            'Accommodation': '₹1,500-7,000/night',
            'Food': '₹500-1,500/day',
            'Transport': '₹2,000-4,000',
            'Activities': '₹800-1,500'
        }
    },
    {
        id: 'kanyakumari',
        name: 'Kanyakumari, Tamil Nadu',
        region: 'Tamil Nadu',
        description: 'India\'s southern tip where three seas meet, a pilgrimage and scenic destination.',
        fullDescription: 'Kanyakumari is where the Arabian Sea, Indian Ocean, and Bay of Bengal meet. A major pilgrimage site and scenic beach destination.',
        image: 'images/kanyakumari.jpg',
        bestTime: 'October - February',
        temperature: '20°C - 32°C',
        budget: '₹5,500 - ₹10,000',
        budgetCategory: 'budget',
        season: 'winter',
        travelStyle: 'pilgrimage',
        highlights: ['Vivekananda Rock', 'Kanyakumari Temple', 'Thipakulam Beach', 'Sunset Point'],
        activities: ['Temple visits', 'Beach walks', 'Rock climbing', 'Sunset watching'],
        tips: 'Watch the sunset at sunset point - it\'s magical. Best views are around 6-7 PM.',
        nearbyAttractions: ['Padmanabhapuram Palace (50km)', 'Nagercoil (20km)', 'Thiruvananthapuram (90km)'],
        costs: {
            'Accommodation': '₹1,000-5,000/night',
            'Food': '₹400-1,200/day',
            'Transport': '₹1,500-3,000',
            'Activities': '₹500-1,500'
        }
    }
];

// DOM Elements
const destinationsGrid = document.getElementById('destinationsGrid');
const detailModal = document.getElementById('detailModal');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');

// Navigation & Mobile Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Initialize
displayDestinations(destinations);

// Display all destinations
function displayDestinations(destList) {
    destinationsGrid.innerHTML = '';
    const noResults = document.getElementById('noResults');

    if (destList.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    destList.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-image">
        <img src="${dest.image}" alt="${dest.name}">
    </div>
            <div class="destination-content">
                <h3 class="destination-name">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
                <div class="destination-meta">
                    <span>🌡️ ${dest.temperature}</span>
                    <span>💰 ${dest.budget}</span>
                </div>
                <button class="btn-explore" onclick="showDestinationDetail('${dest.id}')">
                    Explore Details
                </button>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });
}

// Filter destinations
function filterDestinations() {
    const budget = document.getElementById('budgetFilter').value;
    const season = document.getElementById('seasonFilter').value;
    const style = document.getElementById('styleFilter').value;

    const filtered = destinations.filter(dest => {
        const budgetMatch = !budget || dest.budgetCategory === budget;
        const seasonMatch = !season || dest.season === season;
        const styleMatch = !style || dest.travelStyle === style;
        return budgetMatch && seasonMatch && styleMatch;
    });

    displayDestinations(filtered);
}

// Reset filters
function resetFilters() {
    document.getElementById('budgetFilter').value = '';
    document.getElementById('seasonFilter').value = '';
    document.getElementById('styleFilter').value = '';
    displayDestinations(destinations);
}

// Show destination details in modal
function showDestinationDetail(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    document.getElementById('detailImg').src = dest.image;
    document.getElementById('detailImg').onerror = function () {
        this.style.display = 'none';
    };
    document.getElementById('detailName').textContent = dest.name;
    document.getElementById('detailDescription').textContent = dest.fullDescription;
    document.getElementById('detailBestTime').textContent = dest.bestTime;
    document.getElementById('detailTemp').textContent = dest.temperature;
    document.getElementById('detailBudget').textContent = dest.budget;

    // Highlights
    const highlightsList = document.getElementById('detailHighlights');
    highlightsList.innerHTML = dest.highlights.map(h => `<li>${h}</li>`).join('');

    // Activities
    const activitiesList = document.getElementById('detailActivities');
    activitiesList.innerHTML = dest.activities.map(a => `<li>${a}</li>`).join('');

    // Tips
    document.getElementById('detailTips').textContent = dest.tips;

    // Costs
    const costsList = document.getElementById('detailCosts');
    costsList.innerHTML = Object.entries(dest.costs).map(([label, value]) =>
        `<div class="cost-item">
            <span class="cost-label">${label}</span>
            <span class="cost-value">${value}</span>
        </div>`
    ).join('');

    // Nearby Attractions
    const nearbyList = document.getElementById('detailNearby');
    nearbyList.innerHTML = dest.nearbyAttractions.map(a => `<li>${a}</li>`).join('');

    detailModal.classList.add('active');
}

// Close modal
function closeModal() {
    detailModal.classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === detailModal) {
        closeModal();
    }
});

// Contact form handling
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation & feedback
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
        event.target.reset();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

