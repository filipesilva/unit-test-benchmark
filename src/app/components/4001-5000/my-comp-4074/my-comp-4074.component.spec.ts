import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4074Component } from './my-comp-4074.component';

describe('MyComp4074Component', () => {
  let component: MyComp4074Component;
  let fixture: ComponentFixture<MyComp4074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
