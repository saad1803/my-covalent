export class User
{
    constructor(
    public id: String,
    public name:String,
    public username:String,
    public email:String,
    public phone:String,
    public website:String,
    public address:AddressObject[]
    ){}
}

export class AddressObject
{
    constructor(
        public street:String,
        public suite:String,
        public geo:GeoCoordinates[]
    ){}
}

export class GeoCoordinates
{
    constructor(
        public lat:String,
        public lng:String
    ){}
}