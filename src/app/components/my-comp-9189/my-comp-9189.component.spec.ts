import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9189Component } from './my-comp-9189.component';

describe('MyComp9189Component', () => {
  let component: MyComp9189Component;
  let fixture: ComponentFixture<MyComp9189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
