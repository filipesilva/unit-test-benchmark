import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4899Component } from './my-comp-4899.component';

describe('MyComp4899Component', () => {
  let component: MyComp4899Component;
  let fixture: ComponentFixture<MyComp4899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
