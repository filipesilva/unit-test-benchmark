import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7406Component } from './my-comp-7406.component';

describe('MyComp7406Component', () => {
  let component: MyComp7406Component;
  let fixture: ComponentFixture<MyComp7406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
