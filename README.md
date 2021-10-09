# graphQL_React checkout 'MASTER' branch
Graph QL with react.js

Perform "npm run dev"


![image](https://user-images.githubusercontent.com/32561508/136667771-63055734-0b7b-4943-b9d8-6dcfbe963a35.png)

query SongQuery($id:ID!) {
    song(id:$id) {
    	id
      title
      lyrics {
        id
        content
      }
  }
}


mutation AddLyricToSong($content:String,$songId:ID) {
  addLyricToSong(content:$content,songId:$songId) {
    id
    lyrics {
      content
    }
  }
}

{
  songs {
    id
  }
}


mutation AddSong($title:String) {
  addSong(title: $title) {
    id
    title
  }
}


{
  songs{
    id
    title
    lyrics {
      content
    }
  }
}






mutation {
  addLyricToSong(songId:"615a5835b9cda0075189257c",content:"Oh my oh my god"){
    id
  }
}

mutation {
  editUser(id:"40",firstName:"Raghu",age:14) {
     id
    	age
    firstName
  }
}


mutation {
  deleteUser(id:"23") {
    firstName
  }
}


mutation {
  addUser(firstName:"Stephen",age:26){
    id
    firstName
    age
  }
}




{
  user(id:"23") {
    id
    firstName
    age
  }
  
}

 {
  apple: company(id:"1") {
    # id
    # name
    # description
    ...companyDetails
  }
   google: company(id:"2") {
    # id
    # name
    # description
    
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}


{
  company(id:"2") {
    name,
    description,
    id
    users {
      firstName,
      age
      company {
        name
        users {
          age 
          company {
            name
          }
        }
      }
    }
  }
}


{
  user(id:"40") {
    firstName
    company {
      id
      name
      description
    }
  }
}




