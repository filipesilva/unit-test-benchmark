import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5050Component } from './my-comp-5050.component';

describe('MyComp5050Component', () => {
  let component: MyComp5050Component;
  let fixture: ComponentFixture<MyComp5050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
