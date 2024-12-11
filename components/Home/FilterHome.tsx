import DatePicker from "../DatePicker/DatePicker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function HomeFilter() {
  return (
    <form>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 p-6 rounded-2xl mb-10">
        <Input className="font-medium lg:max-w-[300px]" placeholder="Onde" />
        <DatePicker />
        <Input type="number" placeholder="Qtd Pessoas"/>
        <Button>Buscar</Button>
      </div>
    </form>
  );
}
