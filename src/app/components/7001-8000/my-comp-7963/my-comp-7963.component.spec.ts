import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7963Component } from './my-comp-7963.component';

describe('MyComp7963Component', () => {
  let component: MyComp7963Component;
  let fixture: ComponentFixture<MyComp7963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
