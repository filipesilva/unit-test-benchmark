import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5914Component } from './my-comp-5914.component';

describe('MyComp5914Component', () => {
  let component: MyComp5914Component;
  let fixture: ComponentFixture<MyComp5914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
