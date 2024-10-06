import React, { useState, useEffect, useRef } from 'react';
import { Tree, Input, Button, Modal, Form, message } from 'antd';
import { PlusOutlined, DeleteOutlined, BarChartOutlined } from '@ant-design/icons';
import { Chart, registerables } from 'chart.js';
import './styles.css';

Chart.register(...registerables);

const { TextArea } = Input;

const App = () => {
  const [data, setData] = useState({});
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [eventDetails, setEventDetails] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [form] = Form.useForm();
  const chartRef = useRef(null);

  useEffect(() => {
    const savedData = localStorage.getItem('diamondData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diamondData', JSON.stringify(data));
  }, [data]);

  const handleAdd = () => {
    form.validateFields().then(values => {
      const { year, month, day, description, diamonds } = values;
      const newData = { ...data };

      if (modalType === 'year') {
        if (!newData[year]) {
          newData[year] = {};
        }
      } else if (modalType === 'month') {
        if (!newData[year]) {
          message.error('年を先に追加してください。');
          return;
        }
        if (!newData[year][month]) {
          newData[year][month] = {};
        }
      } else if (modalType === 'day') {
        if (!newData[year] || !newData[year][month]) {
          message.error('年と月を先に追加してください。');
          return;
        }
        if (!newData[year][month][day]) {
          newData[year][month][day] = { total: 0, events: [] };
        }
      } else if (modalType === 'event') {
        if (!newData[year] || !newData[year][month] || !newData[year][month][day]) {
          message.error('年、月、日を先に追加してください。');
          return;
        }
        newData[year][month][day].events.push({ description, diamonds });
        newData[year][month][day].total += diamonds;
      }

      setData(newData);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleDelete = () => {
    const newData = { ...data };
    selectedKeys.forEach(key => {
      const [year, month, day, event] = key.split('-');
      if (event) {
        const events = newData[year][month][day].events;
        const eventIndex = events.findIndex(e => e.description === event);
        if (eventIndex !== -1) {
          newData[year][month][day].total -= events[eventIndex].diamonds;
          events.splice(eventIndex, 1);
        }
      } else if (day) {
        delete newData[year][month][day];
      } else if (month) {
        delete newData[year][month];
      } else if (year) {
        delete newData[year];
      }
    });
    setData(newData);
    setSelectedKeys([]);
  };

  const handleSelect = (keys, info) => {
    setSelectedKeys(keys);
    if (info.node && info.node.event) {
      const { year, month, day, event } = info.node;
      const eventDetails = data[year][month][day].events.find(e => e.description === event);
      setEventDetails(`詳細: ${eventDetails.description}\nダイヤ: ${eventDetails.diamonds}個`);
    } else {
      setEventDetails('');
    }
  };

  const handlePlot = () => {
    const ctx = chartRef.current.getContext('2d');
    const events = {};
    Object.values(data).forEach(year => {
      Object.values(year).forEach(month => {
        Object.values(month).forEach(day => {
          day.events.forEach(event => {
            if (!events[event.description]) {
              events[event.description] = 0;
            }
            events[event.description] += event.diamonds;
          });
        });
      });
    });

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(events),
        datasets: [{
          label: 'ダイヤ獲得数',
          data: Object.values(events),
          backgroundColor: 'skyblue'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const treeData = Object.keys(data).map(year => ({
    title: year,
    key: year,
    children: Object.keys(data[year]).map(month => ({
      title: month,
      key: `${year}-${month}`,
      children: Object.keys(data[year][month]).map(day => ({
        title: day,
        key: `${year}-${month}-${day}`,
        children: data[year][month][day].events.map(event => ({
          title: event.description,
          key: `${year}-${month}-${day}-${event.description}`,
          isLeaf: true,
          year,
          month,
          day,
          event: event.description
        }))
      }))
    }))
  }));

  return (
    <div className="App">
      <div className="left-panel">
        <Tree
          treeData={treeData}
          onSelect={handleSelect}
          selectedKeys={selectedKeys}
        />
        <div className="buttons">
          <Button icon={<PlusOutlined />} onClick={() => { setModalType('year'); setIsModalVisible(true); }}>年を追加</Button>
          <Button icon={<PlusOutlined />} onClick={() => { setModalType('month'); setIsModalVisible(true); }}>月を追加</Button>
          <Button icon={<PlusOutlined />} onClick={() => { setModalType('day'); setIsModalVisible(true); }}>日を追加</Button>
          <Button icon={<PlusOutlined />} onClick={() => { setModalType('event'); setIsModalVisible(true); }}>イベントを追加</Button>
          <Button icon={<DeleteOutlined />} onClick={handleDelete}>削除</Button>
          <Button icon={<BarChartOutlined />} onClick={handlePlot}>グラフ表示</Button>
        </div>
      </div>
      <div className="right-panel">
        <TextArea value={eventDetails} readOnly rows={10} />
        <canvas id="chart" ref={chartRef}></canvas>
      </div>
      <Modal
        title="追加"
        visible={isModalVisible}
        onOk={handleAdd}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          {modalType === 'year' && (
            <Form.Item name="year" label="年" rules={[{ required: true, message: '年を入力してください。' }]}>
              <Input />
            </Form.Item>
          )}
          {modalType === 'month' && (
            <>
              <Form.Item name="year" label="年" rules={[{ required: true, message: '年を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="month" label="月" rules={[{ required: true, message: '月を入力してください。' }]}>
                <Input />
              </Form.Item>
            </>
          )}
          {modalType === 'day' && (
            <>
              <Form.Item name="year" label="年" rules={[{ required: true, message: '年を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="month" label="月" rules={[{ required: true, message: '月を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="day" label="日" rules={[{ required: true, message: '日を入力してください。' }]}>
                <Input />
              </Form.Item>
            </>
          )}
          {modalType === 'event' && (
            <>
              <Form.Item name="year" label="年" rules={[{ required: true, message: '年を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="month" label="月" rules={[{ required: true, message: '月を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="day" label="日" rules={[{ required: true, message: '日を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="description" label="イベント詳細" rules={[{ required: true, message: 'イベント詳細を入力してください。' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="diamonds" label="ダイヤ獲得数" rules={[{ required: true, message: 'ダイヤ獲得数を入力してください。' }]}>
                <Input type="number" />
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default App;