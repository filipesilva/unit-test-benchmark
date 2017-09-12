import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2599Component } from './my-comp-2599.component';

describe('MyComp2599Component', () => {
  let component: MyComp2599Component;
  let fixture: ComponentFixture<MyComp2599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
