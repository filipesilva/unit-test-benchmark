import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8422Component } from './my-comp-8422.component';

describe('MyComp8422Component', () => {
  let component: MyComp8422Component;
  let fixture: ComponentFixture<MyComp8422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
