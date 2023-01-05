import { verify } from '../src/verify';

test("Example unit test", () => {
    expect(verify("----(+++++)-----")).toBe(true);
    expect(verify("{()}")).toBe(true);
    expect(verify("{{}")).toBe(true);
    expect(verify("{{}>")).toBe(false);
    expect(verify("({)")).toBe(false);
    expect(verify(")(")).toBe(false);
    expect(verify("(.)(.)")).toBe(true);
});
