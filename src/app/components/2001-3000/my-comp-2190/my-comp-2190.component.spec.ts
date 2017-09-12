import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2190Component } from './my-comp-2190.component';

describe('MyComp2190Component', () => {
  let component: MyComp2190Component;
  let fixture: ComponentFixture<MyComp2190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
