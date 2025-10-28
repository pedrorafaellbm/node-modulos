// Função para converter bytes para MB
const converterByteToMb = (bytes) => {
    return bytes / (1024 * 1024).toFixed(2);
};

module.exports = { converterByteToMb };