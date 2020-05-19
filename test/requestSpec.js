const uri = "http://www.augmentedjs.com/privacy.html";

describe("Given Presentation Request", () => {
	it("is defined", () => {
		expect(Request.request).to.not.be.undefined;
	});

	describe("can fetch", () => {

		xit("can fetch a file via simple fetch", async () => {
			const response = await Request.request({
				url: uri,
				contentType: "application/html",
				dataType: "html",
				headers: { "custom": "something" },
				success: (data, status) => {  console.log(data); return data; },
				failure: (e) => { return e; }
				});

			expect(response).to.be.true;
		});


	});
});
