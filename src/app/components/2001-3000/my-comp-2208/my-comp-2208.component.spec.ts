import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2208Component } from './my-comp-2208.component';

describe('MyComp2208Component', () => {
  let component: MyComp2208Component;
  let fixture: ComponentFixture<MyComp2208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
