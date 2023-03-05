export class termDefinition {
    id?: string;

    //Determines whether or not this definition is defined/derived using a set of other definitions in the process.
    isGroupDefinition?: boolean;

    //The related child term definitions used in the calculation process of this definition
    childDefinitions?: string[]
    
    //Term Definitions with completely identical logic, but different wording/phrasing or context.
    trueEquivalentDefinitions?: string[];

    //Term Definitions with differing logic/approaches, but are acknowledged to serve a similar purpose or be a similar
    //approximation method.
    logicalEquivalentDefinitions?: string[];
    
    //All Political Category junctions linking to this term definition, at least one must be defined for the term to work.
    politicalCategories?: string[];

    //All Profession Category junctions linking to this term definition, at least one must be defined for the term to work.
    professionCategories?: string[];

    //All Reference Frame junctions linking to this term definition, at least one must be defined for the term to work.
    referenceFrames?: string[];

    //The name of the metric calculation method being used to generate the term.
    metricName?: string;

    //The abstract purpose or multiple purposes this metric is meant to gauge or help assess.
    abstractPurpose?: string;

    //The abstract method by which one should approach calculating a given instance of this term.
    abstractMethod?: string;

    //External URL which should lead to a source on which the detailed reasoning and methodology for this metric/term is recorded.
    sourceUrl?: string;
    
    constructor(id?: string, metricName?: string, abstractPurpose?: string, abstractMethod?: string, sourceUrl?: string, isGroupDefinition?: boolean, childDefinitions?: string[], trueEquivalentDefinitions?: string[], logicalEquivalentDefinitions?: string[], politicalCategories?: string[], professionCategories?: string[], referenceFrames?: string[]){
        this.id = id;
        this.metricName = metricName;
        this.abstractPurpose = abstractPurpose;
        this.abstractMethod = abstractMethod;
        this.sourceUrl = sourceUrl;
        this.isGroupDefinition = isGroupDefinition;
        this.childDefinitions = childDefinitions;
        this.trueEquivalentDefinitions = trueEquivalentDefinitions;
        this.logicalEquivalentDefinitions = logicalEquivalentDefinitions;
        this.politicalCategories = politicalCategories;
        this.professionCategories = professionCategories;
        this.referenceFrames = referenceFrames;
    }
}