import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3295Component } from './my-comp-3295.component';

describe('MyComp3295Component', () => {
  let component: MyComp3295Component;
  let fixture: ComponentFixture<MyComp3295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
