import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5542Component } from './my-comp-5542.component';

describe('MyComp5542Component', () => {
  let component: MyComp5542Component;
  let fixture: ComponentFixture<MyComp5542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
