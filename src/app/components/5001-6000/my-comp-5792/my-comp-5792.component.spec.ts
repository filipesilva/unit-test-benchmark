import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5792Component } from './my-comp-5792.component';

describe('MyComp5792Component', () => {
  let component: MyComp5792Component;
  let fixture: ComponentFixture<MyComp5792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
