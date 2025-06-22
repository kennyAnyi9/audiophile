import FormInput from "./form-input";

interface ShippingInfoSectionProps {
  errors?: {
    address?: string;
    zipCode?: string;
    city?: string;
    country?: string;
  };
}

export default function ShippingInfoSection({ errors }: ShippingInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[13px] font-bold text-primary uppercase tracking-[0.93px]">
        Shipping Info
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Your Address"
          name="address"
          type="text"
          placeholder="1137 Williams Avenue"
          required
          error={errors?.address}
          className="md:col-span-2"
        />
        
        <FormInput
          label="ZIP Code"
          name="zipCode"
          type="text"
          placeholder="10001"
          required
          error={errors?.zipCode}
        />
        
        <FormInput
          label="City"
          name="city"
          type="text"
          placeholder="New York"
          required
          error={errors?.city}
        />
        
        <FormInput
          label="Country"
          name="country"
          type="text"
          placeholder="United States"
          required
          error={errors?.country}
          className="md:col-span-2"
        />
      </div>
    </div>
  );
}