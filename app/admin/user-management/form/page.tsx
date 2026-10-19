'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@radix-ui/themes"
import Link from "next/link" 

export default function FormTambahUser() {
  return (
    <Card className="m-6 p-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Tambah User</h1>
        <p className="text-gray-500 text-sm">Masukkan data pengguna baru di bawah ini.</p>
      </div>

      <form className="space-y-5">
        {/* Input Nama Lengkap */}
        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <Input type="text" placeholder="Masukkan nama lengkap..." />
        </div>

        {/* Input Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder="contoh@mvpars.sch.id" />
        </div>

        {/* Input Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input type="password" placeholder="Masukkan password..." />
        </div>

        {/* Pilihan Role (Menggunakan styling bawaan Tailwind yang mirip shadcn) */}
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">-- Pilih Role --</option>
            <option value="admin">Admin</option>
            <option value="guru">Guru</option>
            <option value="siswa">Siswa</option>
          </select>
        </div>

        {/* Tombol Aksi (Batal & Simpan) */}
        <div className="flex gap-4 pt-4">
          {/* Tombol Batal akan mengarahkan kembali ke halaman /admin/User */}
          <Link href="/admin/User" className="w-full sm:w-auto">
            <Button variant="outline" type="button" className="w-full">
              Batal
            </Button>
          </Link>
          <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
            Simpan Data
          </Button>
        </div>
      </form>
    </Card>
  );
}