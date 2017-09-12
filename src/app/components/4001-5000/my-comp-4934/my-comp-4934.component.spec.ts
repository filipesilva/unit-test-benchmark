import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4934Component } from './my-comp-4934.component';

describe('MyComp4934Component', () => {
  let component: MyComp4934Component;
  let fixture: ComponentFixture<MyComp4934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
