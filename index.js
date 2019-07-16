//get live projects
fetch("data/liveprojects.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        
        const liveprojects = data.map((project)=>{
            //destructure project array
            const { name, description, image, link } = project;

            return `<a href="${link}">
                        <div class="projects">
                            <img class="pimage" src="${image}" alt="${image}"/>
                            <div class="projectInfo">
                                <h3>${name}</h3>
                                <p class="small" >${description}</p>
                            </div>
                        </div>
                    </a>`
        }).join('');

        document.querySelector("#liveprojects").innerHTML = liveprojects;
      
    });


    //get repos
    fetch("https://api.github.com/users/Godwin9911/repos?per_page=6")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
             const repos = data.map((repo) =>{
                 return `
                            <div class="repos">
                                <div>
                                    <h3><a href="${repo.html_url}"> ${repo.html_url}</a><h3>
                                </div>
                                <div>
                                    <p class="small">${repo.description}</p>
                                </div>
                                <div>
                                    <i><img src="images/icons/star.svg" class="icons"/>${repo.stargazers_count}</i>
                                    <i><img src="images/icons/fork.svg" class="icons"/>${repo.forks}</i>
                                </div>
                            </div>
                 `

             }).join('');

             document.querySelector("#repos").innerHTML = repos;
        })
        .catch(err => console.log(err));