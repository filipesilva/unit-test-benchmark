import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7814Component } from './my-comp-7814.component';

describe('MyComp7814Component', () => {
  let component: MyComp7814Component;
  let fixture: ComponentFixture<MyComp7814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
