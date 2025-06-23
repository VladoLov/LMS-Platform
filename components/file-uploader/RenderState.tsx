import React from "react";
import { CloudUploadIcon, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function RenderEmptyState({
  isDragActive,
}: {
  isDragActive: boolean;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text- text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p className="text-base font-semibold text-foreground mb-4">
        Drop your files here or{" "}
        <span className="font-bold text-primary cursor-pointer">
          Click to Upload
        </span>
      </p>
      <Button type="button">Select file</Button>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className=" text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-destructive/30 mb-4">
        <ImageIcon className={cn("size-6 text- text-destructive")} />
      </div>
      <p className="text-base font-semibold">Upload failed</p>
      <p className="text-xs mt-1 text-muted-foreground">Something went wrong</p>
      <Button type="button" className="text-xs mt-4 text-muted-foreground">
        Retry File Upload
      </Button>
    </div>
  );
}
