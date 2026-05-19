export const config = {
    "number": 37,
    "slug": "multilingual-faq-builder",
    "title": "Multilingual FAQ Builder",
    "category": "AI & Automation",
    "tagline": "Build bilingual FAQ pages with owner-approved translations and cultural context notes.",
    "persona": "Students serving diverse communities across Volta chapters.",
    "gap": "Translation tools exist, but local businesses need reviewed, owner-accurate customer language.",
    "niche": "Businesses serving multilingual neighborhoods.",
    "metric": "FAQs published in languages customers actually use",
    "modules": [
        "FAQ source table",
        "Glossary builder",
        "Translation review states",
        "Website-ready output"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "faq-source-table",
            "label": "FAQ source table",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify faq source table with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "glossary-builder",
            "label": "Glossary builder",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify glossary builder with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "translation-review-states",
            "label": "Translation review states",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify translation review states with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "website-ready-output",
            "label": "Website-ready output",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify website-ready output with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Multilingual FAQ Builder and capture baseline evidence.",
            "Complete the faq source table workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. Multilingual FAQ Builder sample.",
        "evidencePrefix": "Multilingual FAQ Builder",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map