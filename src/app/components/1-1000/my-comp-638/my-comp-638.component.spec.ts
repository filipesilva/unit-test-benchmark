import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp638Component } from './my-comp-638.component';

describe('MyComp638Component', () => {
  let component: MyComp638Component;
  let fixture: ComponentFixture<MyComp638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
