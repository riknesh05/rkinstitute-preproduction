# RK Institute

A modern web application for **RK Institute** — Quality coaching for school academics, IT courses, typewriting, shorthand and more.

## 📁 Project Structure

```
rkinstitute/
├── frontend/          # React + Vite client application
│   ├── src/
│   │   ├── components/    # React UI components
│   │   ├── context/       # React context providers
│   │   ├── translations/  # i18n translation files
│   │   ├── App.jsx        # Root component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/           # Express.js API server
│   ├── routes/
│   │   ├── api.js         # API router
│   │   └── contact.js     # Contact form endpoint
│   ├── server.js          # Server entry point
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm** v9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/riknesh05/rkinstitute-preproduction.git
   cd rkinstitute-preproduction
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   cp .env   # configure your environment
   npm install
   ```

### Development

**Start the backend** (runs on port 5000):
```bash
cd backend
npm run dev
```

**Start the frontend** (runs on port 3000, proxies API to backend):
```bash
cd frontend
npm run dev
```

### Production Build

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`.

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS      |
| Backend   | Node.js, Express                  |
| Styling   | Tailwind CSS, Inter font          |

## 📄 License

This project is private and proprietary to RK Institute.
