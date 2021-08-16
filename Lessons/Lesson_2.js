//      aggregate
db.getCollection('restaurant_DB').aggregate([
    {}, // ������ ���������
    {}, // ����� ���������
    {}, // ����� ���������
]);

//      ���� - ��� ��������� � ����������� �� �������� ���������
//      ��������� �� ������� BD
db.getCollection('restaurant_DB').aggregate([
    {
        $group : {                              // ��������� ����������
            _id: "$payment",                    // '_id' - ����'������ ����(��������� ��), $ - ����'������ ����� payment(��������� $����)
            countOfTeachers: { $sum: 1 }        // ������� ������ �� ������������ 1- ���� ����, 2 � ����� - �����   
        }
    }, 
    {
        $sort : {                               // ��������� ����������
            countOfTeachers: 1                  // ���������
        }
    },
    {
        $project: {                             // ��������� ����������� ������ 
            money: "$_id",                      // ������ ���� money � ������� ���� _id
            countOfTeachers: 1,                 // ���������� ���� countOfTeachers
            _id: 0,                             // ��������� ���� _id
            name: "Hello MONGO"                 // ��� ��������, �������� ���� name � ������� Hello MONGO. ��� ���. �������
        }
    }
]);
    
    
//      $lookup - ���� join ��� ����
db.getCollection('teacher').aggregate([
    {
        $match: {                               // ��������� ������������ ����������
            class_curator: { $exists: true }    // �������� ��� �� ������� ���� ���� class_curator 
        }
    },
    {
        $lookup: {                              // ��������� ���������
            from: 'students',                   // �� ��������(BD ��������)
            localField: 'class_curator',        // ���� ��� ���� primery key
            foreignField: 'class',              // ���� ��� ���� foreighn key �� �� ��������
            as: 'zabriki'                       // alias ����� ��`����, �� ���������
        }
    },
    {
        $match: {
            'zabriki.name': 'Bob'               // �� �������� ���������
        }
    }
]);
    
    //fuhtufnrb UNWIND �� ����� COUNT MAX MIN SUM