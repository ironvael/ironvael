"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitDiagnostic, type DiagnosticActionState } from "@/app/diagnostic/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type DiagnosticFormProps = {
  calUrl: string;
};

type UtmState = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  pagePath?: string;
  userAgent?: string;
};

const UTM_STORAGE_KEY = "ironvael_diagnostic_utms";

export function DiagnosticForm({ calUrl }: DiagnosticFormProps) {
  const [state, formAction] = useFormState<DiagnosticActionState, FormData>(
    submitDiagnostic,
    {
      ok: false,
      fieldErrors: {},
      formError: null,
    }
  );
  const [utms, setUtms] = useState<UtmState>({ pagePath: "/diagnostic" });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedRaw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    let stored: UtmState = {};
    if (storedRaw) {
      try {
        stored = JSON.parse(storedRaw) as UtmState;
      } catch {
        stored = {};
      }
    }

    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    const merged: UtmState = {
      ...stored,
      utm_source: searchParams.get("utm_source") ?? stored.utm_source,
      utm_medium: searchParams.get("utm_medium") ?? stored.utm_medium,
      utm_campaign: searchParams.get("utm_campaign") ?? stored.utm_campaign,
      utm_content: searchParams.get("utm_content") ?? stored.utm_content,
      utm_term: searchParams.get("utm_term") ?? stored.utm_term,
      gclid: searchParams.get("gclid") ?? stored.gclid,
      fbclid: searchParams.get("fbclid") ?? stored.fbclid,
      referrer:
        document.referrer || stored.referrer || url.searchParams.get("ref") || undefined,
      pagePath: "/diagnostic",
      userAgent: navigator.userAgent || stored.userAgent,
    };

    setUtms(merged);
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
  }, []);

  return (
    <div className="border border-border bg-white p-6 sm:p-8 md:p-10 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6">
        Request your diagnostic
      </h3>

      {state.formError && (
        <p className="mb-4 text-sm font-medium text-destructive">
          {state.formError}
        </p>
      )}

      {state.ok ? (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Request received — pick a time.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-none px-8 h-11 text-sm font-semibold"
          >
            <a href="https://cal.com/ironvael-advisory/stability" target="_blank" rel="noreferrer">
              Schedule now
            </a>
          </Button>
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                name="fullName"
                required
                className="rounded-none h-11 border-border focus:border-primary"
              />
              {state.fieldErrors?.fullName && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-none h-11 border-border focus:border-primary"
              />
              {state.fieldErrors?.email && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                required
                className="rounded-none h-11 border-border focus:border-primary"
              />
              {state.fieldErrors?.company && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.company}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="role">Role (optional)</Label>
              <Input
                id="role"
                name="role"
                className="rounded-none h-11 border-border focus:border-primary"
              />
              {state.fieldErrors?.role && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.role}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="teamSize">Team size</Label>
              <Select name="teamSize">
                <SelectTrigger
                  id="teamSize"
                  className="rounded-none h-11 border-border focus:border-primary"
                >
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1–5</SelectItem>
                  <SelectItem value="6-15">6–15</SelectItem>
                  <SelectItem value="16-50">16–50</SelectItem>
                  <SelectItem value="51-200">51–200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
              {state.fieldErrors?.teamSize && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.teamSize}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="revenueRange">Revenue range</Label>
              <Select name="revenueRange">
                <SelectTrigger
                  id="revenueRange"
                  className="rounded-none h-11 border-border focus:border-primary"
                >
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pre-revenue">Pre-revenue</SelectItem>
                  <SelectItem value="<$500k">{"<"}$500k</SelectItem>
                  <SelectItem value="$500k–$2M">$500k–$2M</SelectItem>
                  <SelectItem value="$2M–$10M">$2M–$10M</SelectItem>
                  <SelectItem value="$10M+">$10M+</SelectItem>
                </SelectContent>
              </Select>
              {state.fieldErrors?.revenueRange && (
                <p className="text-xs text-destructive">
                  {state.fieldErrors.revenueRange}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="problem">What feels unstable right now?</Label>
            <Textarea
              id="problem"
              name="problem"
              required
              className="rounded-none min-h-[130px] border-border focus:border-primary resize-y"
            />
            {state.fieldErrors?.problem && (
              <p className="text-xs text-destructive">
                {state.fieldErrors.problem}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Checkbox id="consent" name="consent" />
              <Label
                htmlFor="consent"
                className="text-xs sm:text-sm font-normal text-muted-foreground leading-snug"
              >
                It&apos;s okay to email me about this request.
              </Label>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="termsAccepted" name="termsAccepted" />
              <Label
                htmlFor="termsAccepted"
                className="text-xs sm:text-sm font-normal text-muted-foreground leading-snug"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </Label>
            </div>
            {state.fieldErrors?.termsAccepted && (
              <p className="text-xs text-destructive">
                {state.fieldErrors.termsAccepted}
              </p>
            )}
          </div>

          {/* Honeypot and tracking fields */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="utm_source" value={utms.utm_source || ""} />
          <input type="hidden" name="utm_medium" value={utms.utm_medium || ""} />
          <input type="hidden" name="utm_campaign" value={utms.utm_campaign || ""} />
          <input type="hidden" name="utm_content" value={utms.utm_content || ""} />
          <input type="hidden" name="utm_term" value={utms.utm_term || ""} />
          <input type="hidden" name="gclid" value={utms.gclid || ""} />
          <input type="hidden" name="fbclid" value={utms.fbclid || ""} />
          <input type="hidden" name="referrer" value={utms.referrer || ""} />
          <input type="hidden" name="pagePath" value={utms.pagePath || "/diagnostic"} />
          <input type="hidden" name="userAgent" value={utms.userAgent || ""} />

          <div className="pt-2">
            <SubmitButton />
          </div>
        </form>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full sm:w-auto rounded-none px-8 h-11 text-sm font-semibold"
    >
      {pending ? "Submitting..." : "Request Diagnostic"}
    </Button>
  );
}

