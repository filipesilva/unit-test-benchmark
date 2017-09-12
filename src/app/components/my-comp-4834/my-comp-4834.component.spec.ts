import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4834Component } from './my-comp-4834.component';

describe('MyComp4834Component', () => {
  let component: MyComp4834Component;
  let fixture: ComponentFixture<MyComp4834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
