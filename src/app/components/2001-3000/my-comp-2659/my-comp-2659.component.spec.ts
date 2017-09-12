import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2659Component } from './my-comp-2659.component';

describe('MyComp2659Component', () => {
  let component: MyComp2659Component;
  let fixture: ComponentFixture<MyComp2659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
