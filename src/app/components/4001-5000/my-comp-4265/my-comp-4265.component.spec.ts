import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4265Component } from './my-comp-4265.component';

describe('MyComp4265Component', () => {
  let component: MyComp4265Component;
  let fixture: ComponentFixture<MyComp4265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
