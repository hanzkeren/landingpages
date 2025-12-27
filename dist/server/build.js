import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { I as INTERNAL_setAllEnv, s as serverEntry, j as joinPath } from "./assets/server-Cv2XLHTA.js";
import "node:path";
import "http";
import "http2";
import "stream";
import "crypto";
import "fs";
import "path";
import "node:async_hooks";
import "./__waku_build_metadata.js";
function resolveModuleId(moduleId, rootDir) {
  if (moduleId.startsWith("file://")) {
    return moduleId;
  }
  if (moduleId.startsWith("/")) {
    return pathToFileURL(joinPath(rootDir, moduleId.slice(1))).href;
  }
  const require2 = createRequire(joinPath(rootDir, "DUMMY.js"));
  const resolved = require2.resolve(moduleId);
  return pathToFileURL(resolved).href;
}
async function INTERNAL_runBuild({ rootDir, emitFile }) {
  INTERNAL_setAllEnv(process.env);
  let build = serverEntry.build;
  for (const enhancer of serverEntry.buildEnhancers || []) {
    const moduleId = resolveModuleId(enhancer, rootDir);
    const mod = await import(moduleId);
    build = await mod.default(build);
  }
  await build({
    emitFile
  }, serverEntry.buildOptions || {});
}
export {
  INTERNAL_runBuild
};
