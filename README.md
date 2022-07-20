=====================================================ENDPOINTS=======================================================
------------------------------------------------------Product--------------------------------------------------------
*img - не обязательное поле
*id - генерирует backend

IProduct {
  id?: string;
  categoryId: string;
  img?: string;
  name: string;
  description: string;
  pieces: number;
  price: number;
}

api/products GET
api/products POST
api/products/id GET
api/products/id PUT
api/products/id PATCH 
api/products/id DELETE
api/products?categoryId=1 GET

------------------------------------------------------Category-------------------------------------------------------
*img - не обязательное поле
*id - генерирует backend

ICategory {
  id?: string;
  img?: string;
  name: string;
  description: string;
}

api/category GET

---------------------------------------------------------Order-------------------------------------------------------
*email - не обязательное поле
*id - генерирует backend
**id - только у заказа, у клиента id нет. Client не существует без Order.

IClient {	<----------------
  firstName: string;		|
  lastName: string;		|
  address: string;		|
  phone: string;		|
  email?: string;		|
}				|
				|
IOrder {			|
  id?: string;			|
  products: IProduct[];		|
  client: IClient;	________|
  status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен';
}

api/orders GET
api/orders POST
api/orders/id GET
api/orders/id PATCH (status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен')
api/orders/id DELETE

--------------------------------------------------------User(admin)--------------------------------------------------

IUser {
  email: string;
  password: string;
}

authApi/login POST

IAuthResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
}

---------------------------------------------------------------------------------------------------------------------

*Если User(администратор) авторизовался, Frontend добавляет accessToken в заголовке auth к каждому запросу. 

=========================================================DOCKER======================================================

1) Сборка образа
docker build . -t test-store

2) Запуск контейнера 
docker run -d -p 8080:80 --env API_URL=http://localhost:3000 --env AUTH_URL=http://localhost:5000 test-store:latest

* API_URL=адрес_API_сервиса 
* AUTH_URL=адрес_AUTH_сервиса
* http://localhost:8080/
=====================================================================================================================
