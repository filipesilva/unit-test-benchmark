import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2561Component } from './my-comp-2561.component';

describe('MyComp2561Component', () => {
  let component: MyComp2561Component;
  let fixture: ComponentFixture<MyComp2561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
