import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2573Component } from './my-comp-2573.component';

describe('MyComp2573Component', () => {
  let component: MyComp2573Component;
  let fixture: ComponentFixture<MyComp2573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
