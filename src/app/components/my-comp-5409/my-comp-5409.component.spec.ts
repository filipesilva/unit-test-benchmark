import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5409Component } from './my-comp-5409.component';

describe('MyComp5409Component', () => {
  let component: MyComp5409Component;
  let fixture: ComponentFixture<MyComp5409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
