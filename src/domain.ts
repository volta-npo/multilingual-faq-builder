export const domain = {
  "kind": "translation-table",
  "title": "Multilingual FAQ Builder Translation Table",
  "purpose": "A purpose-built translation table interface for build bilingual faq pages with owner-approved translations and cultural context notes.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "FAQ translations",
  "metricLabels": [
    "Translation Coverage",
    "Review Safety",
    "Glossary Consistency"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "BrightPath Tutoring Studio",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "FAQs published in languages customers actually use",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "source-language",
      "label": "Source language",
      "type": "text",
      "sample": "English",
      "placeholder": "Enter source language"
    },
    {
      "id": "target-language",
      "label": "Target language",
      "type": "text",
      "sample": "Spanish",
      "placeholder": "Enter target language"
    },
    {
      "id": "faq-count",
      "label": "FAQ count",
      "type": "number",
      "sample": 18,
      "placeholder": "Enter faq count"
    },
    {
      "id": "reviewer",
      "label": "Reviewer",
      "type": "text",
      "sample": "Native speaker reviewer",
      "placeholder": "Enter reviewer"
    }
  ],
  "rows": [
    "Source FAQs entered",
    "Glossary created",
    "Language tags assigned",
    "Translations drafted",
    "Uncertainty flags reviewed",
    "Native/owner review captured",
    "HTML/Markdown generated",
    "CSV exported"
  ],
  "artifacts": [
    "Bilingual HTML",
    "Markdown FAQ",
    "Translation CSV"
  ],
  "checks": [
    "Language tags valid",
    "Source linkage required",
    "Uncertain translations blocked from approved export"
  ],
  "sampleClient": "BrightPath Tutoring Studio"
};
