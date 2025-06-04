from fastapi import APIRouter
from backend.models.schemas import ToastRequest, ToastResponse
from backend.services.generator import generate_greeting
from backend.services.prompt_builder import build_prompt 

router = APIRouter()

@router.post("/generate", response_model=ToastResponse)
async def generate_toast(request: ToastRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = build_prompt(
    f"Create a toast for {request.person_name}'s birthday.",
    request.details
)

    toast_text = generate_greeting(prompt)
    return ToastResponse(result=toast_text)
