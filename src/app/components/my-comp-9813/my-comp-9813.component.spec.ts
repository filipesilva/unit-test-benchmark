import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9813Component } from './my-comp-9813.component';

describe('MyComp9813Component', () => {
  let component: MyComp9813Component;
  let fixture: ComponentFixture<MyComp9813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
