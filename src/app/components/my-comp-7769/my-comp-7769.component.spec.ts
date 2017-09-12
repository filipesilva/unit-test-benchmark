import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7769Component } from './my-comp-7769.component';

describe('MyComp7769Component', () => {
  let component: MyComp7769Component;
  let fixture: ComponentFixture<MyComp7769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
