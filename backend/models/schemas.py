from pydantic import BaseModel
from typing import Dict

class ToastRequest(BaseModel):
    occasion: str
    person_name: str
    details: Dict[str, str]

class ToastResponse(BaseModel):
    result: str

class WeddingRequest(BaseModel):
    couple_names: str
    details: Dict[str, str]

class WeddingResponse(BaseModel):
    result: str

class GraduationRequest(BaseModel):
    graduate_name: str
    details: Dict[str, str]

class GraduationResponse(BaseModel):
    result: str

class AnniversaryRequest(BaseModel):
    ann_couple_names: str
    details: Dict[str, str]

class AnniversaryResponse(BaseModel):
    result: str

class FarewellRequest(BaseModel):
    f_person_name: str
    details: Dict[str, str]

class FarewellResponse(BaseModel):
    result: str

class WelcomeRequest(BaseModel):
    w_person_name: str
    details: Dict[str, str]

class WelcomeResponse(BaseModel):
    result: str