import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp235Component } from './my-comp-235.component';

describe('MyComp235Component', () => {
  let component: MyComp235Component;
  let fixture: ComponentFixture<MyComp235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
