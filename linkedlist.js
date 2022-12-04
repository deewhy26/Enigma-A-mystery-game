var slides = document.querySelectorAll('.slide');
            //var btns = document.querySelectorAll('.btn'); 
            var nextBtn = document.querySelector(".next-btn"); 
            var prevBtn = document.querySelector(".prev-btn"); 
            // const answers = ["spain", "pain", "apple"]
            let currentSlide = 1; 
            //using doubly linked list for next prev navigation
            class Node{ 
                constructor(data/*,datab*/)
                { 
                    this.data = data; 
                   
                    //this.datab = datab
                    this.next = null;
                    this.prev = null; 
                }
            }
            var j = 0; 
            let head = new Node(slides[j] /*, btns[j]*/);
            j += 1;
            var p = head; 
            while (j < slides.length){ 
                
                p.next = new Node(slides[j]/*, btns[j]*/);
                
                p.next.prev = p; 
                p = p.next
                j +=1; 
            }
            p = head; 
            nextBtn.addEventListener("click", () => {
            if (p.next == null) {
                    nextBtn.disabled = true;
                    nextBtn.classList.add("inactive")
            }
                else {
                    p = p.next;
                    nextBtn.classList.remove("inactive")

                }
            
            slides.forEach((slide) => {
                    slide.classList.remove('active')
                })
                /*btns.forEach((btn) => {
                    btn.classList.remove('active')
                })*/
            p.data.classList.add("active");
            // p.datab.classList.add("active");
            let dec = document.querySelectorAll(".decode")[0];
            if (p.data.classList.contains("disable_dec")){
                dec.disabled = true;
            }
            else{ 
                dec.disabled = false;
            }
            
            }
            )
            prevBtn.addEventListener("click", () => {
                if (p.prev == null) {
                    prevBtn.disabled = true;
                    prevBtn.classList.add("inactive")
                }
                else {
                    p = p.prev;
                    prevBtn.classList.remove("inactive")
                }

                slides.forEach((slide) => {
                    slide.classList.remove('active')
                })
                /*btns.forEach((btn) => {
                    btn.classList.remove('active')
                })*/

                p.data.classList.add("active");
                // p.datab.classList.add("active");
                //disabling decode button if the slide is found to contain .disable_dec
                let dec = document.querySelectorAll(".decode")[0];
            if (p.data.classList.contains("disable_dec")){
                dec.disabled = true;
            }
            else{ 
                dec.disabled = false;
            }
                }
                )


            /*var manualNav = function(manual){ 
                slides.forEach((slide) => {
                    slide.classList.remove('active')
                })
                btns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                slides[manual].classList.add('active');
                btns[manual].classList.add('active');
            }

            btns.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    manualNav(i); 
                    currentSlide = i; 
                })
            })
            */

