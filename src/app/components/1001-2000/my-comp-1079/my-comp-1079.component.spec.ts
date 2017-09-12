import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1079Component } from './my-comp-1079.component';

describe('MyComp1079Component', () => {
  let component: MyComp1079Component;
  let fixture: ComponentFixture<MyComp1079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
