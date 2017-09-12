import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1264Component } from './my-comp-1264.component';

describe('MyComp1264Component', () => {
  let component: MyComp1264Component;
  let fixture: ComponentFixture<MyComp1264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
