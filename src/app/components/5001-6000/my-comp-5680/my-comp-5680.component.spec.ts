import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5680Component } from './my-comp-5680.component';

describe('MyComp5680Component', () => {
  let component: MyComp5680Component;
  let fixture: ComponentFixture<MyComp5680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
