## Terrarium (MERN)

### Run locally

- **MongoDB (easy option)**:

```bash
docker compose up -d
```

- **Backend**:

```bash
cd backend
cp .env.example .env   # (on Windows, create .env manually)
npm install
npm run dev
```

- **Frontend**:

```bash
cd frontend
npm install
npm run dev
```

### Notes

- **API base URL**: `frontend/.env` uses `VITE_BACKEND_URL` (default `http://localhost:9000`).
- **Orders**: `MyOrderPage`, `OrderDetailsPage`, and Admin `OrderManagement` are wired to the real API endpoints now.
