import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4740Component } from './my-comp-4740.component';

describe('MyComp4740Component', () => {
  let component: MyComp4740Component;
  let fixture: ComponentFixture<MyComp4740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
