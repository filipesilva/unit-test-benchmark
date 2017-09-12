import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5354Component } from './my-comp-5354.component';

describe('MyComp5354Component', () => {
  let component: MyComp5354Component;
  let fixture: ComponentFixture<MyComp5354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
