from fastapi import APIRouter
from backend.models.schemas import AnniversaryRequest, AnniversaryResponse
from backend.services.generator import generate_greeting

router = APIRouter()

@router.post("/generate", response_model=AnniversaryResponse)
async def generate_ann(request: AnniversaryRequest):
    details = "\n".join(f"- {k}: {v}" for k, v in request.details.items())
    prompt = (
        f"Create a toast for {request.ann_couple_names} on the occasion of their anniversary.\n"
        f"Here are the details:\n{details}\n"
        f"Make it light, personal, and memorable."
    )

    toast_text = generate_greeting(prompt)
    return AnniversaryResponse(result=toast_text)
