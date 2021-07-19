# AutoChek Technology Assessment - Frontend & Backend

### Problem Definition

We want to design a system that can tell us the distance between our location and some other
locations which we expect to be supplied to us.

### Interview Task

We need to design a RESTful API which can collect the information on the different locations for us and also determine the distance between the locations and a configurable location which can be changed or supplied. The formula for calculating distance between two points can be gotten here https://en.wikipedia.org/wiki/Great-circle_distance.

### Data Model

Define a set of data models that include

- A location entity with at least the following structure, you can add more to it at your discretion
- Id
- Location name
- Description
- Website (Optional)
- Phone
- Contact Person
- Coordinates

You can make use of any database but we recommend PostgreSQL.

### Rest API

The following RESTful API must be implemented

- Create new location
- Edit Location
- Delete Location
- Fetch All Locations
- Fetch Specific Location
- Calculate distance

### Languages and Frameworks

This task should be completed using

- NestJs Framework
- The data model should also be defined using Grpc (This is optional but using it will earn you extra points)
- An ORM like TypeORM can also be used

## API Reference

#### Get all locations

```http
  GET /
```

#### Get a location

```http
  GET /${location}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `location` | `string` | **Required**. name of location to fetch |

#### Add a location

```http
  POST /
```

| Parameter      | Type     | Description                                                         |
| :------------- | :------- | :------------------------------------------------------------------ |
| `locationName` | `string` | **Required**. name of location. e.g. Lagos                          |
| `description`  | `string` | **Required**. location description.                                 |
| `website`      | `string` | **Optional**                                                        |
| `phone`        | `string` | **Required**                                                        |
| `person`       | `string` | **Required**                                                        |
| `coordinateX`  | `number` | **Required**. X part of the cordinates to be added to the database. |
| `coordinateY`  | `number` | **Required**. Y part of the cordinates to be added to the database. |

#### Edit a location

```http
  PUT /${location}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `location` | `string` | **Required**. name of location to fetch |

Body
| `locationName` | `string` | **Required**. name of location. e.g. Lagos |
| `description` | `string` | **Required**. location description. |
| `website` | `string` | **Optional** |
| `phone` | `string` | **Required** |
| `person` | `string` | **Required** |
| `coordinateX` | `number` | **Required**. X part of the cordinates to be added to the database. |
| `coordinateY` | `number` | **Required**. Y part of the cordinates to be added to the database. |

#### Delete a location

```http
  DELETE /${location}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `location` | `string` | **Required**. name of location to fetch |

#### Calculate distance between a location and your own location

```http
  POST /calculate/${location}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `location` | `string` | **Required**. name of location to fetch |

## Tech Stack

**Server:** Nestjs, Axios, Class-Validator, MondoDB, Mongoose

## Run Locally

Clone the project

```bash
  git clone https://github.com/greatkay-olowo/autochekbackend.git
```

Go to the project directory

```bash
  cd autochekbackend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```
