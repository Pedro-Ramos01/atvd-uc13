import { formatCurrency } from "./format-currency";

describe("formatCurrency", () => {
  it("deve formatar um valor em reais", () => {
    expect(formatCurrency(24.9)).toBe("R$ 24,90");
  });

  it("deve manter duas casas decimais", () => {
    expect(formatCurrency(10)).toBe("R$ 10,00");
  });

  it("deve lidar com zero", () => {
    expect(formatCurrency(0)).toBe("R$ 0,00");
  });

  it("deve lidar com valores quebrados", () => {
    expect(formatCurrency(24.99)).toBe("R$ 24,99");
  });

  it("deve lidar com valores maiores", () => {
    expect(formatCurrency(1500.5)).toBe("R$ 1.500,50");
  });
});
