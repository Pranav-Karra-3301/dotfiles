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

// src/browse-links.tsx
var browse_links_exports = {};
__export(browse_links_exports, {
  default: () => Command
});
module.exports = __toCommonJS(browse_links_exports);
var import_react = require("react");
var import_api = require("@raycast/api");
var import_child_process = require("child_process");
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const [links, setLinks] = (0, import_react.useState)([]);
  const [selectedLink, setSelectedLink] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    async function fetchLinks() {
      try {
        const linksData = await runAppleScript(`
          tell application "GoodLinks"
            set allLinks to every link
            set output to ""
            repeat with aLink in allLinks
              set output to output & id of aLink & "||" & title of aLink & "||" & url of aLink & "||" & tag names of aLink & "||" & summary of aLink & "\\n"
            end repeat
            return output
          end tell
        `);
        setLinks(parseLinks(linksData));
      } catch (error) {
        console.error("Error fetching links:", error);
        (0, import_api.showToast)(import_api.Toast.Style.Failure, "Failed to fetch links");
      } finally {
        setIsLoading(false);
      }
    }
    fetchLinks();
  }, []);
  function parseLinks(linksData) {
    try {
      const linkRecords = linksData.trim().split("\n");
      return linkRecords.map((record) => {
        const [id, title, url, tags, summary] = record.split("||");
        return {
          id: id.trim(),
          title: title.trim(),
          url: url.trim(),
          tags: tags.trim() ? tags.trim().split(",") : [],
          summary: summary.trim()
        };
      });
    } catch (error) {
      console.error("Failed to parse links data:", error);
      return [];
    }
  }
  const handleSelect = (linkId) => {
    if (linkId === null) {
      setSelectedLink(null);
    } else {
      const link = links.find((l) => l.id === linkId) || null;
      setSelectedLink(link);
    }
  };
  const handleOpenInBrowser = (url) => {
    (0, import_api.open)(url);
  };
  const renderListView = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List, { isLoading, onSelectionChange: (id) => handleSelect(id), children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List.Item,
    {
      id: link.id,
      title: link.title,
      subtitle: link.tags.join(", "),
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Open in Browser", onAction: () => handleOpenInBrowser(link.url) }) })
    },
    link.id
  )) });
  const renderDetailView = () => {
    if (!selectedLink) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_api.Detail,
      {
        markdown: `# ${selectedLink.title}

${selectedLink.summary}`,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action, { title: "Open in Browser", onAction: () => handleOpenInBrowser(selectedLink.url) }) })
      }
    );
  };
  return selectedLink ? renderDetailView() : renderListView();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vR29vZGxpbmtzX1JheWNhc3RfRXh0ZW5zaW9ucy9Hb29kbGlua3NYcmF5Y2FzdC9zcmMvYnJvd3NlLWxpbmtzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdCwgRGV0YWlsLCBzaG93VG9hc3QsIFRvYXN0LCBBY3Rpb25QYW5lbCwgQWN0aW9uLCBvcGVuIH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbi8vIEludGVyZmFjZSBmb3IgTGluayBkYXRhIHN0cnVjdHVyZVxuaW50ZXJmYWNlIExpbmsge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIHN1bW1hcnk6IHN0cmluZztcbn1cblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgdGhlIFJheWNhc3QgZXh0ZW5zaW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICBjb25zdCBbbGlua3MsIHNldExpbmtzXSA9IHVzZVN0YXRlPExpbmtbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRMaW5rLCBzZXRTZWxlY3RlZExpbmtdID0gdXNlU3RhdGU8TGluayB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaExpbmtzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGlua3NEYXRhID0gYXdhaXQgcnVuQXBwbGVTY3JpcHQoYFxuICAgICAgICAgIHRlbGwgYXBwbGljYXRpb24gXCJHb29kTGlua3NcIlxuICAgICAgICAgICAgc2V0IGFsbExpbmtzIHRvIGV2ZXJ5IGxpbmtcbiAgICAgICAgICAgIHNldCBvdXRwdXQgdG8gXCJcIlxuICAgICAgICAgICAgcmVwZWF0IHdpdGggYUxpbmsgaW4gYWxsTGlua3NcbiAgICAgICAgICAgICAgc2V0IG91dHB1dCB0byBvdXRwdXQgJiBpZCBvZiBhTGluayAmIFwifHxcIiAmIHRpdGxlIG9mIGFMaW5rICYgXCJ8fFwiICYgdXJsIG9mIGFMaW5rICYgXCJ8fFwiICYgdGFnIG5hbWVzIG9mIGFMaW5rICYgXCJ8fFwiICYgc3VtbWFyeSBvZiBhTGluayAmIFwiXFxcXG5cIlxuICAgICAgICAgICAgZW5kIHJlcGVhdFxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgICAgIGVuZCB0ZWxsXG4gICAgICAgIGApO1xuICAgICAgICBzZXRMaW5rcyhwYXJzZUxpbmtzKGxpbmtzRGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxpbmtzOlwiLCBlcnJvcik7XG4gICAgICAgIHNob3dUb2FzdChUb2FzdC5TdHlsZS5GYWlsdXJlLCBcIkZhaWxlZCB0byBmZXRjaCBsaW5rc1wiKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoTGlua3MoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHBhcnNlTGlua3MobGlua3NEYXRhOiBzdHJpbmcpOiBMaW5rW10ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaW5rUmVjb3JkcyA9IGxpbmtzRGF0YS50cmltKCkuc3BsaXQoXCJcXG5cIik7XG4gICAgICByZXR1cm4gbGlua1JlY29yZHMubWFwKChyZWNvcmQpID0+IHtcbiAgICAgICAgY29uc3QgW2lkLCB0aXRsZSwgdXJsLCB0YWdzLCBzdW1tYXJ5XSA9IHJlY29yZC5zcGxpdChcInx8XCIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZC50cmltKCksXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLnRyaW0oKSxcbiAgICAgICAgICB1cmw6IHVybC50cmltKCksXG4gICAgICAgICAgdGFnczogdGFncy50cmltKCkgPyB0YWdzLnRyaW0oKS5zcGxpdChcIixcIikgOiBbXSxcbiAgICAgICAgICBzdW1tYXJ5OiBzdW1tYXJ5LnRyaW0oKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGxpbmtzIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAobGlua0lkOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgaWYgKGxpbmtJZCA9PT0gbnVsbCkge1xuICAgICAgc2V0U2VsZWN0ZWRMaW5rKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3MuZmluZCgobCkgPT4gbC5pZCA9PT0gbGlua0lkKSB8fCBudWxsO1xuICAgICAgc2V0U2VsZWN0ZWRMaW5rKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuSW5Ccm93c2VyID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgb3Blbih1cmwpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3RWaWV3ID0gKCkgPT4gKFxuICAgIDxMaXN0IGlzTG9hZGluZz17aXNMb2FkaW5nfSBvblNlbGVjdGlvbkNoYW5nZT17KGlkKSA9PiBoYW5kbGVTZWxlY3QoaWQpfT5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgIGtleT17bGluay5pZH1cbiAgICAgICAgICBpZD17bGluay5pZH1cbiAgICAgICAgICB0aXRsZT17bGluay50aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17bGluay50YWdzLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbiB0aXRsZT1cIk9wZW4gaW4gQnJvd3NlclwiIG9uQWN0aW9uPXsoKSA9PiBoYW5kbGVPcGVuSW5Ccm93c2VyKGxpbmsudXJsKX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xuXG4gIGNvbnN0IHJlbmRlckRldGFpbFZpZXcgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZExpbmspIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEZXRhaWxcbiAgICAgICAgbWFya2Rvd249e2AjICR7c2VsZWN0ZWRMaW5rLnRpdGxlfVxcblxcbiR7c2VsZWN0ZWRMaW5rLnN1bW1hcnl9YH1cbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgICAgPEFjdGlvbiB0aXRsZT1cIk9wZW4gaW4gQnJvd3NlclwiIG9uQWN0aW9uPXsoKSA9PiBoYW5kbGVPcGVuSW5Ccm93c2VyKHNlbGVjdGVkTGluay51cmwpfSAvPlxuICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gc2VsZWN0ZWRMaW5rID8gcmVuZGVyRGV0YWlsVmlldygpIDogcmVuZGVyTGlzdFZpZXcoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gcnVuIEFwcGxlU2NyaXB0IGNvbW1hbmRzXG5hc3luYyBmdW5jdGlvbiBydW5BcHBsZVNjcmlwdChzY3JpcHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZXhlYyhgb3Nhc2NyaXB0IC1lICcke3NjcmlwdH0nYCwgKGVycm9yLCBzdGRvdXQpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShzdGRvdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFvQztBQUNwQyxpQkFBMEU7QUFDMUUsMkJBQXFCO0FBbUZQO0FBdkVDLFNBQVIsVUFBMkI7QUFDaEMsUUFBTSxDQUFDLE9BQU8sUUFBUSxRQUFJLHVCQUFpQixDQUFDLENBQUM7QUFDN0MsUUFBTSxDQUFDLGNBQWMsZUFBZSxRQUFJLHVCQUFzQixJQUFJO0FBQ2xFLFFBQU0sQ0FBQyxXQUFXLFlBQVksUUFBSSx1QkFBa0IsSUFBSTtBQUV4RCw4QkFBVSxNQUFNO0FBQ2QsbUJBQWUsYUFBYTtBQUMxQixVQUFJO0FBQ0YsY0FBTSxZQUFZLE1BQU0sZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVN0QztBQUNELGlCQUFTLFdBQVcsU0FBUyxDQUFDO0FBQUEsTUFDaEMsU0FBUyxPQUFPO0FBQ2QsZ0JBQVEsTUFBTSx5QkFBeUIsS0FBSztBQUM1QyxrQ0FBVSxpQkFBTSxNQUFNLFNBQVMsdUJBQXVCO0FBQUEsTUFDeEQsVUFBRTtBQUNBLHFCQUFhLEtBQUs7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFDQSxlQUFXO0FBQUEsRUFDYixHQUFHLENBQUMsQ0FBQztBQUVMLFdBQVMsV0FBVyxXQUEyQjtBQUM3QyxRQUFJO0FBQ0YsWUFBTSxjQUFjLFVBQVUsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUMvQyxhQUFPLFlBQVksSUFBSSxDQUFDLFdBQVc7QUFDakMsY0FBTSxDQUFDLElBQUksT0FBTyxLQUFLLE1BQU0sT0FBTyxJQUFJLE9BQU8sTUFBTSxJQUFJO0FBQ3pELGVBQU87QUFBQSxVQUNMLElBQUksR0FBRyxLQUFLO0FBQUEsVUFDWixPQUFPLE1BQU0sS0FBSztBQUFBLFVBQ2xCLEtBQUssSUFBSSxLQUFLO0FBQUEsVUFDZCxNQUFNLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFBQSxVQUM5QyxTQUFTLFFBQVEsS0FBSztBQUFBLFFBQ3hCO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sK0JBQStCLEtBQUs7QUFDbEQsYUFBTyxDQUFDO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGVBQWUsQ0FBQyxXQUEwQjtBQUM5QyxRQUFJLFdBQVcsTUFBTTtBQUNuQixzQkFBZ0IsSUFBSTtBQUFBLElBQ3RCLE9BQU87QUFDTCxZQUFNLE9BQU8sTUFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sTUFBTSxLQUFLO0FBQ25ELHNCQUFnQixJQUFJO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBRUEsUUFBTSxzQkFBc0IsQ0FBQyxRQUFnQjtBQUMzQyx5QkFBSyxHQUFHO0FBQUEsRUFDVjtBQUVBLFFBQU0saUJBQWlCLE1BQ3JCLDRDQUFDLG1CQUFLLFdBQXNCLG1CQUFtQixDQUFDLE9BQU8sYUFBYSxFQUFFLEdBQ25FLGdCQUFNLElBQUksQ0FBQyxTQUNWO0FBQUEsSUFBQyxnQkFBSztBQUFBLElBQUw7QUFBQSxNQUVDLElBQUksS0FBSztBQUFBLE1BQ1QsT0FBTyxLQUFLO0FBQUEsTUFDWixVQUFVLEtBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxNQUM3QixTQUNFLDRDQUFDLDBCQUNDLHNEQUFDLHFCQUFPLE9BQU0sbUJBQWtCLFVBQVUsTUFBTSxvQkFBb0IsS0FBSyxHQUFHLEdBQUcsR0FDakY7QUFBQTtBQUFBLElBUEcsS0FBSztBQUFBLEVBU1osQ0FDRCxHQUNIO0FBR0YsUUFBTSxtQkFBbUIsTUFBTTtBQUM3QixRQUFJLENBQUMsYUFBYyxRQUFPO0FBRTFCLFdBQ0U7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFVBQVUsS0FBSyxhQUFhLEtBQUs7QUFBQTtBQUFBLEVBQU8sYUFBYSxPQUFPO0FBQUEsUUFDNUQsU0FDRSw0Q0FBQywwQkFDQyxzREFBQyxxQkFBTyxPQUFNLG1CQUFrQixVQUFVLE1BQU0sb0JBQW9CLGFBQWEsR0FBRyxHQUFHLEdBQ3pGO0FBQUE7QUFBQSxJQUVKO0FBQUEsRUFFSjtBQUVBLFNBQU8sZUFBZSxpQkFBaUIsSUFBSSxlQUFlO0FBQzVEO0FBR0EsZUFBZSxlQUFlLFFBQWlDO0FBQzdELFNBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLG1DQUFLLGlCQUFpQixNQUFNLEtBQUssQ0FBQyxPQUFPLFdBQVc7QUFDbEQsVUFBSSxPQUFPO0FBQ1QsZUFBTyxLQUFLO0FBQUEsTUFDZCxPQUFPO0FBQ0wsZ0JBQVEsTUFBTTtBQUFBLE1BQ2hCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
