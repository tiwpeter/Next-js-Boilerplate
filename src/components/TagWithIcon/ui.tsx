import { SvgIcon } from '@mui/material';

<div>
  <section
    className="dw container mx-auto"
    style={{
      background: 'aliceblue',
      display: 'flex',
      flexDirection: 'column', // Arrange items in a column
      width: '1078px', // Adjust width as needed
      overflow: 'auto', // Allow scrolling if the content overflows
    }}
  >
    <ul
      className="flex flex-col"
      style={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      }}
    >
      {localData.titles.map((item) => (
        <li
          key={item.id}
          className="boxslie flex items-start border p-2"
          style={{ width: '100%', marginBottom: '8px' }} // Full width and space between items
        >
          <img
            src={item.url}
            alt="Placeholder Image"
            className="mr-2 size-12"
            style={{ width: '86px', height: '64px' }}
          />
          <div
            className="flex h-full flex-col justify-between"
            style={{ width: 'calc(100% - 96px)' }} // Adjust width based on image size
          >
            <div className="mb-4">
              <h2>{item['Title-Topic']}</h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-end">
                {item.user && <h5 className="text-center">{item.user}</h5>}
                {item.time && (
                  <h5 className="text-center" style={{ marginLeft: '6px' }}>
                    {item.time}
                  </h5>
                )}
              </div>
              <div className="pt-list-item__stats flex">
                <span
                  style={{
                    fontSize: '.75rem',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <SvgIcon
                    component={MessageIcon}
                    style={{ fontSize: '1rem', marginRight: '8px' }}
                  />
                  {item.comments?.message || 'No messages'}
                </span>
                <span
                  style={{
                    fontSize: '.75rem',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <SvgIcon
                    component={AddBoxIcon}
                    style={{ fontSize: '1rem', marginRight: '8px' }}
                  />
                  {item.votes || 0}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
</div>;
