import React from "react";
import {Link} from "react-router-dom"

export default function ContentTwo() {
  return (
    <>
      <div className="flex flex-col items-center mb-12">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Et vous ?
          <br />
          Souriez, c'est livré
        </strong>
        <p className="text-center lg:px-[400px] mt-4 text-black">
          Vous souhaitez :
          <br /> - Offrir une méthode de livraison différente à vos clients pour
          leurs commandes.
          <br />
          - Gagner quelques sous lors de vos déplacements, juste en livrant des
          colis.
          <br />- Vous faire livrer vos achats par des personnes qui vous
          ressemblent.
        </p>
       <Link to="/consommateurs" className="mt-5" >
       <label
          tabIndex={0}
          className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white cursor-pointer"
        >
          Rejoignez Chapchrono
        </label>
       </Link>
      </div>
    </>
  );
}
