import Button from "@/components/util/button";
import Input from "@/components/util/input";
import Title from "@/components/util/title";

export default function PersonalDataPage() {
  return (
    <div className="flex flex-col md:flex-row p-5 w-full ">
      <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 mx-2 text-center border rounded">
        <Title>
          DATE PERSONALE
          <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
            Editeaza datele personale asociate contului tau
          </span>
        </Title>
        <form className="flex flex-col items-center text-start">
          <div className="flex md:flex-col lg:flex-row w-full">
            <Input name="firstName" label="Prenume" />{" "}
            <Input name="secondName" label="Nume" />
          </div>
          <div className="flex-row md:flex-col lg:flex-row w-full">
            <Input name="email" label="Email" />
            <Input name="phone" label="Telefon" />
          </div>{" "}
          <Button moreStyle=" w-[50%] md:w-[90%] lg:w-[50%]  items-center mt-10">
            Salveaza
          </Button>
        </form>
      </div>
      <div className="mb-9 md:mb-0 flex flex-col w-full py-5 px-2 mx-2 text-center border rounded">
        <Title>
          SCHIMBA PAROLA
          <span className="flex text-[12px] md:text-sm text-[rgba(0,0,0,0.5)]">
            Editeaza parola asociata contului tau
          </span>
        </Title>
        <form className="flex flex-col items-center text-start w-full ">
          <Input name="password" label="Parola veche" />
          <div className="flex md:flex-col lg:flex-row w-full">
            <Input name="newPassword" label="Parola noua" />
            <Input name="newPasswordConfirm" label="Confirma parola noua" />
          </div>
          <Button moreStyle="w-[50%] lg:w-[50%] md:w-[90%] mx-auto md:mt-[136px] mt-10 ">
            Schimba parola
          </Button>
        </form>
      </div>
    </div>
  );
}
