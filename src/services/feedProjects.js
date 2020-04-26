//Lógica dessa área é inspirada num projeto do usuário vmnog do github
//https://github.com/vmnog

const vectorProjects = [
    {
        id: 0,
        name: 'Service Order Manager',
        description: "A desktop software coded in C# that manages the work orders in the IT Department of the Municipal Administration of Bebedouro/SP",
        year: '2019'
    },
    {
        id: 1,
        name: "Bebedouro's Public Library Manager",
        description: "I've supervised the making of a Desktop software coded in C# that manages all the work done inside my local city's libraby",
        year: '2019'
    },
    {
        id: 2,
        name: 'Portfolio',
        description: "This very page I've made using ReactJS that serves as a portfolio for my past and future works",
        year: '2020'
    },
    {
        id: 4,
        name: "Mapping of Unifafibe's faculties: QuestFinder",
        description: "Scientific Initiation focused on mapping the college I studied at made with React Native, MongoDB and NodeJS as the Back-End",
        year: '2020'
    }];

module.exports = vectorProjects.reverse();