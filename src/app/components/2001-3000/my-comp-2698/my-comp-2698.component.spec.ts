import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2698Component } from './my-comp-2698.component';

describe('MyComp2698Component', () => {
  let component: MyComp2698Component;
  let fixture: ComponentFixture<MyComp2698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
