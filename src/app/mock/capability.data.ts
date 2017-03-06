import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICapability, IAttribute, IComponent } from '../model/capability.model';


export class CapabilityData implements InMemoryDbService {

    createDb() {
        const capabilities: ICapability[] = [
            { id: '1',  name: 'Capability A1 - C1', description: 'This is the description for Capability id:01',
                attributeId: '1',
                componentId: '1',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '1', name: 'Component 1', description: 'Description 1'},
                 frequencyId: 'D',
                 impactId: '1' ,
                 test: {cases: 120, executed: 56, failed: 12},
                 defects: {type1: 1, type2: 2, type3: 12 },
                 code: {loc: 100000, churn: 12000, coverage: 34.5, quality: 'A'}
            },
            { id: '2',  name: 'Capability A1 - C1', description: 'This is the description for Capability id:11',
                 attributeId: '1',
                componentId: '1',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '1', name: 'Component 1', description: 'Description 1'},
                frequencyId: 'E', impactId: '3',
            //      test: {cases: 8, executed: 5, failed: 3},
            //      defects: {type1: 0, type2: 1, type3: 2 },
            //      code: {loc: 100000, churn: 800, coverage: 14, quality: 'A'}
             },
            { id: '3',  name: 'Capability 2 A2 - C1',
                description: 'This is the description for Capability id:112.  This is second part of the description for Capability id:112',
                 attributeId: '2',
                componentId: '1',
                attribute: { id: '2', name: 'Attribute 2', description: 'Description 1'},
                component: { id: '1', name: 'Component 1', description: 'Description 1'},
                 frequencyId: 'F', impactId: '2',
                 test: {cases: 18, executed: 18, failed: 0},
                 defects: {type1: 0, type2: 1, type3: 2 },
                 code: {loc: 100000, churn: 800, coverage: 14, quality: 'A'}
            },
            { id: '12',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1',
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '13',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '14',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '15',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '16',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '17',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '18',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '19',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '20',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            },
            { id: '21',  name: 'Capability A1 - C2',
                 description: 'This is the description for Capability id:12.  This is second part of the description for Capability id:12',
                 attributeId: '1',
                componentId: '2',
                attribute: { id: '1', name: 'Attribute 1', description: 'Description 1'},
                component: { id: '2', name: 'Component 2', description: 'Description 2'},
                 frequencyId: 'A', impactId: '1' ,
                 test: {cases: 8, executed: 5, failed: 3},
                 defects: {type1: 10, type2: 1, type3: 9},
                 code: {loc: 100000, churn: 1450, coverage: 66, quality: 'A'}
            }
        ];

        const attributes: IAttribute[] = [
            { id: '1', name: 'Attribute 1', description: 'Description 1'},
            { id: '2', name: 'Attribute 2', description: 'Description 2'},
            { id: '3', name: 'Attribute 3', description: 'Description 3'},
            { id: '4', name: 'Attribute 4', description: 'Description 4'},
            { id: '5', name: 'Attribute 5', description: 'Description 6'},
            { id: '6', name: 'Attribute 6', description: 'Description 6'},
        ];

        const components: IComponent[] = [
            { id: '1', name: 'Component 1', description: 'Description 1'},
            { id: '2', name: 'Component 2', description: 'Description 2'},
            { id: '3', name: 'Component 3', description: 'Description 3'},
            { id: '4', name: 'Component 4', description: 'Description 4'},
            { id: '5', name: 'Component 5', description: 'Description 6'},
            { id: '6', name: 'Component 6', description: 'Description 6'},
            { id: '7', name: 'Component 7', description: 'Description 7'}
        ];

        return { capabilities, attributes, components };
    }
}
