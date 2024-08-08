export default function guardrail(mathFunction) {
  try {
    const queue = [mathFunction(), 'Guardrail was processed'];
    return queue;
  }catch(err){
    const queue = [err.message, "Guardrail was processed"];
    return queue;
  }
}
