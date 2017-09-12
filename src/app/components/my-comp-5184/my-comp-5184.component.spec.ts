import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5184Component } from './my-comp-5184.component';

describe('MyComp5184Component', () => {
  let component: MyComp5184Component;
  let fixture: ComponentFixture<MyComp5184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
