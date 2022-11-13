# Group Routes and FlashCard Routes Test Plan

## _Purpose_

- Test all functions in groupRoutes
- Test all functions in cardRoutes

## _Prerequisites_
- Install the dependencies and devDependencies and start the server.
```sh
node app.js
```
- connected to MongoDB to view database change.
- Login as admin in Postman( _e.g. user1_)
- Alternatively, login as user in Postman( _e.g. user2_)

## _Group Routes Test in Postman_

**_Note: a variable ` URL_HUB` was set to replace  API address._**
| Request | Route | Response Expectation |
| ------ | ------ |------ |
| ``POST`` Login | {{URL_HUB}}/auth/login | log into system|
| ``POST`` Create Group | {{URL_HUB}}/groups | create group with expected parameters |
| ``GET`` Join Group | {{URL_HUB}}/groups/joins | join group with code generated in group creation  |
| ``GET`` Get Single Group | {{URL_HUB}}/groups/`groupID` | group can be retrieved by group Id|
| ``PATCH`` Update Group | {{URL_HUB}}/groups/`groupID` | only update group fields if user is admin|
| ``GET`` Get Users in Group | {{URL_HUB}}/groups/getUsers/`groupID` | get all users by group Id|
| ``DEL`` Delete Group | {{URL_HUB}}/groups/`groupID` | delete group only if user is admin|
| ``GET`` Get All Groups | {{URL_HUB}}/groups | get all active groups in database|

## _FlashCard Routes Test in Postman_

**_Note: a variable ` URL_HUB` was set to replace  API address._**
| Request | Route | Response Expectation |
| ------ | ------ |------ |
| ``POST`` Login | {{URL_HUB}}/auth/login | log into system|
| ``POST`` Create Card | {{URL_HUB}}/cards | create card with expected parameters |
| ``GET`` Get Single Card | {{URL_HUB}}/cards/`cardID` | card can be retrieved by card Id|
| ``GET`` Get All Cards | {{URL_HUB}}/cards | get all cards info within the group|
| ``PATCH`` Update Card | {{URL_HUB}}/cards/`cardID` | all users able to update card fields|
| ``DEL`` Delete Card | {{URL_HUB}}/cards/`cardID` | all users able to delete card|
