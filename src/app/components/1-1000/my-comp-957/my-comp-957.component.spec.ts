import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp957Component } from './my-comp-957.component';

describe('MyComp957Component', () => {
  let component: MyComp957Component;
  let fixture: ComponentFixture<MyComp957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
