import TagpanTag from '@/components/pantipink/pagetag/page';

const TagHiz = () => {
  return (
    <section className="TagHiz" style={{ flex: 1 }}>
      <div className="foder">
        <div style={{ marginTop: '20px' }}>
          <div className="tagbox">
            <div className="nav1">
              <ul className="ww">
                <li className="jow1">แท็กฮิต</li>
                {/* สามารถเพิ่ม li อื่น ๆ ตามต้องการได้ */}
              </ul>
            </div>
          </div>
          <TagpanTag />
        </div>
      </div>
    </section>
  );
};

export default TagHiz;
