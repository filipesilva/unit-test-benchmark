import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4351Component } from './my-comp-4351.component';

describe('MyComp4351Component', () => {
  let component: MyComp4351Component;
  let fixture: ComponentFixture<MyComp4351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
