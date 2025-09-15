<template>
  <div class="page">

    <div class="TermsOfService">

      <!-- Start of TOS -->
     <div class="title1">SharkFilm Studios - Commission Terms of Service (ToS)</div>
     <p><em>Last Updated: September 8th, 2025</em></p>
     <br></br>
     <p>By commissioning me, you acknowledge that you have read, understood, and agreed to the following Terms of Service. These terms exist to ensure clarity, fairness, and a smooth working relationship between us.</p>
     <div class="header1">General Scope</div>
     <p class="subtitle">I create anime-style artworks, ranging from simple illustrations to complex scenes, with options for NSFW commissions under specific limits (see Section 2). Animation work falls under a separate contract and is not covered by these terms. I consider myself a production-ready anime artist — my work is clean, efficient, and built on strong fundamentals, streamlined for the needs of animation.</p>
      
    <div class="header1">Subject Matter Guidelines</div>
      <p>I Will Draw:</p>
      <div class="TOSListContainer">
        <li>SFW &amp; NSFW anime-style illustrations.</li>
        <li>Fantasy or sci-fi themes.</li>
        <li>Attractive/appealing strong characters. </li>
        <li>Monster girls.</li>
        <li>Size difference in characters (within reasonable limits).</li>
        <li>Horror-themed material (without sexualized non-consent).</li>
      </div>
    <div class="TOSListContainer">
      <p>I Will NOT Draw:</p>
        <li>Full BDSM Scenarios or extreme kinks</li>
        <li>Fetishes involving non-consent, implied non-consent, or "questionable" consent</li>
        <li>Age play, underage characters, or any sexualized depictions involving minors.</li>
        <li>Extreme fetish content such as vore, inflation, egg-laying, scat, watersports, gore sexualization, or any similar themes.</li>
        <li>Mecha/armor/complex architecture without surcharge agreement (see Section 3).</li>
    </div>

    <div class="header1">Complexity &amp; Surcharges</div>
    <p>Additional charges apply for:</p>
    <div class="TOSListContainer">
      <li>Highly complex designs, mecha, armor, or heavy environmental/architectural elements.</li>
      <li>Detailed monsters (non-sexual).</li>
      <li>Major revisions within a stage (sketch, flats, colors, shading).</li>
      <li>Moving an artwork up or down a complexity tier after work has started.</li>
      <li>Rush deadlines (see Section 5).</li>
      <p class="note">Exact surcharges will be discussed and agreed to in writing before work begins.</p>
    </div>

    <div class="header1">Proccess &amp; Approval</div>
    <p>The creation process includes four main steps:</p>
    <div class="TOSListContainer">
      <li>Sketch</li>
      <li>Flats</li>
      <li>Colors</li>
      <li>Shading and Final Touches</li>
    </div>
    <p>You will be given time to review each section for feedback and minor adjustments</p><br></br>
    <p>Two minor revisions are included at each stage. Additional adjustmentsbeyond this will be billed under Section 3</p><br></br>

    <div class="header1">Turnaround Times</div>
    <p>Complex Drawings have a minimum turnaround of two weeks. Rush jobs (if agreed upon) have a minimum of one week, with an agreed about surcharge prior to start of the commissions. Turnaround starts after payment is recieved in full and all reference materials are provided</p>

    <div class="header1">Payment</div>
    <p>Payment must be made upfront prior to the start of commission, via Cashapp or Square. Pricing is variable - see my curent rates <RouterLink :to="{ name: 'Commissions' }">here</RouterLink>.</p>
    <p>Work does not begin until full payment is recieved unless otherwise arranged with the commissionor prior. For longer term projects, partial or milestone-based payments may be arranged. Unless otherwise agreed, work will not progress beyond the current paid stage</p>

    <div class="header1">Refund Policy</div>
      <div class="TOSListContainer">
        <li><strong>Before work begins:</strong> Full refund if I have not yet started your commission.</li>
      <li><strong>Early stage cancellation:</strong> If you cancel while the piece is still in sketch or rough draft stage, you’ll receive a partial refund proportional to the work completed.</li>
      <li><strong>Delays:</strong> For standard commissions (1-3 characters, no extreme detail), if completion takes longer than one month without prior agreement on an extended timeline, you are entitled to a full refund.</li>
      <li><strong>Complex works:</strong> Large or highly detailed pieces (e.g. 4+ characters, complex architecture, intricate designs) may reasonably take longer than one month; specific timelines will be agreed upon in writing before work begins.</li>
      <li><strong>Rush orders:</strong> If I do not complete a rush order within the agreed timeframe, you will receive a full refund.</li>
      <li><strong>Artist cancellation:</strong> If I am unable to complete your project for any reason, you will receive a full refund regardless of progress.</li>
      </div>

    <div class="header1"> Ownership &amp; Usage</div>
    <div class="TOSListContainer">
      <li><strong>Delivery &amp; File Storage:</strong> Completed works are delivered as high-resolution PNG (and/or requested format if agreed upon in advance). PSD, or layered source files are available for an additional fee. Source files are stored for 90 days after delivery; after that SharkFilm Studios may delete or archive them without guarantee of recovery.</li>
      <li><strong>Copyright:</strong> I retain full copyright and reproduction rights to all commissioned artwork unless otherwise agreed in writing.</li>
      <li><strong>Client rights:</strong> You may not claim the artwork as your own creation or resell it. Physical products for personal use (e.g. T-shirts, mousepads, body pillows) are permitted.</li>
      <li><strong>Personal use:</strong> Avatars, profile pictures, printing for yourself, and other non-commercial uses are always allowed.</li>
      <li><strong>Commercial use:</strong> Any commercial application (including merchandise, advertising, or monetized content) requires a separate licensing agreement and may involve an additional fee.</li>
      <li><strong>Artist rights:</strong> I reserve the right to share or display completed artwork on my own platforms (e.g. portfolio, social media), unless a privacy add-on fee is arranged in advance.</li>
      <li>In the event of team or collaborative production, SharkFilm Studios and its contracted artists retain the right to display completed works in individual and studio portfolios unless otherwise agreed to in writing.</li>
    </div>
    
    <div class="header1">Jurisdiction &amp; Governing Law</div>
    <p>These terms are governed by the laws of Oregon, United States, and any disputes will be resolved in the courts located in Oregon, United States.</p>
    
    <div class="header1">Agreement</div>
    <p>By commissioning me, you confirm that:</p>
    <div class="TOSListContainer">
      <li>You are 18 years or older.</li>
      <li>You have provided accurate references for your request.</li>
      <li>You accept that these terms may be updated periodically, and the version agreed upon at the time of payment will apply to your commission.</li>
      <li>You confirm you have the legal right to use and request all characters, designs, references, and materials provided to me. SharkFilm Studios assumes no responsibility for legal disputes arising from materials you submit.</li>
    </div>
    <!-- End of TOS -->

    </div>
      
  </div>
</template>

<script setup lang="ts">
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TermsOfService"
});
</script>