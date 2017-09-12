import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8146Component } from './my-comp-8146.component';

describe('MyComp8146Component', () => {
  let component: MyComp8146Component;
  let fixture: ComponentFixture<MyComp8146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
