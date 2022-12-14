export class Subjects  {
    categoryName!: string
    categoryUrl!: string 
    subjectParams!: string;
    qcmParams!: string;
    
    subjects = {
       "three-dimensional": {
            id: 1,
            urlSubjectTitle: "three-dimensional",
            title: "3D",
            categories: [     
                { url: "modelization", name: "Modélisation" },
                { url: "animation", name: "Animation" }, 
                { url: "rendering", name: "Rendu" }, 
                { url: "printers", name: "Imprimantes" }, 
                { url: "architecture", name: "Architecture" }, 
                { url: "product-design", name: "Design de produit" }, 
                { url: "environment", name: "Environnement" }, 
            ],
        },
      
        "programming": {
            id: 2,
            urlSubjectTitle: "programming",
            title: "Programmation",
            categories: [
                "Angular",
                "BaseSQL",
                "Javascript"
            ],
        },
        
       "web-three": {
            id: 3,
            urlSubjectTitle: "web-three",
            title: "Web3",
            categories: [],
        },

        "english": {
            id: 4,
            urlSubjectTitle: "english",
            title: "Anglais",
            categories: [],
        },
      
        "ia": {
            id: 5,
            urlSubjectTitle: "ia",
            title: "IA",
            categories: [],
        },
        
        "stock-exchange": {
            id: 6,
            urlSubjectTitle: "stock-exchange",
            title: "Bourse",
            categories: [],
        },
    }
}
