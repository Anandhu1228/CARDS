const Mcard = document.getElementById('magneticCard');

Mcard.addEventListener('mousemove', (e) => {
    const Mrect = Mcard.getBoundingClientRect();
    const Mx = e.clientX - Mrect.left;
    const My = e.clientY - Mrect.top;
    
    const McenterX = Mrect.width / 2;
    const McenterY = Mrect.height / 2;
    
    const MdeltaX = (Mx - McenterX) / McenterX;
    const MdeltaY = (My - McenterY) / McenterY;
    
    const intensity = 15;
    Mcard.style.transform = `translate3d(${MdeltaX * intensity}px, ${MdeltaY * intensity}px, 0) scale(1.03)`;
});

Mcard.addEventListener('mouseleave', () => {
    Mcard.style.transform = 'translate3d(0, 0, 0) scale(1)';
});

const tiltCard = document.getElementById('tiltCard');

tiltCard.addEventListener('mousemove', (e) => {
    const Trect = tiltCard.getBoundingClientRect();
    const Tx = e.clientX - Trect.left;
    const Ty = e.clientY - Trect.top;
    
    const TcenterX = Trect.width / 2;
    const TcenterY = Trect.height / 2;
    
    const TrotateX = (Ty - TcenterY) / TcenterY * -25;
    const TrotateY = (Tx - TcenterX) / TcenterX * 25;
    
    tiltCard.style.transform = `
        perspective(1000px) 
        rotateX(${TrotateX}deg) 
        rotateY(${TrotateY}deg) 
        translateZ(50px) 
        scale3d(1.05, 1.05, 1.05)
    `;
});

tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
});

const IntensetiltCard = document.getElementById('IntensetiltCard');

IntensetiltCard.addEventListener('mousemove', (e) => {
    const I3rect = IntensetiltCard.getBoundingClientRect();
    const I3x = e.clientX - I3rect.left;
    const I3y = e.clientY - I3rect.top;
    
    const I3centerX = I3rect.width / 2;
    const I3centerY = I3rect.height / 2;
    
    const I3rotateX = (I3y - I3centerY) / I3centerY * -25; 
    const I3rotateY = (I3x - I3centerX) / I3centerX * 25; 
    
    IntensetiltCard.style.transform = `
        perspective(1000px) 
        rotateX(${I3rotateX}deg) 
        rotateY(${I3rotateY}deg) 
        translateZ(50px) 
        scale3d(1.05, 1.05, 1.05)
    `;
});

IntensetiltCard.addEventListener('mouseleave', () => {
    IntensetiltCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
});



