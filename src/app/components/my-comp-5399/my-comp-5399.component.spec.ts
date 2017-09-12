import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5399Component } from './my-comp-5399.component';

describe('MyComp5399Component', () => {
  let component: MyComp5399Component;
  let fixture: ComponentFixture<MyComp5399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
