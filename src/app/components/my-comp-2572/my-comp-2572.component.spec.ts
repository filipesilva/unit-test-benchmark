import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2572Component } from './my-comp-2572.component';

describe('MyComp2572Component', () => {
  let component: MyComp2572Component;
  let fixture: ComponentFixture<MyComp2572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
