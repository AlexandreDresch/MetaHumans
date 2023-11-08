import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { HeroesContext } from "@/app/providers/heroes";
import { useContext } from "react";
import Image from "next/image";
import StatsDetails from "./statsDetails";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {
  const { battleData, addFightToHistory } = useContext(HeroesContext);

  return (
    Object.keys(battleData).length > 0 && (
      <Dialog open={openModal} onOpenChange={setOpenModal} modal>
        <DialogContent className="sm:max-w-[425px] md:min-w-[660px] px-3">
          <DialogHeader>
            <DialogTitle>Battle Results</DialogTitle>
            <DialogDescription>
              Save this battle to your history or close to play again.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-between">
            <div className="flex flex-col min-h-30 w-1/3 items-center justify-center">
              <p className="font-semibold mb-1">
                {battleData.fighters[0].name}
              </p>
              <Image
                src={
                  battleData.fighters[0].images.md
                    ? battleData.fighters[0].images.md
                    : battleData.fighters[0].images.lg
                }
                height={0}
                width={0}
                sizes="100vw"
                className="h-full w-full object-cover rounded-lg bg-accent"
                alt={battleData.fighters[0].name}
              />
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <StatsDetails fighters={battleData.fighters} />
            </div>

            <div className="flex flex-col min-h-60 w-1/3 items-center justify-center">
              <p className="font-semibold mb-1">
                {battleData.fighters[1].name}
              </p>
              <Image
                src={
                  battleData.fighters[1].images.md
                    ? battleData.fighters[1].images.md
                    : battleData.fighters[1].images.lg
                }
                height={0}
                width={0}
                sizes="100vw"
                className="h-full w-full object-cover rounded-lg bg-accent"
                alt={battleData.fighters[1].name}
              />
            </div>
          </div>

          <DialogFooter className="w-full flex justify-between">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold text-lg">
                Winner:{" "}
                <span className="text-primary">{battleData.winner}</span>
              </p>
              <Button
                type="button"
                onClick={() => addFightToHistory(battleData)}
              >
                Save Battle
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}
