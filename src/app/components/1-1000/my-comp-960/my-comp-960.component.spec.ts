import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp960Component } from './my-comp-960.component';

describe('MyComp960Component', () => {
  let component: MyComp960Component;
  let fixture: ComponentFixture<MyComp960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
