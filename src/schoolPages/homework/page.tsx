import React, { useState } from 'react';
import {
  HeadingLg,
  HeadingMd,
  MetaTextPurple,
  MetaText,
} from '../../components/common/Text/Text';
import { BtnPrimary } from '../../components/common/Button/Button';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Progress, Popover } from 'antd';
import {
  HeaderRow,
  FilterBar,
  QuizList,
  QuizCard,
  QuizInfo,
  QuizMeta,
  Divider,
  QuizAvailability,
  QuizStatsRow,
  StatsCol,
  TakeQuizSection,
  QuizIcon,
  TabBar
} from '../quiz/styles';
import FilterPanel from './FilterPanel';

const HomeworkPage = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [filterVisible, setFilterVisible] = useState(false);
  const homeworkData = [1, 2, 3];
  return (
    <>
      <style>{`
        .custom-homework-popover .ant-popover-inner {
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
      `}</style>
      <HeaderRow>
        <TabBar>
          {['latest', 'completed', 'other'].map(tab => (
            <HeadingMd
              key={tab}
              style={activeTab === tab
                ? { background: '#ede9fe', color: '#7c3aed', borderRadius: 16, padding: '6px 24px' }
                : { color: '#888' }}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </HeadingMd>
          ))}
        </TabBar>
        <FilterBar>
          <HeadingMd>By Year 2025</HeadingMd>
          <HeadingMd>|</HeadingMd>
          <HeadingMd>All Sub</HeadingMd>
          <Popover
            content={<FilterPanel onReset={() => setFilterVisible(false)} />}
            trigger="click"
            visible={filterVisible}
            onVisibleChange={(visible: boolean) => setFilterVisible(visible)}
            placement="bottom"
            overlayClassName="custom-homework-popover"
          >
            <MenuUnfoldOutlined
              style={{ fontSize: 25, color: '#7c3aed', cursor: 'pointer' }}
              {...({} as any)}
            />
          </Popover>
        </FilterBar>
      </HeaderRow>

      {activeTab === 'other' ? (
        <HeadingLg style={{ padding: 32, textAlign: 'center' }}>Content Other here</HeadingLg>
      ) : (
        <QuizList>
          {homeworkData.map((_, idx) => (
            <QuizCard key={idx}>
              <QuizInfo>
                <HeadingLg>2025 English Year 6 (Test 1)</HeadingLg>
                <QuizMeta>
                  <MetaText>Standard 6</MetaText>
                  <span style={{ color: '#bbb', fontWeight: 600 }}>|</span>
                  <MetaText>ENGLISH</MetaText>
                </QuizMeta>
              </QuizInfo>

              <Divider />

              <QuizAvailability>
                <HeadingMd>Deadline</HeadingMd>
                <MetaText>May 28 2025</MetaText>
              </QuizAvailability>

              <Divider />

              <QuizStatsRow>
                <QuizIcon src="/sidebar-image/homework.png" alt="homework" />
                <StatsCol>
                  <HeadingMd>Duration 1 hr</HeadingMd>
                  <MetaTextPurple>START : 12.30AM</MetaTextPurple>
                </StatsCol>
                <StatsCol>
                  <HeadingMd>40 Questions</HeadingMd>
                  <MetaTextPurple>END : 1.30AM</MetaTextPurple>
                </StatsCol>
              </QuizStatsRow>

              <TakeQuizSection>
                {activeTab === 'completed' ? (
                  <Progress
                    type="circle"
                    percent={80}
                    width={48}
                    strokeColor="#7c3aed"
                    format={p => `${p}%`}
                  />
                ) : (
                  <BtnPrimary>Start Now</BtnPrimary>
                )}
              </TakeQuizSection>
            </QuizCard>
          ))}
        </QuizList>
      )}
    </>
  );
};

export default HomeworkPage;
