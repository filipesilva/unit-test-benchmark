import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1146Component } from './my-comp-1146.component';

describe('MyComp1146Component', () => {
  let component: MyComp1146Component;
  let fixture: ComponentFixture<MyComp1146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
