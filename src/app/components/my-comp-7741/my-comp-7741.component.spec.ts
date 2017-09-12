import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7741Component } from './my-comp-7741.component';

describe('MyComp7741Component', () => {
  let component: MyComp7741Component;
  let fixture: ComponentFixture<MyComp7741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
