from fastapi import APIRouter
from backend.models.schemas import GraduationRequest, GraduationResponse
from backend.services.generator import generate_greeting
from backend.services.prompt_builder import build_prompt 

router = APIRouter()

@router.post("", response_model=GraduationResponse)
async def generate_gradd(request: GraduationRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = build_prompt(
    f"Create a speech for {request.person_name}'s graduation party.",
    request.details
)

    text = generate_greeting(prompt)
    return GraduationResponse(result=text)
