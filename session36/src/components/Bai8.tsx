import React from 'react'

export default function Bai8() {
        const month = new Date().getMonth() + 1;
        
        const getSeason = (month:any) => {
            if (month >= 1 && month <= 3) {
                return 'Xuân';
            } else if (month >= 4 && month <= 6) {
                return 'Hạ';
            } else if (month >= 7 && month <= 9) {
                return 'Thu';
            } else if (month >= 10 && month <= 12) {
                return 'Đông';
            }
        };
    const currentSeason = getSeason(month);
  return (
    <div>
        <p>Bây giờ là mùa: {currentSeason}</p>
    </div>
  )
}
