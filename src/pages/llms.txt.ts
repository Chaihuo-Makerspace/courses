import type { APIRoute } from 'astro';
import { levelMeta, levels, modules } from '../data/modules';
import { partnershipForms, scenarios } from '../data/partnerships';
import { contactEmail } from '../data/site';
import { tracks } from '../data/tracks';

export const prerender = true;

const FALLBACK_SITE = 'https://opc.chaihuo.org';

export const GET: APIRoute = (context) => {
  const base = (context.site?.toString() ?? FALLBACK_SITE).replace(/\/$/, '');
  const lines: string[] = [];

  lines.push('# 柴火创客学院');
  lines.push('');
  lines.push(
    '> 柴火创客学院隶属于柴火创客空间（2011 年在深圳成立，中国最早的创客空间之一）；柴火创客空间由 Seeed 创办，课程用的硬件就是这个体系自己在售的产品（按 SKU 可购）。' +
      '我们培养人掌握新技术整合能力，不提供解决方案：提供的是课程、硬件套件和讲师培训，教会机构自己的团队做交付。',
  );
  lines.push('');
  lines.push(
    '学习体系是 M0–M6 × L1/L2/L3 的矩阵：七个模块（M0 为零基础入门，M1–M6 各对应一类现场问题，可单独开课）' +
      '× 三档深度（L1 展示层 / L2 顾问层 / L3 设计层），按目标分为三个方向（用 AI 造物 / 造 AI 的物 / 解决方案）。' +
      '合作对象有三类（高校 / 集成商 / 企业），合作形态有四种（A 裸硬件 / B 标准教学 / C 全托交付 / D 师资培训）。' +
      '开课预算根据班级规模、目标模块与硬件配置核算；合作意向通过邮件 ' +
      contactEmail +
      ' 联系，本站不提供内嵌表单。',
  );
  lines.push('');
  lines.push(
    '本文件由 `src/data/*.ts` 自动生成，与官网页面同源。' +
      '学习内容会随技术发展持续迭代，**最终内容以官网对应页面为准**。',
  );
  lines.push('');

  lines.push('## 课程模块（M0–M6）');

  lines.push('');
  for (const m of modules) {
    lines.push(
      `- [${m.code} · ${m.title}](${base}/courses/${m.slug}): ${m.oneLiner}${m.overseasOnly ? '（仅海外交付）' : ''}（难度 ${m.difficulty}，时长 ${m.duration}；技术栈 ${m.techStack.join(' / ')}；典型场景 ${m.scenarios.join(' / ')}）`,
    );
  }
  lines.push('');

  lines.push('## 学习深度（L1 / L2 / L3）');
  lines.push('');
  for (const lid of levels) {
    const meta = levelMeta[lid];
    lines.push(`- ${meta.label}: ${meta.description}`);
  }
  lines.push('');

  lines.push('## 三个方向（按目标分组，不是固定顺序）');
  lines.push('');
  for (const t of tracks) {
    lines.push(
      `- [${t.name}](${base}/courses#track-${t.id}): ${t.goal} · 模块 ${t.moduleIds.map((id) => id.toUpperCase()).join(' · ')}`,
    );
  }
  lines.push('');

  lines.push('## 合作对象（适合谁）');
  lines.push('');
  for (const s of scenarios) {
    lines.push(
      `- [${s.title}](${base}/contact#scenario-${s.id}): ${s.subtitle} · 可对应销售形态 ${s.applicableForms.join(' / ')}`,
    );
  }
  lines.push('');

  lines.push('## 销售形态（怎么交付）');
  lines.push('');
  for (const f of partnershipForms) {
    lines.push(`- [形态 ${f.code} · ${f.title}](${base}/contact#form-${f.code}): ${f.subtitle}`);
  }
  lines.push('');

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [学院首页](${base}/): 课程矩阵总览与入口`);
  lines.push(`- [学习体系](${base}/courses): M0–M6 × L1/L2/L3 完整矩阵与三个方向`);

  lines.push(`- [关于学院](${base}/about): 学院来历与负责人`);
  lines.push(
    `- [合作咨询](${base}/contact): 三类合作对象与四种合作形态，邮件 ${contactEmail} 联系`,
  );
  lines.push(
    `- [先锋官计划](${base}/pioneer): 招募教学点火人：面向个人创客与讲师，掌握课程后在本地开展授课交付与合作拓展；注册跳转 map.seeed.cc`,
  );
  lines.push(
    `- [基地计划](${base}/base): 面向有固定教学场地的机构，挂牌认证本地授课中心并常态开课；注册跳转 map.seeed.cc`,
  );
  lines.push(`- [创客生态分布图](https://map.seeed.cc): 全球柴火生态节点地图与注册入口`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
