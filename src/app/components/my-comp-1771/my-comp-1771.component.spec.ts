import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1771Component } from './my-comp-1771.component';

describe('MyComp1771Component', () => {
  let component: MyComp1771Component;
  let fixture: ComponentFixture<MyComp1771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
