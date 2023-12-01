// import tools

import Embed from "@editorjs/embed"; // yt video
import List from "@editorjs/list"; // simple list
// import Image from "@editorjs/image"; // upload img or drag and drop image
import Header from "@editorjs/header"; // heading
import Quote from "@editorjs/quote"; // quote
import Marker from "@editorjs/marker"; // highlight
import InlineCode from "@editorjs/inline-code"; // code

// const handleUploadImageByUrl = async (e) => {
//   let link = new Promise((resolve, reject) => {
//     try {
//       resolve(e);
//     } catch (err) {
//       reject(err);
//     }
//   });

//   return link.then((url) => {
//     return {
//       success: 1,
//       file: { url },
//     };
//   });
// };

const tools = {
  embed: Embed,
  list: {
    class: List,
    inlineToolbar: true,
  },
  //   image: {
  //     class: Image,
  //     config: {
  //       uploader: {
  //         uploadByUrl: handleUploadImageByUrl,
  //          uploadByFile: ,
  //       },
  //     },
  //   },
  header: {
    class: Header,
    config: {
      placeholder: "Type Heading....",
      levels: [2, 3],
      defaultLevel: 2,
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  marker: Marker,
  inlineCode: InlineCode,
};

export { tools };
