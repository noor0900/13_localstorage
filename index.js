const inp = document.querySelector('input')
const submitButton = document.querySelector('.sumbit')
const tbody = document.querySelector('tbody');
const clear = document.querySelector('.clr');
const update = document.querySelector('.update');

const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

submitButton.addEventListener('click', () => {
    const taskData = JSON.parse(localStorage.getItem("task")) || [];
    const taskValue = inp.value;
    const fulldate = `${date}:${month}:${year}`
    const task = {
        value: taskValue,
        date: fulldate
    };
    taskData.push(task);0
    localStorage.setItem("task", JSON.stringify(taskData));
    inp.value = "";
    handleDisplay();
});
function handleDisplay() {
    const taskData = JSON.parse(localStorage.getItem("task")) || [];
    tbody.innerHTML = "";
    taskData.map((ele, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${ele.value}</td>
                <td>${ele.date}</td>
                <td>
                    <button onclick="handleEdit(${index})">Edit</button>
                    <button onclick="handleDelete(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
};
handleDisplay();
function handleDelete(index) {
    const taskData = JSON.parse(localStorage.getItem("task")) || [];
    taskData.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(taskData));

    handleDisplay();
}
let currentindex
function handleEdit(index) {
    const taskdata = JSON.parse(localStorage.getItem("task")) || [];
    inp.value = taskdata[index].value;
    currentindex = index;
    update.style.display="inline-block"

}
function handleUpdate() {
    const taskData = JSON.parse(localStorage.getItem("task")) || [];
    taskData[currentindex].value = inp.value;
    localStorage.setItem("task", JSON.stringify(taskData));
    inp.value = "";
    handleDisplay();
    update.style.display="none"
}
update.addEventListener('click', handleUpdate)

    clear.addEventListener("click", () => {
        localStorage.clear();
        handleDisplay()
        
  });

    






