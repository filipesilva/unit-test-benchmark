import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7301Component } from './my-comp-7301.component';

describe('MyComp7301Component', () => {
  let component: MyComp7301Component;
  let fixture: ComponentFixture<MyComp7301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
