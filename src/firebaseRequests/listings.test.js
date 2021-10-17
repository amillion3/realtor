const listings = require("./listings")
// @ponicode
describe("listings.default.getRequest", () => {
    test("0", () => {
        let callFunction = () => {
            listings.default.getRequest()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("listings.default.postRequest", () => {
    test("0", () => {
        let callFunction = () => {
            listings.default.postRequest("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            listings.default.postRequest("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            listings.default.postRequest("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            listings.default.postRequest("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            listings.default.postRequest("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            listings.default.postRequest(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
