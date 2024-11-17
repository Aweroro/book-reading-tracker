import { Spinner } from "@material-tailwind/react";
 
export function SpinnerColors() {
  return (
    <div className="flex gap-8">
      <Spinner color="blue" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
    </div>
  );
}

