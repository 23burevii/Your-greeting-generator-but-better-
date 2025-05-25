from fastapi import APIRouter
from backend.models.schemas import WeddingRequest, WeddingResponse
from backend.services.generator import generate_greeting

router = APIRouter()

@router.post("/generate", response_model=WeddingResponse)
async def generate_wedding(request: WeddingRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = (
        f"Create a speech for {request.couple_names} on the occasion of their wedding.\n"
        f"Here are the details:\n{details}\n"
        f"Make it light, personal, and memorable."
    )

    toast_text = generate_greeting(prompt)
    return WeddingResponse(result=toast_text)
