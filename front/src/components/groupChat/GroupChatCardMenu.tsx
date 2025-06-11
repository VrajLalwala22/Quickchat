"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreVertical, Pencil, Trash2, Copy } from "lucide-react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/option";
import { ChatGroupType } from "../../../types";
import EditGroupChat from "./EditGroupChat";
import DeleteChatGroup from "./DeleteChatGroup";
import { toast } from "sonner";

export default function GroupChatCardMenu({
  user,
  group,
}: {
  user: CustomUser;
  group: ChatGroupType;
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const copyGroupInfo = () => {
    const info = `Group: ${group.title}\nPasscode: ${group.passcode}`;
    navigator.clipboard.writeText(info);
    toast.success("Group info copied to clipboard!");
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent the card's Link component from triggering
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={handleClick}>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={(e) => {
            handleClick(e);
            setOpenEdit(true);
          }}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => {
            handleClick(e);
            copyGroupInfo();
          }}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Info
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600 focus:text-red-600"
            onClick={(e) => {
              handleClick(e);
              setOpenDelete(true);
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditGroupChat
        user={user}
        group={group}
        open={openEdit}
        setOpen={setOpenEdit}
      />
      
      <DeleteChatGroup
        open={openDelete}
        setOpen={setOpenDelete}
        groupId={group.id}
        token={user.token!}
      />
    </>
  );
}