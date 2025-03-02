function btnClicked(btnName, titleName, msgCont, spanName, bodyName){
    document.getElementById(btnName)
        .addEventListener("click",
            function(event){
                event.preventDefault();
               
                alert("Board Updated Successfully");
                const title = document.getElementById(titleName).innerText;
                const now = new Date();
                const dateTime = now.toLocaleString();
                const messageContainer = document.getElementById(msgCont);
                const div = document.createElement("div");
                div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
                div.innerHTML = `
                    <p>
                        You have completed the task ${title} at ${dateTime}.
                    </p>
                `;
                messageContainer.appendChild(div);
                //span-number
                const spanNumber = parseInt(document.getElementById(spanName).innerText);
                const newSpanNumber = spanNumber + 1;
                document.getElementById(spanName).innerText = newSpanNumber;
                //body-number
                const bodyNumber = parseInt(document.getElementById(bodyName).innerText);
                const newBodyNumber = bodyNumber - 1;
                document.getElementById(bodyName).innerText = newBodyNumber;
                document.getElementById(btnName).disabled = true;
                //total alert
                let count = document.getElementById(bodyName).innerText;
                let counted = parseInt(count);
                if(counted === 0){
                    alert('congratulations! You have completed all the current task')
                };
            }
        );
    };