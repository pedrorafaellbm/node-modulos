import os from 'os';
import chalk from 'chalk';
import { converterByteToMb } from './util/conversor.js'; /* importar o modulo costumizado */

const log = console.log;

const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.freemem();
const cpus = os.cpus();

log(chalk.blue.bold('=== informações do sistema ==='))

log(`Tipo: ${tipo}`)
log(`Tipo: ${plataforma}`)
log(`Tipo: ${os.release()}`)
log(`Tipo: ${memoria_livre} bytes`)
log(`Tipo: ${converterByteToMb(memoria_livre)} MB`)


// ES2015 template literal
log(`
CPU(s): ${cpus.red('90%')}
RAM: ${chalk.green('40%')}  
DISK: ${chalk.yellow('70%')}
`)