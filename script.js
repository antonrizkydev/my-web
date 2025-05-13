document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle for mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Section navigation
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Quote functionality
    const quoteButtons = document.querySelectorAll('.quote-btn');
    const randomQuoteBtn = document.getElementById('random-quote');
    const currentQuote = document.getElementById('current-quote');
    const quoteAuthor = document.getElementById('quote-author');
    
    // Sample quotes
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        }
    ];
    
    // Additional quotes for random selection
    const additionalQuotes = [
        {
            text: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            text: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "Do not watch the clock. Do what it does. Keep going.",
            author: "Sam Levenson"
        }
    ];
    
    // Set initial quote
    updateQuote(0);
    
    // Quote buttons functionality
    quoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quoteIndex = parseInt(this.getAttribute('data-quote')) - 1;
            
            // Remove active class from all buttons
            quoteButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update quote
            updateQuote(quoteIndex);
        });
    });
    
    // Random quote button functionality
    randomQuoteBtn.addEventListener('click', function() {
        // Combine main quotes and additional quotes
        const allQuotes = [...quotes, ...additionalQuotes];
        const randomIndex = Math.floor(Math.random() * allQuotes.length);
        
        // Remove active class from all buttons
        quoteButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Update quote
        currentQuote.textContent = `"${allQuotes[randomIndex].text}"`;
        quoteAuthor.textContent = `- ${allQuotes[randomIndex].author}`;
        
        // Add animation
        currentQuote.style.animation = 'none';
        quoteAuthor.style.animation = 'none';
        setTimeout(() => {
            currentQuote.style.animation = 'fadeIn 0.5s ease';
            quoteAuthor.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    });
    
    // Function to update quote
    function updateQuote(index) {
        currentQuote.textContent = `"${quotes[index].text}"`;
        quoteAuthor.textContent = `- ${quotes[index].author}`;
        
        // Add animation
        currentQuote.style.animation = 'none';
        quoteAuthor.style.animation = 'none';
        setTimeout(() => {
            currentQuote.style.animation = 'fadeIn 0.5s ease';
            quoteAuthor.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .feature, .contact-method, .quote-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
});