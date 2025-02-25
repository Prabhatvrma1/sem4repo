# MongoDB Commands Usage Guide

## **1. Connecting to MongoDB**
To start MongoDB shell, use:
```sh
mongosh
```
Example output:
```sh
Current Mongosh Log ID: 67bda6d6607ce29dfb79a1b
Connecting to: mongodb://127.0.0.1:27017/
Using MongoDB: 8.0.4
Using Mongosh: 2.3.6
```

## **2. Switching to Database**
To switch to a specific database (e.g., `g13`):
```sh
use g13
```
Output:
```sh
switched to db g13
```

## **3. Finding Users**

### **Find All Users**
```sh
db.users.find()
```
Output:
```json
[ { _id: 2, name: 'Jojo' }, { _id: 1, name: 'kojo' } ]
```

### **Find a Specific User by Name**
```sh
db.users.find({ name: "Jojo" })
```
Output:
```json
[ { _id: 2, name: 'Jojo' } ]
```

### **Find a Specific User by _id**
```sh
db.users.find({ _id: 1 })
```
Output:
```json
[ { _id: 1, name: 'kojo' } ]
```

### **Find Users with _id Greater than 1**
```sh
db.users.find({ _id: { $gt: 1 } })
```
Output:
```json
[ { _id: 2, name: 'Jojo' } ]
```

## **4. Finding a Single User**
```sh
db.users.findOne({ name: "Jojo" })
```
Output:
```json
{ _id: 2, name: 'Jojo' }
```

## **5. Deleting Users**

### **Delete a User by Name (Case Sensitive!)**
```sh
db.users.deleteOne({ name: "Kojo" })
```
Output:
```json
{ acknowledged: true, deletedCount: 0 }
```
(*Note: No user named "Kojo" found, because the database has "kojo" in lowercase.*)

### **Delete a User by _id**
```sh
db.users.deleteOne({ _id: 1 })
```
Output:
```json
{ acknowledged: true, deletedCount: 1 }
```

### **Check Remaining Users**
```sh
db.users.find()
```
Output:
```json
[ { _id: 2, name: 'Jojo' } ]
```

## **6. Additional Notes**
- MongoDB queries are **case-sensitive**, so "kojo" and "Kojo" are treated differently.
- `_id` values are unique and indexed, making lookups faster.
- Use `.pretty()` for better formatting in `find()` results:
  ```sh
  db.users.find().pretty()
  ```

### **End of README**





Microsoft Windows [Version 10.0.26100.3194]
(c) Microsoft Corporation. All rights reserved.

C:\Users\prabh>mongosh

Current Mongosh Log ID: 67bda6d6607ce29dfb79a1b5

Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.6

Using MongoDB:          8.0.4

Using Mongosh:          2.3.6

mongosh 2.3.9 is available for download: https://www.mongodb.com/try/download/shell


For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   
   2025-02-25T16:05:46.743+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   
------

test> use g13

switched to db g13

g13> db.users.find()

[ { _id: 2, name: 'Jojo' }, { _id: 1, name: 'kojo' } ]

g13> db.users.find({ name: "jojo" })

g13> db.users.find({ name: "Jojo" })

[ { _id: 2, name: 'Jojo' } ]

g13> db.users.find({ id: "1" })


g13> db.users.find({ _id: "1" })


g13> db.users.find({ _id: 1 })

[ { _id: 1, name: 'kojo' } ]

g13> dm.users.find({_id:{$gt:1}})

ReferenceError: dm is not defined

g13> db.users.find({ _id: { $gt: 1 } })

[ { _id: 2, name: 'Jojo' } ]

g13> db.users.find({ _id: { $gt: 0 } })

[ { _id: 1, name: 'kojo' }, { _id: 2, name: 'Jojo' } ]

g13> db.users.findOne({ name: "jojo" })

null

g13> db.users.findOne({ name: "Jojo" })

{ _id: 2, name: 'Jojo' }

g13> db.users.deleteOne({ name: "Kojo" })

{ acknowledged: true, deletedCount: 0 }

g13> db.users.find()

[ { _id: 2, name: 'Jojo' }, { _id: 1, name: 'kojo' } ]

g13> db.users.deleteOne({ _id: 1 })

{ acknowledged: true, deletedCount: 1 }

g13> db.users.find()

[ { _id: 2, name: 'Jojo' } ]

g13>
