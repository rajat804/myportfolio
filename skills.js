const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove all active classes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Get corresponding tab content by ID
                const targetId = button.getAttribute('data-target').trim(); // <-- .trim() handles space issue
                const targetContent = document.getElementById(targetId);

                if (targetContent) {
                    targetContent.classList.add('active');
                } else {
                    console.error("No tab found with ID:", targetId);
                }
            });
        });