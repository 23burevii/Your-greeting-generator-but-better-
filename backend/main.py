from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.toast import router as toast_router

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your route module
app.include_router(toast_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Greeting Generator API is running!"}
