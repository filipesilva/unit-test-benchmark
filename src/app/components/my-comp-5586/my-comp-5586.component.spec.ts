import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5586Component } from './my-comp-5586.component';

describe('MyComp5586Component', () => {
  let component: MyComp5586Component;
  let fixture: ComponentFixture<MyComp5586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
