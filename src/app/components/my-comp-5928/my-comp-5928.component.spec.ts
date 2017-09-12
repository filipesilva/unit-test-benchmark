import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5928Component } from './my-comp-5928.component';

describe('MyComp5928Component', () => {
  let component: MyComp5928Component;
  let fixture: ComponentFixture<MyComp5928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
