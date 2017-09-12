import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1548Component } from './my-comp-1548.component';

describe('MyComp1548Component', () => {
  let component: MyComp1548Component;
  let fixture: ComponentFixture<MyComp1548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
