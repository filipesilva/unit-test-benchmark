import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2523Component } from './my-comp-2523.component';

describe('MyComp2523Component', () => {
  let component: MyComp2523Component;
  let fixture: ComponentFixture<MyComp2523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
