import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5513Component } from './my-comp-5513.component';

describe('MyComp5513Component', () => {
  let component: MyComp5513Component;
  let fixture: ComponentFixture<MyComp5513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
