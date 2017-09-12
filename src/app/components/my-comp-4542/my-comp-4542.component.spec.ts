import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4542Component } from './my-comp-4542.component';

describe('MyComp4542Component', () => {
  let component: MyComp4542Component;
  let fixture: ComponentFixture<MyComp4542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
