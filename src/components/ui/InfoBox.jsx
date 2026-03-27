import React from 'react';
import Image from './Image';

/**
 * Wikipedia-style InfoBox component
 */
const InfoBox = ({ profile }) => {
  const infoItems = [
    { label: 'Born', value: profile.birthDate },
    { label: 'Birthplace', value: profile.birthPlace },
    { label: 'Occupation', value: profile.occupation },
    { label: 'Years active', value: profile.yearsActive },
  ];
  
  return (
    <aside className="bg-infobox border border-border rounded p-4 mb-4 md:float-right md:ml-4 md:w-80 md:clear-right">
      <div className="text-center mb-3">
        <h2 className="text-xl font-serif font-semibold mb-3">{profile.name}</h2>
        <Image 
          src={profile.profileImage}
          alt={profile.name}
          className="mb-2"
        />
      </div>
      
      <table className="w-full text-sm">
        <tbody>
          {infoItems.map((item, index) => (
            <tr key={index} className="border-t border-border">
              <th className="text-left py-2 pr-2 font-semibold text-foreground-secondary align-top">
                {item.label}
              </th>
              <td className="py-2 text-foreground">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
};

export default InfoBox;
