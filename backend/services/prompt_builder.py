

def build_prompt(intro_line: str, details: dict, tone_description: str = "light, personal, and memorable") -> str:
    """
    Builds a prompt string using a lead-in intro, detail bullets, and optional tone guide.
    """
    formatted_details = "\n".join(f"- {k}: {v}" for k, v in details.items())
    prompt = (
        f"{intro_line}\n"
        f"Here are the details:\n{formatted_details}\n"
        f"Make it {tone_description}."
    )
    return prompt