# sprint13 - rest API & NSQL

## ver 0.0.3

## Инструкция как развернуть проект (local)

1) Cкопируйте репозиторий с проектом  *git clone <https://github.com/MiKeBronko/restapi.git>*
2) Для работы нужен *MongoDB <https://www.mongodb.com/download-center/community?jmp=docs>*
3) Запуск *MongoDB* команда **mongod**
4) команда **npm run dev** запускает сервер на *<http://localhost:3000>* с хот релоудом. Если не работает установите модуль **npm install nodemon -D***;

### Реализовано роуты

- GET /users — возвращает всех пользователей
- GET /users/:userId - возвращает пользователя по _id
- POST /users — создаёт пользователя
- GET /cards — возвращает все карточки
- POST /cards — создаёт карточку
- DELETE /cards/:cardId — удаляет карточку по идентификатору
