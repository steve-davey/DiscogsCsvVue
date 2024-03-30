export default {
  name: 'FileUpload',
  data() {
    return {
      file: ""
    }
  },
  methods: {
    chooseFiles(event) {
      console.log("chooseFiles");
      const file = event.target.files[0];
      console.log(file);
      this.$emit("file", file);
    },
  },
  mounted() {
    console.log("mounted");
  },
}
