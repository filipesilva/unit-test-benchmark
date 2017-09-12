import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp542Component } from './my-comp-542.component';

describe('MyComp542Component', () => {
  let component: MyComp542Component;
  let fixture: ComponentFixture<MyComp542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
