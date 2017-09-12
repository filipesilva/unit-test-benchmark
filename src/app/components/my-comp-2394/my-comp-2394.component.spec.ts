import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2394Component } from './my-comp-2394.component';

describe('MyComp2394Component', () => {
  let component: MyComp2394Component;
  let fixture: ComponentFixture<MyComp2394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
