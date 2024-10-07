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

export default function FormTagihan() {
  const [loading, setIsLoading] = useState(false);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const handleSubmit = async (e) => {
    alert("Fitur belum tersedia!");
    // setIsLoading(true);
    // e.preventDefault();
    // const title = e.target[0].value;
    // const nominal = e.target[1].value;
    // const tanggal = e.target[2].value;
    // try {
    //   const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/add-pengeluaran`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         title,
    //         nominal,
    //         tanggal,
    //       }),
    //     }
    //   );
    //   if (res.ok) {
    //     window.location.reload();
    //   } else {
    //     alert("Data gagal di tambahkan.");
    //   }
    // } catch (e) {
    //   alert("Data gagal di tambahkan.");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Tagihan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} >
          <DialogHeader>
            <DialogTitle>Tambah Tagihan</DialogTitle> 
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input required placeholder="Nama Tagihan" />
            <Input required type="number" placeholder="Nominal" /> 
          </div>
          <DialogFooter className={"gap-2"}>
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
