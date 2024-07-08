class XMLData {
  private xmlData: string;

  constructor(xmlData: string) {
    this.xmlData = xmlData;
  }

  public getXMLData(): string {
    return this.xmlData;
  }
}

class DataAnalyticsTool {
  private jsonData: string;
  constructor(pJsonData: string) {
    this.jsonData = pJsonData;
  }

  public analyzeData(): void {
    console.log(`Analysing Data ${this.jsonData}`);
  }
}

class Adapter extends DataAnalyticsTool {
  private xmlData!: XMLData;
  // constructor(xmlData: XMLData){
  //   this.xmlData = xmlData;
  // }

  public analyzeData(): void {
    console.log(`Converting XML Data ${xmlData.getXMLData()} to JSON Data`);
    console.log(`Analysing Data`);
  }
}

class Client {
  public ProcessData(dataAnalyticsToool: DataAnalyticsTool): void {
    dataAnalyticsToool.analyzeData();
  }
}

// Code of main function

let xmlData = new XMLData("Sample XML Data");

//Right now we don't have any json data;
// const analyticsTool = new DataAnalyticsTool()
// We will have to create an adapter to convert XML data to JSON data
// The adapter will have to implement the DataAnalyticsTool interface or extend it.

const analyticstool = new Adapter();
const client: Client = new Client();
client.ProcessData(analyticsTool);
