import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7700Component } from './my-comp-7700.component';

describe('MyComp7700Component', () => {
  let component: MyComp7700Component;
  let fixture: ComponentFixture<MyComp7700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
