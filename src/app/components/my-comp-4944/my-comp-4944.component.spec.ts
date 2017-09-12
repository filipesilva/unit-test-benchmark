import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4944Component } from './my-comp-4944.component';

describe('MyComp4944Component', () => {
  let component: MyComp4944Component;
  let fixture: ComponentFixture<MyComp4944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
