import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4615Component } from './my-comp-4615.component';

describe('MyComp4615Component', () => {
  let component: MyComp4615Component;
  let fixture: ComponentFixture<MyComp4615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
