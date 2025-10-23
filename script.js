
(() => {
  const root = document.getElementById('testimonials');
  if (!root) return;

  const slides = Array.from(root.querySelectorAll('.t-slide'));
  const prevBtn = root.querySelector('.t-btn.prev');
  const nextBtn = root.querySelector('.t-btn.next');
  let i = 0;

  function show(idx) {
    slides[i].classList.remove('is-active');
    i = (idx + slides.length) % slides.length;
    slides[i].classList.add('is-active');
  }

  prevBtn.addEventListener('click', () => show(i - 1));
  nextBtn.addEventListener('click', () => show(i + 1));

  // keyboard support (left/right) when focused inside the section
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(i + 1); }
  });

  // make section focusable for keyboard nav
  root.tabIndex = 0;
})();

 document.addEventListener('DOMContentLoaded', () => {
            const mockups = document.querySelectorAll('.work-mockup');
            
            mockups.forEach((mockup) => {
                // Get the initial z-index set in CSS for reliable reset
                const initialZIndex = mockup.style.zIndex;

                mockup.addEventListener('mouseenter', () => {
                    // Set z-index extremely high immediately on hover
                    mockup.style.zIndex = 100; 
                });

                mockup.addEventListener('mouseleave', () => {
                    // Reset z-index after the smooth CSS transition completes
                    setTimeout(() => {
                        if (!mockup.matches(':hover')) {
                            mockup.style.zIndex = initialZIndex; 
                        }
                    }, 400); 
                });
            });
        });


        // Hamburger Drawer (Mobile Menu) Open/Close Logic
const drawer = document.querySelector(".drawer");
const scrim = document.querySelector(".scrim");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".drawer-close");

function openDrawer() {
  console.log("Opening drawer"); // Debug log
  drawer.classList.add("open"); // Add 'open' class to display the drawer
  drawer.setAttribute("aria-hidden", "false"); // Set ARIA to indicate visibility
  scrim.style.display = "block"; // Show scrim overlay
  document.body.classList.add("no-scroll"); // Disable scrolling on body
}

function closeDrawer() {
  console.log("Closing drawer"); // Debug log
  drawer.classList.remove("open"); // Remove 'open' class to hide the drawer
  drawer.setAttribute("aria-hidden", "true"); // Set ARIA to hide the drawer
  scrim.style.display = "none"; // Hide scrim overlay
  document.body.classList.remove("no-scroll"); // Enable scrolling on body
}

// Event listeners for hamburger menu open/close
openBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

// Close Drawer When Any Drawer Link is Clicked
document.querySelectorAll(".drawer-link").forEach((l) => {
  l.addEventListener("click", () => {
    const cb = document.getElementById("nav-toggle");
    if (cb && cb.checked) cb.checked = false; // Close checkbox-based menu if clicked
  });
});
