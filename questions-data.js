export const QUESTIONS = [
  {
    "id": "q01_1",
    "questionCode": "Q01.1",
    "sectionId": "begin_project",
    "subcategoryId": "project_type",
    "label": "What kind of residential project are we helping you with?",
    "helper": "This helps us tailor the right process and expertise for you.",
    "type": "single_select",
    "required": true,
    "options": [
      {
        "label": "New residence",
        "value": "new_residence"
      },
      {
        "label": "Renovation",
        "value": "renovation"
      },
      {
        "label": "Bungalow",
        "value": "bungalow"
      },
      {
        "label": "Farmhouse",
        "value": "farmhouse"
      },
      {
        "label": "Flat / apartment interiors",
        "value": "flat_apartment_interiors"
      },
      {
        "label": "Landscape",
        "value": "landscape"
      },
      {
        "label": "Full-scope residential project",
        "value": "full-scope_residential_project"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "project_type_clarity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q01_2",
    "questionCode": "Q01.2",
    "sectionId": "begin_project",
    "subcategoryId": "services_required",
    "label": "What services do you want Parkar & Associates to handle?",
    "helper": "",
    "type": "multi_select",
    "required": true,
    "options": [
      {
        "label": "Architecture",
        "value": "architecture"
      },
      {
        "label": "Interiors",
        "value": "interiors"
      },
      {
        "label": "Landscape",
        "value": "landscape"
      },
      {
        "label": "Project Management",
        "value": "project_management"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "scope_clarity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q01_3",
    "questionCode": "Q01.3",
    "sectionId": "begin_project",
    "subcategoryId": "project_stage",
    "label": "How far along is the project?",
    "helper": "",
    "type": "single_select",
    "required": true,
    "options": [
      {
        "label": "Just exploring",
        "value": "just_exploring"
      },
      {
        "label": "Site / property is finalised",
        "value": "site_property_is_finalised"
      },
      {
        "label": "Drawings already exist",
        "value": "drawings_already_exist"
      },
      {
        "label": "Construction has not started",
        "value": "construction_has_not_started"
      },
      {
        "label": "Construction has started",
        "value": "construction_has_started"
      },
      {
        "label": "Renovation is planned",
        "value": "renovation_is_planned"
      },
      {
        "label": "Need guidance before deciding",
        "value": "need_guidance_before_deciding"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "site_readiness",
      "timeline_urgency"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q01_4",
    "questionCode": "Q01.4",
    "sectionId": "begin_project",
    "subcategoryId": "tailoring_guidance",
    "label": "Would you like us to tailor the form to your project type?",
    "helper": "",
    "type": "single_select",
    "required": true,
    "options": [
      {
        "label": "Yes - show only relevant questions",
        "value": "yes_show_only_relevant_questions"
      },
      {
        "label": "No - show the full residential decision sheet",
        "value": "no_show_the_full_residential_decision_sheet"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q01_5",
    "questionCode": "Q01.5",
    "sectionId": "begin_project",
    "subcategoryId": "tailoring_guidance",
    "label": "How much guidance do you expect from us at this stage?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "We need full guidance from the beginning",
        "value": "we_need_full_guidance_from_the_beginning"
      },
      {
        "label": "We have some clarity but need professional direction",
        "value": "we_have_some_clarity_but_need_professional_direction"
      },
      {
        "label": "We already know most requirements",
        "value": "we_already_know_most_requirements"
      },
      {
        "label": "We mainly need design refinement",
        "value": "we_mainly_need_design_refinement"
      },
      {
        "label": "Not sure - we can recommend the next step",
        "value": "not_sure_we_can_recommend_the_next_step"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "guidance_needed"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q01_6",
    "questionCode": "Q01.6",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Full name of primary client",
    "helper": "",
    "type": "short_text",
    "required": true,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q01_7",
    "questionCode": "Q01.7",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Primary phone number with WhatsApp availability",
    "helper": "",
    "type": "phone",
    "required": true,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "sales_followup"
    ]
  },
  {
    "id": "q01_8",
    "questionCode": "Q01.8",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Email address",
    "helper": "",
    "type": "email",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "sales_followup"
    ]
  },
  {
    "id": "q01_9",
    "questionCode": "Q01.9",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Preferred mode(s) of communication",
    "helper": "Select all that are convenient for follow-up.",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Phone call",
        "value": "phone_call"
      },
      {
        "label": "WhatsApp",
        "value": "whatsapp"
      },
      {
        "label": "Email",
        "value": "email"
      },
      {
        "label": "In-person meeting",
        "value": "in-person_meeting"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "sales_followup"
    ]
  },
  {
    "id": "q01_10",
    "questionCode": "Q01.10",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Who has final decision-making authority on this project?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Myself",
        "value": "myself"
      },
      {
        "label": "Spouse",
        "value": "spouse"
      },
      {
        "label": "Parents / family elder",
        "value": "parents_family_elder"
      },
      {
        "label": "Joint family decision",
        "value": "joint_family_decision"
      },
      {
        "label": "Business / property partner",
        "value": "business_property_partner"
      },
      {
        "label": "Not sure yet",
        "value": "not_sure_yet"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "decision_clarity"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q01_11",
    "questionCode": "Q01.11",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "Who else should be involved in design decisions?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q01_12",
    "questionCode": "Q01.12",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "How did you hear about us?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Referral",
        "value": "referral"
      },
      {
        "label": "Instagram",
        "value": "instagram"
      },
      {
        "label": "Website",
        "value": "website"
      },
      {
        "label": "Google search",
        "value": "google_search"
      },
      {
        "label": "Existing client",
        "value": "existing_client"
      },
      {
        "label": "Other",
        "value": "other"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "sales_followup"
    ]
  },
  {
    "id": "q01_13",
    "questionCode": "Q01.13",
    "sectionId": "begin_project",
    "subcategoryId": "client_decision_makers",
    "label": "If referral, who referred you?",
    "helper": "",
    "type": "short_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": {
      "questionId": "q01_12",
      "operator": "equals",
      "value": "Referral"
    },
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "sales_followup"
    ]
  },
  {
    "id": "q02_1",
    "questionCode": "Q02.1",
    "sectionId": "property",
    "subcategoryId": "property_basics",
    "label": "Project address / location",
    "helper": "",
    "type": "short_text",
    "required": true,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "site_readiness"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score"
    ]
  },
  {
    "id": "q02_2",
    "questionCode": "Q02.2",
    "sectionId": "property",
    "subcategoryId": "property_basics",
    "label": "City and state",
    "helper": "",
    "type": "short_text",
    "required": true,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q02_3",
    "questionCode": "Q02.3",
    "sectionId": "property",
    "subcategoryId": "property_basics",
    "label": "What is the current status of your property?",
    "helper": "",
    "type": "single_select",
    "required": true,
    "options": [
      {
        "label": "Plot / vacant land",
        "value": "plot_vacant_land"
      },
      {
        "label": "Existing structure",
        "value": "existing_structure"
      },
      {
        "label": "Under construction",
        "value": "under_construction"
      },
      {
        "label": "Apartment / flat",
        "value": "apartment_flat"
      },
      {
        "label": "Landscape-only site",
        "value": "landscape-only_site"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "site_readiness"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q02_4",
    "questionCode": "Q02.4",
    "sectionId": "property",
    "subcategoryId": "property_basics",
    "label": "Approximate plot area / carpet area / landscape area",
    "helper": "",
    "type": "measurement",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "site_readiness"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q02_5",
    "questionCode": "Q02.5",
    "sectionId": "property",
    "subcategoryId": "property_basics",
    "label": "Property possession status",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Already owned / possessed",
        "value": "already_owned_possessed"
      },
      {
        "label": "Booked but possession pending",
        "value": "booked_but_possession_pending"
      },
      {
        "label": "Inherited / family property",
        "value": "inherited_family_property"
      },
      {
        "label": "Under purchase consideration",
        "value": "under_purchase_consideration"
      },
      {
        "label": "Not sure yet",
        "value": "not_sure_yet"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "site_readiness"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q02_6",
    "questionCode": "Q02.6",
    "sectionId": "property",
    "subcategoryId": "site_orientation",
    "label": "Plot dimensions",
    "helper": "",
    "type": "measurement",
    "required": false,
    "options": [],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q02_7",
    "questionCode": "Q02.7",
    "sectionId": "property",
    "subcategoryId": "site_orientation",
    "label": "Plot orientation - direction the front / main entrance faces",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "North",
        "value": "north"
      },
      {
        "label": "East",
        "value": "east"
      },
      {
        "label": "South",
        "value": "south"
      },
      {
        "label": "West",
        "value": "west"
      },
      {
        "label": "North-east",
        "value": "north-east"
      },
      {
        "label": "North-west",
        "value": "north-west"
      },
      {
        "label": "South-east",
        "value": "south-east"
      },
      {
        "label": "South-west",
        "value": "south-west"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "light",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q02_8",
    "questionCode": "Q02.8",
    "sectionId": "property",
    "subcategoryId": "site_orientation",
    "label": "Existing trees, wells, water bodies, or natural features to preserve",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "landscape",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q02_9",
    "questionCode": "Q02.9",
    "sectionId": "property",
    "subcategoryId": "existing_conditions",
    "label": "What is not working in the current property?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "renovation",
      "flat_interiors"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "technical_complexity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q02_10",
    "questionCode": "Q02.10",
    "sectionId": "property",
    "subcategoryId": "existing_conditions",
    "label": "Which areas must be retained?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "renovation",
      "flat_interiors"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q02_11",
    "questionCode": "Q02.11",
    "sectionId": "property",
    "subcategoryId": "existing_conditions",
    "label": "Are there cracks, leakage, dampness, seepage, or structural concerns?",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Cracks",
        "value": "cracks"
      },
      {
        "label": "Leakage",
        "value": "leakage"
      },
      {
        "label": "Dampness",
        "value": "dampness"
      },
      {
        "label": "Seepage",
        "value": "seepage"
      },
      {
        "label": "Uneven flooring",
        "value": "uneven_flooring"
      },
      {
        "label": "No known issue",
        "value": "no_known_issue"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "renovation",
      "flat_interiors"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "technical_complexity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q02_12",
    "questionCode": "Q02.12",
    "sectionId": "property",
    "subcategoryId": "approvals_restrictions",
    "label": "Are permissions required before work begins?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "site_readiness"
    ],
    "internalOutput": [
      "summary",
      "scope_checklist",
      "sales_followup"
    ]
  },
  {
    "id": "q02_13",
    "questionCode": "Q02.13",
    "sectionId": "property",
    "subcategoryId": "approvals_restrictions",
    "label": "For apartments - society / builder rules, service lift and working-hour restrictions",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "flat_interiors",
      "renovation"
    ],
    "serviceScopes": [
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q02_14",
    "questionCode": "Q02.14",
    "sectionId": "property",
    "subcategoryId": "property_links",
    "label": "Share links to site photos, property documents, builder plans, or existing drawings",
    "helper": "Google Drive, Dropbox, website, or shared folder links are preferred.",
    "type": "link",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "documents_available"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q03_1",
    "questionCode": "Q03.1",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "scope_of_work",
    "label": "Confirm the services required",
    "helper": "",
    "type": "multi_select",
    "required": true,
    "options": [
      {
        "label": "Architecture",
        "value": "architecture"
      },
      {
        "label": "Interiors",
        "value": "interiors"
      },
      {
        "label": "Landscape",
        "value": "landscape"
      },
      {
        "label": "Project Management",
        "value": "project_management"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q03_2",
    "questionCode": "Q03.2",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "scope_of_work",
    "label": "Do you want Parkar & Associates to guide the full process or selected parts only?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Full guidance from concept to completion",
        "value": "full_guidance_from_concept_to_completion"
      },
      {
        "label": "Design only",
        "value": "design_only"
      },
      {
        "label": "Design + coordination",
        "value": "design_+_coordination"
      },
      {
        "label": "Project management support",
        "value": "project_management_support"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "scope_clarity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q03_3",
    "questionCode": "Q03.3",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "project_scale",
    "label": "Approximate built-up area or area under scope",
    "helper": "",
    "type": "measurement",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q03_4",
    "questionCode": "Q03.4",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "project_scale",
    "label": "Number of floors planned",
    "helper": "",
    "type": "number",
    "required": false,
    "options": [],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q03_5",
    "questionCode": "Q03.5",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "budget_comfort",
    "label": "Approximate construction budget",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Under Rs. 50L",
        "value": "under_rs._50l"
      },
      {
        "label": "Rs. 50L - 1Cr",
        "value": "rs._50l_1cr"
      },
      {
        "label": "Rs. 1Cr - 2Cr",
        "value": "rs._1cr_2cr"
      },
      {
        "label": "Rs. 2Cr - 5Cr",
        "value": "rs._2cr_5cr"
      },
      {
        "label": "Above Rs. 5Cr",
        "value": "above_rs._5cr"
      },
      {
        "label": "Prefer to discuss with architect",
        "value": "prefer_to_discuss_with_architect"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "light",
    "salesSignal": [
      "budget_clarity"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_6",
    "questionCode": "Q03.6",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "budget_comfort",
    "label": "Approximate interior budget",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Under Rs. 10L",
        "value": "under_rs._10l"
      },
      {
        "label": "Rs. 10L - 25L",
        "value": "rs._10l_25l"
      },
      {
        "label": "Rs. 25L - 50L",
        "value": "rs._25l_50l"
      },
      {
        "label": "Rs. 50L - 1Cr",
        "value": "rs._50l_1cr"
      },
      {
        "label": "Above Rs. 1Cr",
        "value": "above_rs._1cr"
      },
      {
        "label": "Prefer to discuss with architect",
        "value": "prefer_to_discuss_with_architect"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "budget_clarity"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_7",
    "questionCode": "Q03.7",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "budget_comfort",
    "label": "Approximate landscape budget",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Under Rs. 5L",
        "value": "under_rs._5l"
      },
      {
        "label": "Rs. 5L - 15L",
        "value": "rs._5l_15l"
      },
      {
        "label": "Rs. 15L - 30L",
        "value": "rs._15l_30l"
      },
      {
        "label": "Rs. 30L - 75L",
        "value": "rs._30l_75l"
      },
      {
        "label": "Above Rs. 75L",
        "value": "above_rs._75l"
      },
      {
        "label": "Prefer to discuss with architect",
        "value": "prefer_to_discuss_with_architect"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "landscape",
      "farmhouse",
      "full_scope",
      "bungalow"
    ],
    "serviceScopes": [
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "budget_clarity"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_8",
    "questionCode": "Q03.8",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "budget_comfort",
    "label": "How fixed is your budget?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Fixed and must be carefully controlled",
        "value": "fixed_and_must_be_carefully_controlled"
      },
      {
        "label": "Some flexibility for better design/value",
        "value": "some_flexibility_for_better_design/value"
      },
      {
        "label": "Flexible for premium results",
        "value": "flexible_for_premium_results"
      },
      {
        "label": "Not sure - we can recommend budget alignment",
        "value": "not_sure_we_can_recommend_budget_alignment"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "budget_clarity",
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_9",
    "questionCode": "Q03.9",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "timeline",
    "label": "Desired project start date",
    "helper": "",
    "type": "date",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "timeline_urgency"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_10",
    "questionCode": "Q03.10",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "timeline",
    "label": "Desired completion / move-in date",
    "helper": "",
    "type": "date",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "timeline_urgency"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q03_11",
    "questionCode": "Q03.11",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "timeline",
    "label": "Is there any important deadline?",
    "helper": "E.g., wedding, festival, school year, family event, rental lease ending.",
    "type": "short_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "timeline_urgency"
    ],
    "internalOutput": [
      "summary",
      "sales_followup"
    ]
  },
  {
    "id": "q03_12",
    "questionCode": "Q03.12",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "execution_situation",
    "label": "Will you live elsewhere during construction / renovation?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Partly / phased",
        "value": "partly_phased"
      },
      {
        "label": "Not sure yet",
        "value": "not_sure_yet"
      }
    ],
    "projectTypes": [
      "renovation",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "execution_readiness"
    ],
    "internalOutput": [
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q03_13",
    "questionCode": "Q03.13",
    "sectionId": "scope_budget_timeline",
    "subcategoryId": "execution_situation",
    "label": "Do you need project management support?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Not sure - we can recommend",
        "value": "not_sure_we_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "project_management",
      "architecture",
      "interiors",
      "landscape",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "scope_clarity",
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q04_1",
    "questionCode": "Q04.1",
    "sectionId": "family_lifestyle",
    "subcategoryId": "family_profile",
    "label": "How many family members will live in the home?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "1-2 members",
        "value": "1-2_members"
      },
      {
        "label": "3-4 members",
        "value": "3-4_members"
      },
      {
        "label": "5-6 members",
        "value": "5-6_members"
      },
      {
        "label": "7 or more members",
        "value": "7_or_more_members"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_2",
    "questionCode": "Q04.2",
    "sectionId": "family_lifestyle",
    "subcategoryId": "family_profile",
    "label": "Ages and relationships of all occupants",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q04_3",
    "questionCode": "Q04.3",
    "sectionId": "family_lifestyle",
    "subcategoryId": "family_profile",
    "label": "Family structure",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Nuclear",
        "value": "nuclear"
      },
      {
        "label": "Joint family",
        "value": "joint_family"
      },
      {
        "label": "Multi-generational with separate floors",
        "value": "multi-generational_with_separate_floors"
      },
      {
        "label": "Couple",
        "value": "couple"
      },
      {
        "label": "Single occupant",
        "value": "single_occupant"
      },
      {
        "label": "Weekend-use family home",
        "value": "weekend-use_family_home"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_4",
    "questionCode": "Q04.4",
    "sectionId": "family_lifestyle",
    "subcategoryId": "daily_routine",
    "label": "Work-from-home requirements",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "No regular work-from-home",
        "value": "no_regular_work-from-home"
      },
      {
        "label": "One home office",
        "value": "one_home_office"
      },
      {
        "label": "Two home offices",
        "value": "two_home_offices"
      },
      {
        "label": "Study/library",
        "value": "study/library"
      },
      {
        "label": "Flexible work corner",
        "value": "flexible_work_corner"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_5",
    "questionCode": "Q04.5",
    "sectionId": "family_lifestyle",
    "subcategoryId": "guests_hosting",
    "label": "How do you usually host?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Rarely host",
        "value": "rarely_host"
      },
      {
        "label": "Small family gatherings",
        "value": "small_family_gatherings"
      },
      {
        "label": "Formal dinners",
        "value": "formal_dinners"
      },
      {
        "label": "Large gatherings",
        "value": "large_gatherings"
      },
      {
        "label": "Outdoor hosting",
        "value": "outdoor_hosting"
      },
      {
        "label": "Extended-stay guests",
        "value": "extended-stay_guests"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_6",
    "questionCode": "Q04.6",
    "sectionId": "family_lifestyle",
    "subcategoryId": "accessibility_comfort",
    "label": "Any mobility, elderly, accessibility, or medical considerations?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q04_7",
    "questionCode": "Q04.7",
    "sectionId": "family_lifestyle",
    "subcategoryId": "staff_pets_vehicles",
    "label": "Live-in or day staff requirements",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "None",
        "value": "none"
      },
      {
        "label": "Day staff only",
        "value": "day_staff_only"
      },
      {
        "label": "Live-in staff",
        "value": "live-in_staff"
      },
      {
        "label": "Caretaker required",
        "value": "caretaker_required"
      },
      {
        "label": "Not sure",
        "value": "not_sure"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_8",
    "questionCode": "Q04.8",
    "sectionId": "family_lifestyle",
    "subcategoryId": "staff_pets_vehicles",
    "label": "Pets at home",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "No pets",
        "value": "no_pets"
      },
      {
        "label": "Dog",
        "value": "dog"
      },
      {
        "label": "Cat",
        "value": "cat"
      },
      {
        "label": "Multiple pets",
        "value": "multiple_pets"
      },
      {
        "label": "Planning pets in future",
        "value": "planning_pets_in_future"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q04_9",
    "questionCode": "Q04.9",
    "sectionId": "family_lifestyle",
    "subcategoryId": "staff_pets_vehicles",
    "label": "Number of vehicles to park",
    "helper": "",
    "type": "number",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q04_10",
    "questionCode": "Q04.10",
    "sectionId": "family_lifestyle",
    "subcategoryId": "staff_pets_vehicles",
    "label": "EV charging required now or future-ready?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Required now",
        "value": "required_now"
      },
      {
        "label": "Future-ready provision",
        "value": "future-ready_provision"
      },
      {
        "label": "Not required",
        "value": "not_required"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "light",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q05_1",
    "questionCode": "Q05.1",
    "sectionId": "space_planning",
    "subcategoryId": "bed_bath_count",
    "label": "Total bedrooms required",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "1",
        "value": "1"
      },
      {
        "label": "2",
        "value": "2"
      },
      {
        "label": "3",
        "value": "3"
      },
      {
        "label": "4",
        "value": "4"
      },
      {
        "label": "5+",
        "value": "5+"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope",
      "not_sure"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q05_2",
    "questionCode": "Q05.2",
    "sectionId": "space_planning",
    "subcategoryId": "bed_bath_count",
    "label": "Number of attached bathrooms",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "1",
        "value": "1"
      },
      {
        "label": "2",
        "value": "2"
      },
      {
        "label": "3",
        "value": "3"
      },
      {
        "label": "4+",
        "value": "4+"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q05_3",
    "questionCode": "Q05.3",
    "sectionId": "space_planning",
    "subcategoryId": "living_dining",
    "label": "Living spaces required",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Formal drawing room",
        "value": "formal_drawing_room"
      },
      {
        "label": "Family living",
        "value": "family_living"
      },
      {
        "label": "Combined living-dining",
        "value": "combined_living-dining"
      },
      {
        "label": "Separate dining",
        "value": "separate_dining"
      },
      {
        "label": "Breakfast nook",
        "value": "breakfast_nook"
      },
      {
        "label": "Foyer",
        "value": "foyer"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q05_4",
    "questionCode": "Q05.4",
    "sectionId": "space_planning",
    "subcategoryId": "kitchen_utility_relation",
    "label": "Kitchen layout type",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Open",
        "value": "open"
      },
      {
        "label": "Semi-open",
        "value": "semi-open"
      },
      {
        "label": "Closed",
        "value": "closed"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope",
      "not_sure"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q05_5",
    "questionCode": "Q05.5",
    "sectionId": "space_planning",
    "subcategoryId": "kitchen_utility_relation",
    "label": "Secondary / prep / masala kitchen required?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Maybe",
        "value": "maybe"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q05_6",
    "questionCode": "Q05.6",
    "sectionId": "space_planning",
    "subcategoryId": "sacred_cultural_lifestyle",
    "label": "Pooja room / mandir",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Yes - dedicated room",
        "value": "yes_dedicated_room"
      },
      {
        "label": "Yes - built-in unit / niche",
        "value": "yes_built-in_unit_niche"
      },
      {
        "label": "Yes - standalone temple",
        "value": "yes_standalone_temple"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q05_7",
    "questionCode": "Q05.7",
    "sectionId": "space_planning",
    "subcategoryId": "sacred_cultural_lifestyle",
    "label": "How important is Vastu to you?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Not important",
        "value": "not_important"
      },
      {
        "label": "Some preferences",
        "value": "some_preferences"
      },
      {
        "label": "Important",
        "value": "important"
      },
      {
        "label": "Strictly follow Vastu",
        "value": "strictly_follow_vastu"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q05_8",
    "questionCode": "Q05.8",
    "sectionId": "space_planning",
    "subcategoryId": "special_rooms",
    "label": "Additional rooms required",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Library",
        "value": "library"
      },
      {
        "label": "Study",
        "value": "study"
      },
      {
        "label": "Home theatre",
        "value": "home_theatre"
      },
      {
        "label": "Gym",
        "value": "gym"
      },
      {
        "label": "Yoga / meditation",
        "value": "yoga_meditation"
      },
      {
        "label": "Hobby room",
        "value": "hobby_room"
      },
      {
        "label": "Music room",
        "value": "music_room"
      },
      {
        "label": "Game room",
        "value": "game_room"
      },
      {
        "label": "Bar / lounge",
        "value": "bar_lounge"
      },
      {
        "label": "Walk-in storeroom",
        "value": "walk-in_storeroom"
      },
      {
        "label": "Wine cellar",
        "value": "wine_cellar"
      },
      {
        "label": "Seasonal storage",
        "value": "seasonal_storage"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q05_9",
    "questionCode": "Q05.9",
    "sectionId": "space_planning",
    "subcategoryId": "outdoor_semi_outdoor",
    "label": "Outdoor / semi-outdoor spaces required",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Front lawn",
        "value": "front_lawn"
      },
      {
        "label": "Rear courtyard",
        "value": "rear_courtyard"
      },
      {
        "label": "Internal courtyard / aangan",
        "value": "internal_courtyard_aangan"
      },
      {
        "label": "Terrace garden",
        "value": "terrace_garden"
      },
      {
        "label": "Balcony",
        "value": "balcony"
      },
      {
        "label": "Outdoor dining",
        "value": "outdoor_dining"
      },
      {
        "label": "Barbecue",
        "value": "barbecue"
      },
      {
        "label": "Swimming pool",
        "value": "swimming_pool"
      },
      {
        "label": "Water body",
        "value": "water_body"
      },
      {
        "label": "Kids play area",
        "value": "kids_play_area"
      },
      {
        "label": "Pet area",
        "value": "pet_area"
      },
      {
        "label": "Kitchen garden",
        "value": "kitchen_garden"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "landscape",
      "full_scope",
      "renovation"
    ],
    "serviceScopes": [
      "architecture",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q06_1",
    "questionCode": "Q06.1",
    "sectionId": "building_systems",
    "subcategoryId": "structure_construction",
    "label": "Floor-to-floor height comfort preference",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Standard",
        "value": "standard"
      },
      {
        "label": "More open / taller feel",
        "value": "more_open_taller_feel"
      },
      {
        "label": "Compact / efficient",
        "value": "compact_efficient"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q06_2",
    "questionCode": "Q06.2",
    "sectionId": "building_systems",
    "subcategoryId": "structure_construction",
    "label": "Structural preference",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "RCC frame",
        "value": "rcc_frame"
      },
      {
        "label": "Steel structure",
        "value": "steel_structure"
      },
      {
        "label": "Load-bearing / traditional",
        "value": "load-bearing_traditional"
      },
      {
        "label": "Architect + structural consultant can recommend",
        "value": "architect_+_structural_consultant_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "high",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_3",
    "questionCode": "Q06.3",
    "sectionId": "building_systems",
    "subcategoryId": "structure_construction",
    "label": "Basement required?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Maybe",
        "value": "maybe"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q06_4",
    "questionCode": "Q06.4",
    "sectionId": "building_systems",
    "subcategoryId": "access_lift_movement",
    "label": "Lift required?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Future provision only",
        "value": "future_provision_only"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "premium_potential",
      "technical_complexity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_5",
    "questionCode": "Q06.5",
    "sectionId": "building_systems",
    "subcategoryId": "plumbing_water",
    "label": "Water source",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Municipal supply",
        "value": "municipal_supply"
      },
      {
        "label": "Borewell",
        "value": "borewell"
      },
      {
        "label": "Tanker",
        "value": "tanker"
      },
      {
        "label": "Well",
        "value": "well"
      },
      {
        "label": "Rainwater harvesting",
        "value": "rainwater_harvesting"
      },
      {
        "label": "Not sure - Architect can recommend",
        "value": "not_sure_architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "landscape",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_6",
    "questionCode": "Q06.6",
    "sectionId": "building_systems",
    "subcategoryId": "plumbing_water",
    "label": "Irrigation / outdoor water system required?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Future provision",
        "value": "future_provision"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "landscape",
      "farmhouse",
      "bungalow",
      "full_scope"
    ],
    "serviceScopes": [
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_7",
    "questionCode": "Q06.7",
    "sectionId": "building_systems",
    "subcategoryId": "electrical_power_backup",
    "label": "Backup power preference",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Full backup",
        "value": "full_backup"
      },
      {
        "label": "Partial backup",
        "value": "partial_backup"
      },
      {
        "label": "Only essential points",
        "value": "only_essential_points"
      },
      {
        "label": "Not required",
        "value": "not_required"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_8",
    "questionCode": "Q06.8",
    "sectionId": "building_systems",
    "subcategoryId": "electrical_power_backup",
    "label": "Solar PV / on-grid solar interest",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Future-ready provision",
        "value": "future-ready_provision"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "bungalow",
      "farmhouse",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_9",
    "questionCode": "Q06.9",
    "sectionId": "building_systems",
    "subcategoryId": "cooling_heating_ventilation",
    "label": "Cooling approach",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Split AC system",
        "value": "split_ac_system"
      },
      {
        "label": "VRF / VRV system",
        "value": "vrf_vrv_system"
      },
      {
        "label": "Ducted central air",
        "value": "ducted_central_air"
      },
      {
        "label": "Hybrid air + fan",
        "value": "hybrid_air_+_fan"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q06_10",
    "questionCode": "Q06.10",
    "sectionId": "building_systems",
    "subcategoryId": "doors_windows_openings",
    "label": "Window frame type",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Aluminium",
        "value": "aluminium"
      },
      {
        "label": "uPVC",
        "value": "upvc"
      },
      {
        "label": "Wood",
        "value": "wood"
      },
      {
        "label": "Steel",
        "value": "steel"
      },
      {
        "label": "Existing / fixed by builder",
        "value": "existing_fixed_by_builder"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q07_1",
    "questionCode": "Q07.1",
    "sectionId": "interiors_details",
    "subcategoryId": "kitchen_performance",
    "label": "Kitchen workflow style",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Open and social",
        "value": "open_and_social"
      },
      {
        "label": "Efficient Indian cooking",
        "value": "efficient_indian_cooking"
      },
      {
        "label": "Entertaining-focused",
        "value": "entertaining-focused"
      },
      {
        "label": "Compact and easy-maintenance",
        "value": "compact_and_easy-maintenance"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q07_2",
    "questionCode": "Q07.2",
    "sectionId": "interiors_details",
    "subcategoryId": "kitchen_performance",
    "label": "Kitchen appliances required",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Hob",
        "value": "hob"
      },
      {
        "label": "Chimney",
        "value": "chimney"
      },
      {
        "label": "Built-in oven",
        "value": "built-in_oven"
      },
      {
        "label": "Microwave",
        "value": "microwave"
      },
      {
        "label": "Dishwasher",
        "value": "dishwasher"
      },
      {
        "label": "Refrigerator",
        "value": "refrigerator"
      },
      {
        "label": "Wine chiller",
        "value": "wine_chiller"
      },
      {
        "label": "Coffee machine",
        "value": "coffee_machine"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q07_3",
    "questionCode": "Q07.3",
    "sectionId": "interiors_details",
    "subcategoryId": "bathroom_comfort",
    "label": "How premium should bathroom fittings be?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Practical and durable",
        "value": "practical_and_durable"
      },
      {
        "label": "Premium but restrained",
        "value": "premium_but_restrained"
      },
      {
        "label": "Luxury / spa-like",
        "value": "luxury_spa-like"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q07_4",
    "questionCode": "Q07.4",
    "sectionId": "interiors_details",
    "subcategoryId": "bedroom_details",
    "label": "Wardrobe type preference",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Basic storage",
        "value": "basic_storage"
      },
      {
        "label": "Enhanced wardrobe planning",
        "value": "enhanced_wardrobe_planning"
      },
      {
        "label": "Walk-in / luxury wardrobe",
        "value": "walk-in_luxury_wardrobe"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q07_5",
    "questionCode": "Q07.5",
    "sectionId": "interiors_details",
    "subcategoryId": "storage_utility",
    "label": "Storage requirements",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Linen storage",
        "value": "linen_storage"
      },
      {
        "label": "Seasonal storage",
        "value": "seasonal_storage"
      },
      {
        "label": "Shoe storage",
        "value": "shoe_storage"
      },
      {
        "label": "Cleaning supplies",
        "value": "cleaning_supplies"
      },
      {
        "label": "Utility storage",
        "value": "utility_storage"
      },
      {
        "label": "Hidden storage",
        "value": "hidden_storage"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "interiors",
      "architecture",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q07_6",
    "questionCode": "Q07.6",
    "sectionId": "interiors_details",
    "subcategoryId": "furniture_finishes_materials",
    "label": "Preferred finish direction",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Warm natural",
        "value": "warm_natural"
      },
      {
        "label": "Modern minimal",
        "value": "modern_minimal"
      },
      {
        "label": "Rich and dramatic",
        "value": "rich_and_dramatic"
      },
      {
        "label": "Traditional detailed",
        "value": "traditional_detailed"
      },
      {
        "label": "Low-maintenance practical",
        "value": "low-maintenance_practical"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "interiors",
      "architecture",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q08_1",
    "questionCode": "Q08.1",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "smart_home_automation",
    "label": "Do you want smart home features?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Yes - full smart home",
        "value": "yes_full_smart_home"
      },
      {
        "label": "Selected smart features",
        "value": "selected_smart_features"
      },
      {
        "label": "Future-ready provision only",
        "value": "future-ready_provision_only"
      },
      {
        "label": "No",
        "value": "no"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "landscape",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "light",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q08_2",
    "questionCode": "Q08.2",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "smart_home_automation",
    "label": "Home automation scope",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Lighting control",
        "value": "lighting_control"
      },
      {
        "label": "Motorised curtains",
        "value": "motorised_curtains"
      },
      {
        "label": "AC / climate control",
        "value": "ac_climate_control"
      },
      {
        "label": "Voice control",
        "value": "voice_control"
      },
      {
        "label": "Scene control",
        "value": "scene_control"
      },
      {
        "label": "App control",
        "value": "app_control"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": {
      "questionId": "q08_1",
      "operator": "in",
      "value": [
        "Yes - full smart home",
        "Selected smart features",
        "Future-ready provision only",
        "Architect can recommend"
      ]
    },
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q08_3",
    "questionCode": "Q08.3",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "security",
    "label": "Level of home security to consider",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Basic security",
        "value": "basic_security"
      },
      {
        "label": "Advanced security",
        "value": "advanced_security"
      },
      {
        "label": "Full smart security",
        "value": "full_smart_security"
      },
      {
        "label": "Outdoor security only",
        "value": "outdoor_security_only"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "landscape",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "light",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q08_4",
    "questionCode": "Q08.4",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "networking_connectivity",
    "label": "Wi-Fi and networking expectations",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Basic Wi-Fi",
        "value": "basic_wi-fi"
      },
      {
        "label": "Strong whole-home Wi-Fi",
        "value": "strong_whole-home_wi-fi"
      },
      {
        "label": "Structured cabling + mesh Wi-Fi",
        "value": "structured_cabling_+_mesh_wi-fi"
      },
      {
        "label": "Home office / high-performance network",
        "value": "home_office_high-performance_network"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q08_5",
    "questionCode": "Q08.5",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "audio_media_convenience",
    "label": "Audio, media, or entertainment systems",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Multi-room audio",
        "value": "multi-room_audio"
      },
      {
        "label": "Ceiling speakers",
        "value": "ceiling_speakers"
      },
      {
        "label": "Home theatre AV integration",
        "value": "home_theatre_av_integration"
      },
      {
        "label": "Outdoor speakers",
        "value": "outdoor_speakers"
      },
      {
        "label": "No special requirement",
        "value": "no_special_requirement"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "new_residence",
      "renovation",
      "bungalow",
      "farmhouse",
      "flat_interiors",
      "landscape",
      "full_scope"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "premium_potential"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q08_6",
    "questionCode": "Q08.6",
    "sectionId": "technology_security_comfort",
    "subcategoryId": "future_ready",
    "label": "Future-ready provisions required",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Automation wiring",
        "value": "automation_wiring"
      },
      {
        "label": "EV charging",
        "value": "ev_charging"
      },
      {
        "label": "Solar provision",
        "value": "solar_provision"
      },
      {
        "label": "Lift shaft provision",
        "value": "lift_shaft_provision"
      },
      {
        "label": "Extra conduits",
        "value": "extra_conduits"
      },
      {
        "label": "Outdoor lighting control",
        "value": "outdoor_lighting_control"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "medium",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q09_1",
    "questionCode": "Q09.1",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "overall_style",
    "label": "Preferred design style",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Warm contemporary",
        "value": "warm_contemporary"
      },
      {
        "label": "Modern minimalist",
        "value": "modern_minimalist"
      },
      {
        "label": "Indo-modern / fusion",
        "value": "indo-modern_fusion"
      },
      {
        "label": "Traditional Indian",
        "value": "traditional_indian"
      },
      {
        "label": "Classical European",
        "value": "classical_european"
      },
      {
        "label": "Neo-classical",
        "value": "neo-classical"
      },
      {
        "label": "Japandi / earthy",
        "value": "japandi_earthy"
      },
      {
        "label": "Bold and artistic",
        "value": "bold_and_artistic"
      },
      {
        "label": "Industrial",
        "value": "industrial"
      },
      {
        "label": "Mid-century modern",
        "value": "mid-century_modern"
      },
      {
        "label": "Art deco",
        "value": "art_deco"
      },
      {
        "label": "Not sure yet",
        "value": "not_sure_yet"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "architecture",
      "interiors",
      "landscape",
      "project_management",
      "not_sure"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q09_2",
    "questionCode": "Q09.2",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "colour_atmosphere",
    "label": "Colour palette inclination",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Warm tones",
        "value": "warm_tones"
      },
      {
        "label": "Cool tones",
        "value": "cool_tones"
      },
      {
        "label": "Neutrals",
        "value": "neutrals"
      },
      {
        "label": "Bold / saturated",
        "value": "bold_saturated"
      },
      {
        "label": "Monochrome",
        "value": "monochrome"
      },
      {
        "label": "Earthy / natural",
        "value": "earthy_natural"
      },
      {
        "label": "Open to designer recommendation",
        "value": "open_to_designer_recommendation"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q09_3",
    "questionCode": "Q09.3",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "materials_textures",
    "label": "Materials you love",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Natural stone",
        "value": "natural_stone"
      },
      {
        "label": "Marble",
        "value": "marble"
      },
      {
        "label": "Wood",
        "value": "wood"
      },
      {
        "label": "Brass",
        "value": "brass"
      },
      {
        "label": "Concrete",
        "value": "concrete"
      },
      {
        "label": "Lime plaster",
        "value": "lime_plaster"
      },
      {
        "label": "Fluted glass",
        "value": "fluted_glass"
      },
      {
        "label": "Textured fabrics",
        "value": "textured_fabrics"
      },
      {
        "label": "Leather",
        "value": "leather"
      },
      {
        "label": "Metal finishes",
        "value": "metal_finishes"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief"
    ]
  },
  {
    "id": "q09_4",
    "questionCode": "Q09.4",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "materials_textures",
    "label": "Materials you dislike",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q09_5",
    "questionCode": "Q09.5",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "references",
    "label": "Reference links",
    "helper": "Pinterest, Instagram, Google Drive, Dropbox, or website links.",
    "type": "link",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "documents_available"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score"
    ]
  },
  {
    "id": "q09_6",
    "questionCode": "Q09.6",
    "sectionId": "aesthetic_direction",
    "subcategoryId": "maintenance_practicality",
    "label": "How important is low maintenance?",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "Very important",
        "value": "very_important"
      },
      {
        "label": "Balanced with aesthetics",
        "value": "balanced_with_aesthetics"
      },
      {
        "label": "Premium finish is more important",
        "value": "premium_finish_is_more_important"
      },
      {
        "label": "Architect can recommend",
        "value": "architect_can_recommend"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": true,
    "includeArchitectRecommendOption": true,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q10_1",
    "questionCode": "Q10.1",
    "sectionId": "documents_priorities",
    "subcategoryId": "documents_links",
    "label": "Which documents or drawings are currently available?",
    "helper": "",
    "type": "multi_select",
    "required": false,
    "options": [
      {
        "label": "Site survey",
        "value": "site_survey"
      },
      {
        "label": "Architectural drawings",
        "value": "architectural_drawings"
      },
      {
        "label": "Structural drawings",
        "value": "structural_drawings"
      },
      {
        "label": "Interior drawings",
        "value": "interior_drawings"
      },
      {
        "label": "Landscape drawings",
        "value": "landscape_drawings"
      },
      {
        "label": "Photos",
        "value": "photos"
      },
      {
        "label": "Material boards",
        "value": "material_boards"
      },
      {
        "label": "Specifications / schedules",
        "value": "specifications_schedules"
      },
      {
        "label": "Other",
        "value": "other"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "documents_available"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "scope_checklist"
    ]
  },
  {
    "id": "q10_2",
    "questionCode": "Q10.2",
    "sectionId": "documents_priorities",
    "subcategoryId": "documents_links",
    "label": "Share document links",
    "helper": "Google Drive, Dropbox, or shared folder links are preferred.",
    "type": "link",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "scope_checklist"
    ]
  },
  {
    "id": "q10_3",
    "questionCode": "Q10.3",
    "sectionId": "documents_priorities",
    "subcategoryId": "final_notes",
    "label": "Any final notes, concerns, or expectations from the design process?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q10_4",
    "questionCode": "Q10.4",
    "sectionId": "documents_priorities",
    "subcategoryId": "final_notes",
    "label": "Any non-negotiables we should know before starting?",
    "helper": "",
    "type": "long_text",
    "required": false,
    "options": [],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "sales_followup"
    ]
  },
  {
    "id": "q10_5",
    "questionCode": "Q10.5",
    "sectionId": "documents_priorities",
    "subcategoryId": "top_priorities",
    "label": "What are your top 5 project priorities?",
    "helper": "",
    "type": "rank",
    "required": true,
    "options": [
      {
        "label": "Budget control",
        "value": "budget_control"
      },
      {
        "label": "Speed of completion",
        "value": "speed_of_completion"
      },
      {
        "label": "Premium finishes",
        "value": "premium_finishes"
      },
      {
        "label": "Natural light",
        "value": "natural_light"
      },
      {
        "label": "Storage",
        "value": "storage"
      },
      {
        "label": "Low maintenance",
        "value": "low_maintenance"
      },
      {
        "label": "Grand appearance",
        "value": "grand_appearance"
      },
      {
        "label": "Privacy",
        "value": "privacy"
      },
      {
        "label": "Open planning",
        "value": "open_planning"
      },
      {
        "label": "Vastu alignment",
        "value": "vastu_alignment"
      },
      {
        "label": "Smart home features",
        "value": "smart_home_features"
      },
      {
        "label": "Outdoor spaces",
        "value": "outdoor_spaces"
      },
      {
        "label": "Elderly comfort",
        "value": "elderly_comfort"
      },
      {
        "label": "Future flexibility",
        "value": "future_flexibility"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "scope_clarity"
    ],
    "internalOutput": [
      "summary",
      "architect_brief",
      "lead_score",
      "sales_followup"
    ]
  },
  {
    "id": "q10_6",
    "questionCode": "Q10.6",
    "sectionId": "documents_priorities",
    "subcategoryId": "review_submit",
    "label": "Confirm that the information shared is accurate to the best of your knowledge",
    "helper": "",
    "type": "yes_no",
    "required": true,
    "options": [
      {
        "label": "Yes",
        "value": "yes"
      },
      {
        "label": "No",
        "value": "no"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "architect_brief"
    ]
  },
  {
    "id": "q10_7",
    "questionCode": "Q10.7",
    "sectionId": "documents_priorities",
    "subcategoryId": "review_submit",
    "label": "Preferred next step",
    "helper": "",
    "type": "single_select",
    "required": false,
    "options": [
      {
        "label": "WhatsApp follow-up",
        "value": "whatsapp_follow-up"
      },
      {
        "label": "Discovery call",
        "value": "discovery_call"
      },
      {
        "label": "Site visit",
        "value": "site_visit"
      },
      {
        "label": "In-office meeting",
        "value": "in-office_meeting"
      },
      {
        "label": "Architect can recommend next step",
        "value": "architect_can_recommend_next_step"
      }
    ],
    "projectTypes": [
      "all"
    ],
    "serviceScopes": [
      "all"
    ],
    "showIf": null,
    "architectCanRecommend": false,
    "includeArchitectRecommendOption": false,
    "technicalLevel": "none",
    "salesSignal": [
      "none"
    ],
    "internalOutput": [
      "summary",
      "sales_followup"
    ]
  }
];
