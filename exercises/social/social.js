var primaryFamilyMember = {
    name: "Josh",
    age: 24,
    isMale: true,
    extendedFamilyName: [
        {
            name: "Cope",
            livesIn: "Murrieta",
            numberOfKids: 6,
            type: "family",
            fathersName: "Mark",
            mothersName: "Laura",
            isPets: true
        }
    ],
    favoriteHobbies: [],
    livesIn: "Provo",
    partnersName: [
        {
            name: "Rebekah",
            age: 24,
            isMale: true,
            extendedFamilyName: "Cope",
            favoriteHobbies: [],
            livesIn: "Provo",
        }
    ],
    immediateFamilyMemberNames: [
        {
            name: "Austin",
            Age: 28,
            isMale: true,
            extendedFamilyName: "Smith",
            favoriateHobbies: [],
            livesIn: "Las Vegas",
            partnersName: [
                {
                    name: "Chenae",
                    relationship: "wife",
                    age: 25,
                    isMale: false,
                    extendedFamilyName: "Waite",
                    livesIn: "Las Vegas",
                    favoriateHobbies: []
                }
            ]
        }
    ]

}

primaryFamilyMember.isHippie = true
primaryFamilyMember.extendedFamilyName[0].hasJob = true
primaryFamilyMember.favoriteHobbies = ["volleyball", "netflix"]


document.getElementById("write").innerHTML = JSON.stringify(primaryFamilyMember.extendedFamilyName[0])


