import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp586Component } from './my-comp-586.component';

describe('MyComp586Component', () => {
  let component: MyComp586Component;
  let fixture: ComponentFixture<MyComp586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
