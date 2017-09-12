import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp928Component } from './my-comp-928.component';

describe('MyComp928Component', () => {
  let component: MyComp928Component;
  let fixture: ComponentFixture<MyComp928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
