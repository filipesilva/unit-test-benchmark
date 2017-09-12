import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5793Component } from './my-comp-5793.component';

describe('MyComp5793Component', () => {
  let component: MyComp5793Component;
  let fixture: ComponentFixture<MyComp5793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
