from pydantic import BaseModel
from typing import Dict

class ToastRequest(BaseModel):
    person_name: str
    details: Dict[str, str]

class ToastResponse(BaseModel):
    result: str

class WeddingRequest(BaseModel):
    person_name: str
    details: Dict[str, str]

class WeddingResponse(BaseModel):
    result: str

class GraduationRequest(BaseModel):
    
    person_name: str
    details: Dict[str, str]

class GraduationResponse(BaseModel):
    result: str

class AnniversaryRequest(BaseModel):
    person_name: str
    details: Dict[str, str]

class AnniversaryResponse(BaseModel):
    result: str

class FarewellRequest(BaseModel):
    person_name: str
    details: Dict[str, str]

class FarewellResponse(BaseModel):
    result: str

class WelcomeRequest(BaseModel):
    person_name: str
    details: Dict[str, str]

class WelcomeResponse(BaseModel):
    result: str