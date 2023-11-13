// dummy button rotation and section onclick script
const sections = document.querySelectorAll(".accordion-section");

sections.forEach(section => {
    section.addEventListener("click", () => {
        section.classList.toggle("active");
        const button = section.querySelector(".dummy-button");
        button.classList.toggle("rotated");
    });
});



//  output palate script
document.querySelectorAll(".run-code").forEach(button => {
    button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        const outputPalate = document.getElementById(`output-${section}`);
        let texts = [];

        if (section === "1") {
            texts = [
                "// Frontend Development \u{12810}",
                "\xa0\xa0\xa0HTML",
                "\xa0\xa0\xa0CSS",
                "\xa0\xa0\xa0Javascript - DOM Manipulation/Advanced Js",
                "\xa0\xa0\xa0JSON",
                // Add more lines as needed for section 1
            ];
        } else if (section === "2") {
            texts = [
                "// Backend Development \u{EA105}",
                "\xa0\xa0\xa0Java - Advanced Java",
                "\xa0\xa0\xa0Collection Framework",
                "\xa0\xa0\xa0C++",
                "\xa0\xa0\xa0Node Js",
                // Add more lines as needed for section 2
            ];
        } else if (section === "3") {
            texts = [
                "// Database Development \u{DB105}",
                "\xa0\xa0\xa0SQL",
                "\xa0\xa0\xa0MySQL - Workbench/Shell",
                "\xa0\xa0\xa0MongoDB",
                // Add more lines as needed for section 2
            ];
        } else if (section === "4") {
            texts = [
                "// Data/Algorithmic Development \u{DB105}",
                "\xa0\xa0\xa0Data Structure Designing",
                "\xa0\xa0\xa0Algorithmic Development",
                "\xa0\xa0\xa0Algorithmic Implementation/Analysis",
                "\xa0\xa0\xa0Dynamic Data Management",
                // Add more lines as needed for section 2
            ];
        } else if (section === "5") {
            texts = [
                "// Interpersonal/Soft Skills \u{DB105}",
                "\xa0\xa0\xa0Project Development",
                "\xa0\xa0\xa0Team Building/Strategy Planning",
                "\xa0\xa0\xa0Adaptibility to competetive situations",
                // Add more lines as needed for section 2
            ];
        }

        outputPalate.innerHTML = ""; // Clear previous content
        let lineIndex = 0;

        const typeText = () => {
            if (lineIndex < texts.length) {
                const text = texts[lineIndex];
                outputPalate.innerHTML += text + "<br>";
                lineIndex++;
                setTimeout(typeText, 1000); // Adjust the typing speed (milliseconds)
            }
        };

        typeText();
    });
});