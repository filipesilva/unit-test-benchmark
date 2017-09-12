import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7130Component } from './my-comp-7130.component';

describe('MyComp7130Component', () => {
  let component: MyComp7130Component;
  let fixture: ComponentFixture<MyComp7130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
