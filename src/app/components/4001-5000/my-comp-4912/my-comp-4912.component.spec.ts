import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4912Component } from './my-comp-4912.component';

describe('MyComp4912Component', () => {
  let component: MyComp4912Component;
  let fixture: ComponentFixture<MyComp4912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
