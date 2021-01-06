let data = {
  test: {
    type: "page",
    title: "标题",
    remark: "提示 Tip",
    // body: "内容部分. 可以使用 \\${var} 获取变量。如: \\$date: ${date}",
    aside: "边栏部分",
    toolbar: "工具栏",
    initApi: "https://houtai.baidu.com/api/mock2/page/initData"
  },

  fromPage: {
    $schema: "https://houtai.baidu.com/v2/schemas/page.json",
    type: "page",
    title: "表单页面",
    body: {
      type: "form",
      mode: "horizontal",
      initApi: "https://houtai.baidu.com/api/mock2/form/saveForm",
      controls: [
        { label: "Name", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" }
      ]
    }
  },
  gongshi: {
    type: "page",
    body: {
      type: "form",
      controls: [
        {
          type: "number",
          name: "a",
          label: "A"
        },
        {
          type: "number",
          name: "b",
          label: "B"
        },
        {
          type: "number",
          name: "sum",
          label: "和",
          disabled: true,
          description: "自动计算 A + B"
        },
        {
          type: "formula",
          name: "sum",

          formula: "a * b"
        }
      ]
    }
  },
  simpalePage: {
    type: "page",
    body: {
      type: "form",
      title: "myFrom",
      initApi: "http://192.168.142.120:8080/api/rtx-detail",
      // adaptor : " console.log(payload) \n const { data } = response.data \n  return {\n    ...payload,\n data ,\n   status: payload.code === 200 ? 0 : payload.code\n}",

      adaptor: function (payload:any, response:any) {
        console.log(payload)
        return {
          ...payload,
          status: payload.code === 200 ? 0 : payload.code
        };
      },
      controls: [
        {
          type: "text",
          name: "name",
          label: "姓名："
        }
      ],
      actions: []
    }
  },
  ptest: { "type": "page", "title": "RTX明细", "body": [{ "type": "crud", 
  "api": { "method": "get", "url": "http://192.168.142.120:8080/api/rtx-detail", 
  "adaptor": " const data = payload.value.result \n  return {\n    ...payload,\n data ,\n   status: payload.code === 200 ? 0 : payload.code\n}", 
  "dataType": "json", "replaceData": true}, "columns": [{ "name": "name", "label": "姓名", "type": "text", "placeholder": "-", "sortable": true }, { "name": "num", "label": "员工号", "type": "text" }, { "type": "text", "label": "部门", "name": "dept" }, { "type": "date", "label": "申请日期", "name": "app_date" }], "messages": {}, "initFetch": true, "loadDataOnce": true, "footable": { "expand": "first" }, "columnsTogglable": true, "mode": "table", "bulkActions": [{ "label": "导出", "type": "button", "size": "sm", "actionType": "ajax" }]}]}

  
};

export default data;

// const aa={
//   ...payload,
//   payload.value.result
// }