import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1418Component } from './my-comp-1418.component';

describe('MyComp1418Component', () => {
  let component: MyComp1418Component;
  let fixture: ComponentFixture<MyComp1418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
