import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp695Component } from './my-comp-695.component';

describe('MyComp695Component', () => {
  let component: MyComp695Component;
  let fixture: ComponentFixture<MyComp695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
