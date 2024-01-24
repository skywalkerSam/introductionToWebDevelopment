# [Introduction to Databases](https://www.digitalocean.com/community/conceptual-articles/an-introduction-to-databases)
- Structured Query Language (`SQL`)
- Database Management System (`DBMS`)
- Initially, Structured English Query Language (`SEQUEL`) 
- Developed in the `1970s`

## Relational Databases (`RDBMS`)
`SQL`

`Schema`

`Structured Data`

- PostgreSQL
- MySQL
- ORACLE DATABASE
- IBM DB2
- Microsoft SQL Server
- Apache Derby
- MariaDB
- SQLite
- HyperSQL
- TERADATA

## Non-Relational Databases 
`NoSQL`

`Non-Structured Data`

- Redis
- Apache CouchDB, "Time to relax"
- Apache HBASE
- HYPERTABLE
- Cassandra
- riak
- MongoDB, Document Oriented - (MongoDB Query Language)

## `Getting Started` with PostgreSQL

- Windows installation is a shitshow, using `WSL`!
- Use [DBeaver](https://dbeaver.io/download/) for database management!
- Or, just use [VS Code](https://code.visualstudio.com/) for everything... lol ;)
## `Install DBeaver` using winget

```shell
winget search dbeaver
```
```shell
winget install dbeaver.dbeaver
```

## `Install postgresql` using APT

```shell
sudo apt install postgresql
```

## Start the `postgresql service`

```shell
sudo systemctl start postgresql
```
- stop
- status
- restart

## `Log in` as root user - postgres

```shell
sudo su - postgres
```

```shell
psql -U postgres
```

## Change database user `password`

```shell
ALTER USER username WITH PASSWORD 'new_password';
```

## `Log In` to a specific database

```shell
psql -h localhost -U postgres -d test
```

## `Create` a new database
```shell
CREATE DATABASE test;
```
```shell
createdb test
```

## `List databases`
```shell
\list
```
```shell
\l
```

## `List users`
```shell
\du
```

## `Clear` Screen
```shell
\! clear
```

## [SQL Data Types](https://www.digitalocean.com/community/tutorials/sql-data-types)

- Depending on different databases, some data type might not work in one while working flawlessly in another );
- Data types often could be database specific!

### Numeric
- bit
- tinyint
- smallint
- int
- bigint
- decimal
- numeric
- float
- real

### Date and Time
- date
- time
- datetime
- timestamp
- year

### Character and String
- char
- varchar
- text

### Binary (Not supported in MySQL)
- binary
- image

### Miscellaneous
- json
- xml

## `Create` a table
```shell
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
```

- The uppercase syntax is just a formality, small case works too... lol ;)
- The semicolon ( `;` ) at the end of the syntax is `Important`!
- If you don't put `;` at the end, the console will throw an `error`, press `CTRL + C` and continue...

```shell
create table users (name text, age smallint, birthday date);
```

## `List` tables
```shell
\d
```

## `Insert` into a table
```shell
INSERT INTO table_name(column_1, column_2, column_3) VALUES (value_1, value_2, value_3);
```
```shell
insert into users(name, age, birthday) values ('Sam', 32, '2002-12-31');
```

## `Select` from a table
```shell
SELECT name, age, birthday FROM users;
```

### `Tip:` Use Up & Down Arrow Keys to move through used commands in console.

## The `most used command` in SQL
- Wildcard ( `*` )
```shell
select * from table_name;
```
```shell
select * from users;
```

## Alter table to `add a new column`
```shell
ALTER TABLE table_name ADD column_name datatype;
```
```shell
alter table users add score smallint;
```

## `Update value` based on certain condition
```shell
UPDATE table_name SET column_name = value WHERE column_identifier = column_value;
```
```shell
update users set score=0 where name='Sam';
```
### `AND` & `OR` Operators, just like Javascript );
```shell
update users set score=0 where name='Sam' or name='Starboy';
```

## Find all column names that `starts with the letter 'A'`
- It's case-sensitive so, it's A `not 'a'`
- `%` here means basically, whatever!
```shell
SELECT * FROM table_name WHERE column_name LIKE 'A%';
```
```shell
select * from users where name like 'A%';
```
### And, vice-versa ( ends with `a`)
```shell
select * from users where name like '%a';
```

