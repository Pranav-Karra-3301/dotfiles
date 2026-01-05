"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/open-skhd-config-file.tsx
var open_skhd_config_file_exports = {};
__export(open_skhd_config_file_exports, {
  default: () => Command
});
module.exports = __toCommonJS(open_skhd_config_file_exports);
var import_api = require("@raycast/api");
var import_child_process = require("child_process");
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
function Command() {
  const preferences = (0, import_api.getPreferenceValues)();
  const skhdrcPath = preferences.skhdrcPath ? preferences.skhdrcPath.replace(/^~($|\/|\\)/, `${import_os.default.homedir()}$1`) : import_path.default.join(import_os.default.homedir(), ".config/skhd/skhdrc");
  const editorCommand = preferences.editorCommand || "open";
  const command = `${editorCommand} "${skhdrcPath}"`;
  (0, import_child_process.exec)(command, (error) => {
    if (error) {
      (0, import_api.showToast)(import_api.Toast.Style.Failure, "Failed to open skhdrc", String(error));
    } else {
      (0, import_api.showToast)(import_api.Toast.Style.Success, "skhdrc opened successfully");
    }
  });
  return null;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vR29vZGxpbmtzX1JheWNhc3RfRXh0ZW5zaW9ucy9za2hkL3NraGRfcmF5Y2FzdC9zcmMvb3Blbi1za2hkLWNvbmZpZy1maWxlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZ2V0UHJlZmVyZW5jZVZhbHVlcywgc2hvd1RvYXN0LCBUb2FzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW50ZXJmYWNlIFByZWZlcmVuY2VzIHtcbiAgc2toZHJjUGF0aD86IHN0cmluZztcbiAgZWRpdG9yQ29tbWFuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWFuZCgpIHtcbiAgY29uc3QgcHJlZmVyZW5jZXMgPSBnZXRQcmVmZXJlbmNlVmFsdWVzPFByZWZlcmVuY2VzPigpO1xuXG4gIC8vIEV4cGFuZCB0aWxkZSB0byBob21lIGRpcmVjdG9yeVxuICBjb25zdCBza2hkcmNQYXRoID0gcHJlZmVyZW5jZXMuc2toZHJjUGF0aCBcbiAgICA/IHByZWZlcmVuY2VzLnNraGRyY1BhdGgucmVwbGFjZSgvXn4oJHxcXC98XFxcXCkvLCBgJHtvcy5ob21lZGlyKCl9JDFgKVxuICAgIDogcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgXCIuY29uZmlnL3NraGQvc2toZHJjXCIpO1xuICBjb25zdCBlZGl0b3JDb21tYW5kID0gcHJlZmVyZW5jZXMuZWRpdG9yQ29tbWFuZCB8fCBcIm9wZW5cIjtcbiAgY29uc3QgY29tbWFuZCA9IGAke2VkaXRvckNvbW1hbmR9IFwiJHtza2hkcmNQYXRofVwiYDtcblxuICBleGVjKGNvbW1hbmQsIChlcnJvcikgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgc2hvd1RvYXN0KFRvYXN0LlN0eWxlLkZhaWx1cmUsIFwiRmFpbGVkIHRvIG9wZW4gc2toZHJjXCIsIFN0cmluZyhlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9hc3QoVG9hc3QuU3R5bGUuU3VjY2VzcywgXCJza2hkcmMgb3BlbmVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFzRDtBQUN0RCwyQkFBcUI7QUFDckIsZ0JBQWU7QUFDZixrQkFBaUI7QUFPRixTQUFSLFVBQTJCO0FBQ2hDLFFBQU0sa0JBQWMsZ0NBQWlDO0FBR3JELFFBQU0sYUFBYSxZQUFZLGFBQzNCLFlBQVksV0FBVyxRQUFRLGVBQWUsR0FBRyxVQUFBQSxRQUFHLFFBQVEsQ0FBQyxJQUFJLElBQ2pFLFlBQUFDLFFBQUssS0FBSyxVQUFBRCxRQUFHLFFBQVEsR0FBRyxxQkFBcUI7QUFDakQsUUFBTSxnQkFBZ0IsWUFBWSxpQkFBaUI7QUFDbkQsUUFBTSxVQUFVLEdBQUcsYUFBYSxLQUFLLFVBQVU7QUFFL0MsaUNBQUssU0FBUyxDQUFDLFVBQVU7QUFDdkIsUUFBSSxPQUFPO0FBQ1QsZ0NBQVUsaUJBQU0sTUFBTSxTQUFTLHlCQUF5QixPQUFPLEtBQUssQ0FBQztBQUFBLElBQ3ZFLE9BQU87QUFDTCxnQ0FBVSxpQkFBTSxNQUFNLFNBQVMsNEJBQTRCO0FBQUEsSUFDN0Q7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPO0FBQ1Q7IiwKICAibmFtZXMiOiBbIm9zIiwgInBhdGgiXQp9Cg==
