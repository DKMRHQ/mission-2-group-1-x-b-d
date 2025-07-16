# 🚗 Mission 2: Turner Car Insurance 

A set of RESTful APIs for evaluating vehicle values and risk ratings to provide insurance quotes. This project includes automated testing and error validation. Developed as part of a TDD-driven backend API exercise using Node.js and Express.

---

## 📚 Features

- 🔢 Calculates car value using model name (alphabet scoring) and year
- 🧪 Fully tested with **Jest** and **Supertest**
- ❌ Returns detailed error messages for invalid or missing input
- 🖥️ Command-line interface (`carValueCli.js`) for real-time user input
- 🚀 Fast and lightweight Express.js server

---

## 🛠️ Tools & Technologies Used

| Category            | Tools/Packages                              |
|---------------------|----------------------------------------------|
| Runtime             | [Node.js](https://nodejs.org)                |
| Package Manager     | [npm](https://www.npmjs.com/)                |
| Framework           | [Express](https://expressjs.com/)            |
| Utilities           | `cors`, `lodash`, `fs/promises`              |
| Testing             | [Jest](https://jestjs.io/), [Supertest](https://github.com/visionmedia/supertest) |
| CLI HTTP Requests   | [Axios](https://axios-http.com/)             |

---

## 🚀 Getting Started

### 📦 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

### ▶️ Run the Server

```bash
npm start
```

> Server will start and listen at: [http://localhost:3000](http://localhost:3000)

---

## 💡 APIs

### Endpoint: `POST /carValue`

#### Request Body:
```json
{
  "model": "Civic",
  "year": 2020
}
```

#### Response:
```json
{
  "car_value": 6614
}
```

#### Error Example:
```json
{
  "error": "Invalid year: must be an integer from 1886 or later"
}
```

---

## 🧪 Running Tests

This project follows **Test Driven Development (TDD)**.

To run all tests with coverage:

```bash
npm run test
```

> Output includes test results and coverage report for logic and validation.

---

## 🖥️ Using the CLI Tool

You can test User Input with the Car Value API interactively using a terminal-based script.

### Step 1: Ensure the server is running

```bash
npm start
```

### Step 2: Open a second terminal and run the CLI

```bash
npm run cli:carValue
```

You will be prompted to enter the model and year. The API response will be displayed directly in the terminal.

---

## 🧪 Manual Testing Summary

| Environment              | Test Action                                   | Expected Result                            | Status |
|--------------------------|-----------------------------------------------|---------------------------------------------|--------|
| `npm start`              | Start server with `npm start`                 | Server listens on `http://localhost:3000`   | ✅     |
| Postman                  | POST to `/carValue` with valid data           | Returns correct `car_value`                 | ✅     |
| Postman                  | POST to `/carValue` with invalid data         | Returns descriptive error messages          | ✅     |
| `carValueCli.js`         | Enter model and year via terminal             | Correct output or validation error shown    | ✅     |
| Invalid year input       | e.g. `"Civic", -2020`                         | Error: `"Invalid year: must be an integer"` | ✅     |
| Invalid model input      | e.g. `1234`, 2020                             | Error: `"Invalid type for model"`           | ✅     |
| Long string input        | Model of 1000 "A"s                            | Should not crash, returns large value       | ✅     |

---

## 👥 Contributors

| Name         | GitHub Profile                                      |
|--------------|-----------------------------------------------------|
| Brendon     | [@bluicien](https://github.com/bluicien)           |
| Dev       | [@DKMRHQ](https://github.com/DKMRHQ)               |
| Xevithirus   | [@Xevithirus](https://github.com/Xevithirus)       |

---

## 📌 License

This project is for educational use and does not currently include a license file. Contributions and forks are welcome under fair use.
