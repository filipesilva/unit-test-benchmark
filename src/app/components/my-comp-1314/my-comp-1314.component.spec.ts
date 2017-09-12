import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1314Component } from './my-comp-1314.component';

describe('MyComp1314Component', () => {
  let component: MyComp1314Component;
  let fixture: ComponentFixture<MyComp1314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
