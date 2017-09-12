import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2184Component } from './my-comp-2184.component';

describe('MyComp2184Component', () => {
  let component: MyComp2184Component;
  let fixture: ComponentFixture<MyComp2184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
