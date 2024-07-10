describe("Ball Movement", function() {
    it("should reverse direction when hitting the right wall", function() {
      ball.x = canvas.width - ball.size;
      ball.dx = 4;
      moveBall();
      expect(ball.dx).toBe(-4);
    });
  
    it("should reverse direction when hitting the left wall", function() {
      ball.x = ball.size;
      ball.dx = -4;
      moveBall();
      expect(ball.dx).toBe(4);
    });
  });
  