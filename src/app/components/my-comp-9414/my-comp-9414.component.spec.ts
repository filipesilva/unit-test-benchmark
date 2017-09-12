import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9414Component } from './my-comp-9414.component';

describe('MyComp9414Component', () => {
  let component: MyComp9414Component;
  let fixture: ComponentFixture<MyComp9414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
