import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5441Component } from './my-comp-5441.component';

describe('MyComp5441Component', () => {
  let component: MyComp5441Component;
  let fixture: ComponentFixture<MyComp5441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
