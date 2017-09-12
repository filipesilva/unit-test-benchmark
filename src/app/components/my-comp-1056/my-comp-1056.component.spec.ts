import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1056Component } from './my-comp-1056.component';

describe('MyComp1056Component', () => {
  let component: MyComp1056Component;
  let fixture: ComponentFixture<MyComp1056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
