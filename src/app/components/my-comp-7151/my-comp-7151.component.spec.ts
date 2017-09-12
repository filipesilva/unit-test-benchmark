import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7151Component } from './my-comp-7151.component';

describe('MyComp7151Component', () => {
  let component: MyComp7151Component;
  let fixture: ComponentFixture<MyComp7151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
