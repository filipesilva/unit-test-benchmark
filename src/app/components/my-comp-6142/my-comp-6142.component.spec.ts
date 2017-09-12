import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6142Component } from './my-comp-6142.component';

describe('MyComp6142Component', () => {
  let component: MyComp6142Component;
  let fixture: ComponentFixture<MyComp6142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
