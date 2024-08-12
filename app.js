const mongodb = require('mongodb');
const mongoClient  = mongodb.mongoClient();
const connectionUrl = 'mongodb://localhost:27017';
const dbname = "task"

mongoClient.connect(connectionUrl , (error , res)=>{
    if(error){
        console.log('Error connecting to MongoDB', error);
    }
    console.log('Connected to MongoDB successfully');
    const db = res.db(dbname);


    //insertOne 
    db.collection('users').insertOne({
        name: 'John Doe',
        age: 30,
        city: 'San Francisco',
    }, (err , data )=>{
        if(err){
            console.log('Error inserting data');
        }
        console.log('Data inserted successfully', data.insertedId);
    })


    db.collection('users').insertOne({
        name: 'jack Ticket',
        age: 28,
        city: 'New York',
    }, (err , data )=>{
        if(err){
            console.log('Error inserting data');
        }
        console.log('Data inserted successfully', data.insertedId);
    })

    //insertMany
    db.collection('users').insertMany([
        {name: 'Jane Doe', age: 27, city: 'Los Angeles'},
        {name: 'Mike Johnson', age: 32, city: 'Chicago'},
        {name: 'Sarah Smith', age: 27, city: 'San Diego'},
        {name: 'David Johnson', age: 27, city: 'Seattle'},
        {name: 'Emily Davis', age: 31, city: 'Portland'},
        {name: 'Michael Wilson', age: 33, city: 'Boston'},
        {name: 'Sophia Anderson', age: 27, city: 'Miami'},
        {name: 'Daniel Brown', age: 34, city: 'Atlanta'},
        {name: 'Olivia Thompson', age: 27, city: 'Denver'},
        {name: 'Matthew Green', age: 34, city: ' Washington'},
    ] , (error , data )=>{
        if(error){
            console.log('Error inserting data');
        }
        console.log('Data inserted successfully', data.insertedIds); 
    })

    // find all have 27y
    db.collection('users').find({age: 27}).toArray((err , data )=>{
        if(err){
            console.log('Error finding data');
        }
        console.log('Users with age 27:', data);
    })


    db.collection('users').find({age: 27}).limit(3).toArray((err , data )=>{
        if(err){
            console.log('Error finding data');
        }
        console.log('Users with age 27:', data);
    })
   
    db.collection('users').updateOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84623")},{
        $set: {name: 'John Doe'},
    }).then((data) => {console.log(data.mongoClient);})

    db.collection('users').updateOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84624")},{
        $set: {name: 'John Doe'},
    }).then((data) => {console.log(data.mongoClient);})

    db.collection('users').updateOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84625")},{
        $set: {name: 'John Doe'},
    }).then((data) => {console.log(data.mongoClient);})

    db.collection('users').updateOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84626")},{
        $set: {name: 'John Doe'},
    }).then((data) => {console.log(data.mongoClient);})
/////////////////////////////////////////////////////////////////////
    db.collection('users').deleteOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84623")},{
        $inc: {age : 1},
    }).then((data)=>{console.log(data.mongoClient)}).
    catch((err)=>{console.log(err)})

    db.collection('users').deleteOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84624")},{
        $inc: {age : 1},
    }).then((data)=>{console.log(data.mongoClient)}).
    catch((err)=>{console.log(err)})

    db.collection('users').deleteOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84625")},{
        $inc: {age : 1},
    }).then((data)=>{console.log(data.mongoClient)}).
    catch((err)=>{console.log(err)})

    db.collection('users').deleteOne({id:mongodb.ObjectId("66b9efd4c4853dde32a84626")},{
        $inc: {age : 1},
    }).then((data)=>{console.log(data.mongoClient)}).
    catch((err)=>{console.log(err)})
    ////////////////////////////////////////////////////////////////
    db.collection('users').updateMany({} , {
        $inc: {age : 10},
    }).then((data)=>{console.log(data.mongoClient)}).
    catch((err)=>{console.log(err)})

    //////////////
    db.collection('users').deleteMany({age: 41}).
    then((data)=>{console.log(data.deleteCount)}).
    catch((err)=>{console.log(err)})
})