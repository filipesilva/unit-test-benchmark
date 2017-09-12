import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp467Component } from './my-comp-467.component';

describe('MyComp467Component', () => {
  let component: MyComp467Component;
  let fixture: ComponentFixture<MyComp467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
