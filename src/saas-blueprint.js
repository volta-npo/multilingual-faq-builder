export const PRODUCT_ROLES = ['Source content owner', 'Translator', 'Native reviewer', 'Website publisher'];
export const PRODUCT_PERSONAS = ['Source content owner', 'Translator', 'Native reviewer', 'Website publisher', 'Community reviewer', 'Implementation pod lead'];
export const PRODUCT_INTEGRATIONS = [
    'BCP-47 language tags',
    'Glossary CSV export',
    'Bilingual Markdown/HTML preview',
    'Reviewer signoff log',
];
export const PRODUCT_ANALYTICS = [
    'Translation review coverage',
    'Glossary consistency',
    'Uncertainty rate',
    'Publish readiness',
];
export const PRODUCT_KPIS = ['FAQs owner-approved', 'Glossary consistency score', 'Uncertainty items resolved', 'BCP-47 coverage', 'Reviewer turnaround', 'Publish-ready language pairs'];
export const PRODUCT_WORKFLOWS = [
    'BCP-47 validation',
    'Glossary consistency checks',
    'Uncertainty-blocking queue',
    'Owner-approved publishing pack',
];
export const PRODUCT_ONBOARDING = ['Import source FAQ set', 'Define glossary and cultural notes', 'Create translated draft', 'Resolve uncertainty queue', 'Collect native reviewer signoff', 'Export publishing pack'];
export const PRODUCT_GUARDS = [
    'Block publish with unresolved uncertainty',
    'Require native review for customer-facing text',
    'Flag glossary term drift',
];
export const PRODUCT_EXPANSION = ['Additional language packs', 'Quarterly glossary refresh', 'Community reviewer network', 'Website publishing QA retainer'];
export const PRODUCT_DATA_MODEL = ['FAQ item', 'Language tag', 'Glossary term', 'Cultural note', 'Uncertainty flag', 'Reviewer approval'];
export const PRODUCT_SUCCESS_SIGNALS = ['Native reviewer approves each answer', 'Uncertainty flags block publishing', 'Glossary terms are reused consistently', 'Language tags are valid'];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        personas: PRODUCT_PERSONAS,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        kpis: PRODUCT_KPIS,
        workflows: PRODUCT_WORKFLOWS,
        onboarding: PRODUCT_ONBOARDING,
        guards: PRODUCT_GUARDS,
        expansion: PRODUCT_EXPANSION,
        dataModel: PRODUCT_DATA_MODEL,
        successSignals: PRODUCT_SUCCESS_SIGNALS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map