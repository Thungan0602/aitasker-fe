import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../ui/Button";

export default function PublicLayout() {
  return (
    <div>
      <div class="flex items-center gap-3 mb-10">
        <div class="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>

        <div>
          <h1 class="font-bold text-lg">AITasker</h1>
          <p class="text-sm text-slate-500">AI Marketplace</p>
        </div>
      </div>

      <Outlet />

      <div class="space-y-3">
        <Button variant="third">Post a Job</Button>

        <button class="w-full text-left px-4 py-3 rounded-2xl hover:bg-slate-100 transition">
          ❓ Support
        </button>
      </div>
    </div>
  );
}
