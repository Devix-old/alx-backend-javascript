export default function guardrail(mathFunction) {
  try {
    const queue = [mathFunction(), 'Guardrail was processed'];
  }catch(err){
    const queue = [mathFunction(), "Guardrail was processed"]
  }
}
