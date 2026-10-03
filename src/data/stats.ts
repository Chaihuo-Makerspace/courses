/**
 * 合作网络的规模数字 —— 全站唯一来源。
 *
 * 文案里不写死数字，写占位符 `{pioneers}` `{countries}` `{bases}`，由 `fillStats`
 * 在渲染时填入。数字变了只改这里，五个语种的文案都不用动。
 *
 * 出处：owner 确认的先锋官与基地名单（先锋官 79 位，分布 15 个国家；首批签约基地 10 家）。
 */
export const networkStats = {
  pioneers: 79,
  countries: 15,
  bases: 10,
};

/** 对外只说保守的整十下限（79 → 70+），名单每增减一两位不用改文案。 */
const atLeast = (n: number): string => `${Math.floor(n / 10) * 10}+`;

const display: Record<string, string> = {
  pioneers: atLeast(networkStats.pioneers),
  countries: atLeast(networkStats.countries),
  // 「首批 N 家」是一个确定的批次，写实数
  bases: String(networkStats.bases),
};

export function fillStats(text: string): string {
  return text.replace(/\{(pioneers|countries|bases)\}/g, (_, key: string) => display[key]);
}
