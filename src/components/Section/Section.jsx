import { useInView } from 'react-intersection-observer';
import { useSection } from '../../context/sectioncontext';


const Section = ({ sectionId, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
  });
  const { setCurrentSection } = useSection();

  if (inView) {
    setCurrentSection(sectionId);  
  }

  return (
    <div ref={ref} id={sectionId} style={{ height: '100vh' }}>
      {children}
    </div>
  );
};

export default Section;