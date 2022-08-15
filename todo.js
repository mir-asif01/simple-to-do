let serial = 0;
document.getElementById('button-addon2').addEventListener('click',function(){
    let inputValue = document.getElementById('input-value').value;
    // console.log(inputValue)
    serial++
    let mainContainer = document.getElementById('notesContainer');
    // console.log(mainContainer)
    let newTr = document.createElement('tr');
    newTr.setAttribute('class','delete-note');
    // console.log(newTr)
    newTr.innerHTML = `<td scope="col">${serial}</td>
    <td scope="col">${inputValue}</td>
    <td scope="col">
        <button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button>
    </td>`
    mainContainer.appendChild(newTr);
    document.getElementById('input-value').value = '';
    let deleteNotes = document.getElementsByClassName('delete-btn');
    for(deleteBtn of deleteNotes){
        deleteBtn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display = 'none'
        })
    }
    let doneNotes = document.getElementsByClassName('done-btn');
    for(doneBtn of doneNotes){
        doneBtn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.textDecorationLine = 'line-through';
        })
    }
})

document.getElementById('clearAllBtn').addEventListener('click',function(){
    const clearSection = document.getElementById('notesContainer');
    clearSection.style.display = 'none';
})
// text-decoration-line: line-through;
