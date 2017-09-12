import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4970Component } from './my-comp-4970.component';

describe('MyComp4970Component', () => {
  let component: MyComp4970Component;
  let fixture: ComponentFixture<MyComp4970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
