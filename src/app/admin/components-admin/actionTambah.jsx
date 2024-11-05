"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { DeleteIcon, EditIcon, ThreeDotIcon } from "@/icon/svg";
import { numberToIdr } from "@/utils/toIDR";
import { useState } from "react";

export default function ActionTambah({ data }) {
  const [loading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState(data);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const ERRMESSADD = "Data gagal ditambahkan.";
  const ERRMESSDELL = "Data gagal dihapus.";

  const handleEdit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const title = e.target[0].value;
    const nominal = e.target[1].value;
    const tanggal = e.target[2].value;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/edit-action`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: data.id,
            title,
            nominal,
            tanggal,
            type: data.type,
          }),
        }
      );
      if (res.ok) {
        window.location.reload();
      } else {
        alert(ERRMESSADD);
      }
    } catch (e) {
      alert(ERRMESSADD);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/delete-action`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: data.id,
            type: data.type,
          }),
        }
      );
      if (res.ok) {
        window.location.reload();
      } else {
        alert(`1 ${ERRMESSDELL}`);
      }
    } catch (e) {
      alert(`2 ${ERRMESSDELL}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-0" variant="outline">
          <ThreeDotIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
          Edit
          <DropdownMenuShortcut>
            <EditIcon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
          Hapus
          <DropdownMenuShortcut>
            <DeleteIcon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogTrigger asChild>
          <div></div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleEdit}>
            <DialogHeader>
              <DialogTitle>Edit Data</DialogTitle>
              <DialogDescription>Edit data</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                required
                onChange={(e) => setDatas({ ...datas, title: e.target.value })}
                value={datas.title}
              />
              <Input
                required
                type="number"
                onChange={(e) =>
                  setDatas({ ...datas, nominal: e.target.value })
                }
                value={datas.nominal}
              />
              <Input
                onChange={(e) =>
                  setDatas({ ...datas, tanggal: e.target.value })
                }
                value={datas.tanggal}
                required
                type="date"
              />
            </div>
            <DialogFooter className="flex-row gap-2">
              <DialogClose asChild>
                <Button className="w-full">Batal</Button>
              </DialogClose>
              <Button disabled={loading} className="w-full" type="submit">
                Edit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogTrigger asChild>
          <div></div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Yakin ingin menghapus data berikut :</DialogTitle>
            <div className="flex items-center justify-between w-full gap-1 py-2 *:border *:py-1 *:w-full *:text-center *:rounded">
              <div>{datas.title}</div>
              <div>{numberToIdr(datas.nominal)}</div>
              <div>{datas.tanggal}</div>
            </div>
          </DialogHeader>
          <DialogFooter className="flex-row gap-2">
            <DialogClose asChild>
              <Button className="w-full">Batal</Button>
            </DialogClose>
            <Button
              onClick={handleDelete}
              disabled={loading}
              className="w-full"
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DropdownMenu>
  );
}
