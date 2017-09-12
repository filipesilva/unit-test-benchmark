import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4216Component } from './my-comp-4216.component';

describe('MyComp4216Component', () => {
  let component: MyComp4216Component;
  let fixture: ComponentFixture<MyComp4216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
