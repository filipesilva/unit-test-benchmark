import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4288Component } from './my-comp-4288.component';

describe('MyComp4288Component', () => {
  let component: MyComp4288Component;
  let fixture: ComponentFixture<MyComp4288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
