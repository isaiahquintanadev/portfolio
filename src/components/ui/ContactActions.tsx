"use client";

import { useId, useState } from "react";
import { Check, Copy } from "lucide-react";

type ContactActionsProps = {
  email: string;
  emailElementId: string;
};

export default function ContactActions({ email, emailElementId }: ContactActionsProps) {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const statusId = useId();

  async function copyEmail() {
    setCopied(false);

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setStatus("Correo copiado. Ya puedes pegarlo en tu aplicación de correo.");
    } catch {
      const emailElement = document.getElementById(emailElementId);
      const selection = window.getSelection();

      if (emailElement && selection) {
        const range = document.createRange();
        range.selectNodeContents(emailElement);
        emailElement.focus({ preventScroll: true });
        selection.removeAllRanges();
        selection.addRange(range);
        setStatus("No se ha podido copiar automáticamente. He seleccionado el correo para que puedas copiarlo manualmente.");
      } else {
        setStatus("No se ha podido copiar automáticamente. Puedes seleccionar el correo que aparece arriba y copiarlo manualmente.");
      }
    }
  }

  return (
    <div className="max-w-sm">
      <button type="button" onClick={copyEmail} className="button-secondary w-full" aria-describedby={statusId}>
        {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
        {copied ? "Email copiado" : "Copiar email"}
      </button>
      <p id={statusId} role="status" aria-live="polite" aria-atomic="true" className="text-muted mt-2 text-xs leading-5 empty:hidden">
        {status}
      </p>
    </div>
  );
}
