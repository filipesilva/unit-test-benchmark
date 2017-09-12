import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7604Component } from './my-comp-7604.component';

describe('MyComp7604Component', () => {
  let component: MyComp7604Component;
  let fixture: ComponentFixture<MyComp7604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
