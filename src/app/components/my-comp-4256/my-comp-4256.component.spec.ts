import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4256Component } from './my-comp-4256.component';

describe('MyComp4256Component', () => {
  let component: MyComp4256Component;
  let fixture: ComponentFixture<MyComp4256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
