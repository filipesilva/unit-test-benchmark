import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5304Component } from './my-comp-5304.component';

describe('MyComp5304Component', () => {
  let component: MyComp5304Component;
  let fixture: ComponentFixture<MyComp5304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
