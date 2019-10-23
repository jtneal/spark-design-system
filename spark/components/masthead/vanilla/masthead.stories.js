import { useEffect } from '@storybook/client-api';
// import { addDecorator } from '@storybook/html';
import { masthead, toggleScrollEvent } from './masthead';
import { toggle } from '../../toggle/vanilla/toggle';
import { dropdowns } from '../../dropdown/vanilla/dropdown';
import isElementVisible from '../../../utilities/helpers/vanilla/isElementVisible';

export default {
  title: 'Components|Masthead',
};

// TODO: Add this decorator individually rather than globally
// addDecorator(story => `<div data-sprk-main>${story()}</div>`);

export const defaultMasthead = () => {
  useEffect(() => {
    toggle();
    masthead();

    // Our masthead.js applies load event to `window` but doesn't work in storybook iframes
    // This useEffect runs this code when component mounts
    const isMenuVisibleSB = isElementVisible('.sprk-c-Masthead__menu');
    toggleScrollEvent(isMenuVisibleSB);
  }, []);
  return `
    <header
      class="sprk-c-Masthead sprk-o-Stack"
      role="banner"
      idString="masthead-1"
      data-sprk-masthead
    >
      <div class="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
        <div class="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <button
            class="sprk-c-Menu"
            type="button"
            aria-expanded="false"
            data-sprk-mobile-nav-trigger="mobileNav"
          >
            <span class="sprk-u-ScreenReaderText">
              Toggle Navigation
            </span>
            <svg
              class="sprk-c-Icon sprk-c-Icon--l sprk-c-Menu__icon"
              aria-hidden="true"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--two"
                  d="m8 32h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--one"
                  d="m8 18.68h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--three"
                  d="m8 45.32h48"
                />
              </g>
            </svg>
          </button>
        </div>

        <div class="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <a href="#">
            <svg class="sprk-c-Masthead__logo" height="49" viewBox="0 0 175 49" width="175" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m42.5897384 43.9901408 9.3126761-16.244668c1.3653924-2.3981891 1.3653924-5.3565392-.0175051-7.7372233l-2.6082494-4.4987927-6.4943662 11.1682092c.3325955 3.6585513-1.680483 7.1245473-5.0239437 8.6474849l-7.2995976 12.5686117 5.4440644-.0175051c2.7482897-.017505 5.3040242-1.4879275 6.6869215-3.8861167z" fill="#ff451a"/><g fill="#000" transform="translate(57.42 2.32)"><path d="m17.7816098 26.5107847h-14.89678086c-.43762566 0-.85774634-.1750503-1.17283714-.4901408-.31509022-.3150906-.4901406-.7352113-.4901406-1.172837 0-.4376258.17505038-.8577466.4901406-1.1728371.3150908-.3150905.73521148-.4901408 1.17283714-.4901408h14.91428586c2.2056339 0 4.043662-1.732998 4.0961769-3.9211268.017505-1.0853119-.3851107-2.1356137-1.1378271-2.905835-.7527159-.7702213-1.8030182-1.2078471-2.8883299-1.2078471h-10.18792732c-4.04366198 0-7.38712285-3.2209255-7.43963796-7.26458753-.01750504-1.96056333.75271646-3.85110662 2.13561394-5.234004 1.3828969-1.40040241 3.25593556-2.17062374 5.21649854-2.17062374h14.8617709c.9102613 0 1.6629778.73521127 1.6629778 1.66297786 0 .43762576-.1750504.85774648-.4901406 1.17283703-.3150908.31509053-.7352115.49014085-1.1728372.49014085h-14.7917504c-2.20563386 0-4.04366198 1.73299795-4.0961775 3.92112678-.03500996 1.08531183.38511072 2.13561365 1.13782718 2.90583495s1.80301816 1.2078471 2.88832982 1.2078471h10.2929578c1.9605636 0 3.8336017.7877264 5.2164991 2.1706237 1.3828975 1.3828975 2.153119 3.2734407 2.135614 5.2340041-.0525155 4.043662-3.413481 7.2645875-7.457143 7.2645875z"/><path d="m41.693481.37577465h-12.6911471v24.52454725c-.017505.6126761.2975858 1.1903421.8227364 1.4879276.5251511.2975855 1.1728371.3150905 1.6979883 0 .5251505-.3150906.8402413-.8927565.8227364-1.4879276v-21.18108652h9.4352109c2.2931593.01750504 4.1486924 1.83802818 4.2012073 4.13118717.017505 1.12032191-.4201206 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.925553 1.2953722-3.0808851 1.2953722h-4.9189133c-.9102619.0350101-1.6279678.7702213-1.6279678 1.6804829s.7177059 1.6454728 1.6279678 1.6804829h4.9889332c2.0130785 0 3.9386321-.8052314 5.3565395-2.2406439 1.4179075-1.4354125 2.2056339-3.36096577 2.1881289-5.37404421 0-4.13118717-3.4309859-7.49215294-7.6146883-7.49215294z"/><path d="m94.0335214 23.7274849-8.052314-8.2448692h.9977867c2.0130785 0 3.9386316-.8052314 5.356539-2.2406439s2.2056339-3.3784708 2.1881289-5.39154925c-.03501-4.13118717-3.4659959-7.4746479-7.6496983-7.4746479h-12.6911471v24.52454725c-.0175049.6126761.2975859 1.1903421.822737 1.4879276.5251506.3150905 1.1728366.3150905 1.6979877 0 .5251511-.3150906.8402414-.8927565.8227364-1.4879276v-21.18108652h9.4352115c2.2931587.01750504 4.1486918 1.83802818 4.2012068 4.13118717.0175049 1.12032191-.4201207 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.9255531 1.2953722-3.0808852 1.2953722h-4.726358c-.7527164-.0875252-1.4879279.3501006-1.7680082 1.0678069-.2800802.7177062-.0350099 1.5229376.5776661 1.9780683l10.6605636 10.9231389c.665191.560161 1.6454727.5251509 2.2581488-.0875252.665191-.630181.7177059-1.6104628.1575454-2.2756539z"/><path d="m116.019839 23.9200402-9.505231-11.4832998 8.314889-9.2426559c.612676-.68269617.560161-1.75050301-.122535-2.36317907-.682697-.61267605-1.750503-.56016097-2.363179.12253521l-11.745876 13.09376256v-12.0784708c.017505-.61267606-.297585-1.19034206-.8227359-1.48792757-.5251512-.31509054-1.1728372-.31509054-1.6979877 0-.5251512.31509054-.840242.89275654-.822737 1.48792757v22.9315895c-.017505.6126761.2975858 1.1903421.822737 1.4879276.5251505.3150905 1.1728365.3150905 1.6979877 0 .5251509-.3150906.8402409-.8927565.8227359-1.4879276v-5.829175l3.676057-4.0961771 9.190141 11.0981891c.28008.3501007.682696.560161 1.137826.5951711h.157546c.647686 0 1.242857-.3851107 1.505432-.9627767.262576-.595171.175051-1.2778672-.24507-1.7855131z"/><path d="m70.8043462 24.4626962-9.9778676-22.73903423c-.4026157-.9277666-1.3303819-1.52293762-2.3456737-1.52293762-1.0152917 0-1.9430586.59517102-2.3456743 1.52293762l-9.977867 22.73903423c-.3676057.8402414.017505 1.8030181.8577464 2.1706237.8402413.3676056 1.8030181-.017505 2.1706239-.8402415l9.295171-21.18108643 3.2734406 7.45714283h-3.3084505c-.9627768 0-1.7505033.7877264-1.7505033 1.750503 0 .9627767.7877265 1.750503 1.7505033 1.750503h4.8488933l4.4812877 10.2229376c.3851107.8052314 1.3478869 1.1728371 2.1531183.8052314.840242-.3676056 1.2253521-1.3128772.8752519-2.1356136z"/><path d="m3.9701406 31.7272837c3.44849092 0 5.35653954 2.1356137 5.35653954 5.6366197s-1.90804862 5.6541248-5.35653954 5.6541248h-3.71106614v-11.2907445zm-2.64325952 10.3279678h2.59074458c2.76579496 0 4.32374282-1.750503 4.32374282-4.6738431 0-2.92334-1.57545284-4.673843-4.32374282-4.673843h-2.59074458z"/><path d="m17.9566602 43.0180282h-6.8269619v-11.2907445h6.8269619v.9627766h-5.7591552v4.0611671h5.4615694v.9627766h-5.4615694v4.3412475h5.7591552z"/><path d="m20.3898594 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.153119 0 3.7635818 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603621-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.008652-1.2778672-4.1486924-3.1684105z"/><path d="m29.2649092 43.0180282v-11.2907445h1.0853122v11.2907445z"/><path d="m37.2121933 43.2630986c-3.0633802 0-5.0589537-2.328169-5.0589537-5.8816902 0-3.5535211 1.9955735-5.8816901 5.0414487-5.8816901 2.4156942 0 4.2187118 1.3828974 4.6213275 3.5360161h-1.0853116c-.4726357-1.6104628-1.7505033-2.5382294-3.5360159-2.5382294-2.3806842 0-3.9386321 1.9255533-3.9386321 4.8839034s1.5579479 4.9014085 3.9561371 4.9014085c2.2231389 0 3.6410463-1.4004024 3.6410463-3.5360161v-.3851106h-3.4484909v-.9627767h4.5162976v1.2603621c0 2.7832999-1.8555331 4.603823-4.708853 4.603823z"/><path d="m43.7590744 43.0180282v-11.2907445h1.0503017l6.5818916 9.3826962h.1050299v-9.3826962h1.0503023v11.2907445h-1.0503023l-6.599396-9.3826962h-.1050305v9.3826962z"/><path d="m59.040966 40.0946881c.1400399 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.1181089-.525151-3.0108652-1.4179075-3.0108652-2.9408451 0-1.8205231 1.5754528-3.1334004 3.8686116-3.1334004 2.1706239 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853117c-.1750504-1.2078471-1.260362-2.0130785-2.8358149-2.0130785-1.6279678 0-2.730785.8927565-2.730785 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279677 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486924-3.1684105z"/><path d="m70.9618916 43.0180282v-4.8839035l-4.0611675-6.406841h1.2253526l3.3084505 5.3215292h.1050299l3.3084511-5.3215292h1.2253521l-4.043662 6.406841v4.8839035z"/><path d="m77.8413685 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979882 0 2.9058353-.9452716 2.9058353-2.2056338 0-1.0678068-.7702214-1.750503-2.5207246-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.1531189 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603627-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486925-3.1684105z"/><path d="m89.7447885 43.0180282v-10.3279679h-3.7810861v-.9627766h8.6474845v.9627766h-3.7985911v10.3279679z"/><path d="m102.926077 43.0180282h-6.8269622v-11.2907445h6.8269622v.9627766h-5.7416505v4.0611671h5.4615695v.9627766h-5.4615695v4.3412475h5.7416505z"/><path d="m104.834125 43.0180282v-11.2907445h1.225352l4.166197 9.837827h.10503l4.148693-9.837827h1.242857v11.2907445h-.997787v-9.2076459h-.087526l-3.903621 9.1551308h-.927766l-3.903623-9.1551308h-.070019v9.2076459z"/></g><path d="m37.7408451 35.3426559c-.0175051.0175051-.0525151.0350101-.0700201.0350101l-16.0696177 7.3521127-3.0283703 5.1989939 11.8684105-.03501z" fill="#ff5c1c"/><path d="m42.9748491 5.95171025-7.544668 12.97122735c3.9561368.560161 7.002012 3.7810865 7.3346077 7.7722334l6.4943662-11.1682093-5.2340041-8.99758543c-.2100603-.38511066-.612676-.59517106-1.0503018-.57766602z" fill="#ff5c1c"/><path d="m21.0585513 42.9748491-5.7066398 2.6082495c-.4551308.2100603-.7352113.7002012-.6651912 1.1903421.0700201.4901408.4376258.9102615.9277666.9977867.5076459.1050301 1.0152918.1575452 1.5229376.1575452h.0175051 1.4179074l3.0283703-5.1989939z" fill="#ff721e"/><path d="m35.4301811 18.9229376 7.544668-12.97122735c-.1400403 0-.2800805.03501008-.4201207.10503017l-3.5885312 1.59295776-11.8859155 5.26901412-6.4243461 11.045674 9.855332-4.3937626c1.5404427-.6826961 3.2559356-.9102615 4.9189135-.6476861z" fill="#ff721e"/><path d="m17.3649899 17.2249497c-1.8905432.8402415-2.7832997 3.0458753-2.0130784 4.9014085.3851106.9277665 1.1378269 1.6629778 2.0830986 2.0480885.9452716.3676056 1.9955734.3501006 2.9058349-.0525151l.3150906-.1400403 6.4243461-11.063179z" fill="#ff8920"/><path d="m37.5657948 25.9774648c-.3851107-.9277666-1.137827-1.6629779-2.0830986-2.0480885-.9452717-.3676056-1.9955735-.3501007-2.905835.052515l-.1225352.0525151-6.4243461 11.0631791 9.5227364-4.2187123c1.8905433-.8402414 2.8008048-3.0283702 2.0130785-4.9014084z" fill="#ff5c1c"/><path d="m17.6275654 29.1983903-7.509658 12.9362174c.0875252-.0175051.1750504-.0350101.2450705-.0700202l3.5885312-1.5929577 12.0959758-5.3565392 6.4243461-11.0631791-10.0653924 4.4812877c-1.5054326.6651911-3.1684104.8927565-4.7788732.6651911z" fill="#ff721e"/><path d="m31.859155 5.12897384 5.7066398-2.60824949c.4726358-.21006037.7352112-.70020121.6826961-1.20784709-.052515-.50764587-.4376257-.91026157-.9452716-.99778671-.5076458-.10503019-1.0152917-.15754528-1.5229376-.15754528h-.017505-1.2778673l-2.9758551 5.11146881z" fill="#ff721e"/><path d="m10.8881288 24.2619718c-.3676057-.8227364-.6126761-1.6979879-.7177062-2.6082495l-6.44185117 11.0806841 5.14647889 8.8575453c.24507042.4201207.73521125.6476861 1.22535208.542656l7.527163-12.9362174c-2.9408451-.3851106-5.4790745-2.2406438-6.7394366-4.9364185z" fill="#ff8920"/><path d="m15.3869216 12.6561368 16.1396377-7.36961768 2.9583501-5.11146881-11.8684104.03501005z" fill="#ff8920"/><path d="m10.6605634 17.5925554c.8052314-2.1706238 2.4682092-3.9211268 4.5863179-4.8663985l.1400403-.0525151 7.2295774-12.4460764h-5.5841046c-2.7657948.01750502-5.3215292 1.48792756-6.7044266 3.88611669l-9.31267605 16.24466801c-1.36539235 2.3981892-1.34788732 5.3565392.03501006 7.7372234l2.67826962 4.6213279 6.44185117-11.0806841c-.17505037-1.3653923 0-2.7482897.4901408-4.0436619z" fill="#ffa022"/></g></svg>
          </a>
        </div>
        <div class="sprk-c-Masthead__nav-item sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
            Sign In
          </a>
        </div>

        <nav
          role="navigation"
          class="sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row"
        >
          <ul class="sprk-c-Masthead__site-links sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack__item--center-column">
            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                Item 1
              </a>
            </li>

            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                Item 2
              </a>
            </li>
          </ul>

          <ul class="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column">
            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="tel:555-555-5555">
                (555) 555-5555
              </a>
            </li>

            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                Talk To Us
              </a>
            </li>

            <li>
              <a class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact" href="#nogo">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        class="sprk-c-Masthead__narrow-nav sprk-u-Display--none"
        data-sprk-mobile-nav="mobileNav"
        role="navigation"
        data-id="navigation-narrow-1"
      >
        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li
            class="sprk-c-MastheadAccordion__item"
            data-sprk-toggle="container"
          >
            <a
              aria-controls="details1"
              class="sprk-c-MastheadAccordion__summary"
              data-sprk-toggle="trigger"
              data-sprk-toggle-type="masthead-accordion"
              href="#"
            >
              <span class="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                Item 1
              </span>

              <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-MastheadAccordion__icon" data-sprk-toggle="icon" viewBox="0 0 64 64">
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul
              id="details1"
              class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details"
              data-sprk-toggle="content"
            >
              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#"
                >
                    Item 1
                  </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#"
                >
                    Item 2
                  </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#"
                >
                    Item 3
                  </a>
              </li>
            </ul>
          </li>

          <li class="sprk-c-MastheadAccordion__item sprk-c-MastheadAccordion__item--active">
            <a
              class="sprk-c-MastheadAccordion__summary"
              href="#"
            >
                <span class="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                  Item 2
                </span>
              </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="tel:555-555-5555">
                <span class="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                  <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mrs" viewBox="0 0 64 64">
                    <use xlink:href="#landline" />
                  </svg>
                  (555) 555-5555
                </span>
              </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              class="sprk-c-MastheadAccordion__summary"
              href="#"
            >
                <span class="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                  <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mrs" viewBox="0 0 64 64">
                    <use xlink:href="#call-team-member" />
                  </svg>
                  Talk To Us
                </span>
              </a>
          </li>
          <li class="sprk-c-MastheadAccordion__item sprk-o-Box">
            <a
              class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@s"
              href="#nogo"
            >
                Sign In
              </a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="sprk-u-pam">
      <p class="sprk-u-mbm">
        Molestie convallis gravida neque fermentum tellus vivamus praesent nisl curae; urna maecenas. Feugiat tortor pharetra vivamus scelerisque netus consectetur inceptos diam sociosqu fusce ac sem. Vestibulum congue mauris, facilisi aenean nulla. Erat habitant ipsum penatibus elit vulputate maecenas cras donec nisl leo. Accumsan sit scelerisque penatibus quam nisl. Torquent non nibh sollicitudin non. Sollicitudin rutrum gravida auctor a?
      </p>
      <p class="sprk-u-mbm">
        Egestas magnis nulla arcu maecenas. Praesent conubia lacus viverra semper class facilisi et scelerisque molestie augue. Orci platea eget mauris iaculis. Dignissim mattis nulla laoreet nisl ad dignissim eget non ultrices vestibulum massa amet. Rutrum rutrum rhoncus lectus ac euismod. Ipsum mi nulla tempor non orci mollis sociis. Interdum lacinia cras nibh nullam malesuada ut nisi mauris vitae. Nullam egestas quis ligula. Urna condimentum tortor imperdiet velit lacinia hac fringilla? Penatibus tristique fusce, nec suscipit enim porta? Vel taciti laoreet venenatis felis senectus iaculis ipsum litora gravida massa mauris ullamcorper. Quam sed tellus non posuere neque.
      </p>
      <p class="sprk-u-mbm">
        Fames consectetur neque etiam pharetra pretium. Nullam tempor etiam venenatis suspendisse laoreet dignissim lorem lacinia et nunc, magnis vehicula. Suspendisse; dolor per nostra. Fusce eleifend consequat varius. Dui feugiat adipiscing cras etiam non turpis conubia scelerisque neque sociosqu. Dictum feugiat taciti dis augue ridiculus tincidunt mus purus posuere massa conubia? Quis aliquam auctor quis habitasse mauris nascetur tincidunt facilisi. Congue.
      </p>
      <p class="sprk-u-mbm">
        Sed curabitur litora vestibulum hac aenean interdum elementum nam. Eget duis sapien sociis libero lorem. Fringilla convallis mauris est. Leo habitant erat non vel auctor sit magna dis semper. Ornare bibendum diam mollis parturient egestas elit ullamcorper blandit! Ipsum taciti aenean auctor. Cum tristique luctus tempor tempor lobortis varius nec vel phasellus penatibus. Nostra est pulvinar mollis, sociosqu nascetur. Magna pharetra vehicula phasellus dui felis tempor! Ipsum, ullamcorper purus purus dolor nec a commodo purus habitasse! Curabitur semper vivamus convallis nunc euismod.
      </p>
      <p class="sprk-u-mbm">
        Ad proin hac volutpat. Accumsan accumsan facilisi natoque; mauris curabitur sollicitudin! Pretium cubilia feugiat dapibus bibendum eu luctus? Hac scelerisque etiam dignissim diam augue morbi pellentesque volutpat elementum himenaeos quisque torquent. Nibh ultricies pellentesque maecenas mattis tellus adipiscing tempor, porttitor nisi metus ultrices. Sociis tempus cum placerat leo porta morbi.
      </p>
      <p class="sprk-u-mbm">
        Amet sociis conubia pharetra dolor pharetra, arcu integer! Aliquam eget pellentesque ad etiam vivamus nostra. Nostra iaculis suscipit sed inceptos enim blandit convallis, convallis fringilla. Semper ultricies aliquam congue sed ipsum. Fames amet etiam accumsan urna fermentum, netus habitant ut dui est. Ipsum conubia ullamcorper consectetur ut congue placerat tempus, rutrum ac laoreet pretium aptent. Augue vehicula mollis vitae mi quis turpis commodo venenatis varius. Odio ullamcorper leo scelerisque ipsum fusce luctus per fusce tortor? Ligula sagittis himenaeos faucibus commodo. Montes cum, sociis.
      </p>
      <p class="sprk-u-mbm">
        Cubilia congue curabitur aliquet accumsan turpis nulla. Gravida maecenas, augue diam felis auctor platea. Urna dictumst elementum per lobortis cum euismod ullamcorper. Eget mattis commodo integer volutpat potenti. Mollis nisl urna et, justo facilisis volutpat quis nascetur ipsum? Ac est nec dui torquent vulputate volutpat a eget suscipit dictum. Etiam tempor, curae; proin potenti nunc posuere primis tellus dui eget. Eget lectus mauris mollis imperdiet purus in himenaeos torquent elit curabitur. Cras erat libero eros ultricies placerat rhoncus nec rutrum, at mi. Luctus etiam lobortis taciti scelerisque. Tellus, fringilla nulla odio class phasellus. Aliquet praesent fringilla.
      </p>
      <p class="sprk-u-mbm">
        Sollicitudin mollis consequat ligula et sed curabitur tempor. Nullam lobortis porttitor lectus scelerisque lacinia ridiculus? Elementum penatibus tristique est ornare? Imperdiet sit ultrices vehicula augue adipiscing primis. Duis, quis interdum dignissim consequat class ultrices mi. Molestie suspendisse pulvinar massa nec velit posuere venenatis ad. Amet dui ridiculus volutpat habitasse. Ut, fringilla neque fusce faucibus! Mi velit cras ante, in lobortis sit blandit ligula cras sodales donec suscipit. Nec commodo aptent euismod sodales quis tellus ipsum habitasse! Donec.
      </p>
    </div>
  `;
};

