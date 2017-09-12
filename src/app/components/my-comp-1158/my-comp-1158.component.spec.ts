import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1158Component } from './my-comp-1158.component';

describe('MyComp1158Component', () => {
  let component: MyComp1158Component;
  let fixture: ComponentFixture<MyComp1158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
