// AI Tools Directory - JavaScript Functionality

// Data Structure for Categories and Tools
const categories = [
    {
        id: 'conversational',
        title: 'Conversational & AI Agents',
        description: 'Chatbots, virtual assistants, and conversational AI tools for customer service and interaction.',
        icon: 'fas fa-comments',
        count: 26,
        tools: ['ChatGPT', 'Claude', 'Bard', 'Jasper Chat', 'Character.AI', 'Replika']
    },
    {
        id: 'resume',
        title: 'Resume & Interviews',
        description: 'AI-powered tools for creating resumes, cover letters, and interview preparation.',
        icon: 'fas fa-file-alt',
        count: 13,
        tools: ['Resume.io', 'Zety', 'Kickresume', 'InterviewBuddy', 'Pramp', 'MockAI']
    },
    {
        id: 'video',
        title: 'Video Tools',
        description: 'AI video generation, editing, and enhancement tools for content creators.',
        icon: 'fas fa-video',
        count: 17,
        tools: ['Clideo', 'Vmake AI', 'Pika', 'Runway', 'Synthesia', 'Loom AI']
    },
    {
        id: 'audio',
        title: 'Audio Tools',
        description: 'AI-powered audio generation, editing, and music creation tools.',
        icon: 'fas fa-music',
        count: 10,
        tools: ['Suno', 'Mubert', 'AIVA', 'Boomy', 'Soundraw', 'Beatoven.ai']
    },
    {
        id: 'technical',
        title: 'Technical Tools',
        description: 'Development, coding, and technical AI tools for programmers and engineers.',
        icon: 'fas fa-code',
        count: 38,
        tools: ['Cursor', 'GitHub Copilot', 'Replit', 'FlutterFlow', 'Tabnine', 'CodeT5']
    },
    {
        id: 'image',
        title: 'Image Generation & Editing',
        description: 'AI image creation, editing, and enhancement tools for designers and artists.',
        icon: 'fas fa-image',
        count: 14,
        tools: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Canva AI', 'Remove.bg', 'Upscale.media']
    },
    {
        id: 'marketing',
        title: 'Marketing & Plans',
        description: 'AI marketing tools for content creation, social media, and business planning.',
        icon: 'fas fa-bullhorn',
        count: 17,
        tools: ['Copy.ai', 'Jasper', 'Writesonic', 'Buffer AI', 'Hootsuite AI', 'AdCreative.ai']
    },
    {
        id: 'research',
        title: 'Research & Knowledge',
        description: 'AI research assistants and knowledge management tools for academics and professionals.',
        icon: 'fas fa-search',
        count: 9,
        tools: ['Perplexity', 'Semantic Scholar', 'Elicit', 'Research Rabbit', 'Consensus', 'Scite']
    },
    {
        id: 'business',
        title: 'Business Management',
        description: 'AI tools for business operations, project management, and productivity.',
        icon: 'fas fa-briefcase',
        count: 9,
        tools: ['Notion AI', 'Monday.com AI', 'Asana Intelligence', 'Zapier AI', 'Calendly AI', 'Slack AI']
    },
    {
        id: 'translation',
        title: 'Translation & Proofreading',
        description: 'AI language translation and text correction tools for global communication.',
        icon: 'fas fa-language',
        count: 6,
        tools: ['DeepL', 'Google Translate', 'Grammarly', 'QuillBot', 'Linguee', 'Reverso']
    },
    {
        id: 'learning',
        title: 'Learning & Stories',
        description: 'AI educational tools and storytelling platforms for learning and creativity.',
        icon: 'fas fa-book',
        count: 5,
        tools: ['Duolingo AI', 'Khan Academy AI', 'Coursera AI', 'StoryAI', 'NovelAI']
    },
    {
        id: 'visuals',
        title: 'Visuals & Summaries',
        description: 'AI tools for creating visual content and summarizing information.',
        icon: 'fas fa-chart-bar',
        count: 6,
        tools: ['MyLens', 'Napkin AI', 'Motion', 'Summarize.tech', 'TLDR This', 'Otter.ai']
    },
    {
        id: 'presentations',
        title: 'Presentations',
        description: 'AI-powered presentation creation and design tools.',
        icon: 'fas fa-presentation-screen',
        count: 5,
        tools: ['Gamma', 'Beautiful.ai', 'Tome', 'Slidebean', 'Pitch']
    },
    {
        id: 'interior',
        title: 'Interior Design',
        description: 'AI interior design and home decoration tools.',
        icon: 'fas fa-home',
        count: 2,
        tools: ['RoomGPT', 'Planner 5D AI']
    },
    {
        id: 'detection',
        title: 'AI Detection',
        description: 'Tools for detecting AI-generated content and ensuring authenticity.',
        icon: 'fas fa-shield-alt',
        count: 3,
        tools: ['GPTZero', 'AI Detector', 'Originality.ai']
    },
    {
        id: 'prompts',
        title: 'Prompt Generation',
        description: 'AI prompt engineering and optimization tools.',
        icon: 'fas fa-magic',
        count: 4,
        tools: ['PromptBase', 'PromptHero', 'ChatGPT Prompt Generator', 'AI Prompt Generator']
    }
];

