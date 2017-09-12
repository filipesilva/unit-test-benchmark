import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp265Component } from './my-comp-265.component';

describe('MyComp265Component', () => {
  let component: MyComp265Component;
  let fixture: ComponentFixture<MyComp265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
