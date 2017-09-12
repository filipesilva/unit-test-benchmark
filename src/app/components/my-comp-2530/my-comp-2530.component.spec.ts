import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2530Component } from './my-comp-2530.component';

describe('MyComp2530Component', () => {
  let component: MyComp2530Component;
  let fixture: ComponentFixture<MyComp2530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
