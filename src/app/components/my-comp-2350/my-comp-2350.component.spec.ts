import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2350Component } from './my-comp-2350.component';

describe('MyComp2350Component', () => {
  let component: MyComp2350Component;
  let fixture: ComponentFixture<MyComp2350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
