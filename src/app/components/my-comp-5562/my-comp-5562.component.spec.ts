import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5562Component } from './my-comp-5562.component';

describe('MyComp5562Component', () => {
  let component: MyComp5562Component;
  let fixture: ComponentFixture<MyComp5562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
