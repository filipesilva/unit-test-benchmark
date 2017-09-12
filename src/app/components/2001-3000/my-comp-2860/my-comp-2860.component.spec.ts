import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2860Component } from './my-comp-2860.component';

describe('MyComp2860Component', () => {
  let component: MyComp2860Component;
  let fixture: ComponentFixture<MyComp2860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
