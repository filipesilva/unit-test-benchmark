import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4682Component } from './my-comp-4682.component';

describe('MyComp4682Component', () => {
  let component: MyComp4682Component;
  let fixture: ComponentFixture<MyComp4682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
