import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5812Component } from './my-comp-5812.component';

describe('MyComp5812Component', () => {
  let component: MyComp5812Component;
  let fixture: ComponentFixture<MyComp5812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