const featuredTools = [
    {
        id: 'clideo',
        name: 'Clideo',
        category: 'video',
        categoryName: 'Video Tools',
        description: 'Online video editing suite with AI-powered features for trimming, merging, compressing, and converting videos. Perfect for content creators and marketers.',
        features: ['Video Editing', 'Format Conversion', 'Compression', 'Slideshow Maker'],
        rating: 4.5,
        logo: 'C',
        link: 'https://clideo.com'
    },
    {
        id: 'vmake-ai',
        name: 'Vmake AI',
        category: 'video',
        categoryName: 'Video Tools',
        description: 'AI-powered video creation platform that transforms text into engaging videos with automated editing, voiceovers, and visual effects.',
        features: ['Text-to-Video', 'Auto Editing', 'Voiceover', 'Visual Effects'],
        rating: 4.3,
        logo: 'V',
        link: 'https://vmake.ai'
    },
    {
        id: 'pika',
        name: 'Pika',
        category: 'video',
        categoryName: 'Video Tools',
        description: 'Revolutionary AI video generator that creates stunning videos from text prompts and images. Ideal for social media content and marketing.',
        features: ['Text-to-Video', 'Image-to-Video', 'Style Transfer', 'Animation'],
        rating: 4.6,
        logo: 'P',
        link: 'https://pika.art'
    },
    {
        id: 'visily',
        name: 'Visily',
        category: 'technical',
        categoryName: 'Technical Tools',
        description: 'AI-powered UI design tool that helps teams create beautiful wireframes and prototypes quickly without design experience.',
        features: ['UI Design', 'Wireframing', 'Prototyping', 'Team Collaboration'],
        rating: 4.4,
        logo: 'V',
        link: 'https://visily.ai'
    },
    {
        id: 'imagen',
        name: 'Imagen',
        category: 'image',
        categoryName: 'Image Generation',
        description: 'AI-powered post-production workflow tool that automates photo editing tasks for photographers and content creators.',
        features: ['Auto Editing', 'Batch Processing', 'Style Matching', 'Color Grading'],
        rating: 4.7,
        logo: 'I',
        link: 'https://imagen-ai.com'
    },
    {
        id: 'suno',
        name: 'Suno',
        category: 'audio',
        categoryName: 'Audio Tools',
        description: 'AI music generation platform that creates original songs, beats, and soundtracks from text descriptions or musical ideas.',
        features: ['Music Generation', 'Lyrics Creation', 'Multiple Genres', 'Commercial Use'],
        rating: 4.5,
        logo: 'S',
        link: 'https://suno.ai'
    },
    {
        id: 'runway',
        name: 'Runway',
        category: 'video',
        categoryName: 'Video Tools',
        description: 'Comprehensive AI creative suite for video editing, image generation, and content creation. Tools for human imagination and creativity.',
        features: ['Video Generation', 'Image Editing', 'Green Screen', 'Motion Tracking'],
        rating: 4.8,
        logo: 'R',
        link: 'https://runwayml.com'
    },
    {
        id: 'roomgpt',
        name: 'RoomGPT',
        category: 'interior',
        categoryName: 'Interior Design',
        description: 'AI interior design tool that generates room designs and decoration ideas from photos of your space.',
        features: ['Room Design', 'Style Transfer', 'Furniture Suggestions', 'Color Schemes'],
        rating: 4.2,
        logo: 'R',
        link: 'https://roomgpt.io'
    },
    {
        id: 'mylens',
        name: 'MyLens',
        category: 'visuals',
        categoryName: 'Visuals & Summaries',
        description: 'AI-powered data visualization tool that transforms complex data into beautiful, interactive charts and infographics.',
        features: ['Data Visualization', 'Interactive Charts', 'Dashboard Creation', 'Export Options'],
        rating: 4.3,
        logo: 'M',
        link: 'https://mylens.ai'
    },
    {
        id: 'trupeer',
        name: 'Trupeer',
        category: 'video',
        categoryName: 'Video Tools',
        description: 'AI-powered platform for creating professional product videos and marketing content with automated editing and optimization.',
        features: ['Product Videos', 'Marketing Content', 'Auto Optimization', 'Brand Consistency'],
        rating: 4.4,
        logo: 'T',
        link: 'https://trupeer.ai'
    },
    {
        id: 'napkin-ai',
        name: 'Napkin AI',
        category: 'visuals',
        categoryName: 'Visuals & Summaries',
        description: 'Visual storytelling platform that converts text into engaging infographics, diagrams, and visual content automatically.',
        features: ['Text-to-Visual', 'Infographics', 'Diagrams', 'Visual Stories'],
        rating: 4.1,
        logo: 'N',
        link: 'https://napkin.ai'
    },
    {
        id: 'motion',
        name: 'Motion',
        category: 'visuals',
        categoryName: 'Visuals & Summaries',
        description: 'AI-powered visual storytelling tool that creates animated presentations and visual narratives from text content.',
        features: ['Visual Stories', 'Animation', 'Presentations', 'Interactive Content'],
        rating: 4.2,
        logo: 'M',
        link: 'https://motion.ai'
    },
    {
        id: 'toolbaz',
        name: 'ToolBaz',
        category: 'technical',
        categoryName: 'Technical Tools',
        description: 'Collection of AI writer tools and utilities for content creation, code generation, and productivity enhancement.',
        features: ['AI Writing', 'Code Generation', 'Content Tools', 'Productivity'],
        rating: 4.0,
        logo: 'T',
        link: 'https://toolbaz.com'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        category: 'technical',
        categoryName: 'Technical Tools',
        description: 'AI-powered code editor that provides intelligent code completion, debugging assistance, and automated refactoring.',
        features: ['Code Completion', 'Debugging', 'Refactoring', 'Multi-language'],
        rating: 4.7,
        logo: 'C',
        link: 'https://cursor.sh'
    },
    {
        id: 'flutterflow',
        name: 'FlutterFlow',
        category: 'technical',
        categoryName: 'Technical Tools',
        description: 'Visual app building platform with AI assistance for creating Flutter applications without extensive coding knowledge.',
        features: ['Visual Builder', 'Flutter Apps', 'No-Code', 'AI Assistance'],
        rating: 4.5,
        logo: 'F',
        link: 'https://flutterflow.io'
    },
    {
        id: 'replit',
        name: 'Replit',
        category: 'technical',
        categoryName: 'Technical Tools',
        description: 'Cloud-based development environment with AI-powered coding assistance for building and deploying applications.',
        features: ['Cloud IDE', 'AI Coding', 'Collaboration', 'Deployment'],
        rating: 4.6,
        logo: 'R',
        link: 'https://replit.com'
    }
];

