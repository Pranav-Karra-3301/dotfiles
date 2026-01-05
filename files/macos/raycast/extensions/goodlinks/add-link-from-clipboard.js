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

// src/add-link-from-clipboard.tsx
var add_link_from_clipboard_exports = {};
__export(add_link_from_clipboard_exports, {
  default: () => Command
});
module.exports = __toCommonJS(add_link_from_clipboard_exports);
var import_react = require("react");
var import_api = require("@raycast/api");
var import_child_process = require("child_process");
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const [url, setUrl] = (0, import_react.useState)("");
  const [title, setTitle] = (0, import_react.useState)("");
  const [tags, setTags] = (0, import_react.useState)("");
  const [starred, setStarred] = (0, import_react.useState)(false);
  const { pop } = (0, import_api.useNavigation)();
  const handleSubmit = async () => {
    if (!url) {
      (0, import_api.showToast)(import_api.Toast.Style.Failure, "Error", "URL is required");
      return;
    }
    try {
      const script = `
        tell application "GoodLinks"
          set newLink to make new link with properties {url:"${url}", title:"${title}", tag names:${tags.split(",").map((tag) => `"${tag.trim()}"`)}, starred:${starred}}
        end tell
      `;
      await runAppleScript(script);
      (0, import_api.showToast)(import_api.Toast.Style.Success, "Link added successfully!");
      pop();
    } catch (error) {
      console.error("Failed to add link:", error);
      (0, import_api.showToast)(import_api.Toast.Style.Failure, "Failed to add link");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_api.Form,
    {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Add Link", onAction: handleSubmit }) }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextField, { id: "url", title: "URL", placeholder: "Enter URL", value: url, onChange: setUrl }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextField, { id: "title", title: "Title", placeholder: "Enter title", value: title, onChange: setTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextField, { id: "tags", title: "Tags", placeholder: "Comma-separated tags", value: tags, onChange: setTags }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Checkbox, { id: "starred", label: "Starred", value: starred, onChange: setStarred })
      ]
    }
  );
}
async function runAppleScript(script) {
  return new Promise((resolve, reject) => {
    (0, import_child_process.exec)(`osascript -e '${script}'`, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vR29vZGxpbmtzX1JheWNhc3RfRXh0ZW5zaW9ucy9Hb29kbGlua3NYcmF5Y2FzdC9zcmMvYWRkLWxpbmstZnJvbS1jbGlwYm9hcmQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQWN0aW9uUGFuZWwsIEFjdGlvbiwgc2hvd1RvYXN0LCBUb2FzdCwgdXNlTmF2aWdhdGlvbiB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3RhcnJlZCwgc2V0U3RhcnJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgcG9wIH0gPSB1c2VOYXZpZ2F0aW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghdXJsKSB7XG4gICAgICBzaG93VG9hc3QoVG9hc3QuU3R5bGUuRmFpbHVyZSwgXCJFcnJvclwiLCBcIlVSTCBpcyByZXF1aXJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gYFxuICAgICAgICB0ZWxsIGFwcGxpY2F0aW9uIFwiR29vZExpbmtzXCJcbiAgICAgICAgICBzZXQgbmV3TGluayB0byBtYWtlIG5ldyBsaW5rIHdpdGggcHJvcGVydGllcyB7dXJsOlwiJHt1cmx9XCIsIHRpdGxlOlwiJHt0aXRsZX1cIiwgdGFnIG5hbWVzOiR7dGFncy5zcGxpdChcIixcIikubWFwKCh0YWcpID0+IGBcIiR7dGFnLnRyaW0oKX1cImApfSwgc3RhcnJlZDoke3N0YXJyZWR9fVxuICAgICAgICBlbmQgdGVsbFxuICAgICAgYDtcbiAgICAgIGF3YWl0IHJ1bkFwcGxlU2NyaXB0KHNjcmlwdCk7XG4gICAgICBzaG93VG9hc3QoVG9hc3QuU3R5bGUuU3VjY2VzcywgXCJMaW5rIGFkZGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgICBwb3AoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhZGQgbGluazpcIiwgZXJyb3IpO1xuICAgICAgc2hvd1RvYXN0KFRvYXN0LlN0eWxlLkZhaWx1cmUsIFwiRmFpbGVkIHRvIGFkZCBsaW5rXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgIDxBY3Rpb24gdGl0bGU9XCJBZGQgTGlua1wiIG9uQWN0aW9uPXtoYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEZvcm0uVGV4dEZpZWxkIGlkPVwidXJsXCIgdGl0bGU9XCJVUkxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXtzZXRVcmx9IC8+XG4gICAgICA8Rm9ybS5UZXh0RmllbGQgaWQ9XCJ0aXRsZVwiIHRpdGxlPVwiVGl0bGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRpdGxlXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17c2V0VGl0bGV9IC8+XG4gICAgICA8Rm9ybS5UZXh0RmllbGQgaWQ9XCJ0YWdzXCIgdGl0bGU9XCJUYWdzXCIgcGxhY2Vob2xkZXI9XCJDb21tYS1zZXBhcmF0ZWQgdGFnc1wiIHZhbHVlPXt0YWdzfSBvbkNoYW5nZT17c2V0VGFnc30gLz5cbiAgICAgIDxGb3JtLkNoZWNrYm94IGlkPVwic3RhcnJlZFwiIGxhYmVsPVwiU3RhcnJlZFwiIHZhbHVlPXtzdGFycmVkfSBvbkNoYW5nZT17c2V0U3RhcnJlZH0gLz5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJ1biBBcHBsZVNjcmlwdCBjb21tYW5kc1xuYXN5bmMgZnVuY3Rpb24gcnVuQXBwbGVTY3JpcHQoc2NyaXB0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGV4ZWMoYG9zYXNjcmlwdCAtZSAnJHtzY3JpcHR9J2AsIChlcnJvciwgc3Rkb3V0KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoc3Rkb3V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBeUI7QUFDekIsaUJBQTJFO0FBQzNFLDJCQUFxQjtBQStCakI7QUE3QlcsU0FBUixVQUEyQjtBQUNoQyxRQUFNLENBQUMsS0FBSyxNQUFNLFFBQUksdUJBQVMsRUFBRTtBQUNqQyxRQUFNLENBQUMsT0FBTyxRQUFRLFFBQUksdUJBQVMsRUFBRTtBQUNyQyxRQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQVMsRUFBRTtBQUNuQyxRQUFNLENBQUMsU0FBUyxVQUFVLFFBQUksdUJBQVMsS0FBSztBQUM1QyxRQUFNLEVBQUUsSUFBSSxRQUFJLDBCQUFjO0FBRTlCLFFBQU0sZUFBZSxZQUFZO0FBQy9CLFFBQUksQ0FBQyxLQUFLO0FBQ1IsZ0NBQVUsaUJBQU0sTUFBTSxTQUFTLFNBQVMsaUJBQWlCO0FBQ3pEO0FBQUEsSUFDRjtBQUVBLFFBQUk7QUFDRixZQUFNLFNBQVM7QUFBQTtBQUFBLCtEQUUwQyxHQUFHLGFBQWEsS0FBSyxnQkFBZ0IsS0FBSyxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLE9BQU87QUFBQTtBQUFBO0FBR2pLLFlBQU0sZUFBZSxNQUFNO0FBQzNCLGdDQUFVLGlCQUFNLE1BQU0sU0FBUywwQkFBMEI7QUFDekQsVUFBSTtBQUFBLElBQ04sU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLHVCQUF1QixLQUFLO0FBQzFDLGdDQUFVLGlCQUFNLE1BQU0sU0FBUyxvQkFBb0I7QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFFQSxTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxTQUNFLDRDQUFDLDBCQUNDLHNEQUFDLHFCQUFPLE9BQU0sWUFBVyxVQUFVLGNBQWMsR0FDbkQ7QUFBQSxNQUdGO0FBQUEsb0RBQUMsZ0JBQUssV0FBTCxFQUFlLElBQUcsT0FBTSxPQUFNLE9BQU0sYUFBWSxhQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVE7QUFBQSxRQUMzRiw0Q0FBQyxnQkFBSyxXQUFMLEVBQWUsSUFBRyxTQUFRLE9BQU0sU0FBUSxhQUFZLGVBQWMsT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUFBLFFBQ3JHLDRDQUFDLGdCQUFLLFdBQUwsRUFBZSxJQUFHLFFBQU8sT0FBTSxRQUFPLGFBQVksd0JBQXVCLE9BQU8sTUFBTSxVQUFVLFNBQVM7QUFBQSxRQUMxRyw0Q0FBQyxnQkFBSyxVQUFMLEVBQWMsSUFBRyxXQUFVLE9BQU0sV0FBVSxPQUFPLFNBQVMsVUFBVSxZQUFZO0FBQUE7QUFBQTtBQUFBLEVBQ3BGO0FBRUo7QUFHQSxlQUFlLGVBQWUsUUFBaUM7QUFDN0QsU0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsbUNBQUssaUJBQWlCLE1BQU0sS0FBSyxDQUFDLE9BQU8sV0FBVztBQUNsRCxVQUFJLE9BQU87QUFDVCxlQUFPLEtBQUs7QUFBQSxNQUNkLE9BQU87QUFDTCxnQkFBUSxNQUFNO0FBQUEsTUFDaEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
