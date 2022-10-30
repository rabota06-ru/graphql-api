"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureEnviromentVariables = void 0;
function ensureEnviromentVariables() {
    const envVariables = ["DATABASE_URL"];
    const missingVariables = [];
    envVariables.forEach((variable) => {
        if (process.env[variable] === undefined) {
            missingVariables.push(variable);
        }
    });
    if (missingVariables.length) {
        throw new Error(`Необходимо передать переменные окружения ${missingVariables.join(", ")}`);
    }
}
exports.ensureEnviromentVariables = ensureEnviromentVariables;
