// შექმენითობიექტიგასაღებებით1-დან7-მდედაკვირისდღეებისდასახელებებისმნიშვნელობებით. მიღებულიობიექტიკონსოლზეგამოიტანეთ

// const obj = {
//     1 : 'ორშაბათი',
//     2 : 'სამშაბათი',
//     3 : 'ოთხშაბათი',
//     4 : 'ხუთშაბათი',
//     5 : 'პარასკევი',
//     6 : 'შაბათი',
//     7 : 'კვირა'
// }

// console.log(obj)


// წარმოდგენილ კოდში აღმოაჩინეთ შეცდომა.

// let obj =  {
//     name : 10, 
//     key7 : 20,
//     ab : 30, 
//     city10 : 40,
// };
// console.log(obj.name);
// console.log(obj.key7);
// console.log(obj.ab);
// console.log(obj.city10);
// console.log(obj.city10);


// მოცემულია ორი ობიექტი person და dob. ოპერატორი... 
// spread–ის საშუალებით გააერთიანეთ ეს ორიობიექტი ერთ ობიექტში personInfo–ში და გამოიტანეთ კონსოლზე.


// const person = { 
//         name:"ვაჟაცხადაძე", 
//         gender:"მამრობითი"
//     };
    
//     const dob = { 
//         data_of_birth:2011
//     };

// const personInfo = {
//     ...person,...dob
// }

// console.log(personInfo)



// მოცემულია ობიექტი person. დესტრუქტურიზაციით (destructuring of objects) გამოაცხდეთ ცვლადები name და gender და კონსოლზე გამოიტანეთ მათი მნიშვნელობები.


// const person = {
//      name: "ვაჟა ცხადაძე", 
//      gender: "მამრობითი" 
// };

// console.log(person.name + '\n' + person.gender)


// დაწერეთ ისრული ფუნქცია canVote, რომელსაც გადაეცემა ობიექტი person. 
// ფუნქციამ უნდა დააბრუნოს true თუ პიროვნების წლოვანება 18-ის ტოლია ან მეტია. წინააღმდეგ შემთხვევაში 
// უნდა დააბრუნოს false. 


// const person = { 
//     name: "ვაჟა ცხადაძე", 
//     gender: "მამრობითი", 
//     data_of_birth: 2011
// };

// age = 2024 - person.data_of_birth


// function canVote (age) {
//     if(age >= 18){
//        return true
//     }
//     else{
//        return false
//     }
// }



// console.log(canVote(age))
