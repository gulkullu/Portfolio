describe('c-my-resume-container', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('should render appropriate content', () => {
        // Arrange
        const element = createElement('c-my-resume-container', {
            is: MyResumeContainer
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // Example: Check if a specific part of the component is rendered
        const div = element.shadowRoot.querySelector('div');
        expect(div).not.toBeNull();

        // Additional assertions as needed
        // For example, checking if specific text content, class names, attributes, etc., are correct
        // expect(div.textContent).toBe('Expected Text');
        // expect(div.className).toBe('expected-class-name');
    });
});
