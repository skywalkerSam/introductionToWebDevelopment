# Introduction to Databases

- Database Management System (DBMS)

## Relational Databases / SQL   : Schema

    Structured Data

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

## Non-Relational Databases / NoSQL     : No-Schema

    Non-Structured Data

- Redis
- Apache CouchDB, "Time to relax"
- Apache HBASE
- HYPERTABLE
- Cassandra
- riak
- MongoDB, Document Oriented - (MongoDB Query Language)

## Getting Started with `PostgreSQL`

- Windows installation is a shitshow, using `WSL`!
- Use [DBeaver](https://dbeaver.io/download/)

Install DBeaver using `winget`

```shell
winget search dbeaver
```
```shell
winget install dbeaver.dbeaver
```

Install `postgresql` using `apt`

```shell
sudo apt install postgresql
```

Start the postgresql service

```shell
sudo systemctl start postgresql
```
- stop
- status
- restart

Log in as root user - postgres

```shell
sudo su - postgres
```

```shell
psql -U postgres
```

Change database user `password`

```shell
ALTER USER username WITH PASSWORD 'new_password';
```

Jumping directy to a specfic database

```shell
psql -h localhost -U postgres -d test
```

Create a new database

```shell
createdb test
```

List databases
```shell
\list
```
```shell
\l
```
List users
```shell
\du
```

### [SQL Data Types](https://www.digitalocean.com/community/tutorials/sql-data-types)

- Depending on different databases, some data type might not work in one while working flawlessly in another );
- Data types often could be database specific!

Numeric
- bit
- tinyint
- smallint
- int
- bigint
- decimal
- numeric
- float
- real

Date and Time
- date
- time
- datetime
- timestamp
- year

Character and String
- char
- varchar
- text

Binary (Not supported in MySQL)
- binary
- image

Miscellaneous
- json
- xml

`Create` a table
```shell
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
```

- The uppercase syntax is just a formality, small case works too ;)
- The semicolon ( ; ) at the end of the syntax is important!

```shell
create table users (name text, age smallint, birthday date);
```

`List` tables
```shell
\d
```

`Insert` into a table

```shell
INSERT INTO table_name(column_1, column_2, column_3) VALUES (value_1, value_2, value_3);
```
```shell
insert into users(name, age, birthday) values ('Sam', 32, '2002-12-31');
```

`Select` from a table
```shell
SELECT name, age, birthday FROM users;
```
Wildcard ( `*` )
```shell
select * from users;
```



`PostgreSQL` Info...
```shell
psql --version
```
```shell
psql -V
```

Stuck, Need `Help?`
```shell
psql --help
```
