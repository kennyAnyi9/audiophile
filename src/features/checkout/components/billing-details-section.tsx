import FormInput from "./form-input";

interface BillingDetailsSectionProps {
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

export default function BillingDetailsSection({ errors }: BillingDetailsSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[13px] font-bold text-primary uppercase tracking-[0.93px]">
        Billing Details
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Alexei Ward"
          required
          error={errors?.name}
        />
        
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="alexei@mail.com"
          required
          error={errors?.email}
        />
        
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 202-555-0136"
          required
          error={errors?.phone}
          className="md:col-span-1"
        />
      </div>
    </div>
  );
}