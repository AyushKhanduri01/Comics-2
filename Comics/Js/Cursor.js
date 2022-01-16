AFRAME.registerComponent("cursor-listener", {
    


    schema: {
        selectedItemId: {default: "", type: "string"},
    },

    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function(){
        console.log("started")
        const id = this.el.getAttribute("id");
            
        const posterId = [
            "batman",
            "horror",
            "superman",
            "thor"
        ];

        // console.log("ID:", id)
        console.log(posterId.includes(id))
        if(posterId.includes(id)){
            // console.log("Here")
            const PosterContainer = document.querySelector("#poster-container");
            PosterContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {
              color: "#D76B30",
              opacity:1
            })
            console.log("Color Change Done!")
        }
    },

    handleMouseEnterEvents: function () {
    //Mouse Enter Events
        this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
          console.log("Enter Event Caught!")
        });
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave",()=>{
            console.log("Leave Event Caught!")
            console.log("Data:", this.data)
            const { selectedItemId } = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                    if (id == selectedItemId) {
                        el.setAttribute("material", {
                            color: "#0077CC",
                            opacity: 1,
                        });
                    }
            }
        })
    }
    // init: function(){
    //     console.log("SelectItemID:", this.selectedItemId)
    // }
    
})