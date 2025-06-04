from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "meta-llama/Llama-3.1-8B-Instruct"

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

generator = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

def generate_greeting(prompt: str) -> str:
    inputs = (
        "<|system|>\nYou are a helpful assistant that generates toasts for various occasions.\n"
        f"<|user|>\n{prompt}\n"
        "<|assistant|>"
    )

    output = generator(
        inputs,
        max_new_tokens=300,
        temperature=0.7,
        top_p=0.9,
        top_k=50,
        do_sample=True,
        return_full_text=False
    )

    generated = output[0]["generated_text"]

    # Trim at next <|system|> if present (optional post-process)
    if "<|system|>" in generated:
        generated = generated.split("<|system|>")[0].strip()

    return generated

