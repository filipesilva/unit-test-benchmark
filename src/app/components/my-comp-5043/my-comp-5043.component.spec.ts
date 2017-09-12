import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5043Component } from './my-comp-5043.component';

describe('MyComp5043Component', () => {
  let component: MyComp5043Component;
  let fixture: ComponentFixture<MyComp5043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
