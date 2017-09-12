import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp863Component } from './my-comp-863.component';

describe('MyComp863Component', () => {
  let component: MyComp863Component;
  let fixture: ComponentFixture<MyComp863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
