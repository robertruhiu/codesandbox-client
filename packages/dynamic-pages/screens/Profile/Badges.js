import React from 'react';
import Badge from 'common/lib/utils/badges/Badge';
import ContributorsBadge from 'common/lib/components/ContributorsBadge';
import CommunityBadge from 'common/lib/components/CommunityBadges';
import { H3 } from '../../components/Typography';
import { Aside, BadgeWrapper } from './_sidebar.elements';

export default ({ templateSandboxes, badges, username }) => (
  <Aside
    css={`
      margin-top: 50px;
      @media screen and (max-width: 1100px) {
        margin-top: 0px;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    `}
  >
    <H3>Achievement Badges</H3>
    <BadgeWrapper>
      {badges.map(badge => <Badge key={badge.id} badge={badge} size={64} />)}
      <ContributorsBadge
        username={username}
        style={{
          width: 64,
          height: 50,
        }}
      />
      {Object.keys(templateSandboxes).map(
        key =>
          templateSandboxes[key] >= 50 && (
            <CommunityBadge
              template={key}
              key={key}
              sandboxesNumber={templateSandboxes[key]}
              style={{
                width: 64,
                height: 50,
              }}
            />
          )
      )}
    </BadgeWrapper>
  </Aside>
);