# Endpoints for Frontend Use

## _Authorazation_

| Request | Function | Route 
| ------ | ------ |------ |
| ``POST`` | Login | https://hub-project.onrender.com/api/v1/auth/login | 

## _Users_

| Request | Function | Route 
| ------ | ------ |------ |
| ``GET`` | Get All Users | https://hub-project.onrender.com/api/v1/users | 
| ``GET`` | Get Current User | https://hub-project.onrender.com/api/v1/users/showMe | 
| ``GET`` | Get Single User | https://hub-project.onrender.com/api/v1/users/"userID" | 
| ``PATCH`` | Update User | https://hub-project.onrender.com/api/v1/users/"userID" | 

## _Flashcard_

| Request | Function | Route 
| ------ | ------ |------ |
| ``GET`` | Get All Cards | https://hub-project.onrender.com/api/v1/cards | 
| ``POST`` | Create Card | https://hub-project.onrender.com/api/v1/cards | 
| ``GET`` | Get Single Card | https://hub-project.onrender.com/api/v1/cards/"cardID" | 
| ``DEL`` | Delete Single Card | https://hub-project.onrender.com/api/v1/cards/"cardID" | 
| ``PATCH`` | Update Card | https://hub-project.onrender.com/api/v1/cards/"cardID" | 

## _Groups_

| Request | Function | Route 
| ------ | ------ |------ |
| ``POST`` | Create Group | https://hub-project.onrender.com/api/v1/groups |
| ``GET`` | Get Single Group | https://hub-project.onrender.com/api/v1/groups/"groupID" | 
| ``PATCH`` | Update Group | https://hub-project.onrender.com/api/v1/groups/"groupID" | 
| ``GET`` | Get All Users in Group | https://hub-project.onrender.com/api/v1/groups/"groupID" | 
| ``DEL`` | Delete Single Group | https://hub-project.onrender.com/api/v1/groups/"groupID" |
| ``GET`` | Get All Groups | https://hub-project.onrender.com/api/v1/groups |
| ``GET`` | Join Group | https://hub-project.onrender.com/api/v1/groups/joins | 
