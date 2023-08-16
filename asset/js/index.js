const portofolioData = [
    {title: "Proyek 1",  description: "Deskripsi proyek1."},
    {title: "Proyek 2",  description: "Deskripsi proyek2."},
    {title: "Proyek 3",  description: "Deskripsi proyek3."}
];

const portofolioContainer = document.getElementById("portofolioContainer");


portofolioData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";
    projectItem.innerHTML = `
    <h2> ${project.title}</h2>
    <p> ${project.description}</p>
    `;
   portofolioContainer.appendChild(projectItem);
});

//section form serch
const form = document.querySelector('form');
const item =  document.querySelectorAll('.item');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const searchTerm = form.search.value.toLowerCase();

item.forEach(item =>{
    const projectTitle = item.querySelector ('h2').textContent.toLowerCase();
    const projecDescription = item.querySelector('p').textContent.toLowerCase();

    if(projectTitle.includes(searchTerm)|| projecDescription.includes(searchTerm)){
        item.style.display = 'block';
    } else{
        item.style.display= 'none';
    }
});
 });

 