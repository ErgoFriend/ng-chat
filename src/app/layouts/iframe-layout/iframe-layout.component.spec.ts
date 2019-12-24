import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { iFrameLayoutComponent } from "./iframe-layout.component";

describe("AdminLayoutComponent", () => {
  let component: iFrameLayoutComponent;
  let fixture: ComponentFixture<iFrameLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [iFrameLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(iFrameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
