import React from "react";

export default function Table() {
  return (
    <div className="sm:p-48 p-6">
      <table className="border-spacing-2 text-black">
        <thead className="border-collapse w-full border-2 border-solid bg-[#EFEFF2]">
          <tr>
            <th className="table-cell p-[10px] sm:p-[20px]"></th>
            <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
              OFFRE 1
            </th>
            <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
              OFFRE 2
            </th>
          </tr>
        </thead>
        <tbody className="w-full border-collapse border-2 border-solid">
          <tr>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3"></p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3">
                Pour les commerçants de proximité qui livrent de petits volumes.
              </p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3">
                Pour les grands détaillants, les réseaux ou les grandes volumes
                de livraison.
              </p>
            </td>
          </tr>
          {/* Ligne 2 */}
          <tr>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3">
                L'Interface Chapchrono : créer et/ou suivez toutes vos
                livraisons de n’importe où en utilisant n’importe quel
                navigateur.
              </p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3 flex items-center justify-center">
                <img src="/img-two/yes.png" alt="" className="w-12" />
              </p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3 items-center flex justify-center">
                <img src="/img-two/yes.png" alt=""  className="w-12" />
              </p>
            </td>
          </tr>
          {/* Ligne 3 */}
          <tr>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3">
                L'API Chapchrono : accéder librement à l’API Chapchrono pour
                prendre automatiquement soin de toutes vos livraisons.
              </p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3 flex items-center justify-center">
              <img src="/img-two/no.png" alt="" className="w-8" />
              </p>
            </td>
            <td className="border-collapse border-2 border-solid">
              <p className="sm:p-[20px] p-3 flex items-center justify-center">
              <img src="/img-two/yes.png" alt="" className="w-12" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
