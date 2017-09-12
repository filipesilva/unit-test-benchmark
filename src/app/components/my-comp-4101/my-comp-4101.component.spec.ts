import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4101Component } from './my-comp-4101.component';

describe('MyComp4101Component', () => {
  let component: MyComp4101Component;
  let fixture: ComponentFixture<MyComp4101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
