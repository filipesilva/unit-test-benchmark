import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7255Component } from './my-comp-7255.component';

describe('MyComp7255Component', () => {
  let component: MyComp7255Component;
  let fixture: ComponentFixture<MyComp7255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
