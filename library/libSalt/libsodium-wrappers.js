! function (e) {
	function r(e, r) { "use strict"; var t, a = r.ready.then((function () {
			function a() { if (0 !== t._sodium_init()) throw new Error("libsodium was not correctly initialized."); for (var r = ["crypto_aead_chacha20poly1305_decrypt", "crypto_aead_chacha20poly1305_decrypt_detached", "crypto_aead_chacha20poly1305_encrypt", "crypto_aead_chacha20poly1305_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_decrypt", "crypto_aead_chacha20poly1305_ietf_decrypt_detached", "crypto_aead_chacha20poly1305_ietf_encrypt", "crypto_aead_chacha20poly1305_ietf_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_keygen", "crypto_aead_chacha20poly1305_keygen", "crypto_aead_xchacha20poly1305_ietf_decrypt", "crypto_aead_xchacha20poly1305_ietf_decrypt_detached", "crypto_aead_xchacha20poly1305_ietf_encrypt", "crypto_aead_xchacha20poly1305_ietf_encrypt_detached", "crypto_aead_xchacha20poly1305_ietf_keygen", "crypto_auth", "crypto_auth_hmacsha256", "crypto_auth_hmacsha256_final", "crypto_auth_hmacsha256_init", "crypto_auth_hmacsha256_keygen", "crypto_auth_hmacsha256_update", "crypto_auth_hmacsha256_verify", "crypto_auth_hmacsha512", "crypto_auth_hmacsha512_final", "crypto_auth_hmacsha512_init", "crypto_auth_hmacsha512_keygen", "crypto_auth_hmacsha512_update", "crypto_auth_hmacsha512_verify", "crypto_auth_keygen", "crypto_auth_verify", "crypto_box_beforenm", "crypto_box_curve25519xchacha20poly1305_keypair", "crypto_box_curve25519xchacha20poly1305_seal", "crypto_box_curve25519xchacha20poly1305_seal_open", "crypto_box_detached", "crypto_box_easy", "crypto_box_easy_afternm", "crypto_box_keypair", "crypto_box_open_detached", "crypto_box_open_easy", "crypto_box_open_easy_afternm", "crypto_box_seal", "crypto_box_seal_open", "crypto_box_seed_keypair", "crypto_core_ed25519_add", "crypto_core_ed25519_from_hash", "crypto_core_ed25519_from_uniform", "crypto_core_ed25519_is_valid_point", "crypto_core_ed25519_random", "crypto_core_ed25519_scalar_add", "crypto_core_ed25519_scalar_complement", "crypto_core_ed25519_scalar_invert", "crypto_core_ed25519_scalar_mul", "crypto_core_ed25519_scalar_negate", "crypto_core_ed25519_scalar_random", "crypto_core_ed25519_scalar_reduce", "crypto_core_ed25519_scalar_sub", "crypto_core_ed25519_sub", "crypto_core_hchacha20", "crypto_core_hsalsa20", "crypto_core_ristretto255_add", "crypto_core_ristretto255_from_hash", "crypto_core_ristretto255_is_valid_point", "crypto_core_ristretto255_random", "crypto_core_ristretto255_scalar_add", "crypto_core_ristretto255_scalar_complement", "crypto_core_ristretto255_scalar_invert", "crypto_core_ristretto255_scalar_mul", "crypto_core_ristretto255_scalar_negate", "crypto_core_ristretto255_scalar_random", "crypto_core_ristretto255_scalar_reduce", "crypto_core_ristretto255_scalar_sub", "crypto_core_ristretto255_sub", "crypto_generichash", "crypto_generichash_blake2b_salt_personal", "crypto_generichash_final", "crypto_generichash_init", "crypto_generichash_keygen", "crypto_generichash_update", "crypto_hash", "crypto_hash_sha256", "crypto_hash_sha256_final", "crypto_hash_sha256_init", "crypto_hash_sha256_update", "crypto_hash_sha512", "crypto_hash_sha512_final", "crypto_hash_sha512_init", "crypto_hash_sha512_update", "crypto_kdf_derive_from_key", "crypto_kdf_keygen", "crypto_kx_client_session_keys", "crypto_kx_keypair", "crypto_kx_seed_keypair", "crypto_kx_server_session_keys", "crypto_onetimeauth", "crypto_onetimeauth_final", "crypto_onetimeauth_init", "crypto_onetimeauth_keygen", "crypto_onetimeauth_update", "crypto_onetimeauth_verify", "crypto_pwhash", "crypto_pwhash_scryptsalsa208sha256", "crypto_pwhash_scryptsalsa208sha256_ll", "crypto_pwhash_scryptsalsa208sha256_str", "crypto_pwhash_scryptsalsa208sha256_str_verify", "crypto_pwhash_str", "crypto_pwhash_str_needs_rehash", "crypto_pwhash_str_verify", "crypto_scalarmult", "crypto_scalarmult_base", "crypto_scalarmult_ed25519", "crypto_scalarmult_ed25519_base", "crypto_scalarmult_ed25519_base_noclamp", "crypto_scalarmult_ed25519_noclamp", "crypto_scalarmult_ristretto255", "crypto_scalarmult_ristretto255_base", "crypto_secretbox_detached", "crypto_secretbox_easy", "crypto_secretbox_keygen", "crypto_secretbox_open_detached", "crypto_secretbox_open_easy", "crypto_secretstream_xchacha20poly1305_init_pull", "crypto_secretstream_xchacha20poly1305_init_push", "crypto_secretstream_xchacha20poly1305_keygen", "crypto_secretstream_xchacha20poly1305_pull", "crypto_secretstream_xchacha20poly1305_push", "crypto_secretstream_xchacha20poly1305_rekey", "crypto_shorthash", "crypto_shorthash_keygen", "crypto_shorthash_siphashx24", "crypto_sign", "crypto_sign_detached", "crypto_sign_ed25519_pk_to_curve25519", "crypto_sign_ed25519_sk_to_curve25519", "crypto_sign_ed25519_sk_to_pk", "crypto_sign_ed25519_sk_to_seed", "crypto_sign_final_create", "crypto_sign_final_verify", "crypto_sign_init", "crypto_sign_keypair", "crypto_sign_open", "crypto_sign_seed_keypair", "crypto_sign_update", "crypto_sign_verify_detached", "crypto_stream_chacha20", "crypto_stream_chacha20_ietf_xor", "crypto_stream_chacha20_ietf_xor_ic", "crypto_stream_chacha20_keygen", "crypto_stream_chacha20_xor", "crypto_stream_chacha20_xor_ic", "crypto_stream_keygen", "crypto_stream_xchacha20_keygen", "crypto_stream_xchacha20_xor", "crypto_stream_xchacha20_xor_ic", "randombytes_buf", "randombytes_buf_deterministic", "randombytes_close", "randombytes_random", "randombytes_set_implementation", "randombytes_stir", "randombytes_uniform", "sodium_version_string"], a = [E, x, k, S, T, w, Y, B, A, K, M, I, N, L, U, O, C, R, P, G, X, D, F, V, H, q, j, z, W, J, Q, Z, $, ee, re, te, ae, _e, se, ne, ce, oe, he, pe, ye, ie, le, ue, de, ve, ge, be, fe, me, Ee, xe, ke, Se, Te, we, Ye, Be, Ae, Ke, Me, Ie, Ne, Le, Ue, Oe, Ce, Re, Pe, Ge, Xe, De, Fe, Ve, He, qe, je, ze, We, Je, Qe, Ze, $e, er, rr, tr, ar, _r, sr, nr, cr, or, hr, pr, yr, ir, lr, ur, dr, vr, gr, br, fr, mr, Er, xr, kr, Sr, Tr, wr, Yr, Br, Ar, Kr, Mr, Ir, Nr, Lr, Ur, Or, Cr, Rr, Pr, Gr, Xr, Dr, Fr, Vr, Hr, qr, jr, zr, Wr, Jr, Qr, Zr, $r, et, rt, tt, at, _t, st, nt, ct, ot, ht, pt, yt, it, lt, ut, dt, vt, gt, bt, ft, mt], _ = 0; _ < a.length; _++) "function" == typeof t["_" + r[_]] && (e[r[_]] = a[_]); var s = ["SODIUM_LIBRARY_VERSION_MAJOR", "SODIUM_LIBRARY_VERSION_MINOR", "crypto_aead_chacha20poly1305_ABYTES", "crypto_aead_chacha20poly1305_IETF_ABYTES", "crypto_aead_chacha20poly1305_IETF_KEYBYTES", "crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_IETF_NPUBBYTES", "crypto_aead_chacha20poly1305_IETF_NSECBYTES", "crypto_aead_chacha20poly1305_KEYBYTES", "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_NPUBBYTES", "crypto_aead_chacha20poly1305_NSECBYTES", "crypto_aead_chacha20poly1305_ietf_ABYTES", "crypto_aead_chacha20poly1305_ietf_KEYBYTES", "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_ietf_NPUBBYTES", "crypto_aead_chacha20poly1305_ietf_NSECBYTES", "crypto_aead_xchacha20poly1305_IETF_ABYTES", "crypto_aead_xchacha20poly1305_IETF_KEYBYTES", "crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX", "crypto_aead_xchacha20poly1305_IETF_NPUBBYTES", "crypto_aead_xchacha20poly1305_IETF_NSECBYTES", "crypto_aead_xchacha20poly1305_ietf_ABYTES", "crypto_aead_xchacha20poly1305_ietf_KEYBYTES", "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES", "crypto_aead_xchacha20poly1305_ietf_NSECBYTES", "crypto_auth_BYTES", "crypto_auth_KEYBYTES", "crypto_auth_hmacsha256_BYTES", "crypto_auth_hmacsha256_KEYBYTES", "crypto_auth_hmacsha512256_BYTES", "crypto_auth_hmacsha512256_KEYBYTES", "crypto_auth_hmacsha512_BYTES", "crypto_auth_hmacsha512_KEYBYTES", "crypto_box_BEFORENMBYTES", "crypto_box_MACBYTES", "crypto_box_MESSAGEBYTES_MAX", "crypto_box_NONCEBYTES", "crypto_box_PUBLICKEYBYTES", "crypto_box_SEALBYTES", "crypto_box_SECRETKEYBYTES", "crypto_box_SEEDBYTES", "crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES", "crypto_box_curve25519xchacha20poly1305_MACBYTES", "crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_box_curve25519xchacha20poly1305_NONCEBYTES", "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES", "crypto_box_curve25519xchacha20poly1305_SEALBYTES", "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES", "crypto_box_curve25519xchacha20poly1305_SEEDBYTES", "crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES", "crypto_box_curve25519xsalsa20poly1305_MACBYTES", "crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX", "crypto_box_curve25519xsalsa20poly1305_NONCEBYTES", "crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES", "crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES", "crypto_box_curve25519xsalsa20poly1305_SEEDBYTES", "crypto_core_ed25519_BYTES", "crypto_core_ed25519_HASHBYTES", "crypto_core_ed25519_NONREDUCEDSCALARBYTES", "crypto_core_ed25519_SCALARBYTES", "crypto_core_ed25519_UNIFORMBYTES", "crypto_core_hchacha20_CONSTBYTES", "crypto_core_hchacha20_INPUTBYTES", "crypto_core_hchacha20_KEYBYTES", "crypto_core_hchacha20_OUTPUTBYTES", "crypto_core_hsalsa20_CONSTBYTES", "crypto_core_hsalsa20_INPUTBYTES", "crypto_core_hsalsa20_KEYBYTES", "crypto_core_hsalsa20_OUTPUTBYTES", "crypto_core_ristretto255_BYTES", "crypto_core_ristretto255_HASHBYTES", "crypto_core_ristretto255_NONREDUCEDSCALARBYTES", "crypto_core_ristretto255_SCALARBYTES", "crypto_core_salsa2012_CONSTBYTES", "crypto_core_salsa2012_INPUTBYTES", "crypto_core_salsa2012_KEYBYTES", "crypto_core_salsa2012_OUTPUTBYTES", "crypto_core_salsa20_CONSTBYTES", "crypto_core_salsa20_INPUTBYTES", "crypto_core_salsa20_KEYBYTES", "crypto_core_salsa20_OUTPUTBYTES", "crypto_generichash_BYTES", "crypto_generichash_BYTES_MAX", "crypto_generichash_BYTES_MIN", "crypto_generichash_KEYBYTES", "crypto_generichash_KEYBYTES_MAX", "crypto_generichash_KEYBYTES_MIN", "crypto_generichash_blake2b_BYTES", "crypto_generichash_blake2b_BYTES_MAX", "crypto_generichash_blake2b_BYTES_MIN", "crypto_generichash_blake2b_KEYBYTES", "crypto_generichash_blake2b_KEYBYTES_MAX", "crypto_generichash_blake2b_KEYBYTES_MIN", "crypto_generichash_blake2b_PERSONALBYTES", "crypto_generichash_blake2b_SALTBYTES", "crypto_hash_BYTES", "crypto_hash_sha256_BYTES", "crypto_hash_sha512_BYTES", "crypto_kdf_BYTES_MAX", "crypto_kdf_BYTES_MIN", "crypto_kdf_CONTEXTBYTES", "crypto_kdf_KEYBYTES", "crypto_kdf_blake2b_BYTES_MAX", "crypto_kdf_blake2b_BYTES_MIN", "crypto_kdf_blake2b_CONTEXTBYTES", "crypto_kdf_blake2b_KEYBYTES", "crypto_kx_PUBLICKEYBYTES", "crypto_kx_SECRETKEYBYTES", "crypto_kx_SEEDBYTES", "crypto_kx_SESSIONKEYBYTES", "crypto_onetimeauth_BYTES", "crypto_onetimeauth_KEYBYTES", "crypto_onetimeauth_poly1305_BYTES", "crypto_onetimeauth_poly1305_KEYBYTES", "crypto_pwhash_ALG_ARGON2I13", "crypto_pwhash_ALG_ARGON2ID13", "crypto_pwhash_ALG_DEFAULT", "crypto_pwhash_BYTES_MAX", "crypto_pwhash_BYTES_MIN", "crypto_pwhash_MEMLIMIT_INTERACTIVE", "crypto_pwhash_MEMLIMIT_MAX", "crypto_pwhash_MEMLIMIT_MIN", "crypto_pwhash_MEMLIMIT_MODERATE", "crypto_pwhash_MEMLIMIT_SENSITIVE", "crypto_pwhash_OPSLIMIT_INTERACTIVE", "crypto_pwhash_OPSLIMIT_MAX", "crypto_pwhash_OPSLIMIT_MIN", "crypto_pwhash_OPSLIMIT_MODERATE", "crypto_pwhash_OPSLIMIT_SENSITIVE", "crypto_pwhash_PASSWD_MAX", "crypto_pwhash_PASSWD_MIN", "crypto_pwhash_SALTBYTES", "crypto_pwhash_STRBYTES", "crypto_pwhash_argon2i_BYTES_MAX", "crypto_pwhash_argon2i_BYTES_MIN", "crypto_pwhash_argon2i_SALTBYTES", "crypto_pwhash_argon2i_STRBYTES", "crypto_pwhash_argon2id_BYTES_MAX", "crypto_pwhash_argon2id_BYTES_MIN", "crypto_pwhash_argon2id_SALTBYTES", "crypto_pwhash_argon2id_STRBYTES", "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX", "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_SALTBYTES", "crypto_pwhash_scryptsalsa208sha256_STRBYTES", "crypto_scalarmult_BYTES", "crypto_scalarmult_SCALARBYTES", "crypto_scalarmult_curve25519_BYTES", "crypto_scalarmult_curve25519_SCALARBYTES", "crypto_scalarmult_ed25519_BYTES", "crypto_scalarmult_ed25519_SCALARBYTES", "crypto_scalarmult_ristretto255_BYTES", "crypto_scalarmult_ristretto255_SCALARBYTES", "crypto_secretbox_KEYBYTES", "crypto_secretbox_MACBYTES", "crypto_secretbox_MESSAGEBYTES_MAX", "crypto_secretbox_NONCEBYTES", "crypto_secretbox_xchacha20poly1305_KEYBYTES", "crypto_secretbox_xchacha20poly1305_MACBYTES", "crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_secretbox_xchacha20poly1305_NONCEBYTES", "crypto_secretbox_xsalsa20poly1305_KEYBYTES", "crypto_secretbox_xsalsa20poly1305_MACBYTES", "crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX", "crypto_secretbox_xsalsa20poly1305_NONCEBYTES", "crypto_secretstream_xchacha20poly1305_ABYTES", "crypto_secretstream_xchacha20poly1305_HEADERBYTES", "crypto_secretstream_xchacha20poly1305_KEYBYTES", "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_secretstream_xchacha20poly1305_TAG_FINAL", "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE", "crypto_secretstream_xchacha20poly1305_TAG_PUSH", "crypto_secretstream_xchacha20poly1305_TAG_REKEY", "crypto_shorthash_BYTES", "crypto_shorthash_KEYBYTES", "crypto_shorthash_siphash24_BYTES", "crypto_shorthash_siphash24_KEYBYTES", "crypto_shorthash_siphashx24_BYTES", "crypto_shorthash_siphashx24_KEYBYTES", "crypto_sign_BYTES", "crypto_sign_MESSAGEBYTES_MAX", "crypto_sign_PUBLICKEYBYTES", "crypto_sign_SECRETKEYBYTES", "crypto_sign_SEEDBYTES", "crypto_sign_ed25519_BYTES", "crypto_sign_ed25519_MESSAGEBYTES_MAX", "crypto_sign_ed25519_PUBLICKEYBYTES", "crypto_sign_ed25519_SECRETKEYBYTES", "crypto_sign_ed25519_SEEDBYTES", "crypto_stream_KEYBYTES", "crypto_stream_MESSAGEBYTES_MAX", "crypto_stream_NONCEBYTES", "crypto_stream_chacha20_IETF_KEYBYTES", "crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX", "crypto_stream_chacha20_IETF_NONCEBYTES", "crypto_stream_chacha20_KEYBYTES", "crypto_stream_chacha20_MESSAGEBYTES_MAX", "crypto_stream_chacha20_NONCEBYTES", "crypto_stream_chacha20_ietf_KEYBYTES", "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX", "crypto_stream_chacha20_ietf_NONCEBYTES", "crypto_stream_salsa2012_KEYBYTES", "crypto_stream_salsa2012_MESSAGEBYTES_MAX", "crypto_stream_salsa2012_NONCEBYTES", "crypto_stream_salsa208_KEYBYTES", "crypto_stream_salsa208_MESSAGEBYTES_MAX", "crypto_stream_salsa208_NONCEBYTES", "crypto_stream_salsa20_KEYBYTES", "crypto_stream_salsa20_MESSAGEBYTES_MAX", "crypto_stream_salsa20_NONCEBYTES", "crypto_stream_xchacha20_KEYBYTES", "crypto_stream_xchacha20_MESSAGEBYTES_MAX", "crypto_stream_xchacha20_NONCEBYTES", "crypto_stream_xsalsa20_KEYBYTES", "crypto_stream_xsalsa20_MESSAGEBYTES_MAX", "crypto_stream_xsalsa20_NONCEBYTES", "crypto_verify_16_BYTES", "crypto_verify_32_BYTES", "crypto_verify_64_BYTES"]; for (_ = 0; _ < s.length; _++) "function" == typeof (c = t["_" + s[_].toLowerCase()]) && (e[s[_]] = c()); var n = ["SODIUM_VERSION_STRING", "crypto_pwhash_STRPREFIX", "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"]; for (_ = 0; _ < n.length; _++) { var c; "function" == typeof (c = t["_" + n[_].toLowerCase()]) && (e[n[_]] = t.UTF8ToString(c())) } } t = r; try { a(); var _ = new Uint8Array([98, 97, 108, 108, 115]),
					s = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES),
					n = e.randombytes_buf(e.crypto_secretbox_KEYBYTES),
					c = e.crypto_secretbox_easy(_, s, n),
					o = e.crypto_secretbox_open_easy(c, s, n); if (e.memcmp(_, o)) return } catch (e) { if (null == t.useBackupModule) throw new Error("Both wasm and asm failed to load" + e) } t.useBackupModule(), a() }));

		function _(e) { if ("function" == typeof TextEncoder) return (new TextEncoder).encode(e);
			e = unescape(encodeURIComponent(e)); for (var r = new Uint8Array(e.length), t = 0, a = e.length; t < a; t++) r[t] = e.charCodeAt(t); return r }

		function s(e) { if ("function" == typeof TextDecoder) return new TextDecoder("utf-8", { fatal: !0 }).decode(e); var r = 8192,
				t = Math.ceil(e.length / r); if (t <= 1) try { return decodeURIComponent(escape(String.fromCharCode.apply(null, e))) } catch (e) { throw new TypeError("The encoded data was not valid.") }
			for (var a = "", _ = 0, n = 0; n < t; n++) { var c = Array.prototype.slice.call(e, n * r + _, (n + 1) * r + _); if (0 != c.length) { var o, h = c.length,
						p = 0;
					do { var y = c[--h];
						y >= 240 ? (p = 4, o = !0) : y >= 224 ? (p = 3, o = !0) : y >= 192 ? (p = 2, o = !0) : y < 128 && (p = 1, o = !0) } while (!o); for (var i = p - (c.length - h), l = 0; l < i; l++) _--, c.pop();
					a += s(c) } } return a }

		function n(e) { e = m(null, e, "input"); for (var r, t, a, _ = "", s = 0; s < e.length; s++) a = 87 + (t = 15 & e[s]) + (t - 10 >> 8 & -39) << 8 | 87 + (r = e[s] >>> 4) + (r - 10 >> 8 & -39), _ += String.fromCharCode(255 & a) + String.fromCharCode(a >>> 8); return _ } var c = { ORIGINAL: 1, ORIGINAL_NO_PADDING: 3, URLSAFE: 5, URLSAFE_NO_PADDING: 7 };

		function o(e) { if (null == e) return c.URLSAFE_NO_PADDING; if (e !== c.ORIGINAL && e !== c.ORIGINAL_NO_PADDING && e !== c.URLSAFE && e != c.URLSAFE_NO_PADDING) throw new Error("unsupported base64 variant"); return e }

		function h(e, r) { r = o(r), e = m(_, e, "input"); var a, _ = [],
				n = 0 | Math.floor(e.length / 3),
				c = e.length - 3 * n,
				h = 4 * n + (0 !== c ? 0 == (2 & r) ? 4 : 2 + (c >>> 1) : 0),
				p = new l(h + 1),
				y = u(e); return _.push(y), _.push(p.address), 0 === t._sodium_bin2base64(p.address, p.length, y, e.length, r) && g(_, "conversion failed"), p.length = h, a = s(p.to_Uint8Array()), v(_), a }

		function p(e, r) { var t = r || "uint8array"; if (!y(t)) throw new Error(t + " output format is not available"); if (e instanceof l) { if ("uint8array" === t) return e.to_Uint8Array(); if ("text" === t) return s(e.to_Uint8Array()); if ("hex" === t) return n(e.to_Uint8Array()); if ("base64" === t) return h(e.to_Uint8Array(), c.URLSAFE_NO_PADDING); throw new Error('What is output format "' + t + '"?') } if ("object" == typeof e) { for (var a = Object.keys(e), _ = {}, o = 0; o < a.length; o++) _[a[o]] = p(e[a[o]], t); return _ } if ("string" == typeof e) return e; throw new TypeError("Cannot format output") }

		function y(e) { for (var r = ["uint8array", "text", "hex", "base64"], t = 0; t < r.length; t++)
				if (r[t] === e) return !0; return !1 }

		function i(e) { if (e) { if ("string" != typeof e) throw new TypeError("When defined, the output format must be a string"); if (!y(e)) throw new Error(e + " is not a supported output format") } }

		function l(e) { this.length = e, this.address = d(e) }

		function u(e) { var r = d(e.length); return t.HEAPU8.set(e, r), r }

		function d(e) { var r = t._malloc(e); if (0 === r) throw { message: "_malloc() failed", length: e }; return r }

		function v(e) { if (e)
				for (var r = 0; r < e.length; r++) a = e[r], t._free(a); var a }

		function g(e, r) { throw v(e), new Error(r) }

		function b(e, r) { throw v(e), new TypeError(r) }

		function f(e, r, t) { null == r && b(e, t + " cannot be null or undefined") }

		function m(e, r, t) { return f(e, r, t), r instanceof Uint8Array ? r : "string" == typeof r ? _(r) : void b(e, "unsupported input type for " + t) }

		function E(e, r, a, _, s, n) { var c = [];
			i(n); var o = null;
			null != e && (o = u(e = m(c, e, "secret_nonce")), e.length, c.push(o)), r = m(c, r, "ciphertext"); var h, y = t._crypto_aead_chacha20poly1305_abytes(),
				d = r.length;
			d < y && b(c, "ciphertext is too short"), h = u(r), c.push(h); var f = null,
				E = 0;
			null != a && (f = u(a = m(c, a, "additional_data")), E = a.length, c.push(f)), _ = m(c, _, "public_nonce"); var x, k = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
			_.length !== k && b(c, "invalid public_nonce length"), x = u(_), c.push(x), s = m(c, s, "key"); var S, T = 0 | t._crypto_aead_chacha20poly1305_keybytes();
			s.length !== T && b(c, "invalid key length"), S = u(s), c.push(S); var w = new l(d - t._crypto_aead_chacha20poly1305_abytes() | 0),
				Y = w.address; if (c.push(Y), 0 === t._crypto_aead_chacha20poly1305_decrypt(Y, null, o, h, d, 0, f, E, 0, x, S)) { var B = p(w, n); return v(c), B } g(c, "ciphertext cannot be decrypted using that key") }

		function x(e, r, a, _, s, n, c) { var o = [];
			i(c); var h = null;
			null != e && (h = u(e = m(o, e, "secret_nonce")), e.length, o.push(h)); var y = u(r = m(o, r, "ciphertext")),
				d = r.length;
			o.push(y), a = m(o, a, "mac"); var f, E = 0 | t._crypto_box_macbytes();
			a.length !== E && b(o, "invalid mac length"), f = u(a), o.push(f); var x = null,
				k = 0;
			null != _ && (x = u(_ = m(o, _, "additional_data")), k = _.length, o.push(x)), s = m(o, s, "public_nonce"); var S, T = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
			s.length !== T && b(o, "invalid public_nonce length"), S = u(s), o.push(S), n = m(o, n, "key"); var w, Y = 0 | t._crypto_aead_chacha20poly1305_keybytes();
			n.length !== Y && b(o, "invalid key length"), w = u(n), o.push(w); var B = new l(0 | d),
				A = B.address; if (o.push(A), 0 === t._crypto_aead_chacha20poly1305_decrypt_detached(A, h, y, d, 0, f, x, k, 0, S, w)) { var K = p(B, c); return v(o), K } g(o, "ciphertext cannot be decrypted using that key") }

		function k(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(h + t._crypto_aead_chacha20poly1305_abytes() | 0),
				w = T.address; if (c.push(w), 0 === t._crypto_aead_chacha20poly1305_encrypt(w, null, o, h, 0, y, d, 0, f, E, k)) { var Y = p(T, n); return v(c), Y } g(c, "invalid usage") }

		function S(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(0 | h),
				w = T.address;
			c.push(w); var Y = new l(0 | t._crypto_aead_chacha20poly1305_abytes()),
				B = Y.address; if (c.push(B), 0 === t._crypto_aead_chacha20poly1305_encrypt_detached(w, B, null, o, h, 0, y, d, 0, f, E, k)) { var A = p({ ciphertext: T, mac: Y }, n); return v(c), A } g(c, "invalid usage") }

		function T(e, r, a, _, s, n) { var c = [];
			i(n); var o = null;
			null != e && (o = u(e = m(c, e, "secret_nonce")), e.length, c.push(o)), r = m(c, r, "ciphertext"); var h, y = t._crypto_aead_chacha20poly1305_ietf_abytes(),
				d = r.length;
			d < y && b(c, "ciphertext is too short"), h = u(r), c.push(h); var f = null,
				E = 0;
			null != a && (f = u(a = m(c, a, "additional_data")), E = a.length, c.push(f)), _ = m(c, _, "public_nonce"); var x, k = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
			_.length !== k && b(c, "invalid public_nonce length"), x = u(_), c.push(x), s = m(c, s, "key"); var S, T = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
			s.length !== T && b(c, "invalid key length"), S = u(s), c.push(S); var w = new l(d - t._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
				Y = w.address; if (c.push(Y), 0 === t._crypto_aead_chacha20poly1305_ietf_decrypt(Y, null, o, h, d, 0, f, E, 0, x, S)) { var B = p(w, n); return v(c), B } g(c, "ciphertext cannot be decrypted using that key") }

		function w(e, r, a, _, s, n, c) { var o = [];
			i(c); var h = null;
			null != e && (h = u(e = m(o, e, "secret_nonce")), e.length, o.push(h)); var y = u(r = m(o, r, "ciphertext")),
				d = r.length;
			o.push(y), a = m(o, a, "mac"); var f, E = 0 | t._crypto_box_macbytes();
			a.length !== E && b(o, "invalid mac length"), f = u(a), o.push(f); var x = null,
				k = 0;
			null != _ && (x = u(_ = m(o, _, "additional_data")), k = _.length, o.push(x)), s = m(o, s, "public_nonce"); var S, T = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
			s.length !== T && b(o, "invalid public_nonce length"), S = u(s), o.push(S), n = m(o, n, "key"); var w, Y = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
			n.length !== Y && b(o, "invalid key length"), w = u(n), o.push(w); var B = new l(0 | d),
				A = B.address; if (o.push(A), 0 === t._crypto_aead_chacha20poly1305_ietf_decrypt_detached(A, h, y, d, 0, f, x, k, 0, S, w)) { var K = p(B, c); return v(o), K } g(o, "ciphertext cannot be decrypted using that key") }

		function Y(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(h + t._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
				w = T.address; if (c.push(w), 0 === t._crypto_aead_chacha20poly1305_ietf_encrypt(w, null, o, h, 0, y, d, 0, f, E, k)) { var Y = p(T, n); return v(c), Y } g(c, "invalid usage") }

		function B(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(0 | h),
				w = T.address;
			c.push(w); var Y = new l(0 | t._crypto_aead_chacha20poly1305_ietf_abytes()),
				B = Y.address; if (c.push(B), 0 === t._crypto_aead_chacha20poly1305_ietf_encrypt_detached(w, B, null, o, h, 0, y, d, 0, f, E, k)) { var A = p({ ciphertext: T, mac: Y }, n); return v(c), A } g(c, "invalid usage") }

		function A(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_aead_chacha20poly1305_ietf_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_aead_chacha20poly1305_ietf_keygen(_); var s = p(a, e); return v(r), s }

		function K(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_aead_chacha20poly1305_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_aead_chacha20poly1305_keygen(_); var s = p(a, e); return v(r), s }

		function M(e, r, a, _, s, n) { var c = [];
			i(n); var o = null;
			null != e && (o = u(e = m(c, e, "secret_nonce")), e.length, c.push(o)), r = m(c, r, "ciphertext"); var h, y = t._crypto_aead_xchacha20poly1305_ietf_abytes(),
				d = r.length;
			d < y && b(c, "ciphertext is too short"), h = u(r), c.push(h); var f = null,
				E = 0;
			null != a && (f = u(a = m(c, a, "additional_data")), E = a.length, c.push(f)), _ = m(c, _, "public_nonce"); var x, k = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
			_.length !== k && b(c, "invalid public_nonce length"), x = u(_), c.push(x), s = m(c, s, "key"); var S, T = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
			s.length !== T && b(c, "invalid key length"), S = u(s), c.push(S); var w = new l(d - t._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
				Y = w.address; if (c.push(Y), 0 === t._crypto_aead_xchacha20poly1305_ietf_decrypt(Y, null, o, h, d, 0, f, E, 0, x, S)) { var B = p(w, n); return v(c), B } g(c, "ciphertext cannot be decrypted using that key") }

		function I(e, r, a, _, s, n, c) { var o = [];
			i(c); var h = null;
			null != e && (h = u(e = m(o, e, "secret_nonce")), e.length, o.push(h)); var y = u(r = m(o, r, "ciphertext")),
				d = r.length;
			o.push(y), a = m(o, a, "mac"); var f, E = 0 | t._crypto_box_macbytes();
			a.length !== E && b(o, "invalid mac length"), f = u(a), o.push(f); var x = null,
				k = 0;
			null != _ && (x = u(_ = m(o, _, "additional_data")), k = _.length, o.push(x)), s = m(o, s, "public_nonce"); var S, T = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
			s.length !== T && b(o, "invalid public_nonce length"), S = u(s), o.push(S), n = m(o, n, "key"); var w, Y = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
			n.length !== Y && b(o, "invalid key length"), w = u(n), o.push(w); var B = new l(0 | d),
				A = B.address; if (o.push(A), 0 === t._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(A, h, y, d, 0, f, x, k, 0, S, w)) { var K = p(B, c); return v(o), K } g(o, "ciphertext cannot be decrypted using that key") }

		function N(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(h + t._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
				w = T.address; if (c.push(w), 0 === t._crypto_aead_xchacha20poly1305_ietf_encrypt(w, null, o, h, 0, y, d, 0, f, E, k)) { var Y = p(T, n); return v(c), Y } g(c, "invalid usage") }

		function L(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "message")),
				h = e.length;
			c.push(o); var y = null,
				d = 0;
			null != r && (y = u(r = m(c, r, "additional_data")), d = r.length, c.push(y)); var f = null;
			null != a && (f = u(a = m(c, a, "secret_nonce")), a.length, c.push(f)), _ = m(c, _, "public_nonce"); var E, x = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
			_.length !== x && b(c, "invalid public_nonce length"), E = u(_), c.push(E), s = m(c, s, "key"); var k, S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
			s.length !== S && b(c, "invalid key length"), k = u(s), c.push(k); var T = new l(0 | h),
				w = T.address;
			c.push(w); var Y = new l(0 | t._crypto_aead_xchacha20poly1305_ietf_abytes()),
				B = Y.address; if (c.push(B), 0 === t._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(w, B, null, o, h, 0, y, d, 0, f, E, k)) { var A = p({ ciphertext: T, mac: Y }, n); return v(c), A } g(c, "invalid usage") }

		function U(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_aead_xchacha20poly1305_ietf_keygen(_); var s = p(a, e); return v(r), s }

		function O(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_auth_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_auth_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_auth(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function C(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_auth_hmacsha256_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_auth_hmacsha256_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_auth_hmacsha256(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function R(e, r) { var a = [];
			i(r), f(a, e, "state_address"); var _ = new l(0 | t._crypto_auth_hmacsha256_bytes()),
				s = _.address; if (a.push(s), 0 == (0 | t._crypto_auth_hmacsha256_final(e, s))) { var n = (t._free(e), p(_, r)); return v(a), n } g(a, "invalid usage") }

		function P(e, r) { var a = [];
			i(r); var _ = null,
				s = 0;
			null != e && (_ = u(e = m(a, e, "key")), s = e.length, a.push(_)); var n = new l(208).address; if (0 == (0 | t._crypto_auth_hmacsha256_init(n, _, s))) { var c = n; return v(a), c } g(a, "invalid usage") }

		function G(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_auth_hmacsha256_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_auth_hmacsha256_keygen(_); var s = p(a, e); return v(r), s }

		function X(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_auth_hmacsha256_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function D(e, r, a) { var _ = [];
			e = m(_, e, "tag"); var s, n = 0 | t._crypto_auth_hmacsha256_bytes();
			e.length !== n && b(_, "invalid tag length"), s = u(e), _.push(s); var c = u(r = m(_, r, "message")),
				o = r.length;
			_.push(c), a = m(_, a, "key"); var h, p = 0 | t._crypto_auth_hmacsha256_keybytes();
			a.length !== p && b(_, "invalid key length"), h = u(a), _.push(h); var y = 0 == (0 | t._crypto_auth_hmacsha256_verify(s, c, o, 0, h)); return v(_), y }

		function F(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_auth_hmacsha512_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_auth_hmacsha512_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_auth_hmacsha512(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function V(e, r) { var a = [];
			i(r), f(a, e, "state_address"); var _ = new l(0 | t._crypto_auth_hmacsha512_bytes()),
				s = _.address; if (a.push(s), 0 == (0 | t._crypto_auth_hmacsha512_final(e, s))) { var n = (t._free(e), p(_, r)); return v(a), n } g(a, "invalid usage") }

		function H(e, r) { var a = [];
			i(r); var _ = null,
				s = 0;
			null != e && (_ = u(e = m(a, e, "key")), s = e.length, a.push(_)); var n = new l(416).address; if (0 == (0 | t._crypto_auth_hmacsha512_init(n, _, s))) { var c = n; return v(a), c } g(a, "invalid usage") }

		function q(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_auth_hmacsha512_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_auth_hmacsha512_keygen(_); var s = p(a, e); return v(r), s }

		function j(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_auth_hmacsha512_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function z(e, r, a) { var _ = [];
			e = m(_, e, "tag"); var s, n = 0 | t._crypto_auth_hmacsha512_bytes();
			e.length !== n && b(_, "invalid tag length"), s = u(e), _.push(s); var c = u(r = m(_, r, "message")),
				o = r.length;
			_.push(c), a = m(_, a, "key"); var h, p = 0 | t._crypto_auth_hmacsha512_keybytes();
			a.length !== p && b(_, "invalid key length"), h = u(a), _.push(h); var y = 0 == (0 | t._crypto_auth_hmacsha512_verify(s, c, o, 0, h)); return v(_), y }

		function W(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_auth_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_auth_keygen(_); var s = p(a, e); return v(r), s }

		function J(e, r, a) { var _ = [];
			e = m(_, e, "tag"); var s, n = 0 | t._crypto_auth_bytes();
			e.length !== n && b(_, "invalid tag length"), s = u(e), _.push(s); var c = u(r = m(_, r, "message")),
				o = r.length;
			_.push(c), a = m(_, a, "key"); var h, p = 0 | t._crypto_auth_keybytes();
			a.length !== p && b(_, "invalid key length"), h = u(a), _.push(h); var y = 0 == (0 | t._crypto_auth_verify(s, c, o, 0, h)); return v(_), y }

		function Q(e, r, a) { var _ = [];
			i(a), e = m(_, e, "publicKey"); var s, n = 0 | t._crypto_box_publickeybytes();
			e.length !== n && b(_, "invalid publicKey length"), s = u(e), _.push(s), r = m(_, r, "privateKey"); var c, o = 0 | t._crypto_box_secretkeybytes();
			r.length !== o && b(_, "invalid privateKey length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_box_beforenmbytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_box_beforenm(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function Z(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes()),
				_ = a.address;
			r.push(_); var s = new l(0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes()),
				n = s.address;
			r.push(n), t._crypto_box_curve25519xchacha20poly1305_keypair(_, n); var c = p({ publicKey: a, privateKey: s, keyType: "curve25519" }, e); return v(r), c }

		function $(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "publicKey"); var c, o = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
			r.length !== o && b(_, "invalid publicKey length"), c = u(r), _.push(c); var h = new l(n + t._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
				y = h.address;
			_.push(y), t._crypto_box_curve25519xchacha20poly1305_seal(y, s, n, 0, c); var d = p(h, a); return v(_), d }

		function ee(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "ciphertext"); var n, c = t._crypto_box_curve25519xchacha20poly1305_sealbytes(),
				o = e.length;
			o < c && b(s, "ciphertext is too short"), n = u(e), s.push(n), r = m(s, r, "publicKey"); var h, y = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
			r.length !== y && b(s, "invalid publicKey length"), h = u(r), s.push(h), a = m(s, a, "secretKey"); var d, g = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
			a.length !== g && b(s, "invalid secretKey length"), d = u(a), s.push(d); var f = new l(o - t._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
				E = f.address;
			s.push(E), t._crypto_box_curve25519xchacha20poly1305_seal_open(E, n, o, 0, h, d); var x = p(f, _); return v(s), x }

		function re(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "message")),
				o = e.length;
			n.push(c), r = m(n, r, "nonce"); var h, y = 0 | t._crypto_box_noncebytes();
			r.length !== y && b(n, "invalid nonce length"), h = u(r), n.push(h), a = m(n, a, "publicKey"); var d, f = 0 | t._crypto_box_publickeybytes();
			a.length !== f && b(n, "invalid publicKey length"), d = u(a), n.push(d), _ = m(n, _, "privateKey"); var E, x = 0 | t._crypto_box_secretkeybytes();
			_.length !== x && b(n, "invalid privateKey length"), E = u(_), n.push(E); var k = new l(0 | o),
				S = k.address;
			n.push(S); var T = new l(0 | t._crypto_box_macbytes()),
				w = T.address; if (n.push(w), 0 == (0 | t._crypto_box_detached(S, w, c, o, 0, h, d, E))) { var Y = p({ ciphertext: k, mac: T }, s); return v(n), Y } g(n, "invalid usage") }

		function te(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "message")),
				o = e.length;
			n.push(c), r = m(n, r, "nonce"); var h, y = 0 | t._crypto_box_noncebytes();
			r.length !== y && b(n, "invalid nonce length"), h = u(r), n.push(h), a = m(n, a, "publicKey"); var d, f = 0 | t._crypto_box_publickeybytes();
			a.length !== f && b(n, "invalid publicKey length"), d = u(a), n.push(d), _ = m(n, _, "privateKey"); var E, x = 0 | t._crypto_box_secretkeybytes();
			_.length !== x && b(n, "invalid privateKey length"), E = u(_), n.push(E); var k = new l(o + t._crypto_box_macbytes() | 0),
				S = k.address; if (n.push(S), 0 == (0 | t._crypto_box_easy(S, c, o, 0, h, d, E))) { var T = p(k, s); return v(n), T } g(n, "invalid usage") }

		function ae(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_box_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "sharedKey"); var y, d = 0 | t._crypto_box_beforenmbytes();
			a.length !== d && b(s, "invalid sharedKey length"), y = u(a), s.push(y); var f = new l(c + t._crypto_box_macbytes() | 0),
				E = f.address; if (s.push(E), 0 == (0 | t._crypto_box_easy_afternm(E, n, c, 0, o, y))) { var x = p(f, _); return v(s), x } g(s, "invalid usage") }

		function _e(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_box_publickeybytes()),
				_ = a.address;
			r.push(_); var s = new l(0 | t._crypto_box_secretkeybytes()),
				n = s.address; if (r.push(n), 0 == (0 | t._crypto_box_keypair(_, n))) { var c = { publicKey: p(a, e), privateKey: p(s, e), keyType: "x25519" }; return v(r), c } g(r, "internal error") }

		function se(e, r, a, _, s, n) { var c = [];
			i(n); var o = u(e = m(c, e, "ciphertext")),
				h = e.length;
			c.push(o), r = m(c, r, "mac"); var y, d = 0 | t._crypto_box_macbytes();
			r.length !== d && b(c, "invalid mac length"), y = u(r), c.push(y), a = m(c, a, "nonce"); var f, E = 0 | t._crypto_box_noncebytes();
			a.length !== E && b(c, "invalid nonce length"), f = u(a), c.push(f), _ = m(c, _, "publicKey"); var x, k = 0 | t._crypto_box_publickeybytes();
			_.length !== k && b(c, "invalid publicKey length"), x = u(_), c.push(x), s = m(c, s, "privateKey"); var S, T = 0 | t._crypto_box_secretkeybytes();
			s.length !== T && b(c, "invalid privateKey length"), S = u(s), c.push(S); var w = new l(0 | h),
				Y = w.address; if (c.push(Y), 0 == (0 | t._crypto_box_open_detached(Y, o, y, h, 0, f, x, S))) { var B = p(w, n); return v(c), B } g(c, "incorrect key pair for the given ciphertext") }

		function ne(e, r, a, _, s) { var n = [];
			i(s), e = m(n, e, "ciphertext"); var c, o = t._crypto_box_macbytes(),
				h = e.length;
			h < o && b(n, "ciphertext is too short"), c = u(e), n.push(c), r = m(n, r, "nonce"); var y, d = 0 | t._crypto_box_noncebytes();
			r.length !== d && b(n, "invalid nonce length"), y = u(r), n.push(y), a = m(n, a, "publicKey"); var f, E = 0 | t._crypto_box_publickeybytes();
			a.length !== E && b(n, "invalid publicKey length"), f = u(a), n.push(f), _ = m(n, _, "privateKey"); var x, k = 0 | t._crypto_box_secretkeybytes();
			_.length !== k && b(n, "invalid privateKey length"), x = u(_), n.push(x); var S = new l(h - t._crypto_box_macbytes() | 0),
				T = S.address; if (n.push(T), 0 == (0 | t._crypto_box_open_easy(T, c, h, 0, y, f, x))) { var w = p(S, s); return v(n), w } g(n, "incorrect key pair for the given ciphertext") }

		function ce(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "ciphertext")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_box_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "sharedKey"); var y, d = 0 | t._crypto_box_beforenmbytes();
			a.length !== d && b(s, "invalid sharedKey length"), y = u(a), s.push(y); var f = new l(c - t._crypto_box_macbytes() | 0),
				E = f.address; if (s.push(E), 0 == (0 | t._crypto_box_open_easy_afternm(E, n, c, 0, o, y))) { var x = p(f, _); return v(s), x } g(s, "incorrect secret key for the given ciphertext") }

		function oe(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "publicKey"); var c, o = 0 | t._crypto_box_publickeybytes();
			r.length !== o && b(_, "invalid publicKey length"), c = u(r), _.push(c); var h = new l(n + t._crypto_box_sealbytes() | 0),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_box_seal(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function he(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "ciphertext"); var n, c = t._crypto_box_sealbytes(),
				o = e.length;
			o < c && b(s, "ciphertext is too short"), n = u(e), s.push(n), r = m(s, r, "publicKey"); var h, y = 0 | t._crypto_box_publickeybytes();
			r.length !== y && b(s, "invalid publicKey length"), h = u(r), s.push(h), a = m(s, a, "privateKey"); var d, f = 0 | t._crypto_box_secretkeybytes();
			a.length !== f && b(s, "invalid privateKey length"), d = u(a), s.push(d); var E = new l(o - t._crypto_box_sealbytes() | 0),
				x = E.address; if (s.push(x), 0 == (0 | t._crypto_box_seal_open(x, n, o, 0, h, d))) { var k = p(E, _); return v(s), k } g(s, "incorrect key pair for the given ciphertext") }

		function pe(e, r) { var a = [];
			i(r), e = m(a, e, "seed"); var _, s = 0 | t._crypto_box_seedbytes();
			e.length !== s && b(a, "invalid seed length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_box_publickeybytes()),
				c = n.address;
			a.push(c); var o = new l(0 | t._crypto_box_secretkeybytes()),
				h = o.address; if (a.push(h), 0 == (0 | t._crypto_box_seed_keypair(c, h, _))) { var y = { publicKey: p(n, r), privateKey: p(o, r), keyType: "x25519" }; return v(a), y } g(a, "invalid usage") }

		function ye(e, r, a) { var _ = [];
			i(a), e = m(_, e, "p"); var s, n = 0 | t._crypto_core_ed25519_bytes();
			e.length !== n && b(_, "invalid p length"), s = u(e), _.push(s), r = m(_, r, "q"); var c, o = 0 | t._crypto_core_ed25519_bytes();
			r.length !== o && b(_, "invalid q length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ed25519_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_core_ed25519_add(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "input is an invalid element") }

		function ie(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "r"));
			e.length, a.push(_); var s = new l(0 | t._crypto_core_ed25519_bytes()),
				n = s.address; if (a.push(n), 0 == (0 | t._crypto_core_ed25519_from_hash(n, _))) { var c = p(s, r); return v(a), c } g(a, "invalid usage") }

		function le(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "r"));
			e.length, a.push(_); var s = new l(0 | t._crypto_core_ed25519_bytes()),
				n = s.address; if (a.push(n), 0 == (0 | t._crypto_core_ed25519_from_uniform(n, _))) { var c = p(s, r); return v(a), c } g(a, "invalid usage") }

		function ue(e, r) { var a = [];
			i(r), e = m(a, e, "repr"); var _, s = 0 | t._crypto_core_ed25519_bytes();
			e.length !== s && b(a, "invalid repr length"), _ = u(e), a.push(_); var n = 1 == (0 | t._crypto_core_ed25519_is_valid_point(_)); return v(a), n }

		function de(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_core_ed25519_bytes()),
				_ = a.address;
			r.push(_), t._crypto_core_ed25519_random(_); var s = p(a, e); return v(r), s }

		function ve(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ed25519_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ed25519_scalar_add(y, s, c); var d = p(h, a); return v(_), d }

		function ge(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ed25519_scalar_complement(c, _); var o = p(n, r); return v(a), o }

		function be(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_core_ed25519_scalar_invert(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid reciprocate") }

		function fe(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ed25519_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ed25519_scalar_mul(y, s, c); var d = p(h, a); return v(_), d }

		function me(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ed25519_scalar_negate(c, _); var o = p(n, r); return v(a), o }

		function Ee(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				_ = a.address;
			r.push(_), t._crypto_core_ed25519_scalar_random(_); var s = p(a, e); return v(r), s }

		function xe(e, r) { var a = [];
			i(r), e = m(a, e, "sample"); var _, s = 0 | t._crypto_core_ed25519_nonreducedscalarbytes();
			e.length !== s && b(a, "invalid sample length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ed25519_scalar_reduce(c, _); var o = p(n, r); return v(a), o }

		function ke(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ed25519_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ed25519_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ed25519_scalar_sub(y, s, c); var d = p(h, a); return v(_), d }

		function Se(e, r, a) { var _ = [];
			i(a), e = m(_, e, "p"); var s, n = 0 | t._crypto_core_ed25519_bytes();
			e.length !== n && b(_, "invalid p length"), s = u(e), _.push(s), r = m(_, r, "q"); var c, o = 0 | t._crypto_core_ed25519_bytes();
			r.length !== o && b(_, "invalid q length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ed25519_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_core_ed25519_sub(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "input is an invalid element") }

		function Te(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "input"); var n, c = 0 | t._crypto_core_hchacha20_inputbytes();
			e.length !== c && b(s, "invalid input length"), n = u(e), s.push(n), r = m(s, r, "privateKey"); var o, h = 0 | t._crypto_core_hchacha20_keybytes();
			r.length !== h && b(s, "invalid privateKey length"), o = u(r), s.push(o); var y = null;
			null != a && (y = u(a = m(s, a, "constant")), a.length, s.push(y)); var d = new l(0 | t._crypto_core_hchacha20_outputbytes()),
				f = d.address; if (s.push(f), 0 == (0 | t._crypto_core_hchacha20(f, n, o, y))) { var E = p(d, _); return v(s), E } g(s, "invalid usage") }

		function we(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "input"); var n, c = 0 | t._crypto_core_hsalsa20_inputbytes();
			e.length !== c && b(s, "invalid input length"), n = u(e), s.push(n), r = m(s, r, "privateKey"); var o, h = 0 | t._crypto_core_hsalsa20_keybytes();
			r.length !== h && b(s, "invalid privateKey length"), o = u(r), s.push(o); var y = null;
			null != a && (y = u(a = m(s, a, "constant")), a.length, s.push(y)); var d = new l(0 | t._crypto_core_hsalsa20_outputbytes()),
				f = d.address; if (s.push(f), 0 == (0 | t._crypto_core_hsalsa20(f, n, o, y))) { var E = p(d, _); return v(s), E } g(s, "invalid usage") }

		function Ye(e, r, a) { var _ = [];
			i(a), e = m(_, e, "p"); var s, n = 0 | t._crypto_core_ristretto255_bytes();
			e.length !== n && b(_, "invalid p length"), s = u(e), _.push(s), r = m(_, r, "q"); var c, o = 0 | t._crypto_core_ristretto255_bytes();
			r.length !== o && b(_, "invalid q length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ristretto255_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_core_ristretto255_add(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "input is an invalid element") }

		function Be(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "r"));
			e.length, a.push(_); var s = new l(0 | t._crypto_core_ristretto255_bytes()),
				n = s.address; if (a.push(n), 0 == (0 | t._crypto_core_ristretto255_from_hash(n, _))) { var c = p(s, r); return v(a), c } g(a, "invalid usage") }

		function Ae(e, r) { var a = [];
			i(r), e = m(a, e, "repr"); var _, s = 0 | t._crypto_core_ristretto255_bytes();
			e.length !== s && b(a, "invalid repr length"), _ = u(e), a.push(_); var n = 1 == (0 | t._crypto_core_ristretto255_is_valid_point(_)); return v(a), n }

		function Ke(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_core_ristretto255_bytes()),
				_ = a.address;
			r.push(_), t._crypto_core_ristretto255_random(_); var s = p(a, e); return v(r), s }

		function Me(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ristretto255_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ristretto255_scalar_add(y, s, c); var d = p(h, a); return v(_), d }

		function Ie(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ristretto255_scalar_complement(c, _); var o = p(n, r); return v(a), o }

		function Ne(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_core_ristretto255_scalar_invert(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid reciprocate") }

		function Le(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ristretto255_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ristretto255_scalar_mul(y, s, c); var d = p(h, a); return v(_), d }

		function Ue(e, r) { var a = [];
			i(r), e = m(a, e, "s"); var _, s = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== s && b(a, "invalid s length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ristretto255_scalar_negate(c, _); var o = p(n, r); return v(a), o }

		function Oe(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				_ = a.address;
			r.push(_), t._crypto_core_ristretto255_scalar_random(_); var s = p(a, e); return v(r), s }

		function Ce(e, r) { var a = [];
			i(r), e = m(a, e, "sample"); var _, s = 0 | t._crypto_core_ristretto255_nonreducedscalarbytes();
			e.length !== s && b(a, "invalid sample length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				c = n.address;
			a.push(c), t._crypto_core_ristretto255_scalar_reduce(c, _); var o = p(n, r); return v(a), o }

		function Re(e, r, a) { var _ = [];
			i(a), e = m(_, e, "x"); var s, n = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== n && b(_, "invalid x length"), s = u(e), _.push(s), r = m(_, r, "y"); var c, o = 0 | t._crypto_core_ristretto255_scalarbytes();
			r.length !== o && b(_, "invalid y length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
				y = h.address;
			_.push(y), t._crypto_core_ristretto255_scalar_sub(y, s, c); var d = p(h, a); return v(_), d }

		function Pe(e, r, a) { var _ = [];
			i(a), e = m(_, e, "p"); var s, n = 0 | t._crypto_core_ristretto255_bytes();
			e.length !== n && b(_, "invalid p length"), s = u(e), _.push(s), r = m(_, r, "q"); var c, o = 0 | t._crypto_core_ristretto255_bytes();
			r.length !== o && b(_, "invalid q length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_core_ristretto255_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_core_ristretto255_sub(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "input is an invalid element") }

		function Ge(e, r, a, _) { var s = [];
			i(_), f(s, e, "hash_length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(s, "hash_length must be an unsigned integer"); var n = u(r = m(s, r, "message")),
				c = r.length;
			s.push(n); var o = null,
				h = 0;
			null != a && (o = u(a = m(s, a, "key")), h = a.length, s.push(o)); var y = new l(e |= 0),
				d = y.address; if (s.push(d), 0 == (0 | t._crypto_generichash(d, e, n, c, 0, o, h))) { var E = p(y, _); return v(s), E } g(s, "invalid usage") }

		function Xe(e, r, a, _, s) { var n = [];
			i(s), f(n, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(n, "subkey_len must be an unsigned integer"); var c = null,
				o = 0;
			null != r && (c = u(r = m(n, r, "key")), o = r.length, n.push(c)), a = m(n, a, "id"); var h, y = 0 | t._crypto_generichash_blake2b_saltbytes();
			a.length !== y && b(n, "invalid id length"), h = u(a), n.push(h), _ = m(n, _, "ctx"); var d, E = 0 | t._crypto_generichash_blake2b_personalbytes();
			_.length !== E && b(n, "invalid ctx length"), d = u(_), n.push(d); var x = new l(0 | e),
				k = x.address; if (n.push(k), 0 == (0 | t._crypto_generichash_blake2b_salt_personal(k, e, null, 0, 0, c, o, h, d))) { var S = p(x, s); return v(n), S } g(n, "invalid usage") }

		function De(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"), f(_, r, "hash_length"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(_, "hash_length must be an unsigned integer"); var s = new l(r |= 0),
				n = s.address; if (_.push(n), 0 == (0 | t._crypto_generichash_final(e, n, r))) { var c = (t._free(e), p(s, a)); return v(_), c } g(_, "invalid usage") }

		function Fe(e, r, a) { var _ = [];
			i(a); var s = null,
				n = 0;
			null != e && (s = u(e = m(_, e, "key")), n = e.length, _.push(s)), f(_, r, "hash_length"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(_, "hash_length must be an unsigned integer"); var c = new l(357).address; if (0 == (0 | t._crypto_generichash_init(c, s, n, r))) { var o = c; return v(_), o } g(_, "invalid usage") }

		function Ve(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_generichash_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_generichash_keygen(_); var s = p(a, e); return v(r), s }

		function He(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_generichash_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function qe(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "message")),
				s = e.length;
			a.push(_); var n = new l(0 | t._crypto_hash_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_hash(c, _, s, 0))) { var o = p(n, r); return v(a), o } g(a, "invalid usage") }

		function je(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "message")),
				s = e.length;
			a.push(_); var n = new l(0 | t._crypto_hash_sha256_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_hash_sha256(c, _, s, 0))) { var o = p(n, r); return v(a), o } g(a, "invalid usage") }

		function ze(e, r) { var a = [];
			i(r), f(a, e, "state_address"); var _ = new l(0 | t._crypto_hash_sha256_bytes()),
				s = _.address; if (a.push(s), 0 == (0 | t._crypto_hash_sha256_final(e, s))) { var n = (t._free(e), p(_, r)); return v(a), n } g(a, "invalid usage") }

		function We(e) { var r = [];
			i(e); var a = new l(104).address; if (0 == (0 | t._crypto_hash_sha256_init(a))) { var _ = a; return v(r), _ } g(r, "invalid usage") }

		function Je(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_hash_sha256_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function Qe(e, r) { var a = [];
			i(r); var _ = u(e = m(a, e, "message")),
				s = e.length;
			a.push(_); var n = new l(0 | t._crypto_hash_sha512_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_hash_sha512(c, _, s, 0))) { var o = p(n, r); return v(a), o } g(a, "invalid usage") }

		function Ze(e, r) { var a = [];
			i(r), f(a, e, "state_address"); var _ = new l(0 | t._crypto_hash_sha512_bytes()),
				s = _.address; if (a.push(s), 0 == (0 | t._crypto_hash_sha512_final(e, s))) { var n = (t._free(e), p(_, r)); return v(a), n } g(a, "invalid usage") }

		function $e(e) { var r = [];
			i(e); var a = new l(208).address; if (0 == (0 | t._crypto_hash_sha512_init(a))) { var _ = a; return v(r), _ } g(r, "invalid usage") }

		function er(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_hash_sha512_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function rr(e, r, a, s, n) { var c = [];
			i(n), f(c, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(c, "subkey_len must be an unsigned integer"), f(c, r, "subkey_id"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(c, "subkey_id must be an unsigned integer"), "string" != typeof a && b(c, "ctx must be a string"), a = _(a + "\0"), null != h && a.length - 1 !== h && b(c, "invalid ctx length"); var o = u(a),
				h = a.length - 1;
			c.push(o), s = m(c, s, "key"); var y, d = 0 | t._crypto_kdf_keybytes();
			s.length !== d && b(c, "invalid key length"), y = u(s), c.push(y); var g = new l(0 | e),
				E = g.address;
			c.push(E), t._crypto_kdf_derive_from_key(E, e, r, r >>> 24 >>> 8, o, y); var x = p(g, n); return v(c), x }

		function tr(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_kdf_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_kdf_keygen(_); var s = p(a, e); return v(r), s }

		function ar(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "clientPublicKey"); var n, c = 0 | t._crypto_kx_publickeybytes();
			e.length !== c && b(s, "invalid clientPublicKey length"), n = u(e), s.push(n), r = m(s, r, "clientSecretKey"); var o, h = 0 | t._crypto_kx_secretkeybytes();
			r.length !== h && b(s, "invalid clientSecretKey length"), o = u(r), s.push(o), a = m(s, a, "serverPublicKey"); var y, d = 0 | t._crypto_kx_publickeybytes();
			a.length !== d && b(s, "invalid serverPublicKey length"), y = u(a), s.push(y); var f = new l(0 | t._crypto_kx_sessionkeybytes()),
				E = f.address;
			s.push(E); var x = new l(0 | t._crypto_kx_sessionkeybytes()),
				k = x.address; if (s.push(k), 0 == (0 | t._crypto_kx_client_session_keys(E, k, n, o, y))) { var S = p({ sharedRx: f, sharedTx: x }, _); return v(s), S } g(s, "invalid usage") }

		function _r(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_kx_publickeybytes()),
				_ = a.address;
			r.push(_); var s = new l(0 | t._crypto_kx_secretkeybytes()),
				n = s.address; if (r.push(n), 0 == (0 | t._crypto_kx_keypair(_, n))) { var c = { publicKey: p(a, e), privateKey: p(s, e), keyType: "x25519" }; return v(r), c } g(r, "internal error") }

		function sr(e, r) { var a = [];
			i(r), e = m(a, e, "seed"); var _, s = 0 | t._crypto_kx_seedbytes();
			e.length !== s && b(a, "invalid seed length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_kx_publickeybytes()),
				c = n.address;
			a.push(c); var o = new l(0 | t._crypto_kx_secretkeybytes()),
				h = o.address; if (a.push(h), 0 == (0 | t._crypto_kx_seed_keypair(c, h, _))) { var y = { publicKey: p(n, r), privateKey: p(o, r), keyType: "x25519" }; return v(a), y } g(a, "internal error") }

		function nr(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "serverPublicKey"); var n, c = 0 | t._crypto_kx_publickeybytes();
			e.length !== c && b(s, "invalid serverPublicKey length"), n = u(e), s.push(n), r = m(s, r, "serverSecretKey"); var o, h = 0 | t._crypto_kx_secretkeybytes();
			r.length !== h && b(s, "invalid serverSecretKey length"), o = u(r), s.push(o), a = m(s, a, "clientPublicKey"); var y, d = 0 | t._crypto_kx_publickeybytes();
			a.length !== d && b(s, "invalid clientPublicKey length"), y = u(a), s.push(y); var f = new l(0 | t._crypto_kx_sessionkeybytes()),
				E = f.address;
			s.push(E); var x = new l(0 | t._crypto_kx_sessionkeybytes()),
				k = x.address; if (s.push(k), 0 == (0 | t._crypto_kx_server_session_keys(E, k, n, o, y))) { var S = p({ sharedRx: f, sharedTx: x }, _); return v(s), S } g(s, "invalid usage") }

		function cr(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_onetimeauth_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_onetimeauth_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_onetimeauth(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function or(e, r) { var a = [];
			i(r), f(a, e, "state_address"); var _ = new l(0 | t._crypto_onetimeauth_bytes()),
				s = _.address; if (a.push(s), 0 == (0 | t._crypto_onetimeauth_final(e, s))) { var n = (t._free(e), p(_, r)); return v(a), n } g(a, "invalid usage") }

		function hr(e, r) { var a = [];
			i(r); var _ = null;
			null != e && (_ = u(e = m(a, e, "key")), e.length, a.push(_)); var s = new l(144).address; if (0 == (0 | t._crypto_onetimeauth_init(s, _))) { var n = s; return v(a), n } g(a, "invalid usage") }

		function pr(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_onetimeauth_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_onetimeauth_keygen(_); var s = p(a, e); return v(r), s }

		function yr(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_onetimeauth_update(e, s, n)) && g(_, "invalid usage"), v(_) }

		function ir(e, r, a) { var _ = [];
			e = m(_, e, "hash"); var s, n = 0 | t._crypto_onetimeauth_bytes();
			e.length !== n && b(_, "invalid hash length"), s = u(e), _.push(s); var c = u(r = m(_, r, "message")),
				o = r.length;
			_.push(c), a = m(_, a, "key"); var h, p = 0 | t._crypto_onetimeauth_keybytes();
			a.length !== p && b(_, "invalid key length"), h = u(a), _.push(h); var y = 0 == (0 | t._crypto_onetimeauth_verify(s, c, o, 0, h)); return v(_), y }

		function lr(e, r, a, _, s, n, c) { var o = [];
			i(c), f(o, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(o, "keyLength must be an unsigned integer"); var h = u(r = m(o, r, "password")),
				y = r.length;
			o.push(h), a = m(o, a, "salt"); var d, E = 0 | t._crypto_pwhash_saltbytes();
			a.length !== E && b(o, "invalid salt length"), d = u(a), o.push(d), f(o, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(o, "opsLimit must be an unsigned integer"), f(o, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(o, "memLimit must be an unsigned integer"), f(o, n, "algorithm"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(o, "algorithm must be an unsigned integer"); var x = new l(0 | e),
				k = x.address; if (o.push(k), 0 == (0 | t._crypto_pwhash(k, e, 0, h, y, 0, d, _, 0, s, n))) { var S = p(x, c); return v(o), S } g(o, "invalid usage") }

		function ur(e, r, a, _, s, n) { var c = [];
			i(n), f(c, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(c, "keyLength must be an unsigned integer"); var o = u(r = m(c, r, "password")),
				h = r.length;
			c.push(o), a = m(c, a, "salt"); var y, d = 0 | t._crypto_pwhash_scryptsalsa208sha256_saltbytes();
			a.length !== d && b(c, "invalid salt length"), y = u(a), c.push(y), f(c, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(c, "opsLimit must be an unsigned integer"), f(c, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(c, "memLimit must be an unsigned integer"); var E = new l(0 | e),
				x = E.address; if (c.push(x), 0 == (0 | t._crypto_pwhash_scryptsalsa208sha256(x, e, 0, o, h, 0, y, _, 0, s))) { var k = p(E, n); return v(c), k } g(c, "invalid usage") }

		function dr(e, r, a, _, s, n, c) { var o = [];
			i(c); var h = u(e = m(o, e, "password")),
				y = e.length;
			o.push(h); var d = u(r = m(o, r, "salt")),
				E = r.length;
			o.push(d), f(o, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(o, "opsLimit must be an unsigned integer"), f(o, _, "r"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(o, "r must be an unsigned integer"), f(o, s, "p"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(o, "p must be an unsigned integer"), f(o, n, "keyLength"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(o, "keyLength must be an unsigned integer"); var x = new l(0 | n),
				k = x.address; if (o.push(k), 0 == (0 | t._crypto_pwhash_scryptsalsa208sha256_ll(h, y, d, E, a, 0, _, s, k, n))) { var S = p(x, c); return v(o), S } g(o, "invalid usage") }

		function vr(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "password")),
				c = e.length;
			s.push(n), f(s, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(s, "opsLimit must be an unsigned integer"), f(s, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "memLimit must be an unsigned integer"); var o = new l(0 | t._crypto_pwhash_scryptsalsa208sha256_strbytes()).address; if (s.push(o), 0 == (0 | t._crypto_pwhash_scryptsalsa208sha256_str(o, n, c, 0, r, 0, a))) { var h = t.UTF8ToString(o); return v(s), h } g(s, "invalid usage") }

		function gr(e, r, a) { var s = [];
			i(a), "string" != typeof e && b(s, "hashed_password must be a string"), e = _(e + "\0"), null != c && e.length - 1 !== c && b(s, "invalid hashed_password length"); var n = u(e),
				c = e.length - 1;
			s.push(n); var o = u(r = m(s, r, "password")),
				h = r.length;
			s.push(o); var p = 0 == (0 | t._crypto_pwhash_scryptsalsa208sha256_str_verify(n, o, h, 0)); return v(s), p }

		function br(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "password")),
				c = e.length;
			s.push(n), f(s, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(s, "opsLimit must be an unsigned integer"), f(s, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "memLimit must be an unsigned integer"); var o = new l(0 | t._crypto_pwhash_strbytes()).address; if (s.push(o), 0 == (0 | t._crypto_pwhash_str(o, n, c, 0, r, 0, a))) { var h = t.UTF8ToString(o); return v(s), h } g(s, "invalid usage") }

		function fr(e, r, a, s) { var n = [];
			i(s), "string" != typeof e && b(n, "hashed_password must be a string"), e = _(e + "\0"), null != o && e.length - 1 !== o && b(n, "invalid hashed_password length"); var c = u(e),
				o = e.length - 1;
			n.push(c), f(n, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(n, "opsLimit must be an unsigned integer"), f(n, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "memLimit must be an unsigned integer"); var h = 0 != (0 | t._crypto_pwhash_str_needs_rehash(c, r, 0, a)); return v(n), h }

		function mr(e, r, a) { var s = [];
			i(a), "string" != typeof e && b(s, "hashed_password must be a string"), e = _(e + "\0"), null != c && e.length - 1 !== c && b(s, "invalid hashed_password length"); var n = u(e),
				c = e.length - 1;
			s.push(n); var o = u(r = m(s, r, "password")),
				h = r.length;
			s.push(o); var p = 0 == (0 | t._crypto_pwhash_str_verify(n, o, h, 0)); return v(s), p }

		function Er(e, r, a) { var _ = [];
			i(a), e = m(_, e, "privateKey"); var s, n = 0 | t._crypto_scalarmult_scalarbytes();
			e.length !== n && b(_, "invalid privateKey length"), s = u(e), _.push(s), r = m(_, r, "publicKey"); var c, o = 0 | t._crypto_scalarmult_bytes();
			r.length !== o && b(_, "invalid publicKey length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_scalarmult_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_scalarmult(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "weak public key") }

		function xr(e, r) { var a = [];
			i(r), e = m(a, e, "privateKey"); var _, s = 0 | t._crypto_scalarmult_scalarbytes();
			e.length !== s && b(a, "invalid privateKey length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_scalarmult_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_scalarmult_base(c, _))) { var o = p(n, r); return v(a), o } g(a, "unknown error") }

		function kr(e, r, a) { var _ = [];
			i(a), e = m(_, e, "n"); var s, n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
			e.length !== n && b(_, "invalid n length"), s = u(e), _.push(s), r = m(_, r, "p"); var c, o = 0 | t._crypto_scalarmult_ed25519_bytes();
			r.length !== o && b(_, "invalid p length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_scalarmult_ed25519(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "invalid point or scalar is 0") }

		function Sr(e, r) { var a = [];
			i(r), e = m(a, e, "scalar"); var _, s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
			e.length !== s && b(a, "invalid scalar length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_scalarmult_ed25519_base(c, _))) { var o = p(n, r); return v(a), o } g(a, "scalar is 0") }

		function Tr(e, r) { var a = [];
			i(r), e = m(a, e, "scalar"); var _, s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
			e.length !== s && b(a, "invalid scalar length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_scalarmult_ed25519_base_noclamp(c, _))) { var o = p(n, r); return v(a), o } g(a, "scalar is 0") }

		function wr(e, r, a) { var _ = [];
			i(a), e = m(_, e, "n"); var s, n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
			e.length !== n && b(_, "invalid n length"), s = u(e), _.push(s), r = m(_, r, "p"); var c, o = 0 | t._crypto_scalarmult_ed25519_bytes();
			r.length !== o && b(_, "invalid p length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_scalarmult_ed25519_noclamp(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "invalid point or scalar is 0") }

		function Yr(e, r, a) { var _ = [];
			i(a), e = m(_, e, "scalar"); var s, n = 0 | t._crypto_scalarmult_ristretto255_scalarbytes();
			e.length !== n && b(_, "invalid scalar length"), s = u(e), _.push(s), r = m(_, r, "element"); var c, o = 0 | t._crypto_scalarmult_ristretto255_bytes();
			r.length !== o && b(_, "invalid element length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_scalarmult_ristretto255_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_scalarmult_ristretto255(y, s, c))) { var d = p(h, a); return v(_), d } g(_, "result is identity element") }

		function Br(e, r) { var a = [];
			i(r), e = m(a, e, "scalar"); var _, s = 0 | t._crypto_core_ristretto255_scalarbytes();
			e.length !== s && b(a, "invalid scalar length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_core_ristretto255_bytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_scalarmult_ristretto255_base(c, _))) { var o = p(n, r); return v(a), o } g(a, "scalar is 0") }

		function Ar(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_secretbox_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "key"); var y, d = 0 | t._crypto_secretbox_keybytes();
			a.length !== d && b(s, "invalid key length"), y = u(a), s.push(y); var f = new l(0 | c),
				E = f.address;
			s.push(E); var x = new l(0 | t._crypto_secretbox_macbytes()),
				k = x.address; if (s.push(k), 0 == (0 | t._crypto_secretbox_detached(E, k, n, c, 0, o, y))) { var S = p({ mac: x, cipher: f }, _); return v(s), S } g(s, "invalid usage") }

		function Kr(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_secretbox_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "key"); var y, d = 0 | t._crypto_secretbox_keybytes();
			a.length !== d && b(s, "invalid key length"), y = u(a), s.push(y); var f = new l(c + t._crypto_secretbox_macbytes() | 0),
				E = f.address; if (s.push(E), 0 == (0 | t._crypto_secretbox_easy(E, n, c, 0, o, y))) { var x = p(f, _); return v(s), x } g(s, "invalid usage") }

		function Mr(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_secretbox_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_secretbox_keygen(_); var s = p(a, e); return v(r), s }

		function Ir(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "ciphertext")),
				o = e.length;
			n.push(c), r = m(n, r, "mac"); var h, y = 0 | t._crypto_secretbox_macbytes();
			r.length !== y && b(n, "invalid mac length"), h = u(r), n.push(h), a = m(n, a, "nonce"); var d, f = 0 | t._crypto_secretbox_noncebytes();
			a.length !== f && b(n, "invalid nonce length"), d = u(a), n.push(d), _ = m(n, _, "key"); var E, x = 0 | t._crypto_secretbox_keybytes();
			_.length !== x && b(n, "invalid key length"), E = u(_), n.push(E); var k = new l(0 | o),
				S = k.address; if (n.push(S), 0 == (0 | t._crypto_secretbox_open_detached(S, c, h, o, 0, d, E))) { var T = p(k, s); return v(n), T } g(n, "wrong secret key for the given ciphertext") }

		function Nr(e, r, a, _) { var s = [];
			i(_), e = m(s, e, "ciphertext"); var n, c = t._crypto_secretbox_macbytes(),
				o = e.length;
			o < c && b(s, "ciphertext is too short"), n = u(e), s.push(n), r = m(s, r, "nonce"); var h, y = 0 | t._crypto_secretbox_noncebytes();
			r.length !== y && b(s, "invalid nonce length"), h = u(r), s.push(h), a = m(s, a, "key"); var d, f = 0 | t._crypto_secretbox_keybytes();
			a.length !== f && b(s, "invalid key length"), d = u(a), s.push(d); var E = new l(o - t._crypto_secretbox_macbytes() | 0),
				x = E.address; if (s.push(x), 0 == (0 | t._crypto_secretbox_open_easy(x, n, o, 0, h, d))) { var k = p(E, _); return v(s), k } g(s, "wrong secret key for the given ciphertext") }

		function Lr(e, r, a) { var _ = [];
			i(a), e = m(_, e, "header"); var s, n = 0 | t._crypto_secretstream_xchacha20poly1305_headerbytes();
			e.length !== n && b(_, "invalid header length"), s = u(e), _.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(52).address; if (0 == (0 | t._crypto_secretstream_xchacha20poly1305_init_pull(h, s, c))) { var p = h; return v(_), p } g(_, "invalid usage") }

		function Ur(e, r) { var a = [];
			i(r), e = m(a, e, "key"); var _, s = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
			e.length !== s && b(a, "invalid key length"), _ = u(e), a.push(_); var n = new l(52).address,
				c = new l(0 | t._crypto_secretstream_xchacha20poly1305_headerbytes()),
				o = c.address; if (a.push(o), 0 == (0 | t._crypto_secretstream_xchacha20poly1305_init_push(n, o, _))) { var h = { state: n, header: p(c, r) }; return v(a), h } g(a, "invalid usage") }

		function Or(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_secretstream_xchacha20poly1305_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_secretstream_xchacha20poly1305_keygen(_); var s = p(a, e); return v(r), s }

		function Cr(e, r, a, _) { var s = [];
			i(_), f(s, e, "state_address"), r = m(s, r, "cipher"); var n, c = t._crypto_secretstream_xchacha20poly1305_abytes(),
				o = r.length;
			o < c && b(s, "cipher is too short"), n = u(r), s.push(n); var h = null,
				y = 0;
			null != a && (h = u(a = m(s, a, "ad")), y = a.length, s.push(h)); var g = new l(o - t._crypto_secretstream_xchacha20poly1305_abytes() | 0),
				E = g.address;
			s.push(E); var x, k = (x = d(1), s.push(x), (k = 0 === t._crypto_secretstream_xchacha20poly1305_pull(e, E, 0, x, n, o, 0, h, y) && { tag: t.HEAPU8[x], message: g }) && { message: p(k.message, _), tag: k.tag }); return v(s), k }

		function Rr(e, r, a, _, s) { var n = [];
			i(s), f(n, e, "state_address"); var c = u(r = m(n, r, "message_chunk")),
				o = r.length;
			n.push(c); var h = null,
				y = 0;
			null != a && (h = u(a = m(n, a, "ad")), y = a.length, n.push(h)), f(n, _, "tag"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(n, "tag must be an unsigned integer"); var d = new l(o + t._crypto_secretstream_xchacha20poly1305_abytes() | 0),
				E = d.address; if (n.push(E), 0 == (0 | t._crypto_secretstream_xchacha20poly1305_push(e, E, 0, c, o, 0, h, y, 0, _))) { var x = p(d, s); return v(n), x } g(n, "invalid usage") }

		function Pr(e, r) { var a = []; return i(r), f(a, e, "state_address"), t._crypto_secretstream_xchacha20poly1305_rekey(e), v(a), !0 }

		function Gr(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_shorthash_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_shorthash_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_shorthash(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function Xr(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_shorthash_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_shorthash_keygen(_); var s = p(a, e); return v(r), s }

		function Dr(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "key"); var c, o = 0 | t._crypto_shorthash_siphashx24_keybytes();
			r.length !== o && b(_, "invalid key length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_shorthash_siphashx24_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_shorthash_siphashx24(y, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function Fr(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "privateKey"); var c, o = 0 | t._crypto_sign_secretkeybytes();
			r.length !== o && b(_, "invalid privateKey length"), c = u(r), _.push(c); var h = new l(e.length + t._crypto_sign_bytes() | 0),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_sign(y, null, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function Vr(e, r, a) { var _ = [];
			i(a); var s = u(e = m(_, e, "message")),
				n = e.length;
			_.push(s), r = m(_, r, "privateKey"); var c, o = 0 | t._crypto_sign_secretkeybytes();
			r.length !== o && b(_, "invalid privateKey length"), c = u(r), _.push(c); var h = new l(0 | t._crypto_sign_bytes()),
				y = h.address; if (_.push(y), 0 == (0 | t._crypto_sign_detached(y, null, s, n, 0, c))) { var d = p(h, a); return v(_), d } g(_, "invalid usage") }

		function Hr(e, r) { var a = [];
			i(r), e = m(a, e, "edPk"); var _, s = 0 | t._crypto_sign_publickeybytes();
			e.length !== s && b(a, "invalid edPk length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_scalarmult_scalarbytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_sign_ed25519_pk_to_curve25519(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid key") }

		function qr(e, r) { var a = [];
			i(r), e = m(a, e, "edSk"); var _, s = 0 | t._crypto_sign_secretkeybytes();
			e.length !== s && b(a, "invalid edSk length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_scalarmult_scalarbytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_sign_ed25519_sk_to_curve25519(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid key") }

		function jr(e, r) { var a = [];
			i(r), e = m(a, e, "privateKey"); var _, s = 0 | t._crypto_sign_secretkeybytes();
			e.length !== s && b(a, "invalid privateKey length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_sign_publickeybytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_sign_ed25519_sk_to_pk(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid key") }

		function zr(e, r) { var a = [];
			i(r), e = m(a, e, "privateKey"); var _, s = 0 | t._crypto_sign_secretkeybytes();
			e.length !== s && b(a, "invalid privateKey length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_sign_seedbytes()),
				c = n.address; if (a.push(c), 0 == (0 | t._crypto_sign_ed25519_sk_to_seed(c, _))) { var o = p(n, r); return v(a), o } g(a, "invalid key") }

		function Wr(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"), r = m(_, r, "privateKey"); var s, n = 0 | t._crypto_sign_secretkeybytes();
			r.length !== n && b(_, "invalid privateKey length"), s = u(r), _.push(s); var c = new l(0 | t._crypto_sign_bytes()),
				o = c.address; if (_.push(o), 0 == (0 | t._crypto_sign_final_create(e, o, null, s))) { var h = (t._free(e), p(c, a)); return v(_), h } g(_, "invalid usage") }

		function Jr(e, r, a, _) { var s = [];
			i(_), f(s, e, "state_address"), r = m(s, r, "signature"); var n, c = 0 | t._crypto_sign_bytes();
			r.length !== c && b(s, "invalid signature length"), n = u(r), s.push(n), a = m(s, a, "publicKey"); var o, h = 0 | t._crypto_sign_publickeybytes();
			a.length !== h && b(s, "invalid publicKey length"), o = u(a), s.push(o); var p = 0 == (0 | t._crypto_sign_final_verify(e, n, o)); return v(s), p }

		function Qr(e) { var r = [];
			i(e); var a = new l(208).address; if (0 == (0 | t._crypto_sign_init(a))) { var _ = a; return v(r), _ } g(r, "internal error") }

		function Zr(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_sign_publickeybytes()),
				_ = a.address;
			r.push(_); var s = new l(0 | t._crypto_sign_secretkeybytes()),
				n = s.address; if (r.push(n), 0 == (0 | t._crypto_sign_keypair(_, n))) { var c = { publicKey: p(a, e), privateKey: p(s, e), keyType: "ed25519" }; return v(r), c } g(r, "internal error") }

		function $r(e, r, a) { var _ = [];
			i(a), e = m(_, e, "signedMessage"); var s, n = t._crypto_sign_bytes(),
				c = e.length;
			c < n && b(_, "signedMessage is too short"), s = u(e), _.push(s), r = m(_, r, "publicKey"); var o, h = 0 | t._crypto_sign_publickeybytes();
			r.length !== h && b(_, "invalid publicKey length"), o = u(r), _.push(o); var y = new l(c - t._crypto_sign_bytes() | 0),
				d = y.address; if (_.push(d), 0 == (0 | t._crypto_sign_open(d, null, s, c, 0, o))) { var f = p(y, a); return v(_), f } g(_, "incorrect signature for the given public key") }

		function et(e, r) { var a = [];
			i(r), e = m(a, e, "seed"); var _, s = 0 | t._crypto_sign_seedbytes();
			e.length !== s && b(a, "invalid seed length"), _ = u(e), a.push(_); var n = new l(0 | t._crypto_sign_publickeybytes()),
				c = n.address;
			a.push(c); var o = new l(0 | t._crypto_sign_secretkeybytes()),
				h = o.address; if (a.push(h), 0 == (0 | t._crypto_sign_seed_keypair(c, h, _))) { var y = { publicKey: p(n, r), privateKey: p(o, r), keyType: "ed25519" }; return v(a), y } g(a, "invalid usage") }

		function rt(e, r, a) { var _ = [];
			i(a), f(_, e, "state_address"); var s = u(r = m(_, r, "message_chunk")),
				n = r.length;
			_.push(s), 0 != (0 | t._crypto_sign_update(e, s, n, 0)) && g(_, "invalid usage"), v(_) }

		function tt(e, r, a) { var _ = [];
			e = m(_, e, "signature"); var s, n = 0 | t._crypto_sign_bytes();
			e.length !== n && b(_, "invalid signature length"), s = u(e), _.push(s); var c = u(r = m(_, r, "message")),
				o = r.length;
			_.push(c), a = m(_, a, "publicKey"); var h, p = 0 | t._crypto_sign_publickeybytes();
			a.length !== p && b(_, "invalid publicKey length"), h = u(a), _.push(h); var y = 0 == (0 | t._crypto_sign_verify_detached(s, c, o, 0, h)); return v(_), y }

		function at(e, r, a, _) { var s = [];
			i(_), f(s, e, "outLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(s, "outLength must be an unsigned integer"), r = m(s, r, "key"); var n, c = 0 | t._crypto_stream_chacha20_keybytes();
			r.length !== c && b(s, "invalid key length"), n = u(r), s.push(n), a = m(s, a, "nonce"); var o, h = 0 | t._crypto_stream_chacha20_noncebytes();
			a.length !== h && b(s, "invalid nonce length"), o = u(a), s.push(o); var y = new l(0 | e),
				d = y.address;
			s.push(d), t._crypto_stream_chacha20(d, e, 0, o, n); var g = p(y, _); return v(s), g }

		function _t(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "input_message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "key"); var y, d = 0 | t._crypto_stream_chacha20_ietf_keybytes();
			a.length !== d && b(s, "invalid key length"), y = u(a), s.push(y); var f = new l(0 | c),
				E = f.address; if (s.push(E), 0 === t._crypto_stream_chacha20_ietf_xor(E, n, c, 0, o, y)) { var x = p(f, _); return v(s), x } g(s, "invalid usage") }

		function st(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "input_message")),
				o = e.length;
			n.push(c), r = m(n, r, "nonce"); var h, y = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
			r.length !== y && b(n, "invalid nonce length"), h = u(r), n.push(h), f(n, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "nonce_increment must be an unsigned integer"), _ = m(n, _, "key"); var d, E = 0 | t._crypto_stream_chacha20_ietf_keybytes();
			_.length !== E && b(n, "invalid key length"), d = u(_), n.push(d); var x = new l(0 | o),
				k = x.address; if (n.push(k), 0 === t._crypto_stream_chacha20_ietf_xor_ic(k, c, o, 0, h, a, d)) { var S = p(x, s); return v(n), S } g(n, "invalid usage") }

		function nt(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_stream_chacha20_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_stream_chacha20_keygen(_); var s = p(a, e); return v(r), s }

		function ct(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "input_message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_stream_chacha20_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "key"); var y, d = 0 | t._crypto_stream_chacha20_keybytes();
			a.length !== d && b(s, "invalid key length"), y = u(a), s.push(y); var f = new l(0 | c),
				E = f.address; if (s.push(E), 0 === t._crypto_stream_chacha20_xor(E, n, c, 0, o, y)) { var x = p(f, _); return v(s), x } g(s, "invalid usage") }

		function ot(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "input_message")),
				o = e.length;
			n.push(c), r = m(n, r, "nonce"); var h, y = 0 | t._crypto_stream_chacha20_noncebytes();
			r.length !== y && b(n, "invalid nonce length"), h = u(r), n.push(h), f(n, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "nonce_increment must be an unsigned integer"), _ = m(n, _, "key"); var d, E = 0 | t._crypto_stream_chacha20_keybytes();
			_.length !== E && b(n, "invalid key length"), d = u(_), n.push(d); var x = new l(0 | o),
				k = x.address; if (n.push(k), 0 === t._crypto_stream_chacha20_xor_ic(k, c, o, 0, h, a, 0, d)) { var S = p(x, s); return v(n), S } g(n, "invalid usage") }

		function ht(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_stream_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_stream_keygen(_); var s = p(a, e); return v(r), s }

		function pt(e) { var r = [];
			i(e); var a = new l(0 | t._crypto_stream_xchacha20_keybytes()),
				_ = a.address;
			r.push(_), t._crypto_stream_xchacha20_keygen(_); var s = p(a, e); return v(r), s }

		function yt(e, r, a, _) { var s = [];
			i(_); var n = u(e = m(s, e, "input_message")),
				c = e.length;
			s.push(n), r = m(s, r, "nonce"); var o, h = 0 | t._crypto_stream_xchacha20_noncebytes();
			r.length !== h && b(s, "invalid nonce length"), o = u(r), s.push(o), a = m(s, a, "key"); var y, d = 0 | t._crypto_stream_xchacha20_keybytes();
			a.length !== d && b(s, "invalid key length"), y = u(a), s.push(y); var f = new l(0 | c),
				E = f.address; if (s.push(E), 0 === t._crypto_stream_xchacha20_xor(E, n, c, 0, o, y)) { var x = p(f, _); return v(s), x } g(s, "invalid usage") }

		function it(e, r, a, _, s) { var n = [];
			i(s); var c = u(e = m(n, e, "input_message")),
				o = e.length;
			n.push(c), r = m(n, r, "nonce"); var h, y = 0 | t._crypto_stream_xchacha20_noncebytes();
			r.length !== y && b(n, "invalid nonce length"), h = u(r), n.push(h), f(n, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "nonce_increment must be an unsigned integer"), _ = m(n, _, "key"); var d, E = 0 | t._crypto_stream_xchacha20_keybytes();
			_.length !== E && b(n, "invalid key length"), d = u(_), n.push(d); var x = new l(0 | o),
				k = x.address; if (n.push(k), 0 === t._crypto_stream_xchacha20_xor_ic(k, c, o, 0, h, a, 0, d)) { var S = p(x, s); return v(n), S } g(n, "invalid usage") }

		function lt(e, r) { var a = [];
			i(r), f(a, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(a, "length must be an unsigned integer"); var _ = new l(0 | e),
				s = _.address;
			a.push(s), t._randombytes_buf(s, e); var n = p(_, r); return v(a), n }

		function ut(e, r, a) { var _ = [];
			i(a), f(_, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(_, "length must be an unsigned integer"), r = m(_, r, "seed"); var s, n = 0 | t._randombytes_seedbytes();
			r.length !== n && b(_, "invalid seed length"), s = u(r), _.push(s); var c = new l(0 | e),
				o = c.address;
			_.push(o), t._randombytes_buf_deterministic(o, e, s); var h = p(c, a); return v(_), h }

		function dt(e) { i(e), t._randombytes_close() }

		function vt(e) { i(e); var r = t._randombytes_random() >>> 0; return v([]), r }

		function gt(e, r) { var a = [];
			i(r); for (var _ = t._malloc(24), s = 0; s < 6; s++) t.setValue(_ + 4 * s, t.Runtime.addFunction(e[["implementation_name", "random", "stir", "uniform", "buf", "close"][s]]), "i32");
			0 != (0 | t._randombytes_set_implementation(_)) && g(a, "unsupported implementation"), v(a) }

		function bt(e) { i(e), t._randombytes_stir() }

		function ft(e, r) { var a = [];
			i(r), f(a, e, "upper_bound"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(a, "upper_bound must be an unsigned integer"); var _ = t._randombytes_uniform(e) >>> 0; return v(a), _ }

		function mt() { var e = t._sodium_version_string(),
				r = t.UTF8ToString(e); return v([]), r } return l.prototype.to_Uint8Array = function () { var e = new Uint8Array(this.length); return e.set(t.HEAPU8.subarray(this.address, this.address + this.length)), e }, e.add = function (e, r) { if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can added"); var t = e.length,
				a = 0,
				_ = 0; if (r.length != e.length) throw new TypeError("Arguments must have the same length"); for (_ = 0; _ < t; _++) a >>= 8, a += e[_] + r[_], e[_] = 255 & a }, e.base64_variants = c, e.compare = function (e, r) { if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared"); if (e.length !== r.length) throw new TypeError("Only instances of identical length can be compared"); for (var t = 0, a = 1, _ = e.length; _-- > 0;) t |= r[_] - e[_] >> 8 & a, a &= (r[_] ^ e[_]) - 1 >> 8; return t + t + a - 1 }, e.from_base64 = function (e, r) { r = o(r); var a, _ = [],
				s = new l(3 * (e = m(_, e, "input")).length / 4),
				n = u(e),
				c = d(4),
				h = d(4); return _.push(n), _.push(s.address), _.push(s.result_bin_len_p), _.push(s.b64_end_p), 0 !== t._sodium_base642bin(s.address, s.length, n, e.length, 0, c, h, r) && g(_, "invalid input"), t.getValue(h, "i32") - n !== e.length && g(_, "incomplete input"), s.length = t.getValue(c, "i32"), a = s.to_Uint8Array(), v(_), a }, e.from_hex = function (e) { var r, a = [],
				_ = new l((e = m(a, e, "input")).length / 2),
				s = u(e),
				n = d(4); return a.push(s), a.push(_.address), a.push(_.hex_end_p), 0 !== t._sodium_hex2bin(_.address, _.length, s, e.length, 0, 0, n) && g(a, "invalid input"), t.getValue(n, "i32") - s !== e.length && g(a, "incomplete input"), r = _.to_Uint8Array(), v(a), r }, e.from_string = _, e.increment = function (e) { if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be incremented"); for (var r = 256, t = 0, a = e.length; t < a; t++) r >>= 8, r += e[t], e[t] = 255 & r }, e.is_zero = function (e) { if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be checked"); for (var r = 0, t = 0, a = e.length; t < a; t++) r |= e[t]; return 0 === r }, e.libsodium = r, e.memcmp = function (e, r) { if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared"); if (e.length !== r.length) throw new TypeError("Only instances of identical length can be compared"); for (var t = 0, a = 0, _ = e.length; a < _; a++) t |= e[a] ^ r[a]; return 0 === t }, e.memzero = function (e) { if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be wiped"); for (var r = 0, t = e.length; r < t; r++) e[r] = 0 }, e.output_formats = function () { return ["uint8array", "text", "hex", "base64"] }, e.pad = function (e, r) { if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array"); if ((r |= 0) <= 0) throw new Error("block size must be > 0"); var a, _ = [],
				s = d(4),
				n = 1,
				c = 0,
				o = 0 | e.length,
				h = new l(o + r);
			_.push(s), _.push(h.address); for (var p = h.address, y = h.address + o + r; p < y; p++) t.HEAPU8[p] = e[c], c += n = 1 & ~((65535 & ((o -= n) >>> 48 | o >>> 32 | o >>> 16 | o)) - 1 >> 16); return 0 !== t._sodium_pad(s, h.address, e.length, r, h.length) && g(_, "internal error"), h.length = t.getValue(s, "i32"), a = h.to_Uint8Array(), v(_), a }, e.unpad = function (e, r) { if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array"); if ((r |= 0) <= 0) throw new Error("block size must be > 0"); var a = [],
				_ = u(e),
				s = d(4); return a.push(_), a.push(s), 0 !== t._sodium_unpad(s, _, e.length, r) && g(a, "unsupported/invalid padding"), e = (e = new Uint8Array(e)).subarray(0, t.getValue(s, "i32")), v(a), e }, e.ready = a, e.symbols = function () { return Object.keys(e).sort() }, e.to_base64 = h, e.to_hex = n, e.to_string = s, e } var t = "object" == typeof e.sodium && "function" == typeof e.sodium.onload ? e.sodium.onload : null; "function" == typeof define && define.amd ? define(["exports", "libsodium"], r) : "object" == typeof exports && "string" != typeof exports.nodeName ? r(exports, require("./libsodium.js")) : e.sodium = r(e.commonJsStrict = {}, e.libsodium), t && e.sodium.ready.then((function () { t(e.sodium) })) }(this);