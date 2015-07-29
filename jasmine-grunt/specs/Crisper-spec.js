describe("Crisper", function() {
    it("should be a constructor function", function() {
        expect(typeof window.Crisper).toBe("function");
    });
    it("should be a constructor function taking one argument", function() {
        expect(window.Crisper.length).toBe(1);
    });
    it("instances should get a name property initialized with the constructor argument", function() {
        var reza = new window.Crisper('Reza');
        expect(reza.name).toBe("Reza");
    });
});