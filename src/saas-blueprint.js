export const PRODUCT_ROLES = [
    'Source content owner',
    'Translator',
    'Native reviewer',
    'Website publisher',
];
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
export const PRODUCT_WORKFLOWS = [
    'BCP-47 validation',
    'Glossary consistency checks',
    'Uncertainty-blocking queue',
    'Owner-approved publishing pack',
];
export const PRODUCT_GUARDS = [
    'Block publish with unresolved uncertainty',
    'Require native review for customer-facing text',
    'Flag glossary term drift',
];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        workflows: PRODUCT_WORKFLOWS,
        guards: PRODUCT_GUARDS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map