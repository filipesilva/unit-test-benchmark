import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4627Component } from './my-comp-4627.component';

describe('MyComp4627Component', () => {
  let component: MyComp4627Component;
  let fixture: ComponentFixture<MyComp4627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
