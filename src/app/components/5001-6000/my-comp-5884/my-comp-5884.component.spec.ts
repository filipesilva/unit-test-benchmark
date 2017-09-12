import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5884Component } from './my-comp-5884.component';

describe('MyComp5884Component', () => {
  let component: MyComp5884Component;
  let fixture: ComponentFixture<MyComp5884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
