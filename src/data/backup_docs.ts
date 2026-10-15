/**
 * [기획 & 문서 백업 데이터 아카이브]
 * 
 * 현재 포트폴리오 UI에서는 hidden 처리되어 화면에 노출되지 않으며,
 * 언제든 데이터 백업 및 복원이 가능하도록 보존된 데이터셋입니다.
 * 
 * 복원 시:
 * Projects.tsx의 CATEGORIES 및 projects 목록에서 hidden: true를 제거하거나
 * 본 파일의 BACKUP_DOC_PROJECTS를 import하여 재사용하실 수 있습니다.
 */

export interface BackupDocProject {
    id: string;
    category: 'docs';
    title: string;
    type: string;
    desc: string;
    tech: string[];
    link: string;
    isRepo: boolean;
    hidden: boolean;
}

export const BACKUP_DOC_CATEGORY = {
    id: 'docs' as const,
    label: '기획 & 문서',
    hidden: true
};

export const BACKUP_DOC_PROJECTS: BackupDocProject[] = [
    {
        id: "spec-note-1",
        category: "docs",
        title: "[KOG 엘소드] 콤보 액션 메커니즘 및 손맛 개선 Fun QA 분석서",
        type: "게임성 검증 & 역기획서 (Fun QA & Reverse Planning)",
        desc: "KOG <엘소드>의 횡스크롤 콤보 액션 및 히트스톱(역경직) 연출 심층 분석. 후반 레이드 광역 스킬 난사로 인한 '조작 손맛 희석' 원인 규명 및 커맨드 콤보-기믹 연계 보상 밸런스 개선안 제안.",
        tech: ["KOG Elsword", "Fun QA", "Hit-stop Analysis", "Combo Balance"],
        link: "https://drive.google.com/file/d/1BclOv8S7KH_gkG-2oa4jo2rvKITX3xVo/view?usp=drive_link",
        isRepo: false,
        hidden: true
    },
    {
        id: "spec-note-2",
        category: "docs",
        title: "[액션 RPG] 공방(패링/회피) 판정 및 카메라 UX 검증 리포트",
        type: "전투 메커니즘 & UX 분석 (Combat UX & Balance Audit)",
        desc: "<명조>, <드래곤소드(하운드13)>, <로스트아크>의 공방 시스템 비교 분석. 저스트 회피·패링 판정 프레임 검증, 거대 보스전 카메라 앵글 이탈 및 공격 전조 가림 현상 해결을 위한 스마트 줌아웃 가이드.",
        tech: ["Parry & Evade", "Camera UX", "Hitbox Audit", "Action Balance"],
        link: "https://drive.google.com/file/d/1CSflhuA75dAJCB6kMGngqIIMF04ucXrj/view?usp=drive_link",
        isRepo: false,
        hidden: true
    },
    {
        id: "spec-note-3",
        category: "docs",
        title: "[3D 최적화] Unity 엔진 기반 인풋렉 및 렌더링 성능 Fun QA 보고서",
        type: "기술 기반 QA & 최적화 (Technical QA & Latency Audit)",
        desc: "Unity 3D 기반 액션 게임 개발 및 실무 최적화 경험을 바탕으로, 드로우콜 병목과 프레임 드랍이 입력 지연(인풋렉) 및 조작 쾌감에 미치는 영향 정량 분석. 타격 손맛을 유지하는 리소스 경량화 표준 수립.",
        tech: ["Unity 3D", "Input Latency", "DrawCall Optimization", "Tech QA"],
        link: "https://drive.google.com/file/d/15Y0hztE1ScD6eXezsbjoZV8lUOhlKvdj/view?usp=drive_link",
        isRepo: false,
        hidden: true
    }
];
