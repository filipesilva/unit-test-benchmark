import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5944Component } from './my-comp-5944.component';

describe('MyComp5944Component', () => {
  let component: MyComp5944Component;
  let fixture: ComponentFixture<MyComp5944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
