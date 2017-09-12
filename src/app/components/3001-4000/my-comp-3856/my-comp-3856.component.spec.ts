import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3856Component } from './my-comp-3856.component';

describe('MyComp3856Component', () => {
  let component: MyComp3856Component;
  let fixture: ComponentFixture<MyComp3856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
