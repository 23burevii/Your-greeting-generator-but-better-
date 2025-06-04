from fastapi import APIRouter
from backend.models.schemas import WeddingRequest, WeddingResponse
from backend.services.generator import generate_greeting
from backend.services.prompt_builder import build_prompt 

router = APIRouter()

@router.post("/generate", response_model=WeddingResponse)
async def generate_wedding(request: WeddingRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = build_prompt(
    f"Create a toast for {request.couple_names} on their wedding day.",
    request.details
)

    toast_text = generate_greeting(prompt)
    return WeddingResponse(result=toast_text)
