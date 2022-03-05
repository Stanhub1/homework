// 1.
// const name = 'Jan'
    // const age = 22
        // const isOpen = true 
            // const stringBoolean = 'true'
                // const stringNumber = '100'

// console.log(name)
// console.log(age)
// console.log(isOpen)
// console.log(stringBoolean)
// console.log(stringNumber)



// 2.

// a)

// const a = 10
// const b = 4
// console.log(a/b)

// b)

    // const name = 'Tomasz'
    // const age = 33
    // console.log(name+' '+'ma'+' '+ age +' '+'lata')
    // console.log(`${name} ma ${age} lata.`)

// c)

        // const firstName = 'jan'
        // const lastName = 'kowalski'
        // console.log(firstName+ ' ' + lastName)
        // console.log(`${firstName} ${lastName}`)



// 3.
// const a = 2+2 
// console.log(`wynik, ${a}`)



// 4.

// a)

// const arrayOfNumbers = [
//     1,
//     2,
//     3,
// ]
// console.log(arrayOfNumbers)

// b)
    // const arrayOfCars = [
    //     'BMW',
    //     'HONDA',
    //     'OPEL',
    // ]
    // console.log(arrayOfCars)

// c)
        // const arrayOfCondition = [
        //     true,
        //     false,
        //     true,
        // ]
        // console.log(arrayOfCondition)

// d)
            // const array = []
            // console.log(array)

// e)
                // const arrayOfCrap = [
                // 'telefon',
                // 23.5,
                // false,
                // 1,
                // 'lampka'
                // ]
                // console.log(arrayOfCrap)

// f)
                    // console.log(arrayOfCrap[2])

// g)
                        // const MyArray = [
                        //     'kurczak',
                        //     'ryż',
                        //     'kreatyna',
                        // ]
                        // console.log(MyArray.length)

// h)                        
        // const EmptyArray =[]
        // EmptyArray.push('laptop')

        // console.log(EmptyArray)



// i)
                // const EmptyArray =[
                //    peson1 = {
                //         imię: 'Adam',
                //         nazwisko: 'Nowak',
                //         wiek: '25',
                //     },
                //    person2 = { 
                //         imię: 'Marta',
                //         nazwisko: 'Ćwiek',
                //         wiek: '20',
                //     },
                //     person3 = { 
                //         imię: 'Marcin',
                //         nazwisko: 'Kowalski',
                //         wiek: '30',
                //     }
                // ]
                // console.log(person2.imię)

// j)          

                        // const a = 2
                        // console.log([a])

                        // const a = 2
                        // const arr = [a]
                        // console.log(arr)

                     


// 5.

// const object = {}
// console.log(object)


    // const person = {
    //     name:'Iza'
    // }
    // console.log(person)


        // const personDetails = {
        //     name:'Iza',
        //     lastName:'Nowak',
        //     age:25,
        //     drivingLicence: true,
        // }


            // console.log(personDetails.age)


                // console.log(personDetails)


                    // const car ={
                    //     marka:'BMW',
                    //     kolor:'Niebieski',
                    //     rokProdukcji:2000,
                    //     SprzedazKuono: [2000,2010,2015]

                    // }
                    // console.log(car)



6. 
// a)

// const a = 1
// const b = a 
// console.log(a+3)
// console.log(b+5)
// Przypisanie zmiennej a do b nie tworzy zależności między nimi. Są to dwie niezależne wartości.

// const a = [1]
// const b = a
// a[1] = 5
// console.log(a)
// console.log(b)
// Po zmianie jednej zmiennej zachodzą zmiany w drugiej. Są ze sobą powiązane.

        // b)

        // const person = {
        //     imię: 'Adam',
        //     nazwisko: 'Nowak',
        //     wiek: 23,
        //     posiadaniePrawaJazdy:true,
        //     osobaPijana:false,
        // }
        // if (person.wiek < 18) {
        //     console.log('Nie może prowadzić')
        // } else if (person.posiadaniePrawaJazdy === false) {
        //     console.log('Nie może prowadzić')
        // }else if (person.osobaPijana === true) {
        //     console.log('Nie może prowadzić')
        // }else {
        //     console.log('Może prowadzić')
        // }
            // c)
                // const car = {
                //     name: 'mustang',
                //     productionYear: 2020,
                //     color: 'red'
                //   }

                //   const { name, productionYear, color} = car

                // const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
                // console.log(result)

// d)

// const isAdult = true
// if (isAdult === true) {
//   return 'Możesz kupić alkohol'
// } else  {
//   return 'Nie możesz kupić alkoholu, jesteś nieletni!'
// }

// const isAdult = true
// console.log(`${ (isAdult ? "Możesz kupić alkohol" : "Nie możesz kupić alkoholu, jesteś nieletni!")}`)

