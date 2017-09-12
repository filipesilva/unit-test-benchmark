import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4443Component } from './my-comp-4443.component';

describe('MyComp4443Component', () => {
  let component: MyComp4443Component;
  let fixture: ComponentFixture<MyComp4443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
