import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4029Component } from './my-comp-4029.component';

describe('MyComp4029Component', () => {
  let component: MyComp4029Component;
  let fixture: ComponentFixture<MyComp4029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
