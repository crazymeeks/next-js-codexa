'use client';

import { Trash2, PencilIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PostTable = ({posts}) => {

  return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.data.map((post) => <PostTableRow key={post.id} post={post}/>)}
        </TableBody>
      </Table>

};

const PostTableRow = ({post}) => {
  return <TableRow>
            <TableCell className="font-medium">{post.id}</TableCell>
            <TableCell>{post.userId}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell className="flex gap-2">
                <span className="hover:cursor-pointer">View</span>
                <span className="hover:cursor-pointer">
                  <PencilIcon className="h-4 w-4 text-blue-400"/>
                </span>
                <span className="hover:cursor-pointer">
                  <Trash2 className="h-4 w-4 text-red-400"/>
                </span>
            </TableCell>
          </TableRow>
};

export default PostTable;