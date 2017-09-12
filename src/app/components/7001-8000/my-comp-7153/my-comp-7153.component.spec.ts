import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7153Component } from './my-comp-7153.component';

describe('MyComp7153Component', () => {
  let component: MyComp7153Component;
  let fixture: ComponentFixture<MyComp7153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
