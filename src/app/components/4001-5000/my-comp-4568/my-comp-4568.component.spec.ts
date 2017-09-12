import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4568Component } from './my-comp-4568.component';

describe('MyComp4568Component', () => {
  let component: MyComp4568Component;
  let fixture: ComponentFixture<MyComp4568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
