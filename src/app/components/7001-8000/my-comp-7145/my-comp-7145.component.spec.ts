import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7145Component } from './my-comp-7145.component';

describe('MyComp7145Component', () => {
  let component: MyComp7145Component;
  let fixture: ComponentFixture<MyComp7145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
