activeslideimg();

        function activeslideimg(activeSlide = 2) {
            const slides = document.querySelectorAll(".slide1");

            slides[activeSlide].classList.add("active1");

            for (const slide1 of slides) {
                slide1.addEventListener("click", () => {
                    clearActiveClasses();

                    slide1.classList.add("active1");
                });
            }


            function clearActiveClasses() {
                slides.forEach((slide1) => {
                    slide1.classList.remove("active1");
                })
            }


        }