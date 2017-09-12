import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7565Component } from './my-comp-7565.component';

describe('MyComp7565Component', () => {
  let component: MyComp7565Component;
  let fixture: ComponentFixture<MyComp7565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