// State Management
let currentFilter = 'all';
let displayedToolsCount = 8;
let searchQuery = '';
let isLoading = false;

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const toolGrid = document.getElementById('toolGrid');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const backToTopBtn = document.getElementById('backToTop');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderCategories();
    renderTools();
    setupScrollEffects();
    setupFormHandlers();
});

// Initialize application
function initializeApp() {
    // Add loading animation to initial elements
    setTimeout(() => {
        document.querySelectorAll('.category-card, .tool-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 500);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }

    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => handleFilterChange(tab.dataset.category));
    });

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreTools);
    }

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render categories
function renderCategories() {
    if (!categoryGrid) return;

    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card slide-up" onclick="filterByCategory('${category.id}')">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h4 class="category-title">${category.title}</h4>
            <p class="category-description">${category.description}</p>
            <div class="category-count">
                <i class="fas fa-tools"></i>
                <span>${category.count}+ tools</span>
            </div>
            <button class="explore-btn" onclick="event.stopPropagation(); filterByCategory('${category.id}')">
                Explore <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

// Render tools
function renderTools() {
    if (!toolGrid) return;

    const filteredTools = getFilteredTools();
    const toolsToShow = filteredTools.slice(0, displayedToolsCount);

    toolGrid.innerHTML = toolsToShow.map(tool => `
        <div class="tool-card scale-in" data-category="${tool.category}">
            <div class="tool-header">
                <div class="tool-logo">${tool.logo}</div>
                <div class="tool-info">
                    <h4>${tool.name}</h4>
                    <span class="tool-category">${tool.categoryName}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                ${tool.features.map(feature => `<span class="tool-feature">${feature}</span>`).join('')}
            </div>
            <div class="tool-footer">
                <div class="tool-rating">
                    ${generateStarRating(tool.rating)}
                    <span>${tool.rating}</span>
                </div>
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit Tool <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `).join('');

    // Update load more button visibility
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filteredTools.length > displayedToolsCount ? 'block' : 'none';
    }
}

