import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1131Component } from './my-comp-1131.component';

describe('MyComp1131Component', () => {
  let component: MyComp1131Component;
  let fixture: ComponentFixture<MyComp1131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
