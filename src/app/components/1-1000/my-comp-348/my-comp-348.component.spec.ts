import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp348Component } from './my-comp-348.component';

describe('MyComp348Component', () => {
  let component: MyComp348Component;
  let fixture: ComponentFixture<MyComp348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
