import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7105Component } from './my-comp-7105.component';

describe('MyComp7105Component', () => {
  let component: MyComp7105Component;
  let fixture: ComponentFixture<MyComp7105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
