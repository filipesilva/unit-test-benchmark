import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7256Component } from './my-comp-7256.component';

describe('MyComp7256Component', () => {
  let component: MyComp7256Component;
  let fixture: ComponentFixture<MyComp7256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
