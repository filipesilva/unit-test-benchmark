import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4766Component } from './my-comp-4766.component';

describe('MyComp4766Component', () => {
  let component: MyComp4766Component;
  let fixture: ComponentFixture<MyComp4766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
