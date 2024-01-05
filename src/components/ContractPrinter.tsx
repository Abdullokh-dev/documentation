import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import dateFormat from "../assets/date-format";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

function ContractPrinter(contract) {
  if(contract.surname && contract.name && contract.additionalName && contract.from && contract.to && contract.price) {
    const fileType = `/${contract.address}.docx`;
    const fileName = contract.address + contract.surname + ' ' + contract.name + ' ' + contract.additionalName

    loadFile(fileType, function (error, content) {
        if (error) {
          alert('File did not found!');
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        doc.render({
          date: dateFormat(contract.from, 'dd.MM.yyyy'),
          renter: `${contract.surname} ${ contract.name } ${ contract.additionalName }`,
          upToDate: dateFormat(contract.to, 'dd.MM.yyyy'),
          price: contract.price,
        });

        const blob = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        //Output the document using Data-URI
        saveAs(blob, fileName);
      }
    )
  } else {
    alert('Enter the details completely!')
  }
}

export default ContractPrinter
