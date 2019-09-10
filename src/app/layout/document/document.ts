export class Document {
    public constructor(
    public Id: number,
    public OrganizationId: number,
    public Isgeneral:boolean,
    public name: string,
    public description: string,
    public Isactive: boolean,
    public Createdby: number,
    public Createddate: Date,
    public Modifiedby: number,
    public Modifieddate: Date

    ) { }
    }

