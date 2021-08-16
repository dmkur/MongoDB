//########################################################
//###################### пошук ###########################
db.getCollection('teacher').find({payment:2500, class_curator: 6})


//      пошук по декільком полям, +and
db.getCollection('teacher').find(
            {payment:2500, class_curator: 6},
            {name : 1, payment : true, _id : 0}
);



//      or
db.getCollection('teacher').find({
    $or: [
            {payment:2500},
            {payment:2200},
            {clus_curator: 6}
          ]
});



//      and
db.getCollection('teacher').find({
	$and: [
            {payment:2500},
            {class_curator: 6}
          ]
});





//      починається із
//     	регістр має значення
//      /^O/i      (буква i - опція, яка ігнорує регістр)
db.getCollection('teacher').find({ name : /^O/i });



//      закінчується на
db.getCollection('teacher').find({ name : /vna$/i });



//      містить
db.getCollection('teacher').find({ name : /.*iv.*/i });



//      in або nin (not in)
db.getCollection('teacher').find({
    class_curator : {
       $in : [7,8,9]
    }
});
//######################## /пошук ########################











//##################################################
//###################### sort ######################

//      від найменшого
//      від найбіьного через -1

db.getCollection('teacher').find({}).sort({ payment : 1 })



//      по дкількох полях
db.getCollection('teacher').find({}).sort({ payment : 1, name : -1 })
//###################### /sort #####################







//########################################################
//###################### пагінація #######################
db.getCollection('teacher').find({}).limit(3).skip(6)
//###################### /пагінація ######################






//########################################################
//###################### математичні операції ############

db.getCollection('teacher').find({
	payment : {
                    $gte: 2500  // >= 
                    $lte: 2500  // <= 
                    $lt: 2500   // <
                    $gte: 2500  // > 
                    $ne: 2500   // !=
                    $eq : 2500  // ===
                }
});
//###################### /математичні операції #############







//########################################################
//###################### update ##########################

//      !Увага!

//	        Цей вираз зітре усі дані і залишить лише поле _id, payment.
//	        Решта полів якщо вони були пропадуть
//	        Воно заміняє дані.

//      !Увага!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

db.getCollection('teacher').update (
    { _id: ObjectId("6118d90a45a69c944cc690f4") }, 	// find
    { payment: 2500 }, 					// update
    {}, 						// options

);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//      правильний вираз оновлення
//      оновить лише перший запит
db.getCollection('teacher').update (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }
);



//      або новіший запис
db.getCollection('teacher').updateOne (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } } 
);



//      оновить усі записи
db.getCollection('teacher').update (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }
    { multy: true} 

);



//      або новіший запис
db.getCollection('teacher').updateMany (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }
);
//###################### /update #########################








//########################################################
//###################### insert ##########################
db.getCollection('teacher').insert({

        model : 'Yamaha',

        year : 2008,

        price : '3000'

});
//###################### /insert #########################







//###################################################
//###################### інше #######################
// функція заперечення $not
db.getCollection('teacher').find({

    class_curator : {

        $not: {

            $nin : [7,8,9]

         }

       

    }

});
//###################### /інше #####################
