//########################################################
//###################### ����� ###########################
db.getCollection('teacher').find({payment:2500, class_curator: 6})

//      � ����������� ������, +and
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


//      ��������� ��
//      ������ �� ��������
//      /^O/i      ( ����� i - �����, ��� ������ ������ )
db.getCollection('teacher').find({ name : /^O/i });

//      ���������� ��
db.getCollection('teacher').find({ name : /vna$/i });

//      ������
db.getCollection('teacher').find({ name : /.*iv.*/i });



//      in ��� nin (not in)

db.getCollection('teacher').find({
    class_curator : {
       $in : [7,8,9]
    }
});
//######################## /����� ########################





//########################################################
//###################### ���������� ######################
//      �� ����������
//      �� ��������� ����� -1
db.getCollection('teacher').find({}).sort({ payment : 1 })



//      �� ������� �����
db.getCollection('teacher').find({}).sort({ payment : 1, name : -1 })
//###################### /���������� #####################





//########################################################
//###################### �������� #######################
db.getCollection('teacher').find({}).limit(3).skip(6)
//###################### /�������� ######################





//########################################################
//###################### ����������� ������ ##############
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
//###################### /����������� ������ #############





//########################################################
//###################### update ##########################
//      !�����!
//	        ��� ����� ���� �� ���� � �������� ���� ���� _id, payment.
//	        ����� ���� ���� ���� ���� ���������
//	        ����� ��� ������.
//      !�����!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
db.getCollection('teacher').update (
    { _id: ObjectId("6118d90a45a69c944cc690f4") }, // find
    { payment: 2500 }, // update
    {}, // options
);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//      ���������� ����� ���������
//      ������� ���� ������ �����

db.getCollection('teacher').update (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }     
);

//      ��� ������ �����
db.getCollection('teacher').updateOne (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }     
);

//      ������� �� ������
db.getCollection('teacher').update (
    { payment: { $lte: 2500 } },
    { $set: { cars: [ 'Mazda', 'Volga' ] } }
    { multy: true} 
);

//      ��� ������ �����
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
//###################### ���� ######################

// ������� ����������� $not
db.getCollection('teacher').find({
    class_curator : {
        $not: {
            $nin : [7,8,9]
         }
       
    }
});
//###################### /���� #####################

