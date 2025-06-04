from fastapi import APIRouter
from backend.models.schemas import FarewellRequest, FarewellResponse
from backend.services.generator import generate_greeting
from backend.services.prompt_builder import build_prompt 

router = APIRouter()

@router.post("", response_model=FarewellResponse)
async def generate_toast(request: FarewellRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = build_prompt(
    f"Create a speech for {request.person_name}'s farewell.",
    request.details
)

    text = generate_greeting(prompt)
    return FarewellResponse(result=text)
