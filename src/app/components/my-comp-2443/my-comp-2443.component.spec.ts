import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2443Component } from './my-comp-2443.component';

describe('MyComp2443Component', () => {
  let component: MyComp2443Component;
  let fixture: ComponentFixture<MyComp2443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
