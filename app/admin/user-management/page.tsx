'use client'

import { Card } from "@radix-ui/themes"
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UserManagementPage() {
    return (
        <Card className="m-6">

            <div className="flex justify-end mb-4">
                <Link href="/admin/user-management/form">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                        <Plus className="mr-2 h-4 w-4"/> User management
                    </Button>
                </Link>
            </div>


            <h1 className="text-2xl font-bold mb-2">User Management</h1>
            <p>Manage your users here.</p>
            <Table className="mt-4">
                <TableHeader>
                    <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}