import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: false },
    githubLink: { type: "string", required: true },
    deployLink: { type: "string", required: false },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