## Sort the table in `Descending Order`
```shell
SELECT * FROM table_name ORDER BY column_name DESC;
```
```shell
select * from users order by score desc;
```
### And, vice-versa ( `Ascending Order` )
```shell
select * from users order by score asc;
```

## SQL Functions: Average,`AVG()`
```shell
SELECT AVG(column_name) FROM table_name;
```
```shell
select avg(score) from users;
```

## `SUM()`
```shell
SELECT SUM(column_name) FROM table_name;
```
```shell
select sum(score) from users;
```

## `COUNT()`
```shell
SELECT COUNT(column_name) FROM table_name;
```
```shell
select count(name) from users;
```

## Joining Tables:  Create Table `login`
- ID auto-incrementing not null, a `Primary Key`
```shell
CREATE TABLE login(
  ID serial NOT NULL PRIMARY KEY,
  secret VARCHAR (100) NOT NULL,
  name text UNIQUE NOT NULL
);
```

## `Insert` Into login
```shell
INSERT INTO login (secret,name) VALUES ('xyz', 'Sam');
```
```shell
insert into login(secret,name) values('idk', 'Starboy');
```
### Read the table 
```shell
 select * from login;
```

## Let's JOIN `users` and `login`
The real power of Relational Databases! (`Schemas`), Separation of concerns!

- Sam is a foreign key in login, and in users Sam is a primary key. (`name`)
```shell
SELECT * FROM table_1 JOIN table_2 ON table_1.identifier = table_2.identifier;
```
```shell
select * from users join login on users.name = login.name;
```

## `Delete` from a table
```shell
DELETE FROM table_name WHERE column='Something';
```
```shell
delete from login where name='Unknown';
```

## `Drop Table` ;)
- Be Careful with this!

```shell
DROP TABLE table_name;
```
```shell
drop table users;
```

### just got access to prod...
![*Intern after deleting the production database*](drop_database_prod.jpg)
## ;)

## `Drop Database`!
- Be `Extra Careful` with this!
- You can't drop the database while you're currently logged in to the same database.
```shell
DROP DATABASE database_name;
```
```shell
drop database test;
```

### List available databases...
```shell
\list
```

# `Setting up a database` from scratch! 
- Part of the `face-detection backend` project 

## Create a database
```shell
CREATE DATABASE prod;
```

## Give database a structure: `users`
```shell
CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(100),
  email text UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);
```
### `Verify` Creation
```shell
select * from users;
```

## `login`
```shell
CREATE TABLE login (
  id serial PRIMARY KEY,
  hash varchar(100) NOT NULL,
  email text UNIQUE not null
);
```
### `Verify` Creation
```shell
select * from login;
```

## `Clear` Screen
```shell
\! clear
```

### Use a framework like [knex](https://knexjs.org/) or, [pg-promise](https://vitaly-t.github.io/pg-promise/) to connect backend with the database...





## `PostgreSQL` Info...
```shell
psql --version
```
```shell
psql -V
```

### Stuck, Need `Help?`
```shell
psql --help
```

## Here's something fun to think about...
![How did they program a programming language to program a program to program programs?](./the_program_paradox.jpg)

## Until next time...
## Take Care.
## ;)

##
##
##

## Project Specific Details: `face-detection-backend`
- Using [VS Code](https://code.visualstudio.com/) for this, and for all other projects, for all times... It's the best `:)`
- Using [React.js](https://react.dev/) with [create-react-app](https://create-react-app.dev/), but [vite](https://vitejs.dev/) is the best.
- Using [Express.js](https://expressjs.com/) for backend
- Using [npm](https://www.npmjs.com/) instead of [yarn](https://yarnpkg.com/)... idk ;)
- Using [Postman](https://www.postman.com/) for endpoints testing ([APIs](https://www.postman.com/what-is-an-api/))
- Using [PostgreSQL](https://www.postgresql.org/) on [WSL/Ubuntu](https://learn.microsoft.com/en-us/windows/wsl/)
- Using [DBeaver](https://dbeaver.io/) for database management
- Using [knex](https://knexjs.org/), but [pg-promise](https://vitaly-t.github.io/pg-promise/) is good too.
- Using [Pycharm](https://www.jetbrains.com/pycharm/) to write is [Markdown](https://www.markdownguide.org/) file for some reason... Use [ghostwriter](https://ghostwriter.kde.org/download/#windows) ;)
