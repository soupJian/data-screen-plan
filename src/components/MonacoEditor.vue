<template>
  <div id="monaco-editor" ref="monacoEditor"></div>
</template>

<script>
// import * as monaco from "monaco-editor/esm/vs/editor/editor.main";
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
export default {
  name:"MonacoEditor",
  props: {
    // 编辑器支持的文本格式,自行在百度上搜索
    language: {
      type: String,
      default:"javascript"
    },
    editorOptions: {
      type: Object,
      default: function () {
        return {
          automaticLayout: true, //自动布局
          tabSize: 2, // 缩进
          theme: "vs-light", // 主题
          selectOnLineNumbers: true, //显示行号
        };
      },
    },
    code: {
      type: String,
      default: function () {
        return "";
      },
    },
  },
  data() {
    return {
      editor: null, //文本编辑器
      isSave: true, // 文件改动状态，是否保存
    };
  },
  watch: {
    code: function (newValue) {
      if (this.editor && newValue !== this.editor.getValue()) {
        this.editor.setValue(newValue);
        this.editor.getAction('editor.action.formatDocument').run()  //格式化
          // this.editor.trigger(this.editor.getValue(), 'editor.action.formatDocument')
      }
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    // 初始化
    async initEditor() {
      const monaco = await import('monaco-editor/esm/vs/editor/editor.api')
      const self = this;
      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(self.$refs.monacoEditor, {
        value: self.code, // 编辑器初始显示内容
        language: self.language, // 支持语言
        ...this.editorOptions,
      });
      self.$emit("editMounted", self.editor); //编辑器创建完成回调
      // self.editor.onDidChangeModelContent(function (event) {
      //     //编辑器内容changge事件
      //     self.codeCopy = self.editor.getValue();
      //     self.$emit("onCodeChange", self.editor.getValue(), event);
      // });
    },
    // 格式化
    formatterCode(){
      this.editor.getAction('editor.action.formatDocument').run()  //格式化
    }
  },
};
</script>