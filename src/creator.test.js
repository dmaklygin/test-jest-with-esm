import someCreator from "./creator.js";

describe("someCreator", () => {
    it("has the correct command structure", () => {
        expect(someCreator).toMatchSnapshot();
    });
});
