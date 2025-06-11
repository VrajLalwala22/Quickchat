import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/option";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { ChatGroupType } from "../../../types";
import { Badge } from "../ui/badge";
import { CalendarIcon, KeyRound, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { formatDistance } from "date-fns";

export default function GroupChatCard({
  group,
  user,
}: {
  group: ChatGroupType;
  user: CustomUser;
}) {
  return (
    <Link href={`/chat/${group.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border bg-white/50 hover:bg-white">
        <CardHeader className="flex-row justify-between items-start space-y-0 pb-2">
          <div>
            <CardTitle className="text-xl font-bold truncate mb-2">{group.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="h-4 w-4" />
              <span>5 members</span>
            </div>
          </div>
          <GroupChatCardMenu user={user} group={group} />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <CalendarIcon className="h-4 w-4" />
                <span>Created {formatDistance(new Date(group.created_at), new Date())} ago</span>
              </div>
              <Badge variant="secondary" className="gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>Active</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <KeyRound className="h-4 w-4" />
              <span>Passcode: {group.passcode}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}