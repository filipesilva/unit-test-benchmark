import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1136Component } from './my-comp-1136.component';

describe('MyComp1136Component', () => {
  let component: MyComp1136Component;
  let fixture: ComponentFixture<MyComp1136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
