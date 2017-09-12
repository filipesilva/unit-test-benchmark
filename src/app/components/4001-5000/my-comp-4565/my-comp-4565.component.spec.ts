import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4565Component } from './my-comp-4565.component';

describe('MyComp4565Component', () => {
  let component: MyComp4565Component;
  let fixture: ComponentFixture<MyComp4565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
