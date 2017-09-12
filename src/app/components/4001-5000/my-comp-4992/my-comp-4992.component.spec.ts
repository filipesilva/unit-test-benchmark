import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4992Component } from './my-comp-4992.component';

describe('MyComp4992Component', () => {
  let component: MyComp4992Component;
  let fixture: ComponentFixture<MyComp4992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
