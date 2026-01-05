"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/commands.tsx
var commands_exports = {};
__export(commands_exports, {
  default: () => Command
});
module.exports = __toCommonJS(commands_exports);
var import_api = require("@raycast/api");
var import_react = require("react");
var import_child_process = require("child_process");
var import_jsx_runtime = require("react/jsx-runtime");
var skhdIcon = "skhd.png";
function loadShortcuts() {
  return new Promise((resolve, reject) => {
    (0, import_child_process.exec)("cat ~/.config/skhd/skhdrc", (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.split("\n").filter((line) => line && !line.startsWith("#")));
      }
    });
  });
}
function renderModifiers(shortcut) {
  return shortcut.replace(/(?<!\w)(r)?(cmd|ctrl|alt|shift)/gi, (match, r, key) => {
    const keyLower = key.toLowerCase();
    const icon = {
      cmd: "\u2318",
      ctrl: "\u2303",
      alt: "\u2325",
      shift: "\u21E7"
    }[keyLower];
    return icon ? r ? `r${icon}` : icon : match;
  });
}
function getFormattedCommand(command) {
  const commandParts = command.split(" ");
  return commandParts.map((part, index) => {
    if (part.toLowerCase().includes("yabai")) {
      return { text: part, color: import_api.Color.Orange };
    } else if (["window", "display"].includes(part.toLowerCase())) {
      return { text: part, color: import_api.Color.Blue };
    } else if (["focus", "swap"].includes(part.toLowerCase())) {
      return { text: part, color: import_api.Color.Green };
    } else {
      return { text: part };
    }
  });
}
function Command() {
  const [shortcuts, setShortcuts] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    loadShortcuts().then(setShortcuts).catch(() => {
    }).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List, { isLoading: loading, searchBarPlaceholder: "Search shortcuts...", children: shortcuts.map((shortcut, index) => {
    const [keys, command] = shortcut.split("->").map((part) => part?.trim());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_api.ListItem,
      {
        title: renderModifiers(keys || ""),
        subtitle: command ? command : "",
        accessories: getFormattedCommand(command || ""),
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Open, { title: "Open skhdrc", target: "~/.config/skhd/skhdrc" }) }),
        icon: skhdIcon
      },
      index
    );
  }) });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vR29vZGxpbmtzX1JheWNhc3RfRXh0ZW5zaW9ucy9za2hkL3NraGRfcmF5Y2FzdC9zcmMvY29tbWFuZHMudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSwgQWN0aW9uUGFuZWwsIEFjdGlvbiwgQ29sb3IsIEljb24gfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcblxuLy8gUGF0aCB0byB0aGUgY3VzdG9tIGljb25cbmNvbnN0IHNraGRJY29uID0gXCJza2hkLnBuZ1wiO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIGxvYWQga2V5Ym9hcmQgc2hvcnRjdXRzIGZyb20gc2toZHJjXG5mdW5jdGlvbiBsb2FkU2hvcnRjdXRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBleGVjKFwiY2F0IH4vLmNvbmZpZy9za2hkL3NraGRyY1wiLCAoZXJyb3IsIHN0ZG91dCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHN0ZG91dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUgJiYgIWxpbmUuc3RhcnRzV2l0aChcIiNcIikpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIERlZmluZSB0aGUgdHlwZSBmb3IgdGhlIG1vZGlmaWVyIGtleXNcbnR5cGUgTW9kaWZpZXJLZXkgPSBcImNtZFwiIHwgXCJjdHJsXCIgfCBcImFsdFwiIHwgXCJzaGlmdFwiO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIHJlbmRlciBtb2RpZmllciBrZXlzIHdpdGggaWNvbnNcbmZ1bmN0aW9uIHJlbmRlck1vZGlmaWVycyhzaG9ydGN1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNob3J0Y3V0LnJlcGxhY2UoLyg/PCFcXHcpKHIpPyhjbWR8Y3RybHxhbHR8c2hpZnQpL2dpLCAobWF0Y2gsIHIsIGtleSkgPT4ge1xuICAgIGNvbnN0IGtleUxvd2VyID0ga2V5LnRvTG93ZXJDYXNlKCkgYXMgTW9kaWZpZXJLZXk7XG4gICAgY29uc3QgaWNvbiA9IHtcbiAgICAgIGNtZDogXCJcdTIzMThcIixcbiAgICAgIGN0cmw6IFwiXHUyMzAzXCIsXG4gICAgICBhbHQ6IFwiXHUyMzI1XCIsXG4gICAgICBzaGlmdDogXCJcdTIxRTdcIlxuICAgIH1ba2V5TG93ZXJdO1xuICAgIHJldHVybiBpY29uID8gKHIgPyBgciR7aWNvbn1gIDogaWNvbikgOiBtYXRjaDtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZvcm1hdCBhbmQgY29sb3JpemUgY29tbWFuZHMgYmFzZWQgb24ga2V5d29yZHNcbmZ1bmN0aW9uIGdldEZvcm1hdHRlZENvbW1hbmQoY29tbWFuZDogc3RyaW5nKSB7XG4gIGNvbnN0IGNvbW1hbmRQYXJ0cyA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpO1xuICByZXR1cm4gY29tbWFuZFBhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGFydC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwieWFiYWlcIikpIHtcbiAgICAgIHJldHVybiB7IHRleHQ6IHBhcnQsIGNvbG9yOiBDb2xvci5PcmFuZ2UgfTtcbiAgICB9IGVsc2UgaWYgKFtcIndpbmRvd1wiLCBcImRpc3BsYXlcIl0uaW5jbHVkZXMocGFydC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcmV0dXJuIHsgdGV4dDogcGFydCwgY29sb3I6IENvbG9yLkJsdWUgfTtcbiAgICB9IGVsc2UgaWYgKFtcImZvY3VzXCIsIFwic3dhcFwiXS5pbmNsdWRlcyhwYXJ0LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm4geyB0ZXh0OiBwYXJ0LCBjb2xvcjogQ29sb3IuR3JlZW4gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdGV4dDogcGFydCB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IFtzaG9ydGN1dHMsIHNldFNob3J0Y3V0c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRTaG9ydGN1dHMoKVxuICAgICAgLnRoZW4oc2V0U2hvcnRjdXRzKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBzaWxlbnRseSBvciB3aXRoIGFwcHJvcHJpYXRlIGZlZWRiYWNrXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBpc0xvYWRpbmc9e2xvYWRpbmd9IHNlYXJjaEJhclBsYWNlaG9sZGVyPVwiU2VhcmNoIHNob3J0Y3V0cy4uLlwiPlxuICAgICAge3Nob3J0Y3V0cy5tYXAoKHNob3J0Y3V0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBba2V5cywgY29tbWFuZF0gPSBzaG9ydGN1dC5zcGxpdChcIi0+XCIpLm1hcCgocGFydCkgPT4gcGFydD8udHJpbSgpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB0aXRsZT17cmVuZGVyTW9kaWZpZXJzKGtleXMgfHwgXCJcIil9XG4gICAgICAgICAgICBzdWJ0aXRsZT17Y29tbWFuZCA/IGNvbW1hbmQgOiBcIlwifVxuICAgICAgICAgICAgYWNjZXNzb3JpZXM9e2dldEZvcm1hdHRlZENvbW1hbmQoY29tbWFuZCB8fCBcIlwiKX1cbiAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgICAgPEFjdGlvbi5PcGVuIHRpdGxlPVwiT3BlbiBza2hkcmNcIiB0YXJnZXQ9XCJ+Ly5jb25maWcvc2toZC9za2hkcmNcIiAvPlxuICAgICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbj17c2toZEljb259IC8vIFVzZSBjdXN0b20gaWNvblxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUU7QUFDakUsbUJBQW9DO0FBQ3BDLDJCQUFxQjtBQTRFTDtBQXpFaEIsSUFBTSxXQUFXO0FBR2pCLFNBQVMsZ0JBQW1DO0FBQzFDLFNBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLG1DQUFLLDZCQUE2QixDQUFDLE9BQU8sV0FBVztBQUNuRCxVQUFJLE9BQU87QUFDVCxlQUFPLEtBQUs7QUFBQSxNQUNkLE9BQU87QUFDTCxnQkFBUSxPQUFPLE1BQU0sSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLFFBQVEsQ0FBQyxLQUFLLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFBQSxNQUM1RTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNIO0FBTUEsU0FBUyxnQkFBZ0IsVUFBMEI7QUFDakQsU0FBTyxTQUFTLFFBQVEscUNBQXFDLENBQUMsT0FBTyxHQUFHLFFBQVE7QUFDOUUsVUFBTSxXQUFXLElBQUksWUFBWTtBQUNqQyxVQUFNLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEVBQUUsUUFBUTtBQUNWLFdBQU8sT0FBUSxJQUFJLElBQUksSUFBSSxLQUFLLE9BQVE7QUFBQSxFQUMxQyxDQUFDO0FBQ0g7QUFHQSxTQUFTLG9CQUFvQixTQUFpQjtBQUM1QyxRQUFNLGVBQWUsUUFBUSxNQUFNLEdBQUc7QUFDdEMsU0FBTyxhQUFhLElBQUksQ0FBQyxNQUFNLFVBQVU7QUFDdkMsUUFBSSxLQUFLLFlBQVksRUFBRSxTQUFTLE9BQU8sR0FBRztBQUN4QyxhQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8saUJBQU0sT0FBTztBQUFBLElBQzNDLFdBQVcsQ0FBQyxVQUFVLFNBQVMsRUFBRSxTQUFTLEtBQUssWUFBWSxDQUFDLEdBQUc7QUFDN0QsYUFBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLGlCQUFNLEtBQUs7QUFBQSxJQUN6QyxXQUFXLENBQUMsU0FBUyxNQUFNLEVBQUUsU0FBUyxLQUFLLFlBQVksQ0FBQyxHQUFHO0FBQ3pELGFBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTyxpQkFBTSxNQUFNO0FBQUEsSUFDMUMsT0FBTztBQUNMLGFBQU8sRUFBRSxNQUFNLEtBQUs7QUFBQSxJQUN0QjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRWUsU0FBUixVQUEyQjtBQUNoQyxRQUFNLENBQUMsV0FBVyxZQUFZLFFBQUksdUJBQW1CLENBQUMsQ0FBQztBQUN2RCxRQUFNLENBQUMsU0FBUyxVQUFVLFFBQUksdUJBQVMsSUFBSTtBQUUzQyw4QkFBVSxNQUFNO0FBQ2Qsa0JBQWMsRUFDWCxLQUFLLFlBQVksRUFDakIsTUFBTSxNQUFNO0FBQUEsSUFFYixDQUFDLEVBQ0EsUUFBUSxNQUFNLFdBQVcsS0FBSyxDQUFDO0FBQUEsRUFDcEMsR0FBRyxDQUFDLENBQUM7QUFFTCxTQUNFLDRDQUFDLG1CQUFLLFdBQVcsU0FBUyxzQkFBcUIsdUJBQzVDLG9CQUFVLElBQUksQ0FBQyxVQUFVLFVBQVU7QUFDbEMsVUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJLFNBQVMsTUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsTUFBTSxLQUFLLENBQUM7QUFDdkUsV0FDRTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUMsT0FBTyxnQkFBZ0IsUUFBUSxFQUFFO0FBQUEsUUFDakMsVUFBVSxVQUFVLFVBQVU7QUFBQSxRQUM5QixhQUFhLG9CQUFvQixXQUFXLEVBQUU7QUFBQSxRQUM5QyxTQUNFLDRDQUFDLDBCQUNDLHNEQUFDLGtCQUFPLE1BQVAsRUFBWSxPQUFNLGVBQWMsUUFBTyx5QkFBd0IsR0FDbEU7QUFBQSxRQUVGLE1BQU07QUFBQTtBQUFBLE1BVEQ7QUFBQSxJQVVQO0FBQUEsRUFFSixDQUFDLEdBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
