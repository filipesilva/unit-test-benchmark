import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9072Component } from './my-comp-9072.component';

describe('MyComp9072Component', () => {
  let component: MyComp9072Component;
  let fixture: ComponentFixture<MyComp9072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
