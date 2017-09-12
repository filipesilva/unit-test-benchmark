import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7247Component } from './my-comp-7247.component';

describe('MyComp7247Component', () => {
  let component: MyComp7247Component;
  let fixture: ComponentFixture<MyComp7247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
