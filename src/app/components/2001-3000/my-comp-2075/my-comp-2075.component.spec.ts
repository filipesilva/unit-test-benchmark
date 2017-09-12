import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2075Component } from './my-comp-2075.component';

describe('MyComp2075Component', () => {
  let component: MyComp2075Component;
  let fixture: ComponentFixture<MyComp2075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
