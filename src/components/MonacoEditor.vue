<template>
  <div id="monaco-editor" ref="monacoEditor"></div>
</template>

<script>
// import * as monaco from "monaco-editor/esm/vs/editor/editor.main";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'
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
          selectOnLineNumbers: true,
          roundedSelection: false,
          // readOnly: false, // 只读
          writeOnly: false,
          cursorStyle: "line", //光标样式
          automaticLayout: true, //自动布局
          glyphMargin: true, //字形边缘
          useTabStops: false,
          fontSize: 32, //字体大小
          autoIndent: true, //自动布局
          //quickSuggestionsDelay: 500,   //代码提示延时
          folding: true,
          showFoldingControls: 'always', // 折叠代码
          tabSize: 2, // 缩进
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
      if (this.editor) {
        if (newValue !== this.editor.getValue()) {
          this.editor.setValue(newValue);
          this.editor.trigger(this.editor.getValue(), 'editor.action.formatDocument')
        }
      }
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    // 初始化
    initEditor() {
      const self = this;
      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(self.$refs.monacoEditor, {
        value: self.code, // 编辑器初始显示内容
        language: self.language, // 支持语言
        theme: "vs-light", // 主题
        selectOnLineNumbers: true, //显示行号
        editorOptions: self.editorOptions,
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