import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2513Component } from './my-comp-2513.component';

describe('MyComp2513Component', () => {
  let component: MyComp2513Component;
  let fixture: ComponentFixture<MyComp2513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
