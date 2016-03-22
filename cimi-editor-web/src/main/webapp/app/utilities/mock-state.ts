import {State} from "./state";

// This is a sample, simplified JSON representation of the various model states
export var STATE: State = {
    pattern: {
        name: "Observation"
    },
    details: {
        name: "Special Observation",
        binding: "Some SNOMED code",
        description: "This is a special observation"
    },
    model: {
        identifier: {
            value: "001",
            cardinality: ["0","*"],
            constraints: []
        },
        code: {
            value: "social-history",
            cardinality: ["1","*"],
            constraints: []
        },
        reason: {
            value: "Some reason",
            cardinality: ["0", "*"],
            constraints: []
        },
        method: {
            value: "How it was done",
            cardinality: ["0", "*"],
            constraints: []
        },
        status: {
            value: "registered",
            cardinality: ["0", "*"],
            constraints: []
        }
    }
};
