import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp305Component } from './my-comp-305.component';

describe('MyComp305Component', () => {
  let component: MyComp305Component;
  let fixture: ComponentFixture<MyComp305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
