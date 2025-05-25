from fastapi import APIRouter
from backend.models.schemas import GraduationRequest, GraduationResponse
from backend.services.generator import generate_greeting

router = APIRouter()

@router.post("/generate", response_model=GraduationResponse)
async def generate_gradd(request: GraduationRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = (
        f"Create a speech for {request.graduate_name} on the occasion of person's graduation.\n"
        f"Here are the details:\n{details}\n"
        f"Make it light, personal, and memorable."
    )

    toast_text = generate_greeting(prompt)
    return GraduationResponse(result=toast_text)
