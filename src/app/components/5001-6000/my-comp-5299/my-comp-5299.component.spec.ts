import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5299Component } from './my-comp-5299.component';

describe('MyComp5299Component', () => {
  let component: MyComp5299Component;
  let fixture: ComponentFixture<MyComp5299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
