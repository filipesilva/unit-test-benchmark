import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7926Component } from './my-comp-7926.component';

describe('MyComp7926Component', () => {
  let component: MyComp7926Component;
  let fixture: ComponentFixture<MyComp7926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
