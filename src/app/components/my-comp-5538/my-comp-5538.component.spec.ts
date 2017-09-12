import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5538Component } from './my-comp-5538.component';

describe('MyComp5538Component', () => {
  let component: MyComp5538Component;
  let fixture: ComponentFixture<MyComp5538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
