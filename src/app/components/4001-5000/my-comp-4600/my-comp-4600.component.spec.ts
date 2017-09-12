import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4600Component } from './my-comp-4600.component';

describe('MyComp4600Component', () => {
  let component: MyComp4600Component;
  let fixture: ComponentFixture<MyComp4600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
