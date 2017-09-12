import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7775Component } from './my-comp-7775.component';

describe('MyComp7775Component', () => {
  let component: MyComp7775Component;
  let fixture: ComponentFixture<MyComp7775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
