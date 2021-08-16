//      aggregate
db.getCollection('restaurant_DB').aggregate([
    {}, // першиа агрегація
    {}, // друга агрегація
    {}, // третя агрегація
]);

//      суть - дані змінюються і передаються до наступної агрегації
//      агрегації НЕ змінюють BD
db.getCollection('restaurant_DB').aggregate([
    {
        $group : {                              // агрегація групування
            _id: "$payment",                    // '_id' - обов'язкове поле(групувати по), $ - обов'язково перед payment(групувати $поле)
            countOfTeachers: { $sum: 1 }        // кількість данних які повторюються 1- одне поле, 2 і більше - більше   
        }
    }, 
    {
        $sort : {                               // агрегація сортування
            countOfTeachers: 1                  // зростання
        }
    },
    {
        $project: {                             // агрегація видозмінення данних 
            money: "$_id",                      // додати поле money з данними поля _id
            countOfTeachers: 1,                 // відобразити поле countOfTeachers
            _id: 0,                             // приховати поле _id
            name: "Hello MONGO"                 // для прикладу, стоврить поле name з текстом Hello MONGO. Для дод. функцій
        }
    }
]);
    
    
//      $lookup - типу join але типу
db.getCollection('teacher').aggregate([
    {
        $match: {                               // агрегація попереднього сортування
            class_curator: { $exists: true }    // включити дані де присутнє лише поле class_curator 
        }
    },
    {
        $lookup: {                              // агрегація приєднання
            from: 'students',                   // що приєднуємо(BD студенітв)
            localField: 'class_curator',        // поле яке буде primery key
            foreignField: 'class',              // поле яке буде foreighn key із БД студентів
            as: 'zabriki'                       // alias назва об`єкта, що приєднався
        }
    },
    {
        $match: {
            'zabriki.name': 'Bob'               // як пошукова агрегатка
        }
    }
]);
    
    //fuhtufnrb UNWIND та решта COUNT MAX MIN SUM