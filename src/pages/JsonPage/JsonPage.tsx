import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import scss from "./JasonPage.module.scss";
import {
  ActivityType,
  dataAllDocumentsName,
  addedInvoice,
  invoiceDetails,
  type UserActivitiesType,
  type AllDocumentsName,
  type InvoiceTable,
  type InvoiceDetailsTable,
} from "./JsonPageDataJson";

export default function JsonPage() {
  const [activitiesObject, setActivitiesObject] =
    useState<UserActivitiesType | null>();

  useEffect(() => {
    try {
      const activitiesObjectData = createActivitiesObject(
        ActivityType.addInvoice,
        "Konrad",
        dataAllDocumentsName,
        addedInvoice,
        invoiceDetails,
      );
      setActivitiesObject(activitiesObjectData);
      console.log({ dataAllDocumentsName });
    } catch (error) {
      console.error("Error creating activities object:", error);
    }
  }, [dataAllDocumentsName]);

  return (
    <section className={scss["container-json-page"]}>
      <div>
        <div>
          <h1>ActivityLogPage</h1>
          <h2>
            <b>Typ aktywności: </b>
            {activitiesObject?.activityType}
          </h2>
          <h2>
            <b>Użytkownik: </b>
            {activitiesObject?.userName}
          </h2>

          <h2>
            <b>Data: </b>
            {new Date(activitiesObject?.date ?? 0).toLocaleString()}
          </h2>

          <pre>
            <code>{activitiesObject?.activityData}</code>
          </pre>
        </div>
      </div>
      <div>
        <ReactJson
          src={
            activitiesObject?.activityData
              ? JSON.parse(activitiesObject.activityData)
              : {}
          }
        />
      </div>
    </section>
  );
}

function createActivitiesObject(
  activityType: ActivityType,
  userName: string,
  dataAllDocumentsName: AllDocumentsName[] | null,
  addedInvoice?: InvoiceTable,
  invoiceDetails?: InvoiceDetailsTable[],
): UserActivitiesType | null {
  let activityData = "";

  switch (activityType) {
    case ActivityType.addInvoice:
      if (
        !addedInvoice ||
        !invoiceDetails ||
        !dataAllDocumentsName ||
        dataAllDocumentsName.length === 0
      ) {
        return null;
      } else {
        const displayDocumentsName = invoiceDetails.map(
          formatDocumentDetailsFunction(dataAllDocumentsName || []),
        );
        const combinedData = {
          ...addedInvoice,
          invoiceDetails: displayDocumentsName,
        };
        activityData = JSON.stringify(combinedData, null, 2);
      }

      break;
    case ActivityType.editInvoice:
      if (!addedInvoice || !invoiceDetails) {
        throw new Error(
          "editInvoice activity requires addedInvoice and invoiceDetails",
        );
      }
      break;
    case ActivityType.deleteInvoice:
      if (!addedInvoice || !invoiceDetails) {
        throw new Error(
          "deleteInvoice activity requires addedInvoice and invoiceDetails",
        );
      }
      break;
    default:
      throw new Error("Invalid activity type");
  }

  return {
    date: new Date().toISOString(),
    userName,
    activityType,
    activityData: activityData,
  };
}

function formatDocumentDetailsFunction(
  dataAllDocumentsName: AllDocumentsName[] | null,
) {
  return (detail: InvoiceDetailsTable) => {
    const document = dataAllDocumentsName?.find(
      (doc) => doc.DocumentId === detail.DocumentId,
    );
    const mainType = detail.MainTypeId
      ? dataAllDocumentsName?.find(
          (doc) => doc.MainTypeId === detail.MainTypeId,
        )
      : null;
    const type = detail.TypeId
      ? dataAllDocumentsName?.find((doc) => doc.TypeId === detail.TypeId)
      : null;
    const subtype = detail.SubtypeId
      ? dataAllDocumentsName?.find((doc) => doc.SubtypeId === detail.SubtypeId)
      : null;

    return {
      documentName:
        document?.DocumentName || `Dokument ID: ${detail.DocumentId}`,
      mainTypeName:
        mainType?.MainTypeName ||
        (detail.MainTypeId ? `Typ główny ID: ${detail.MainTypeId}` : ""),
      typeName:
        type?.TypeName || (detail.TypeId ? `Typ ID: ${detail.TypeId}` : ""),
      subtypeName:
        subtype?.SubtypeName ||
        (detail.SubtypeId ? `Podtyp ID: ${detail.SubtypeId}` : ""),
      quantity: detail.Quantity,
      price: detail.Price.toFixed(2),
      total: (detail.Quantity * detail.Price).toFixed(2),
    };
  };
}
