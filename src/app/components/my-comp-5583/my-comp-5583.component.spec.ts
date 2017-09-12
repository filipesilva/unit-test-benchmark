import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5583Component } from './my-comp-5583.component';

describe('MyComp5583Component', () => {
  let component: MyComp5583Component;
  let fixture: ComponentFixture<MyComp5583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
