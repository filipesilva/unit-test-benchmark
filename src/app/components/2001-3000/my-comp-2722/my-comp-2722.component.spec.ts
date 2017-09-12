import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2722Component } from './my-comp-2722.component';

describe('MyComp2722Component', () => {
  let component: MyComp2722Component;
  let fixture: ComponentFixture<MyComp2722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
