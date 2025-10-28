const os = require('os');
const { converterByteToMb } = require('./util/conversor');
const chalk = require('chalk');
const tipo = os.type()
const plataforma = os.platform()
const memoria_livre = os.freemem()

console.log(chalk.blue.bold('=== informações do sistema ==='))

console.log(`Tipo: ${tipo}`)
console.log(`Tipo: ${plataforma}`)
console.log(`Tipo: ${os.release()}`)
console.log(`Tipo: ${memoria_livre} bytes`)
console.log(`Tipo: ${converterByteToMb(memoria_livre)} MB`)