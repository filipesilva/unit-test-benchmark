import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4910Component } from './my-comp-4910.component';

describe('MyComp4910Component', () => {
  let component: MyComp4910Component;
  let fixture: ComponentFixture<MyComp4910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
