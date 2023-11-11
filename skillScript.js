const progressCircles = document.querySelectorAll('.progress-circle');
        const percentTexts = document.querySelectorAll('.percent-text');
        const circumference = 2 * Math.PI * 60;

        // function updateProgressFromText() {
        //     const textContent = percentText.textContent;
        //     const percentage = parseFloat(textContent); // Extract the numerical value
        //     const strokeDasharrayValue = (percentage / 100) * circumference;
        //     progressCircle.style.animationDuration = '2s';
        //     progressCircle.style.strokeDasharray = `0, ${circumference}`;

        //     setTimeout(() => {
        //         progressCircle.style.strokeDasharray = `${strokeDasharrayValue}, ${circumference}`;
        //     }, 100);
        // }
        function updateProgressFromText() {
            progressCircles.forEach((progressCircle, index) => {
                const textContent = percentTexts[index].textContent;
                const percentage = parseFloat(textContent); // Extract the numerical value
                const radius = 60; // Updated radius
                const circumference = 2 * Math.PI * radius; // Updated circumference calculation
                const strokeDasharrayValue = (percentage / 100) * circumference;
                progressCircle.style.animationDuration = '2s';
                progressCircle.style.strokeDasharray = `0, ${circumference}`;

                setTimeout(() => {
                    progressCircle.style.strokeDasharray = `${strokeDasharrayValue}, ${circumference}`;
                }, 100);
            });
        }

        // Call the function to update the progress based on the value in the SVG text
        updateProgressFromText();