import Button from "@/components/util/button";
import Input from "@/components/util/input";
import Title from "@/components/util/title";

export default function PersonalDataPage() {
  return (
    <div className="flex flex-col md:flex-row p-5 w-full ">
      <div className="mb-9 md:mb-0 flex flex-col w-full p-5 mx-2 text-center border rounded">
        <Title>
          DATE PERSONALE
          <span className="flex text-[12px] md:text-sm text-[#cdcdcd]">
            Editeaza datele personale asociate contului tau
          </span>
        </Title>
        <form className="text-start">
          <Input name="firstName" label="Prenume" />
          <Input name="secondName" label="Nume" />
          <Input name="email" label="Email" />
          <Input name="phone" label="Telefon" />
          <Button moreStyle="w-full mx-[auto] mt-4">Salveaza</Button>
        </form>
      </div>
      <div className="flex flex-col w-full mx-2 p-5 text-center  border rounded ">
        <Title>
          SCHIMBA PAROLA
          <span className="flex text-[12px] md:text-sm text-[#cdcdcd] justify-center">
            Editeaza parola asociata contului tau
          </span>
        </Title>
        <form className="  text-start h-full  ">
          <Input name="password" label="Parola veche" />
          <Input name="newPassword" label="Parola noua" />
          <Input name="newPasswordConfirm" label="Confirma parola noua" />
          <Button moreStyle="w-full mx-auto mt-[120px] ">Schimba parola</Button>
        </form>
      </div>
    </div>
  );
}
