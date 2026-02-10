# 📚 Campus Resource Hub API 
A Node.js, Express, and MongoDB backend API for a Campus Resource Hub where students can discover, share, and review campus resources like study spots, equipment, services, and events

## Routes 

### 👤 User Routes 
| Method 	| Endpoint       	| Description             	| CRUD Operation 	|
|--------	|----------------	|-------------------------	|----------------	|
| POST   	| /api/users     	| Create new user account 	| Create         	|
| GET    	| /api/users     	| Get all users           	| Read           	|
| GET    	| /api/users/:id 	| Get user by ID          	| Read           	|
| PUT    	| /api/users/:id 	| Update user profile     	| Update         	|
| DELETE 	| /api/users/:id 	| Delete user account     	| Delete         	|



### 🏫 Resources Routes 
| Method 	| Endpoint       	| Description             	| CRUD Operation 	|
|--------	|----------------	|-------------------------	|----------------	|
| POST   	| /api/resources    	| Creates a new resource	| Create         	|
| GET    	| /api/resources     	| Get all resources        	| Read           	|
| GET    	| /api/resources/:id 	| Get resource by ID          	| Read           	|
| PUT    	| /api/resources/:id 	| Update resource information     	| Update         	|
| DELETE 	| /api/resources/:id 	| Delete resource    	| Delete         	|

### ⭐️ Reviews Routes 
| Method 	| Endpoint       	| Description             	| CRUD Operation 	|
|--------	|----------------	|-------------------------	|----------------	|
| POST   	| /api/reviews    	| Creates a new review	| Create         	|
| GET    	| /api/reviews     	| Get all reviews        	| Read           	|
| GET    	| /api/reviews/:id 	| Get review by ID          	| Read           	|
| PUT    	| /api/reviews/:id 	| Update review information     	| Update         	|
| DELETE 	| /api/reviews/:id 	| Delete review    	| Delete         	|