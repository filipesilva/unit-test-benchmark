import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7454Component } from './my-comp-7454.component';

describe('MyComp7454Component', () => {
  let component: MyComp7454Component;
  let fixture: ComponentFixture<MyComp7454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
