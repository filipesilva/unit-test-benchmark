import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5729Component } from './my-comp-5729.component';

describe('MyComp5729Component', () => {
  let component: MyComp5729Component;
  let fixture: ComponentFixture<MyComp5729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
