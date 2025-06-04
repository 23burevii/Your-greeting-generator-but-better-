from fastapi import APIRouter
from backend.models.schemas import AnniversaryRequest, AnniversaryResponse
from backend.services.generator import generate_greeting
from backend.services.prompt_builder import build_prompt 

router = APIRouter()

@router.post("", response_model=AnniversaryResponse)
async def generate_ann(request: AnniversaryRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = build_prompt(
    f"Create a speech for {request.couple_names} on their anniversary.",
    request.details
)

    text = generate_greeting(prompt)
    return AnniversaryResponse(result=text)
