import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7259Component } from './my-comp-7259.component';

describe('MyComp7259Component', () => {
  let component: MyComp7259Component;
  let fixture: ComponentFixture<MyComp7259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
