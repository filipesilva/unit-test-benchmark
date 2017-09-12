import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4592Component } from './my-comp-4592.component';

describe('MyComp4592Component', () => {
  let component: MyComp4592Component;
  let fixture: ComponentFixture<MyComp4592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
