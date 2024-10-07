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
import { Input } from "@/components/ui/input";
import moment from "moment";
import { useState } from "react";

export default function FormTambahUser() {
  const [loading, setIsLoading] = useState(false);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const nama = e.target[0].value;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
        }),
      });
      if (res.ok) {
        window.location.reload();
      } else {
        alert("Data gagal di tambahkan.");
      }
    } catch (e) {
      alert("Data gagal di tambahkan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className=" ">
          <DialogHeader>
            <DialogTitle>Tambah User</DialogTitle>
            <DialogDescription>Tambah data User</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input required placeholder="Nama User" />
          </div>
          <DialogFooter className={"flex-row gap-2"}>
            <DialogClose asChild>
              <Button className="w-full">Batal</Button>
            </DialogClose>
            <Button disabled={loading} className="w-full" type="submit">
              Tambah
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
