import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4097Component } from './my-comp-4097.component';

describe('MyComp4097Component', () => {
  let component: MyComp4097Component;
  let fixture: ComponentFixture<MyComp4097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
