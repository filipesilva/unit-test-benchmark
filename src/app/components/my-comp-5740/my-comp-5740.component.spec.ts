import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5740Component } from './my-comp-5740.component';

describe('MyComp5740Component', () => {
  let component: MyComp5740Component;
  let fixture: ComponentFixture<MyComp5740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
