let data = {
  test: {
    type: "page",
    title: "标题",
    remark: "提示 Tip",
    body: "内容部分. 可以使用 \\${var} 获取变量。如: \\$date: ${date}",
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
      api: "https://houtai.baidu.com/api/mock2/form/saveForm",
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
      api: "https://houtai.baidu.com/api/mock2/form/saveForm",
      controls: [
        {
          type: "text",
          name: "name",
          label: "姓名："
        }
      ],
      actions: []
    }
  }
};

export default data;
