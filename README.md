# maximum
### Интеграция API dadata.ru в Next.js приложение
#### Технологии
- Next.js
- Node.js (Express)
- MySQL (mysql2)
- Yarn
#### Как запустить
1. Откройте терминал (консоль) в корневой директории приложения.
2. Для установки зависимостей, выполните в папках /client и /server команду yarn install.
3. После устанвки выполните команду yarn dev.
4. Для корректной работы приложения необходима СУБД MySQL, развернутая локально.
#### данные для входа по умолчанию:
    - host: 'localhost',
    - user: 'root',
    - database: 'maximum',
    - password: 'root'
    - Имя бд - maximum
    - таблица в бд - queries
    - поля в таблице
        - id (int NOT NULL AUTO_INCREMENT PRIMARY KEY)
        - query (VARCHAR(50))
#### не обязательно
В корневой директории лежит дамп базы данных maximum.sql - при желании можете воспользоваться им
