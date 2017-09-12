import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp633Component } from './my-comp-633.component';

describe('MyComp633Component', () => {
  let component: MyComp633Component;
  let fixture: ComponentFixture<MyComp633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
