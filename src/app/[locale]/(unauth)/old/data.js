// pages/api/data.js

export default function handler(req, res) {
  // ข้อมูลตัวอย่าง
  const data = {
    tag1: {
      items: [
        { id: 1, title: 'Item 1 for tag1' },
        { id: 2, title: 'Item 2 for tag1' },
      ],
    },
    tag2: {
      items: [
        { id: 3, title: 'Item 1 for tag2' },
        { id: 4, title: 'Item 2 for tag2' },
      ],
    },
    tag3: {
      items: [
        { id: 5, title: 'Item 1 for tag3' },
        { id: 6, title: 'Item 2 for tag3' },
      ],
    },
  };

  // รับพารามิเตอร์จากคำขอ
  const { tag, id } = req.query;

  if (!tag || !data[tag]) {
    return res.status(404).json({ error: 'Tag not found' });
  }

  if (id) {
    // ค้นหารายการตาม id
    const item = data[tag].items.find((i) => i.id === parseInt(id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.status(200).json({ tag, item });
  }

  // ส่งข้อมูลทั้งหมดสำหรับ tag
  return res.status(200).json({ tag, items: data[tag].items });
}
