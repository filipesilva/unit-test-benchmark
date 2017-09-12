import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7876Component } from './my-comp-7876.component';

describe('MyComp7876Component', () => {
  let component: MyComp7876Component;
  let fixture: ComponentFixture<MyComp7876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
