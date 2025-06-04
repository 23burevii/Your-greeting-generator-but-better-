from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.toast import router as toast_router
from backend.routes.wedding import router as wedding_router
from backend.routes.graduation import router as graduation_router
from backend.routes.farewell import router as farewell_router
from backend.routes.anniversary import router as anniversary_router
from backend.routes.welcome import router as welcome_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(toast_router, prefix="/api/toast")
app.include_router(wedding_router, prefix="/api/wedding")
app.include_router(graduation_router, prefix="/api/graduation")
app.include_router(farewell_router, prefix="/api/farewell")
app.include_router(anniversary_router, prefix="/api/anniversary")
app.include_router(welcome_router, prefix="/api/welcome")

@app.get("/")
async def root():
    return {"message": "Greeting Generator API is running!"}

