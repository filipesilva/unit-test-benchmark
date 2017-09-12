import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4603Component } from './my-comp-4603.component';

describe('MyComp4603Component', () => {
  let component: MyComp4603Component;
  let fixture: ComponentFixture<MyComp4603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
