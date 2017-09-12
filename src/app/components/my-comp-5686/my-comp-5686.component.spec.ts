import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5686Component } from './my-comp-5686.component';

describe('MyComp5686Component', () => {
  let component: MyComp5686Component;
  let fixture: ComponentFixture<MyComp5686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
