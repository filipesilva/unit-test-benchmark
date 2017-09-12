import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp939Component } from './my-comp-939.component';

describe('MyComp939Component', () => {
  let component: MyComp939Component;
  let fixture: ComponentFixture<MyComp939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
