import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7633Component } from './my-comp-7633.component';

describe('MyComp7633Component', () => {
  let component: MyComp7633Component;
  let fixture: ComponentFixture<MyComp7633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
