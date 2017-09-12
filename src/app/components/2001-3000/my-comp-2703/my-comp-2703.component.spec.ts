import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2703Component } from './my-comp-2703.component';

describe('MyComp2703Component', () => {
  let component: MyComp2703Component;
  let fixture: ComponentFixture<MyComp2703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
