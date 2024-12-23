import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { ServiceItem } from '../../components/services/ServiceItem';

const services = [
  { id: 'wash-fold', title: 'Wash and Fold' },
  { id: 'wash-iron', title: 'Wash and Iron' },
  { id: 'steam-ironing', title: 'Steam Ironing' },
  { id: 'dry-cleaning', title: 'Dry Cleaning' },
  { id: 'wash-only', title: 'Wash Only' }
];

export function CoreLaundryServices() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'wash-fold') {
      navigate('/services/wash-fold');
    } else {
      // Handle other services navigation
      navigate(`/services/${serviceId}`);
    }
  };

  return (
    <ServiceDetailsLayout title="Core Laundry Services">
      <div className="space-y-2">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            title={service.title}
            onClick={() => handleServiceClick(service.id)}
          />
        ))}
      </div>
    </ServiceDetailsLayout>
  );
}