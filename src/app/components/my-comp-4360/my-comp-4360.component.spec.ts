import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4360Component } from './my-comp-4360.component';

describe('MyComp4360Component', () => {
  let component: MyComp4360Component;
  let fixture: ComponentFixture<MyComp4360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
