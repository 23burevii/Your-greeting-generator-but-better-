from fastapi import APIRouter
from backend.models.schemas import ToastRequest, ToastResponse
from backend.services.generator import generate_greeting

router = APIRouter()

@router.post("/generate", response_model=ToastResponse)
async def generate_toast(request: ToastRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = (
        f"Create a toast for {request.person_name} on the occasion of {request.occasion}.\n"
        f"Here are the details:\n{details}\n"
        f"Make it light, personal, and memorable."
    )

    toast_text = generate_greeting(prompt)
    return ToastResponse(result=toast_text)