defaultMasthead.story = {
  name: 'Default',
};

export const extended = () => {
  useEffect(() => {
    dropdowns();
    toggle();
    masthead();

    // Our masthead.js applies load event to `window` but doesn't work in storybook iframes
    // This useEffect runs this code when component mounts
    const isMenuVisibleSB = isElementVisible('.sprk-c-Masthead__menu');
    toggleScrollEvent(isMenuVisibleSB);
  }, []);
  return `
    <header class="sprk-c-Masthead sprk-o-Stack" role="banner" idstring="masthead-2" data-sprk-masthead>
      <div class="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
        <div class="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <button class="sprk-c-Menu" type="button" aria-expanded="false" data-sprk-mobile-nav-trigger="mobileNav2">
            <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
            <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Menu__icon" aria-hidden="true" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path class="sprk-c-Menu__line sprk-c-Menu__line--two" d="m8 32h48"></path>
                <path class="sprk-c-Menu__line sprk-c-Menu__line--one" d="m8 18.68h48"></path>
                <path class="sprk-c-Menu__line sprk-c-Menu__line--three" d="m8 45.32h48"></path>
              </g>
            </svg>
          </button>
        </div>

        <div class="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <a href="#">
            <svg class="sprk-c-Masthead__logo" height="49" viewBox="0 0 175 49" width="175" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m42.5897384 43.9901408 9.3126761-16.244668c1.3653924-2.3981891 1.3653924-5.3565392-.0175051-7.7372233l-2.6082494-4.4987927-6.4943662 11.1682092c.3325955 3.6585513-1.680483 7.1245473-5.0239437 8.6474849l-7.2995976 12.5686117 5.4440644-.0175051c2.7482897-.017505 5.3040242-1.4879275 6.6869215-3.8861167z" fill="#ff451a"></path><g fill="#000" transform="translate(57.42 2.32)"><path d="m17.7816098 26.5107847h-14.89678086c-.43762566 0-.85774634-.1750503-1.17283714-.4901408-.31509022-.3150906-.4901406-.7352113-.4901406-1.172837 0-.4376258.17505038-.8577466.4901406-1.1728371.3150908-.3150905.73521148-.4901408 1.17283714-.4901408h14.91428586c2.2056339 0 4.043662-1.732998 4.0961769-3.9211268.017505-1.0853119-.3851107-2.1356137-1.1378271-2.905835-.7527159-.7702213-1.8030182-1.2078471-2.8883299-1.2078471h-10.18792732c-4.04366198 0-7.38712285-3.2209255-7.43963796-7.26458753-.01750504-1.96056333.75271646-3.85110662 2.13561394-5.234004 1.3828969-1.40040241 3.25593556-2.17062374 5.21649854-2.17062374h14.8617709c.9102613 0 1.6629778.73521127 1.6629778 1.66297786 0 .43762576-.1750504.85774648-.4901406 1.17283703-.3150908.31509053-.7352115.49014085-1.1728372.49014085h-14.7917504c-2.20563386 0-4.04366198 1.73299795-4.0961775 3.92112678-.03500996 1.08531183.38511072 2.13561365 1.13782718 2.90583495s1.80301816 1.2078471 2.88832982 1.2078471h10.2929578c1.9605636 0 3.8336017.7877264 5.2164991 2.1706237 1.3828975 1.3828975 2.153119 3.2734407 2.135614 5.2340041-.0525155 4.043662-3.413481 7.2645875-7.457143 7.2645875z"></path><path d="m41.693481.37577465h-12.6911471v24.52454725c-.017505.6126761.2975858 1.1903421.8227364 1.4879276.5251511.2975855 1.1728371.3150905 1.6979883 0 .5251505-.3150906.8402413-.8927565.8227364-1.4879276v-21.18108652h9.4352109c2.2931593.01750504 4.1486924 1.83802818 4.2012073 4.13118717.017505 1.12032191-.4201206 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.925553 1.2953722-3.0808851 1.2953722h-4.9189133c-.9102619.0350101-1.6279678.7702213-1.6279678 1.6804829s.7177059 1.6454728 1.6279678 1.6804829h4.9889332c2.0130785 0 3.9386321-.8052314 5.3565395-2.2406439 1.4179075-1.4354125 2.2056339-3.36096577 2.1881289-5.37404421 0-4.13118717-3.4309859-7.49215294-7.6146883-7.49215294z"></path><path d="m94.0335214 23.7274849-8.052314-8.2448692h.9977867c2.0130785 0 3.9386316-.8052314 5.356539-2.2406439s2.2056339-3.3784708 2.1881289-5.39154925c-.03501-4.13118717-3.4659959-7.4746479-7.6496983-7.4746479h-12.6911471v24.52454725c-.0175049.6126761.2975859 1.1903421.822737 1.4879276.5251506.3150905 1.1728366.3150905 1.6979877 0 .5251511-.3150906.8402414-.8927565.8227364-1.4879276v-21.18108652h9.4352115c2.2931587.01750504 4.1486918 1.83802818 4.2012068 4.13118717.0175049 1.12032191-.4201207 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.9255531 1.2953722-3.0808852 1.2953722h-4.726358c-.7527164-.0875252-1.4879279.3501006-1.7680082 1.0678069-.2800802.7177062-.0350099 1.5229376.5776661 1.9780683l10.6605636 10.9231389c.665191.560161 1.6454727.5251509 2.2581488-.0875252.665191-.630181.7177059-1.6104628.1575454-2.2756539z"></path><path d="m116.019839 23.9200402-9.505231-11.4832998 8.314889-9.2426559c.612676-.68269617.560161-1.75050301-.122535-2.36317907-.682697-.61267605-1.750503-.56016097-2.363179.12253521l-11.745876 13.09376256v-12.0784708c.017505-.61267606-.297585-1.19034206-.8227359-1.48792757-.5251512-.31509054-1.1728372-.31509054-1.6979877 0-.5251512.31509054-.840242.89275654-.822737 1.48792757v22.9315895c-.017505.6126761.2975858 1.1903421.822737 1.4879276.5251505.3150905 1.1728365.3150905 1.6979877 0 .5251509-.3150906.8402409-.8927565.8227359-1.4879276v-5.829175l3.676057-4.0961771 9.190141 11.0981891c.28008.3501007.682696.560161 1.137826.5951711h.157546c.647686 0 1.242857-.3851107 1.505432-.9627767.262576-.595171.175051-1.2778672-.24507-1.7855131z"></path><path d="m70.8043462 24.4626962-9.9778676-22.73903423c-.4026157-.9277666-1.3303819-1.52293762-2.3456737-1.52293762-1.0152917 0-1.9430586.59517102-2.3456743 1.52293762l-9.977867 22.73903423c-.3676057.8402414.017505 1.8030181.8577464 2.1706237.8402413.3676056 1.8030181-.017505 2.1706239-.8402415l9.295171-21.18108643 3.2734406 7.45714283h-3.3084505c-.9627768 0-1.7505033.7877264-1.7505033 1.750503 0 .9627767.7877265 1.750503 1.7505033 1.750503h4.8488933l4.4812877 10.2229376c.3851107.8052314 1.3478869 1.1728371 2.1531183.8052314.840242-.3676056 1.2253521-1.3128772.8752519-2.1356136z"></path><path d="m3.9701406 31.7272837c3.44849092 0 5.35653954 2.1356137 5.35653954 5.6366197s-1.90804862 5.6541248-5.35653954 5.6541248h-3.71106614v-11.2907445zm-2.64325952 10.3279678h2.59074458c2.76579496 0 4.32374282-1.750503 4.32374282-4.6738431 0-2.92334-1.57545284-4.673843-4.32374282-4.673843h-2.59074458z"></path><path d="m17.9566602 43.0180282h-6.8269619v-11.2907445h6.8269619v.9627766h-5.7591552v4.0611671h5.4615694v.9627766h-5.4615694v4.3412475h5.7591552z"></path><path d="m20.3898594 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.153119 0 3.7635818 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603621-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.008652-1.2778672-4.1486924-3.1684105z"></path><path d="m29.2649092 43.0180282v-11.2907445h1.0853122v11.2907445z"></path><path d="m37.2121933 43.2630986c-3.0633802 0-5.0589537-2.328169-5.0589537-5.8816902 0-3.5535211 1.9955735-5.8816901 5.0414487-5.8816901 2.4156942 0 4.2187118 1.3828974 4.6213275 3.5360161h-1.0853116c-.4726357-1.6104628-1.7505033-2.5382294-3.5360159-2.5382294-2.3806842 0-3.9386321 1.9255533-3.9386321 4.8839034s1.5579479 4.9014085 3.9561371 4.9014085c2.2231389 0 3.6410463-1.4004024 3.6410463-3.5360161v-.3851106h-3.4484909v-.9627767h4.5162976v1.2603621c0 2.7832999-1.8555331 4.603823-4.708853 4.603823z"></path><path d="m43.7590744 43.0180282v-11.2907445h1.0503017l6.5818916 9.3826962h.1050299v-9.3826962h1.0503023v11.2907445h-1.0503023l-6.599396-9.3826962h-.1050305v9.3826962z"></path><path d="m59.040966 40.0946881c.1400399 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.1181089-.525151-3.0108652-1.4179075-3.0108652-2.9408451 0-1.8205231 1.5754528-3.1334004 3.8686116-3.1334004 2.1706239 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853117c-.1750504-1.2078471-1.260362-2.0130785-2.8358149-2.0130785-1.6279678 0-2.730785.8927565-2.730785 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279677 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486924-3.1684105z"></path><path d="m70.9618916 43.0180282v-4.8839035l-4.0611675-6.406841h1.2253526l3.3084505 5.3215292h.1050299l3.3084511-5.3215292h1.2253521l-4.043662 6.406841v4.8839035z"></path><path d="m77.8413685 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979882 0 2.9058353-.9452716 2.9058353-2.2056338 0-1.0678068-.7702214-1.750503-2.5207246-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.1531189 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603627-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486925-3.1684105z"></path><path d="m89.7447885 43.0180282v-10.3279679h-3.7810861v-.9627766h8.6474845v.9627766h-3.7985911v10.3279679z"></path><path d="m102.926077 43.0180282h-6.8269622v-11.2907445h6.8269622v.9627766h-5.7416505v4.0611671h5.4615695v.9627766h-5.4615695v4.3412475h5.7416505z"></path><path d="m104.834125 43.0180282v-11.2907445h1.225352l4.166197 9.837827h.10503l4.148693-9.837827h1.242857v11.2907445h-.997787v-9.2076459h-.087526l-3.903621 9.1551308h-.927766l-3.903623-9.1551308h-.070019v9.2076459z"></path></g><path d="m37.7408451 35.3426559c-.0175051.0175051-.0525151.0350101-.0700201.0350101l-16.0696177 7.3521127-3.0283703 5.1989939 11.8684105-.03501z" fill="#ff5c1c"></path><path d="m42.9748491 5.95171025-7.544668 12.97122735c3.9561368.560161 7.002012 3.7810865 7.3346077 7.7722334l6.4943662-11.1682093-5.2340041-8.99758543c-.2100603-.38511066-.612676-.59517106-1.0503018-.57766602z" fill="#ff5c1c"></path><path d="m21.0585513 42.9748491-5.7066398 2.6082495c-.4551308.2100603-.7352113.7002012-.6651912 1.1903421.0700201.4901408.4376258.9102615.9277666.9977867.5076459.1050301 1.0152918.1575452 1.5229376.1575452h.0175051 1.4179074l3.0283703-5.1989939z" fill="#ff721e"></path><path d="m35.4301811 18.9229376 7.544668-12.97122735c-.1400403 0-.2800805.03501008-.4201207.10503017l-3.5885312 1.59295776-11.8859155 5.26901412-6.4243461 11.045674 9.855332-4.3937626c1.5404427-.6826961 3.2559356-.9102615 4.9189135-.6476861z" fill="#ff721e"></path><path d="m17.3649899 17.2249497c-1.8905432.8402415-2.7832997 3.0458753-2.0130784 4.9014085.3851106.9277665 1.1378269 1.6629778 2.0830986 2.0480885.9452716.3676056 1.9955734.3501006 2.9058349-.0525151l.3150906-.1400403 6.4243461-11.063179z" fill="#ff8920"></path><path d="m37.5657948 25.9774648c-.3851107-.9277666-1.137827-1.6629779-2.0830986-2.0480885-.9452717-.3676056-1.9955735-.3501007-2.905835.052515l-.1225352.0525151-6.4243461 11.0631791 9.5227364-4.2187123c1.8905433-.8402414 2.8008048-3.0283702 2.0130785-4.9014084z" fill="#ff5c1c"></path><path d="m17.6275654 29.1983903-7.509658 12.9362174c.0875252-.0175051.1750504-.0350101.2450705-.0700202l3.5885312-1.5929577 12.0959758-5.3565392 6.4243461-11.0631791-10.0653924 4.4812877c-1.5054326.6651911-3.1684104.8927565-4.7788732.6651911z" fill="#ff721e"></path><path d="m31.859155 5.12897384 5.7066398-2.60824949c.4726358-.21006037.7352112-.70020121.6826961-1.20784709-.052515-.50764587-.4376257-.91026157-.9452716-.99778671-.5076458-.10503019-1.0152917-.15754528-1.5229376-.15754528h-.017505-1.2778673l-2.9758551 5.11146881z" fill="#ff721e"></path><path d="m10.8881288 24.2619718c-.3676057-.8227364-.6126761-1.6979879-.7177062-2.6082495l-6.44185117 11.0806841 5.14647889 8.8575453c.24507042.4201207.73521125.6476861 1.22535208.542656l7.527163-12.9362174c-2.9408451-.3851106-5.4790745-2.2406438-6.7394366-4.9364185z" fill="#ff8920"></path><path d="m15.3869216 12.6561368 16.1396377-7.36961768 2.9583501-5.11146881-11.8684104.03501005z" fill="#ff8920"></path><path d="m10.6605634 17.5925554c.8052314-2.1706238 2.4682092-3.9211268 4.5863179-4.8663985l.1400403-.0525151 7.2295774-12.4460764h-5.5841046c-2.7657948.01750502-5.3215292 1.48792756-6.7044266 3.88611669l-9.31267605 16.24466801c-1.36539235 2.3981892-1.34788732 5.3565392.03501006 7.7372234l2.67826962 4.6213279 6.44185117-11.0806841c-.17505037-1.3653923 0-2.7482897.4901408-4.0436619z" fill="#ffa022"></path></g></svg>
          </a>
        </div>
        <div class="sprk-c-Masthead__nav-item sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
          <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
            Sign In
          </a>
        </div>

        <nav class="sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--end-row sprk-o-Stack--split@s" role="navigation">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row">
            <div class="sprk-o-Stack__item sprk-u-Position--relative">
              <a class="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column" href="#nogo" data-sprk-dropdown-trigger="dropdown-selector-wide" aria-haspopup="true" data-id="link-1">
                <span class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs" data-sprk-dropdown-trigger-text-container="" role="combobox">Select One</span>
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-Stack__item" viewBox="0 0 100 100">
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div class="sprk-c-Masthead__selector-dropdown sprk-c-Dropdown sprk-u-Display--none" data-sprk-dropdown="dropdown-selector-wide">
                <div class="sprk-c-Dropdown__header">
                  <a class="sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100" href="#nogo" aria-haspopup="true" data-sprk-selector-dropdown-trigger="dropdown-selector-wide">
                    <span class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">Select One</span>
                    <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-Stack__item" viewBox="0 0 100 100">
                      <use xlink:href="#chevron-up"></use>
                    </svg>
                  </a>
                </div>

                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item">
                    <a class="sprk-c-Dropdown__link sprk-u-ptm" href="#nogo" data-sprk-dropdown-choice="Selection Choice Title 1" role="option">
                      <p class="sprk-b-TypeBodyOne">Selection Choice Title 1</p>
                      <p>Information here</p>
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" data-sprk-dropdown-choice="Selection Choice Title 2">
                    <a class="sprk-c-Dropdown__link" href="#nogo" role="option">
                      <p class="sprk-b-TypeBodyOne">Selection Choice Title 2</p>
                      <p>Information here</p>
                    </a>
                  </li>
                </ul>

                <div class="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
                  <a class="sprk-c-Button sprk-c-Button--compact sprk-c-Button--tertiary" href="#nogo">
                    Placeholder
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul class="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-Stack--center-column">
            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                Talk To Us
              </a>
            </li>

            <li>
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo" data-sprk-dropdown-trigger="dropdown02" aria-haspopup="true" role="combobox">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 100 100">
                  <use xlink:href="#user-account"></use>
                </svg>
                <span class="sprk-u-ScreenReaderText">User Account</span>
              </a>

              <div class="sprk-c-Dropdown sprk-u-Display--none sprk-u-Right--zero sprk-u-mrm" data-sprk-dropdown="dropdown02">
                <div class="sprk-c-Dropdown__header">
                  <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo">
                    My Account
                  </h2>
                </div>

                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Change Username
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Change Password
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sprk-o-Stack__item">
        <nav class="sprk-c-Masthead__big-nav" role="navigation">
          <ul class="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare" data-sprk-navigation="big">
            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item sprk-c-Masthead__big-nav-item--active">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav" href="#nogo" data-sprk-dropdown-trigger="dropdown03" aria-haspopup="true" role="combobox">
                  Navigation Item

                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mls" viewBox="0 0 64 64">
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div class="sprk-c-Dropdown sprk-u-Display--none sprk-u-TextAlign--left" data-sprk-dropdown="dropdown03">
                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Placeholder
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Item
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Sub Menu Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav" href="#nogo-link">
                Your Item
              </a>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav" href="#nogo">
                Nav Item
              </a>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav" href="#nogo" data-sprk-dropdown-trigger="dropdown04" aria-haspopup="true" role="combobox">
                  Navigation Item

                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mls" viewBox="0 0 64 64">
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div class="sprk-c-Dropdown sprk-u-Display--none sprk-u-TextAlign--left" data-sprk-dropdown="dropdown04">
                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Dropdown Item
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Placeholder
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Dropdown Placeholder Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav" href="#nogo">
                Item
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="sprk-c-Masthead__narrow-nav sprk-u-Display--none" data-sprk-mobile-nav="mobileNav2" role="navigation" data-id="navigation-narrow-2">

        <div data-sprk-masthead-mask="">
          <div class="sprk-o-Box">
            <a class="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column" href="#nogo" data-sprk-dropdown-trigger="dropdown-selector" aria-haspopup="true">
              <span class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs" data-sprk-dropdown-trigger-text-container="" role="combobox">Select One</span>
              <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-Stack__item" viewBox="0 0 100 100">
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>
          </div>

          <div class="sprk-c-Masthead__selector-dropdown sprk-c-Dropdown sprk-u-Display--none" data-sprk-dropdown="dropdown-selector">
            <div class="sprk-c-Dropdown__header">
              <a class="sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100" href="#nogo" aria-haspopup="true" data-sprk-selector-dropdown-trigger="dropdown-selector">
                <span class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">Select One</span>
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-Stack__item" viewBox="0 0 100 100">
                  <use xlink:href="#chevron-up"></use>
                </svg>
              </a>
            </div>

            <ul class="sprk-c-Dropdown__links">
              <li class="sprk-c-Dropdown__item">
                <a class="sprk-c-Dropdown__link sprk-u-ptm" href="#nogo" data-sprk-dropdown-choice="Selection Choice Title 1" role="option">
                  <p class="sprk-b-TypeBodyOne">Selection Choice Title 1</p>
                  <p>Information here</p>
                </a>
              </li>

              <li class="sprk-c-Dropdown__item" data-sprk-dropdown-choice="Selection Choice Title 2">
                <a class="sprk-c-Dropdown__link" href="#nogo" role="option">
                  <p class="sprk-b-TypeBodyOne">Selection Choice Title 2</p>
                  <p>Information here</p>
                </a>
              </li>
            </ul>

            <div class="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
              <a class="sprk-c-Button sprk-c-Button--compact sprk-c-Button--tertiary" href="#nogo">
                Placeholder
              </a>
            </div>
          </div>
        </div>

        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li class="sprk-c-MastheadAccordion__item" data-sprk-toggle="container">
            <a aria-controls="details1" class="sprk-c-MastheadAccordion__summary" data-sprk-toggle="trigger" data-sprk-toggle-type="masthead-accordion" href="#" aria-expanded="false">
              <span class="sprk-c-MastheadAccordion__heading">
                Navigation Item
              </span>

              <svg class="sprk-c-Icon sprk-c-Icon--toggle sprk-c-Icon--stroke-current-color sprk-c-MastheadAccordion__icon sprk-u-mls" data-sprk-toggle="icon" viewBox="0 0 64 64">
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul id="details1" class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details" data-sprk-toggle="content" style="display: none;">
              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#">
                  Item 1
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#">
                  Item 2
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#">
                  Item 3
                </a>
              </li>
            </ul>
          </li>

          <li class="sprk-c-MastheadAccordion__item sprk-c-MastheadAccordion__item--active">
            <a class="sprk-c-MastheadAccordion__summary" href="#">
              <span class="sprk-c-MastheadAccordion__heading">
                Your Item
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#">
              <span class="sprk-c-MastheadAccordion__heading">
                Nav Item
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item" data-sprk-toggle="container">
            <a aria-controls="details3" class="sprk-c-MastheadAccordion__summary" data-sprk-toggle="trigger" data-sprk-toggle-type="masthead-accordion" href="#" aria-expanded="false">
              <span class="sprk-c-MastheadAccordion__heading">
                Navigation Item
              </span>

              <svg class="sprk-c-Icon sprk-c-Icon--toggle sprk-c-Icon--stroke-current-color sprk-c-MastheadAccordion__icon" data-sprk-toggle="icon" viewBox="0 0 64 64">
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul id="details3" class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details" data-sprk-toggle="content" style="display: none;">
              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Item 1
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Item 2
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Item 3
                </a>
              </li>
            </ul>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                Item
              </span>
            </a>
          </li>
        </ul>

        <span class="sprk-c-Divider" data-id="divider-1"></span>

        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 64 64">
                  <use xlink:href="#call-team-member"></use>
                </svg>
                Talk To Us
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 64 64">
                  <use xlink:href="#settings"></use>
                </svg>
                Settings
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item" data-sprk-toggle="container">
            <a aria-controls="details4" class="sprk-c-MastheadAccordion__summary" data-sprk-toggle="trigger" data-sprk-toggle-type="accordion" href="#" aria-expanded="false">
              <span class="sprk-c-MastheadAccordion__heading">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 64 64">
                  <use xlink:href="#user"></use>
                </svg>
                My Account
              </span>

              <svg class="sprk-c-Icon sprk-c-Icon--toggle sprk-c-Icon--stroke-current-color sprk-c-MastheadAccordion__icon" data-sprk-toggle="icon" viewBox="0 0 64 64">
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul id="details4" class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details" data-sprk-toggle="content" style="display: none;">
              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Change Username
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Change Password
                </a>
              </li>

              <li>
                <a class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
                  Sign Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <div class="sprk-u-pam">
      <p class="sprk-u-mbm">
        Molestie convallis gravida neque fermentum tellus vivamus praesent nisl curae; urna maecenas. Feugiat tortor pharetra vivamus scelerisque netus consectetur inceptos diam sociosqu fusce ac sem. Vestibulum congue mauris, facilisi aenean nulla. Erat habitant ipsum penatibus elit vulputate maecenas cras donec nisl leo. Accumsan sit scelerisque penatibus quam nisl. Torquent non nibh sollicitudin non. Sollicitudin rutrum gravida auctor a?
      </p>
      <p class="sprk-u-mbm">
        Egestas magnis nulla arcu maecenas. Praesent conubia lacus viverra semper class facilisi et scelerisque molestie augue. Orci platea eget mauris iaculis. Dignissim mattis nulla laoreet nisl ad dignissim eget non ultrices vestibulum massa amet. Rutrum rutrum rhoncus lectus ac euismod. Ipsum mi nulla tempor non orci mollis sociis. Interdum lacinia cras nibh nullam malesuada ut nisi mauris vitae. Nullam egestas quis ligula. Urna condimentum tortor imperdiet velit lacinia hac fringilla? Penatibus tristique fusce, nec suscipit enim porta? Vel taciti laoreet venenatis felis senectus iaculis ipsum litora gravida massa mauris ullamcorper. Quam sed tellus non posuere neque.
      </p>
      <p class="sprk-u-mbm">
        Fames consectetur neque etiam pharetra pretium. Nullam tempor etiam venenatis suspendisse laoreet dignissim lorem lacinia et nunc, magnis vehicula. Suspendisse; dolor per nostra. Fusce eleifend consequat varius. Dui feugiat adipiscing cras etiam non turpis conubia scelerisque neque sociosqu. Dictum feugiat taciti dis augue ridiculus tincidunt mus purus posuere massa conubia? Quis aliquam auctor quis habitasse mauris nascetur tincidunt facilisi. Congue.
      </p>
      <p class="sprk-u-mbm">
        Sed curabitur litora vestibulum hac aenean interdum elementum nam. Eget duis sapien sociis libero lorem. Fringilla convallis mauris est. Leo habitant erat non vel auctor sit magna dis semper. Ornare bibendum diam mollis parturient egestas elit ullamcorper blandit! Ipsum taciti aenean auctor. Cum tristique luctus tempor tempor lobortis varius nec vel phasellus penatibus. Nostra est pulvinar mollis, sociosqu nascetur. Magna pharetra vehicula phasellus dui felis tempor! Ipsum, ullamcorper purus purus dolor nec a commodo purus habitasse! Curabitur semper vivamus convallis nunc euismod.
      </p>
      <p class="sprk-u-mbm">
        Ad proin hac volutpat. Accumsan accumsan facilisi natoque; mauris curabitur sollicitudin! Pretium cubilia feugiat dapibus bibendum eu luctus? Hac scelerisque etiam dignissim diam augue morbi pellentesque volutpat elementum himenaeos quisque torquent. Nibh ultricies pellentesque maecenas mattis tellus adipiscing tempor, porttitor nisi metus ultrices. Sociis tempus cum placerat leo porta morbi.
      </p>
      <p class="sprk-u-mbm">
        Amet sociis conubia pharetra dolor pharetra, arcu integer! Aliquam eget pellentesque ad etiam vivamus nostra. Nostra iaculis suscipit sed inceptos enim blandit convallis, convallis fringilla. Semper ultricies aliquam congue sed ipsum. Fames amet etiam accumsan urna fermentum, netus habitant ut dui est. Ipsum conubia ullamcorper consectetur ut congue placerat tempus, rutrum ac laoreet pretium aptent. Augue vehicula mollis vitae mi quis turpis commodo venenatis varius. Odio ullamcorper leo scelerisque ipsum fusce luctus per fusce tortor? Ligula sagittis himenaeos faucibus commodo. Montes cum, sociis.
      </p>
      <p class="sprk-u-mbm">
        Cubilia congue curabitur aliquet accumsan turpis nulla. Gravida maecenas, augue diam felis auctor platea. Urna dictumst elementum per lobortis cum euismod ullamcorper. Eget mattis commodo integer volutpat potenti. Mollis nisl urna et, justo facilisis volutpat quis nascetur ipsum? Ac est nec dui torquent vulputate volutpat a eget suscipit dictum. Etiam tempor, curae; proin potenti nunc posuere primis tellus dui eget. Eget lectus mauris mollis imperdiet purus in himenaeos torquent elit curabitur. Cras erat libero eros ultricies placerat rhoncus nec rutrum, at mi. Luctus etiam lobortis taciti scelerisque. Tellus, fringilla nulla odio class phasellus. Aliquet praesent fringilla.
      </p>
      <p class="sprk-u-mbm">
        Sollicitudin mollis consequat ligula et sed curabitur tempor. Nullam lobortis porttitor lectus scelerisque lacinia ridiculus? Elementum penatibus tristique est ornare? Imperdiet sit ultrices vehicula augue adipiscing primis. Duis, quis interdum dignissim consequat class ultrices mi. Molestie suspendisse pulvinar massa nec velit posuere venenatis ad. Amet dui ridiculus volutpat habitasse. Ut, fringilla neque fusce faucibus! Mi velit cras ante, in lobortis sit blandit ligula cras sodales donec suscipit. Nec commodo aptent euismod sodales quis tellus ipsum habitasse! Donec.
      </p>
    </div>
  `;
};
