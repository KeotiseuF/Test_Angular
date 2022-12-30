export class Subjects  {
    num! : number 
    categoryName!: string
    categoryUrl!: string 

    selectId (e:number) 
    {
        this.num = e    
    }

    subjects = [
        {
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
      
        {
            id: 2,
            urlSubjectTitle: "programming",
            title: "Programmation",
            categories: [
                "Angular",
                "BaseSQL",
                "Javascript"
            ],
        },
        
        {
            id: 3,
            urlSubjectTitle: "web-three",
            title: "Web3",
            categories: [],
        },

        {
            id: 4,
            urlSubjectTitle: "english",
            title: "Anglais",
            categories: [],
        },
      
        {
            id: 5,
            urlSubjectTitle: "ia",
            title: "IA",
            categories: [],
        },
        
        {
            id: 6,
            urlSubjectTitle: "stock-exchange",
            title: "Bourse",
            categories: [],
        },
    ]
}
