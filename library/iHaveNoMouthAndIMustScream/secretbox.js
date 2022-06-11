"use strict";
const secretboxMethods = (() => {
  const fallbackError = () => {
    throw new Error(
      `Cannot play audio as no valid encryption package is installed.
  - Install sodium, libsodium-wrappers, or tweetnacl.
  - Use the generateDependencyReport() function for more information.\n`
    );
  };
  return {
    open: fallbackError,
    close: fallbackError,
    random: fallbackError
  };
})();

void (async () => {
  const libs = {
    sodium: sodium => ({
      open: sodium.api.crypto_secretbox_open_easy,
      close: sodium.api.crypto_secretbox_easy,
      random: (n, buffer) => {
        if (!buffer) buffer = Buffer.allocUnsafe(n);
        sodium.api.randombytes_buf(buffer);
        return buffer;
      }
    }),
    "../libSalt/libsodium-wrappers.js": sodium => ({
      open: sodium.crypto_secretbox_open_easy,
      close: sodium.crypto_secretbox_easy,
      random: n => sodium.randombytes_buf(n)
    }),
    tweetnacl: tweetnacl => ({
      open: tweetnacl.secretbox.open,
      close: tweetnacl.secretbox,
      random: n => tweetnacl.randomBytes(n)
    })
  };
  for (const libName of Object.keys(libs)) {
    try {
      const lib = require(libName);
      if (libName === "../libSalt/libsodium-wrappers.js" && lib.ready) await lib.ready;
      Object.assign(secretboxMethods, libs[libName](lib));
      break;
    } catch {
      // empty
    }
  }
})();

module.exports = secretboxMethods;
