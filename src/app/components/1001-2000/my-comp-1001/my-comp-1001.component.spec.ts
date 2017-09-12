import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1001Component } from './my-comp-1001.component';

describe('MyComp1001Component', () => {
  let component: MyComp1001Component;
  let fixture: ComponentFixture<MyComp1001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
