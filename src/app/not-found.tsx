import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-2xl font-bold text-[#34D399]">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Página Não Encontrada</h1>
      <p className="text-sm text-[#A3A3A3] max-w-md mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button href="/" variant="primary" size="md">
        Voltar para a Página Inicial
      </Button>
    </div>
  );
}
