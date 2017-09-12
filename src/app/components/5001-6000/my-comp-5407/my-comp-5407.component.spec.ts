import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5407Component } from './my-comp-5407.component';

describe('MyComp5407Component', () => {
  let component: MyComp5407Component;
  let fixture: ComponentFixture<MyComp5407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
