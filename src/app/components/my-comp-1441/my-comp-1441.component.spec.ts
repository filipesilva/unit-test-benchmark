import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1441Component } from './my-comp-1441.component';

describe('MyComp1441Component', () => {
  let component: MyComp1441Component;
  let fixture: ComponentFixture<MyComp1441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
