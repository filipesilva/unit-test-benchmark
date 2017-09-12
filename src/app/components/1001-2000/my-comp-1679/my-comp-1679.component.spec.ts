import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1679Component } from './my-comp-1679.component';

describe('MyComp1679Component', () => {
  let component: MyComp1679Component;
  let fixture: ComponentFixture<MyComp1679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
