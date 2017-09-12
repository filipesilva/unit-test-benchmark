import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7665Component } from './my-comp-7665.component';

describe('MyComp7665Component', () => {
  let component: MyComp7665Component;
  let fixture: ComponentFixture<MyComp7665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
