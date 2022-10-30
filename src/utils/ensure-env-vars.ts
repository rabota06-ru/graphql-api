export function ensureEnviromentVariables() {
  const envVariables = ["DATABASE_URL"];
  const missingVariables: string[] = [];

  envVariables.forEach((variable) => {
    if (process.env[variable] === undefined) {
      missingVariables.push(variable);
    }
  });

  if (missingVariables.length) {
    throw new Error(
      `Необходимо передать переменные окружения ${missingVariables.join(", ")}`
    );
  }
}
