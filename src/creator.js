import { generate } from "@graphql-codegen/cli";

const generateCodegen = () => {
    console.log("generate: ", generate);
};

const creator = {
    command: "some-command",
    description: "some-desription",
    // ...
    action: generateCodegen
};

export default creator;
