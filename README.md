# Server
Server-side of Luncher app



####### ACTIVE API Routes #######



### Sanity Check:

`GET` `/`

RETURNS:

```
"Sanity Check!"
```



### Get all schools for donors:

`GET` `/api/schools`

RETURNS:

```
[
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    },
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    },
    ...
]
```



### Get a schools by id for donors:

`GET` `/api/schools/:id`

RETURNS:

```
[
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    }
]
```



### Login a user:

`POST` `/api/auth/login`

Send with Body:

```
{
    username: "admin",
    password: "password"
}
```


RETURNS:

```
{
    "message": "Welcome admin, have a token!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTUyMzU2OTQ3LCJleHAiOjE1NTI0NDMzNDd9.y2JfNbWr8GUFVEslz_S7bv06VSjHx060vszwPT76A9w"
}
```



### (restricted) Get all schools for admin:

`GET` `/api/admin/:id`

Send in Headers:

```
{
    Authorization: token
}
```

RETURNS:

```
[
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    }
]
```



### (restricted) Get a schools by id for admin:

`GET` `/api/admin`

Send in Headers:

```
{
    Authorization: token
}
```

RETURNS:

```[
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    },
    {
        "id": id,
        "schoolName": "name of the school",
        "details": "Anything here!",
        "needAmount": 888
    },
    ...
]
```



### (restricted) Add a new school:

`POST` `/api/admin`

Send in Headers:

```{
    Authorization: token
}
```

Send in body:

```
{
    "schoolName": "name of the school", (required)
    "details": "Anything here!",
    "needAmount": 888 (required)
}
```

RETURNS:

```
{
    "id": id,
    "schoolName": "name of the school",
    "details": "Anything here!",
    "needAmount": 888
}
```



### (restricted) Update a new school:

`PUT` `/api/admin/:id`

Send in Headers:

```
{
    Authorization: token
}
```

Send in body:

```
{
    "schoolName": "name of the school", (required)
    "details": "Anything here!",
    "needAmount": 888 (required)
}
``` 

RETURNS:

```
{
    "message": "The school has been updated."
}
```



### (restricted) Delete a new school:

`DELETE` `/api/admin/:id`

Send in Headers:

```
{
    Authorization: token
}
```

RETURNS: