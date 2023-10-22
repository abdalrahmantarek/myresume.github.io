
    const jobTitleElement = document.getElementById('jobTitle');
    const jobTitles = [  'Full Stack|','Web Developer|'];
    let currentIndex = 0;
    let typingInterval;

    function animateTyping(title) {
        let characters = title.split('');
        let charIndex = 0;
        jobTitleElement.textContent = '';

        typingInterval = setInterval(() => {
            if (charIndex < characters.length) {
                jobTitleElement.textContent += characters[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    deleteAndRewrite();
                }, 1000); // Pause before starting the next animation
            }
        }, 100);
    }

    function deleteAndRewrite() {
        let characters = jobTitleElement.textContent.split('');
        typingInterval = setInterval(() => {
            if (characters.length > 0) {
                characters.pop();
                jobTitleElement.textContent = characters.join('')+'|';
            } else {
                clearInterval(typingInterval);
                currentIndex = (currentIndex + 1) % jobTitles.length;
                animateTyping(jobTitles[currentIndex]);
            }
        }, 50);
    }

    animateTyping(jobTitles[currentIndex]); // Start the animation


    // portfolio

    const portfolioLink = document.querySelector('.Portfolio');
    const portfolioOverlay = document.querySelector('.portfolio-overlay');

    portfolioLink.addEventListener('click', (e) => {
        e.preventDefault();
        portfolioOverlay.classList.toggle('show-portfolio');
    });

    const openMyDiv = document.querySelectorAll('.open');

    openMyDiv.forEach(e => {
        e.addEventListener('click' , (x) => {
            
            if(!portfolioOverlay.classList.contains('show-portfolio'))
            {
                portfolioOverlay.classList.add('show-portfolio');
            }
            
        })
    });


