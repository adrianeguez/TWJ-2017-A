# Comandos Docker

## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name adrian -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=adrian -e MYSQL_USER=adrian -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```

