let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  // console.log('object');
  count += 1;
  const inputElemet = document.getElementById("input-value");
  const inputValue = inputElemet.value;
  // console.log(inputValue);

  const parent = document.getElementById("content-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
     <td>${count}</td>
     <td>${inputValue}</td>
     <td>
     <button class='btn btn-danger delete-btn'>Delete</button>
     <button id='btn-done' class='btn btn-primary '>Done</button>
     </td>
    `;
  parent.appendChild(tr);

   inputElemet.value ='';

   const elements = document.querySelectorAll('.delete-btn');
   for(const element of elements ){
      element.addEventListener('click', function(event){
        // console.log('object');
        // console.log(event);
       
        event.target.parentNode.parentNode.style.display = 'none';
      })
}


});

document.getElementById('clear-btn').addEventListener('click', function(event){
   event.target.parentNode.style.display ='none';
})



// console.log(elements);

