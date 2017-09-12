import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5232Component } from './my-comp-5232.component';

describe('MyComp5232Component', () => {
  let component: MyComp5232Component;
  let fixture: ComponentFixture<MyComp5232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