// Get filtered tools based on current filter and search
function getFilteredTools() {
    let filtered = featuredTools;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.features.some(feature => feature.toLowerCase().includes(query)) ||
            tool.categoryName.toLowerCase().includes(query)
        );
    }

    return filtered;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Handle search
function handleSearch() {
    searchQuery = searchInput.value.trim();
    displayedToolsCount = 8;
    renderTools();
    
    // Scroll to tools section if search has results
    if (searchQuery && getFilteredTools().length > 0) {
        scrollToSection('tools');
    }
}

// Handle filter change
function handleFilterChange(category) {
    currentFilter = category;
    displayedToolsCount = 8;
    
    // Update active tab
    filterTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    renderTools();
}

// Filter by category (called from category cards)
function filterByCategory(category) {
    currentFilter = category;
    displayedToolsCount = 8;
    
    // Update active tab
    filterTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    renderTools();
    scrollToSection('tools');
}

// Load more tools
function loadMoreTools() {
    if (isLoading) return;
    
    isLoading = true;
    showLoading();
    
    setTimeout(() => {
        displayedToolsCount += 8;
        renderTools();
        hideLoading();
        isLoading = false;
    }, 1000);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Setup scroll effects
function setupScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollY = window.scrollY;
        
        // Back to top button
        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', scrollY > 300);
        }
        
        // Header background opacity
        const header = document.querySelector('.header');
        if (header) {
            const opacity = Math.min(scrollY / 100, 0.95);
            header.style.background = `rgba(255, 255, 255, ${opacity})`;
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .tool-card, .section-header').forEach(el => {
        observer.observe(el);
    });
}

// Setup form handlers
function setupFormHandlers() {
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Footer newsletter
    const footerNewsletter = document.querySelector('.footer-newsletter');
    if (footerNewsletter) {
        footerNewsletter.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Handle newsletter submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing! We\'ll keep you updated with the latest AI tools.', 'success');
        e.target.reset();
    }
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
    }, 2000);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Show loading overlay
function showLoading() {
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
}

// Hide loading overlay
function hideLoading() {
    if (loadingOverlay) {
        loadingOverlay.classList.remove('active');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            .notification-success {
                border-left: 4px solid #10b981;
            }
            .notification-content {
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification-content i:first-child {
                color: #10b981;
            }
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #64748b;
                margin-left: auto;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility function to get random tools (for future expansion)
function getRandomTools(count = 4) {
    const shuffled = [...featuredTools].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.filterByCategory = filterByCategory;

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Preload images and optimize performance
        featuredTools.forEach(tool => {
            const img = new Image();
            img.src = `https://via.placeholder.com/48x48/6366f1/ffffff?text=${tool.logo}`;
        });
    });
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

