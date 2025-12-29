import { I as INTERNAL_setAllEnv, s as serverEntry } from "./assets/server-BChvKn8k.js";
import "node:path";
import "http";
import "http2";
import "stream";
import "crypto";
import "fs";
import "path";
import "node:async_hooks";
import "./__waku_build_metadata.js";
async function INTERNAL_runFetch(env, req, ...args) {
  INTERNAL_setAllEnv(env);
  return serverEntry.fetch(req, ...args);
}
export {
  INTERNAL_runFetch,
  serverEntry as unstable_serverEntry
};
